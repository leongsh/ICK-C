/* ============================================================
   資訊科技知識 刷題復習系統 — 應用邏輯
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- 儲存層 ---------------- */
  const K = {
    QUESTIONS: "ick.questions",
    PROGRESS: "ick.progress",     // 實際寫入時會加上 .<帳號>
    ACCOUNTS: "ick.accounts",
    SESSION: "ick.session",
    ADMIN: "ick.admin",
    THEME: "ick.theme"
  };
  const mem = {};
  const store = {
    get(k, dflt) {
      try {
        const v = localStorage.getItem(k);
        return v === null ? dflt : JSON.parse(v);
      } catch (e) {
        return k in mem ? mem[k] : dflt;
      }
    },
    set(k, v) {
      try { localStorage.setItem(k, JSON.stringify(v)); }
      catch (e) { mem[k] = v; }
    },
    del(k) {
      try { localStorage.removeItem(k); } catch (e) { delete mem[k]; }
    }
  };

  /* ---------------- 狀態 ---------------- */
  const CATS = window.CATEGORIES || [];
  const CAT_MAP = {};
  CATS.forEach(c => { CAT_MAP[c.id] = c; });

  const state = {
    bank: [],
    accounts: [],
    session: null,
    selected: new Set(CATS.map(c => c.id)),
    mode: "order",
    count: 20,
    quiz: null,
    progress: { answered: {}, wrong: [], fav: [], sessions: [] },
    admin: { password: "" },
    adminAuthed: false,
    theme: "dark",
    shuffleOpts: true,
    redraw: true
  };

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const esc = s => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  const LETTERS = ["A", "B", "C", "D", "E", "F"];
  const DIFF_NAME = { 1: "易", 2: "中", 3: "難" };
  const MODE_NAME = { order: "順序練習", random: "隨機練習", wrong: "錯題重做", exam: "模擬考試" };

  /* ---------------- Toast ---------------- */
  function toast(msg, type) {
    const el = document.createElement("div");
    el.className = "toast" + (type ? " " + type : "");
    el.textContent = msg;
    $("#toastRoot").appendChild(el);
    setTimeout(() => el.remove(), 2400);
  }

  /* ---------------- Modal ---------------- */
  function openModal(title, bodyHTML, footHTML) {
    closeModal();
    const mask = document.createElement("div");
    mask.className = "modal-mask";
    mask.innerHTML =
      '<div class="modal"><div class="modal-head"><h3>' + esc(title) +
      '</h3><button data-close="1">×</button></div>' +
      '<div class="modal-body">' + bodyHTML + "</div>" +
      '<div class="modal-foot">' + (footHTML || '<button class="btn ghost" data-close="1">關閉</button>') + "</div></div>";
    mask.addEventListener("click", e => {
      if (e.target === mask || e.target.getAttribute("data-close")) closeModal();
    });
    $("#modalRoot").appendChild(mask);
    return mask;
  }
  function closeModal() { $("#modalRoot").innerHTML = ""; }

  /* ---------------- 題庫 ---------------- */
  function loadBank() {
    let bank = store.get(K.QUESTIONS, null);
    if (!bank || !Array.isArray(bank) || !bank.length) bank = (window.SEED_QUESTIONS || []).slice();
    state.bank = bank;
  }
  function saveBank() { store.set(K.QUESTIONS, state.bank); }
  function resetBank() {
    state.bank = (window.SEED_QUESTIONS || []).slice();
    saveBank();
  }
  function bankByCat(cat) { return state.bank.filter(q => q.cat === cat); }

  /* ---------------- 學習記錄（依帳號分開儲存） ---------------- */
  function progressKey() {
    return state.session ? K.PROGRESS + "." + state.session.user : null;
  }
  function emptyProgress() {
    return { answered: {}, wrong: [], fav: [], sessions: [] };
  }
  function loadProgress() {
    const key = progressKey();
    const p = key ? store.get(key, null) : null;
    if (p && typeof p === "object") {
      state.progress = {
        answered: p.answered || {},
        wrong: Array.isArray(p.wrong) ? p.wrong : [],
        fav: Array.isArray(p.fav) ? p.fav : [],
        sessions: Array.isArray(p.sessions) ? p.sessions : []
      };
    } else {
      state.progress = emptyProgress();
    }
  }
  function saveProgress() {
    const key = progressKey();
    if (key) store.set(key, state.progress);
  }

  function recordAnswer(q, correct) {
    const a = state.progress.answered[q.id] || { c: 0, w: 0 };
    if (correct) { a.c++; a.lastOk = true; } else { a.w++; a.lastOk = false; }
    a.last = Date.now();
    state.progress.answered[q.id] = a;

    const wi = state.progress.wrong.indexOf(q.id);
    if (!correct) { if (wi < 0) state.progress.wrong.push(q.id); }
    else if (wi >= 0) state.progress.wrong.splice(wi, 1);

    saveProgress();
  }

  function stats() {
    const ans = state.progress.answered;
    let done = 0, right = 0, total = 0;
    Object.keys(ans).forEach(id => {
      done++; total += ans[id].c + ans[id].w; right += ans[id].c;
    });
    return {
      totalQ: state.bank.length,
      done,
      attempts: total,
      right,
      rate: total ? Math.round(right / total * 100) : 0,
      wrong: state.progress.wrong.length,
      fav: state.progress.fav.length,
      coverage: state.bank.length ? Math.round(done / state.bank.length * 100) : 0
    };
  }

  function catStats(catId) {
    const qs = bankByCat(catId);
    let seen = 0, attempts = 0, right = 0;
    qs.forEach(q => {
      const a = state.progress.answered[q.id];
      if (a) { seen++; attempts += a.c + a.w; right += a.c; }
    });
    return {
      total: qs.length,
      seen,
      attempts,
      right,
      rate: attempts ? Math.round(right / attempts * 100) : 0,
      progress: qs.length ? Math.round(seen / qs.length * 100) : 0
    };
  }

  /* ---------------- 主題 ---------------- */
  function applyTheme(t) {
    state.theme = t;
    document.documentElement.setAttribute("data-theme", t);
    $("#themeToggle").textContent = t === "dark" ? "🌙" : "☀️";
    store.set(K.THEME, t);
  }

  /* ---------------- 視圖切換 ---------------- */
  const USER_VIEWS = ["home", "quiz", "result", "stats", "wrong"];
  function show(view) {
    // 未登入者不得進入需要帳號的畫面
    if (USER_VIEWS.indexOf(view) >= 0 && !state.session) view = "login";
    $$(".view").forEach(v => v.classList.toggle("active", v.id === "view-" + view));
    $$(".navbtn[data-nav]").forEach(b => {
      const n = b.getAttribute("data-nav");
      b.classList.toggle("active",
        n === view || (n === "admin" && (view === "admin" || view === "admin-login")));
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goAdmin() { show(state.adminAuthed ? "admin" : "admin-login"); }

  function defaultPwd() {
    return (window.APP_META && window.APP_META.defaultAdminPassword) || "admin123";
  }

  /* 管理員導覽按鈕：僅在已登入時顯示 */
  function updateAdminNav() {
    const btn = $("#navAdmin");
    if (btn) btn.classList.toggle("hidden", !state.adminAuthed);
  }

  /* 登入頁提示：只在密碼仍是預設值時顯示，避免學生從提示得知密碼 */
  function updateLoginHint() {
    const hint = $("#loginHint");
    if (hint) hint.classList.toggle("hidden", state.admin.password !== defaultPwd());
  }

  /* 隱藏的管理員入口 */
  function openAdminEntry() {
    updateLoginHint();
    if (state.adminAuthed) renderAdmin();
    goAdmin();
    updateAdminNav();
  }

  /* 入口一：網址加上 #admin */
  function checkAdminHash() {
    const h = String(window.location.hash || "").replace(/^#\/?/, "").toLowerCase();
    if (h === "admin") openAdminEntry();
  }

  /* ============================================================
     使用者帳號
     ============================================================ */
  const PWD_ALPHABET = "abcdefghjkmnpqrstuvwxyz23456789"; // 無 i l o 0 1

  function loadAccounts() {
    let list = store.get(K.ACCOUNTS, null);
    if (!Array.isArray(list) || !list.length) list = (window.SEED_ACCOUNTS || []).slice();
    state.accounts = list;
  }
  function saveAccounts() { store.set(K.ACCOUNTS, state.accounts); }

  function findAccount(user) {
    const u = String(user || "").trim().toLowerCase();
    return state.accounts.find(a => String(a.user).toLowerCase() === u) || null;
  }

  function genPwd(len) {
    len = len || 6;
    const arr = new Uint32Array(len);
    if (window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(arr);
    else for (let i = 0; i < len; i++) arr[i] = Math.floor(Math.random() * 1e9);
    let s = "";
    for (let i = 0; i < len; i++) s += PWD_ALPHABET[arr[i] % PWD_ALPHABET.length];
    return s;
  }

  function updateUserNav() {
    const on = !!state.session;
    $("#topnav").classList.toggle("no-user", !on);
    $("#userChip").classList.toggle("hidden", !on);
    $("#btnUserLogout").classList.toggle("hidden", !on);
    if (on) $("#userName").textContent = state.session.name || state.session.user;
  }

  function showLoginErr(msg) {
    const el = $("#loginErr");
    el.textContent = msg;
    el.classList.remove("hidden");
  }

  function doUserLogin(e) {
    if (e) e.preventDefault();
    const user = $("#loginUser").value.trim();
    const pwd = $("#loginPwd").value;
    if (!user || !pwd) { showLoginErr("請輸入帳號與密碼"); return; }

    const acc = findAccount(user);
    if (!acc) { showLoginErr("帳號不存在，請確認後再試"); return; }
    if (acc.active === false) { showLoginErr("此帳號已停用，請洽管理員"); return; }
    if (String(acc.pwd) !== pwd) { showLoginErr("密碼錯誤，請再試一次"); return; }

    $("#loginErr").classList.add("hidden");
    $("#loginPwd").value = "";
    state.session = { user: acc.user, name: acc.name || acc.user };
    store.set(K.SESSION, state.session);
    acc.lastLogin = Date.now();
    saveAccounts();

    loadProgress();
    updateUserNav();
    renderHeroStats();
    renderCatGrid();
    show("home");
    toast("歡迎，" + state.session.name, "ok");
  }

  function userLogout() {
    saveProgress();
    state.session = null;
    store.del(K.SESSION);
    state.progress = emptyProgress();
    $("#loginUser").value = "";
    $("#loginPwd").value = "";
    $("#loginErr").classList.add("hidden");
    updateUserNav();
    updateAdminNav();
    show("login");
    toast("已登出");
  }

  function restoreSession() {
    const s = store.get(K.SESSION, null);
    if (!s || !s.user) return;
    const acc = findAccount(s.user);
    if (acc && acc.active !== false) {
      state.session = { user: acc.user, name: acc.name || acc.user };
    }
  }

  function fmtTime(ms) {
    const d = new Date(ms);
    return (d.getMonth() + 1) + "/" + d.getDate() + " " +
      String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  }

  /* 讀取某帳號在本機的練習統計 */
  function accountStats(user) {
    const p = store.get(K.PROGRESS + "." + user, null);
    const out = { done: 0, attempts: 0, right: 0, rate: 0, wrong: 0, last: 0 };
    if (!p || !p.answered) return out;
    Object.keys(p.answered).forEach(id => {
      const a = p.answered[id] || {};
      out.done++;
      out.attempts += (a.c || 0) + (a.w || 0);
      out.right += (a.c || 0);
      if (a.last && a.last > out.last) out.last = a.last;
    });
    out.rate = out.attempts ? Math.round(out.right / out.attempts * 100) : 0;
    out.wrong = (p.wrong || []).length;
    return out;
  }

  function renderUsers() {
    const kw = $("#userSearch").value.trim().toLowerCase();
    let list = state.accounts.slice();
    if (kw) list = list.filter(a => (a.user + " " + (a.name || "")).toLowerCase().indexOf(kw) >= 0);

    $("#userTableBody").innerHTML = list.map(a => {
      const s = accountStats(a.user);
      const prog = s.attempts
        ? "已練 " + s.done + " 題 · 正確率 " + s.rate + "% · 錯題 " + s.wrong
        : "尚未練習";
      const badge = a.active === false
        ? '<span class="badge" style="background:var(--bad-soft);color:var(--bad)">停用</span>'
        : '<span class="badge" style="background:var(--ok-soft);color:var(--ok)">啟用</span>';
      return "<tr>" +
        "<td><b>" + esc(a.user) + "</b></td>" +
        "<td>" + esc(a.name || "") + "</td>" +
        "<td>" + badge + "</td>" +
        '<td class="muted small">' + prog + "</td>" +
        '<td class="muted small">' + (s.last ? fmtTime(s.last) : "—") + "</td>" +
        '<td><div class="op">' +
        '<button data-uedit="' + esc(a.user) + '">編輯</button>' +
        '<button data-upwd="' + esc(a.user) + '">重設密碼</button>' +
        '<button data-utoggle="' + esc(a.user) + '">' + (a.active === false ? "啟用" : "停用") + "</button>" +
        '<button class="del" data-udel="' + esc(a.user) + '">刪除</button>' +
        "</div></td></tr>";
    }).join("");

    $("#userTableEmpty").hidden = list.length > 0;

    $$("#userTableBody [data-uedit]").forEach(b =>
      b.addEventListener("click", () => openUserModal(b.getAttribute("data-uedit"))));
    $$("#userTableBody [data-upwd]").forEach(b =>
      b.addEventListener("click", () => resetUserPwd(b.getAttribute("data-upwd"))));
    $$("#userTableBody [data-utoggle]").forEach(b =>
      b.addEventListener("click", () => toggleUser(b.getAttribute("data-utoggle"))));
    $$("#userTableBody [data-udel]").forEach(b =>
      b.addEventListener("click", () => delUser(b.getAttribute("data-udel"))));
  }

  function openUserModal(user) {
    const editing = !!user;
    const acc = editing ? findAccount(user) : null;
    if (editing && !acc) return;
    const cur = acc || { user: "", pwd: genPwd(), name: "" };

    const body =
      '<div class="field"><label>帳號（登入用，不可重複）</label>' +
      '<input type="text" id="uUser" value="' + esc(cur.user) + '"' + (editing ? " disabled" : "") + "></div>" +
      '<div class="field"><label>顯示名稱</label>' +
      '<input type="text" id="uName" value="' + esc(cur.name || "") + '" placeholder="例如：陳大文 / 學生 01"></div>' +
      '<div class="field"><label>密碼</label>' +
      '<div class="opt-row"><input type="text" id="uPwd" value="' + esc(cur.pwd) + '">' +
      '<button class="btn ghost small" id="uGen" type="button">隨機產生</button></div></div>' +
      '<p class="muted small">密碼已排除容易混淆的 i、l、o、0、1，方便學生抄寫與輸入。</p>';

    const mask = openModal(editing ? "編輯帳號" : "新增帳號", body,
      '<button class="btn ghost" data-close="1">取消</button>' +
      '<button class="btn primary" id="uSave">' + (editing ? "儲存" : "新增") + "</button>");

    $("#uGen", mask).addEventListener("click", () => { $("#uPwd", mask).value = genPwd(); });
    $("#uSave", mask).addEventListener("click", () => saveUser(editing ? acc.user : null));
  }

  function saveUser(user) {
    const pwd = $("#uPwd").value.trim();
    const name = $("#uName").value.trim();

    if (user) {
      const acc = findAccount(user);
      if (!acc) return;
      if (!pwd) { toast("密碼不可為空", "bad"); return; }
      acc.pwd = pwd;
      acc.name = name || acc.user;
      toast("已更新帳號 " + acc.user, "ok");
    } else {
      const u = $("#uUser").value.trim();
      if (!/^[A-Za-z0-9_.-]{3,20}$/.test(u)) { toast("帳號請用 3–20 位英數字", "bad"); return; }
      if (findAccount(u)) { toast("帳號已存在", "bad"); return; }
      if (!pwd) { toast("密碼不可為空", "bad"); return; }
      state.accounts.push({ user: u, pwd: pwd, name: name || u, active: true });
      toast("已新增帳號 " + u, "ok");
    }
    saveAccounts();
    closeModal();
    renderUsers();
  }

  function resetUserPwd(user) {
    const acc = findAccount(user);
    if (!acc) return;
    const np = genPwd();
    const mask = openModal("重設密碼",
      "<p>將為帳號 <b>" + esc(acc.user) + "</b> 產生新密碼：</p>" +
      '<p style="margin:14px 0;font-size:1.5rem;font-weight:800;letter-spacing:3px;color:var(--accent)">' +
      esc(np) + "</p>" +
      '<p class="muted small">請抄下交給學生；關閉後無法再查看此密碼。</p>',
      '<button class="btn ghost" data-close="1">取消</button>' +
      '<button class="btn primary" id="rpOk">確認重設</button>');
    $("#rpOk", mask).addEventListener("click", () => {
      acc.pwd = np;
      saveAccounts();
      closeModal();
      renderUsers();
      toast("已重設 " + acc.user + " 的密碼", "ok");
    });
  }

  function toggleUser(user) {
    const acc = findAccount(user);
    if (!acc) return;
    acc.active = acc.active === false;
    saveAccounts();
    renderUsers();
    toast(acc.user + (acc.active ? " 已啟用" : " 已停用"), "ok");
  }

  function delUser(user) {
    const acc = findAccount(user);
    if (!acc) return;
    const mask = openModal("確認刪除帳號",
      "<p>確定要刪除帳號 <b>" + esc(acc.user) + "</b> 嗎？</p>" +
      '<p class="muted small" style="margin-top:8px">此動作不會刪除該帳號的練習記錄。</p>',
      '<button class="btn ghost" data-close="1">取消</button><button class="btn danger" id="udOk">確定刪除</button>');
    $("#udOk", mask).addEventListener("click", () => {
      state.accounts = state.accounts.filter(a => a.user !== acc.user);
      saveAccounts();
      closeModal();
      renderUsers();
      toast("已刪除帳號 " + acc.user, "ok");
    });
  }

  function exportUsers() {
    const rows = [["帳號", "密碼", "名稱", "狀態"]].concat(
      state.accounts.map(a => [a.user, a.pwd, a.name || "", a.active === false ? "停用" : "啟用"])
    );
    const csv = "\uFEFF" + rows.map(r =>
      r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(",")
    ).join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "accounts-" + new Date().toISOString().slice(0, 10) + ".csv";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1500);
    toast("已匯出 " + state.accounts.length + " 個帳號", "ok");
  }

  /* ============================================================
     首頁
     ============================================================ */
  function renderHeroStats() {
    const s = stats();
    $("#heroStats").innerHTML =
      mini(s.totalQ, "題庫題數") +
      mini(s.done, "已練題數") +
      mini(s.rate + "%", "正確率") +
      mini(s.wrong, "錯題數");
    $("#footCount").textContent = s.totalQ;
  }
  function mini(v, l) { return '<div class="mini-stat"><b>' + v + "</b><span>" + l + "</span></div>"; }

  function renderCatGrid() {
    const g = $("#catGrid");
    g.innerHTML = CATS.map(c => {
      const n = bankByCat(c.id).length;
      const on = state.selected.has(c.id);
      return '<div class="cat-card' + (on ? " on" : "") + '" data-cat="' + c.id + '">' +
        '<span class="ico" style="background:' + c.color + '22;color:' + c.color + '">' + c.icon + "</span>" +
        '<span><span class="nm">' + esc(c.name) + '</span><br><span class="sub">' + n + " 題</span></span>" +
        '<span class="tick">✓</span></div>';
    }).join("");
    $$(".cat-card", g).forEach(el => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-cat");
        if (state.selected.has(id)) state.selected.delete(id); else state.selected.add(id);
        el.classList.toggle("on");
        renderPoolInfo();
      });
    });
    renderPoolInfo();
  }

  function currentPool() {
    const cats = state.selected.size ? state.selected : new Set(CATS.map(c => c.id));
    let pool = state.bank.filter(q => cats.has(q.cat));
    if (state.mode === "wrong") {
      const w = new Set(state.progress.wrong);
      pool = pool.filter(q => w.has(q.id));
    }
    return pool;
  }

  function renderPoolInfo() {
    const pool = currentPool();
    const n = state.count === 0 ? pool.length : Math.min(state.count, pool.length);
    const ans = state.progress.answered;
    const fresh = pool.filter(q => !ans[q.id]).length;

    if (pool.length === 0) {
      $("#poolInfo").textContent = "符合條件的題目：0 題（請調整分類或先累積錯題）";
      $("#redrawHint").textContent = "";
      $("#btnStart").disabled = true;
      return;
    }
    $("#poolInfo").textContent =
      "符合條件的題目：" + pool.length + " 題（未練過 " + fresh + " 題），本次將出 " + n + " 題";
    $("#redrawHint").textContent = state.redraw
      ? "每次開始都會重新抽題，並優先抽未練過的題目"
      : "關閉後：順序練習會從頭依題號出題，每次相同";
    $("#btnStart").disabled = false;
  }

  /* ============================================================
     出題 / 答題
     ============================================================ */
  function shuffle(a) {
    const r = a.slice();
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = r[i]; r[i] = r[j]; r[j] = t;
    }
    return r;
  }

  // 為每題產生選項顯示順序（避免學生靠固定位置猜答案）
  function buildOrders(list) {
    return list.map(item => {
      const idx = item.options.map((_, i) => i);
      if (!state.shuffleOpts) return idx;
      // 若原本答案就在 A，重洗直到答案不在第一個位置（避免明顯偏誤）
      let out = shuffle(idx);
      if (out[0] === item.answer && idx.length > 1) out = shuffle(idx);
      return out;
    });
  }
  function orderOf(q, i) {
    return (q.orders && q.orders[i]) || q.list[i].options.map((_, k) => k);
  }

  function byId(a, b) { return String(a.id).localeCompare(String(b.id)); }

  /* 抽題：每次開始重新抽，優先「未練過 → 錯題 → 已答對」，讓刷題逐步覆蓋全題庫 */
  function drawQuestions(pool, n) {
    const total = n > 0 ? Math.min(n, pool.length) : pool.length;
    const all = pool.slice();
    if (!state.redraw) return all;
    if (total >= pool.length) return shuffle(all);

    const ans = state.progress.answered;
    const wrongSet = new Set(state.progress.wrong);
    const fresh = [], review = [], done = [];
    all.forEach(q => {
      if (!ans[q.id]) fresh.push(q);
      else if (wrongSet.has(q.id)) review.push(q);
      else done.push(q);
    });

    let out = shuffle(fresh);
    if (out.length < total) out = out.concat(shuffle(review));
    if (out.length < total) out = out.concat(shuffle(done));
    return out.slice(0, total);
  }

  function startQuiz(mode) {
    state.mode = mode;
    const pool = currentPool();
    if (!pool.length) { toast("沒有可練習的題目", "bad"); return; }

    // 先抽題（每次重新抽），再決定呈現順序
    let picked = drawQuestions(pool, state.count);
    if (mode === "order") picked = picked.slice().sort(byId);
    else picked = shuffle(picked);

    state.quiz = {
      list: picked,
      idx: 0,
      answers: picked.map(() => null),
      orders: buildOrders(picked),
      mode: mode,
      immediate: mode !== "exam",
      startAt: Date.now(),
      limitSec: mode === "exam" ? Math.max(300, picked.length * 45) : null,
      remain: null,
      timerId: null
    };
    state.quiz.remain = state.quiz.limitSec;

    show("quiz");
    $("#kbHint").classList.toggle("hidden", !state.quiz.immediate);
    if (state.quiz.limitSec) {
      $("#quizTimer").classList.remove("hidden");
      tickTimer();
      state.quiz.timerId = setInterval(tickTimer, 1000);
    } else {
      $("#quizTimer").classList.add("hidden");
    }
    renderQuiz();
  }

  function tickTimer() {
    const q = state.quiz;
    if (!q || !q.limitSec) return;
    q.remain--;
    const m = Math.floor(q.remain / 60), s = q.remain % 60;
    const el = $("#quizTimer");
    el.textContent = "⏱ " + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    el.classList.toggle("warn", q.remain <= 60);
    if (q.remain <= 0) { clearInterval(q.timerId); toast("時間到，自動交卷", "bad"); finishQuiz(); }
  }

  function renderQuiz() {
    const q = state.quiz;
    if (!q) return;
    const item = q.list[q.idx];
    const cat = CAT_MAP[item.cat] || { name: item.cat, color: "#888" };
    const ans = q.answers[q.idx];

    $("#quizCat").textContent = cat.icon + " " + cat.name;
    $("#quizProgressText").textContent = "第 " + (q.idx + 1) + " / " + q.list.length + " 題";
    $("#quizProgressBar").style.width = ((q.idx) / q.list.length * 100) + "%";
    $("#qIndex").textContent = "第 " + (q.idx + 1) + " 題";
    $("#qDiff").textContent = "難度：" + (DIFF_NAME[item.difficulty] || "中");
    $("#qText").textContent = item.q;

    const fav = state.progress.fav.indexOf(item.id) >= 0;
    $("#btnFav").classList.toggle("on", fav);
    $("#btnFav").textContent = fav ? "★" : "☆";

    const revealed = q.immediate && ans !== null;
    const order = orderOf(q, q.idx);
    const correctDisp = order.indexOf(item.answer);
    const opts = $("#qOptions");
    opts.innerHTML = order.map((orig, i) => {
      let cls = "opt";
      if (revealed) {
        cls += " locked";
        if (orig === item.answer) cls += " correct";
        else if (ans && ans.picked === orig) cls += " wrong";
      } else if (ans && ans.picked === orig) {
        cls += " chosen";
      }
      return '<button class="' + cls + '" data-i="' + i + '">' +
        '<span class="key">' + LETTERS[i] + "</span><span>" + esc(item.options[orig]) + "</span></button>";
    }).join("");

    $$(".opt", opts).forEach(b => b.addEventListener("click", () => pick(parseInt(b.getAttribute("data-i"), 10))));

    // 解析
    const ex = $("#qExplain");
    if (revealed) {
      const ok = ans.correct;
      ex.className = "explain " + (ok ? "ok" : "bad");
      ex.innerHTML =
        "<b>" + (ok ? "✓ 答對了" : "✗ 答錯了") + "</b>　正確答案：" +
        LETTERS[correctDisp] + ". " + esc(item.options[item.answer]) +
        "<br>" + esc(item.explain || "（本題未提供解析）");
    } else {
      ex.className = "explain hidden";
      ex.innerHTML = "";
    }

    $("#btnPrev").disabled = q.idx === 0;
    const last = q.idx === q.list.length - 1;
    $("#btnNext").textContent = last ? (q.immediate ? "完成練習" : "交卷") : "下一題 →";
  }

  function pick(i) {
    const q = state.quiz;
    if (!q) return;
    const item = q.list[q.idx];
    const ans = q.answers[q.idx];
    if (q.immediate && ans !== null) return; // 已作答鎖定

    const orig = orderOf(q, q.idx)[i];
    const correct = orig === item.answer;
    q.answers[q.idx] = { picked: orig, correct: correct };

    if (q.immediate) {
      recordAnswer(item, correct);
    }
    renderQuiz();
  }

  function nextQ() {
    const q = state.quiz;
    if (!q) return;
    if (q.idx >= q.list.length - 1) { finishQuiz(); return; }
    q.idx++;
    renderQuiz();
  }
  function prevQ() {
    const q = state.quiz;
    if (!q || q.idx === 0) return;
    q.idx--;
    renderQuiz();
  }

  function finishQuiz() {
    const q = state.quiz;
    if (!q) return;
    if (q.timerId) { clearInterval(q.timerId); q.timerId = null; }

    // 考試模式統一記錄
    if (!q.immediate) {
      q.list.forEach((item, i) => {
        const a = q.answers[i];
        if (a) recordAnswer(item, a.correct);
      });
    }

    let right = 0, doneCount = 0;
    q.answers.forEach(a => { if (a) { doneCount++; if (a.correct) right++; } });

    state.progress.sessions.unshift({
      at: Date.now(),
      mode: q.mode,
      total: q.list.length,
      done: doneCount,
      correct: right,
      sec: Math.round((Date.now() - q.startAt) / 1000)
    });
    state.progress.sessions = state.progress.sessions.slice(0, 30);
    saveProgress();

    // 保存本次結果供結果頁使用
    lastResult = {
      list: q.list.slice(),
      answers: q.answers.slice(),
      orders: (q.orders || []).slice(),
      mode: q.mode,
      sec: Math.round((Date.now() - q.startAt) / 1000)
    };

    renderResult();
    show("result");
    state.quiz = null;
  }

  /* ============================================================
     結果
     ============================================================ */
  let lastResult = null;

  function renderResult() {
    const q = state.quiz;
    // finishQuiz 已把 quiz 清空前先取資料 → 這裡改用 lastResult 機制
    const data = lastResult;
    if (!data) return;

    const { list, answers, mode, sec, orders } = data;
    const total = list.length;
    const done = answers.filter(Boolean).length;
    const right = answers.filter(a => a && a.correct).length;
    const pct = total ? Math.round(right / total * 100) : 0;

    $("#scoreRing").style.setProperty("--pct", pct + "%");
    $("#scoreNum").textContent = right;
    $("#scoreDen").textContent = "/" + total;
    $("#resultTitle").textContent = MODE_NAME[mode] + "完成";
    $("#resultSub").textContent =
      "共 " + total + " 題，作答 " + done + " 題，答對 " + right + " 題 · 用時 " +
      Math.floor(sec / 60) + " 分 " + (sec % 60) + " 秒";

    const m = Math.floor(sec / 60), s = sec % 60;
    $("#resultKpis").innerHTML =
      mini(pct + "%", "正確率") +
      mini(right, "答對") +
      mini(done - right, "答錯") +
      mini(m + ":" + String(s).padStart(2, "0"), "用時");

    $("#reviewList").innerHTML = list.map((item, i) => {
      const a = answers[i];
      const cat = CAT_MAP[item.cat] || { name: item.cat };
      const order = (orders && orders[i]) || item.options.map((_, k) => k);
      const correctDisp = order.indexOf(item.answer);
      let status, cls, ansTxt;
      if (!a) { cls = ""; status = "未作答"; ansTxt = '<div class="ra">未作答　正確答案：<em class="yes">' +
        LETTERS[correctDisp] + ". " + esc(item.options[item.answer]) + "</em></div>"; }
      else {
        cls = a.correct ? "ok" : "bad";
        status = a.correct ? "✓ 正確" : "✗ 錯誤";
        ansTxt = '<div class="ra">你的答案：<em class="' + (a.correct ? "yes" : "no") + '">' +
          LETTERS[order.indexOf(a.picked)] + ". " + esc(item.options[a.picked]) + "</em>" +
          (a.correct ? "" : '　正確答案：<em class="yes">' + LETTERS[correctDisp] + ". " + esc(item.options[item.answer]) + "</em>") +
          "</div>";
      }
      return '<div class="review-item ' + cls + '">' +
        '<div class="rq">' + (i + 1) + ". " + esc(item.q) + '　<span class="badge">' + esc(cat.name) + "</span> " +
        '<span class="muted small">' + status + "</span></div>" +
        ansTxt +
        '<div class="rx">解析：' + esc(item.explain || "—") + "</div></div>";
    }).join("");

    const wrongIds = list.filter((item, i) => !answers[i] || !answers[i].correct).map(x => x.id);
    $("#btnRetryWrong").disabled = wrongIds.length === 0;
    $("#btnRetryWrong").setAttribute("data-ids", wrongIds.join(","));
  }

  function retryWrongFromResult() {
    const raw = $("#btnRetryWrong").getAttribute("data-ids") || "";
    const ids = raw ? raw.split(",") : [];
    if (!ids.length) return;
    const list = ids.map(id => state.bank.find(q => q.id === id)).filter(Boolean);
    launchCustomQuiz(list, "wrong", true);
  }

  function launchCustomQuiz(list, mode, immediate) {
    if (!list.length) { toast("沒有可練習的題目", "bad"); return; }
    state.quiz = {
      list: list, idx: 0, answers: list.map(() => null), orders: buildOrders(list),
      mode: mode, immediate: !!immediate,
      startAt: Date.now(), limitSec: null, remain: null, timerId: null
    };
    $("#kbHint").classList.toggle("hidden", !immediate);
    $("#quizTimer").classList.add("hidden");
    show("quiz");
    renderQuiz();
  }

  /* ============================================================
     學習統計
     ============================================================ */
  function renderStats() {
    const s = stats();
    $("#statsKpis").innerHTML =
      mini(s.totalQ, "題庫總題數") +
      mini(s.done, "已練過的題目") +
      mini(s.attempts, "累計作答次數") +
      mini(s.right, "累計答對") +
      mini(s.rate + "%", "整體正確率") +
      mini(s.coverage + "%", "題庫覆蓋率") +
      mini(s.wrong, "目前錯題") +
      mini(s.fav, "收藏題目");

    $("#catStatList").innerHTML = CATS.map(c => {
      const cs = catStats(c.id);
      const color = cs.rate >= 80 ? "var(--ok)" : cs.rate >= 50 ? "var(--warn)" : "var(--bad)";
      return '<div class="cat-stat">' +
        '<div class="cs-top"><b>' + c.icon + " " + esc(c.name) + "</b>" +
        '<span class="muted small">已練 ' + cs.seen + "/" + cs.total + " 題 · 正確率 " +
        (cs.attempts ? cs.rate + "%" : "—") + "</span></div>" +
        '<div class="bar"><div style="width:' + cs.progress + "%;background:" + c.color + '"></div></div>' +
        '<div class="muted small" style="margin-top:5px">覆蓋率 ' + cs.progress + "%　" +
        '<span style="color:' + color + '">' + bar(cs.attempts ? cs.rate : 0) + "</span></div></div>";
    }).join("");

    const hist = state.progress.sessions;
    $("#historyList").innerHTML = hist.length
      ? hist.map(h => {
        const d = new Date(h.at);
        const t = d.getMonth() + 1 + "/" + d.getDate() + " " +
          String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
        const pct = h.total ? Math.round(h.correct / h.total * 100) : 0;
        return '<div class="history-item"><span>' + t + "　" + (MODE_NAME[h.mode] || h.mode) + "</span>" +
          '<span class="muted">' + h.correct + "/" + h.total + " 題 · " +
          Math.floor(h.sec / 60) + " 分 " + (h.sec % 60) + " 秒</span>" +
          '<span class="hi-score" style="color:' + (pct >= 80 ? "var(--ok)" : pct >= 50 ? "var(--warn)" : "var(--bad)") + '">' + pct + "%</span></div>";
      }).join("")
      : '<p class="muted">尚無練習記錄。</p>';
  }

  function bar(pct) {
    const n = Math.round(pct / 10);
    return "█".repeat(n) + "░".repeat(10 - n);
  }

  /* ============================================================
     錯題本
     ============================================================ */
  function renderWrong() {
    const ids = state.progress.wrong;
    const list = ids.map(id => state.bank.find(q => q.id === id)).filter(Boolean);
    $("#btnWrongPractice").disabled = list.length === 0;
    $("#btnWrongClear").disabled = list.length === 0;

    if (!list.length) {
      $("#wrongList").innerHTML = '<p class="muted">目前沒有錯題，繼續保持！</p>';
      return;
    }
    $("#wrongList").innerHTML = list.map((item, i) => {
      const cat = CAT_MAP[item.cat] || { name: item.cat };
      const a = state.progress.answered[item.id] || {};
      return '<div class="review-item bad">' +
        '<div class="rq">' + (i + 1) + ". " + esc(item.q) +
        '　<span class="badge">' + esc(cat.name) + "</span> " +
        '<span class="muted small">答錯 ' + (a.w || 1) + " 次</span></div>" +
        '<div class="ra">正確答案：<em class="yes">' + esc(item.options[item.answer]) + "</em></div>" +
        '<div class="rx">解析：' + esc(item.explain || "—") + "</div></div>";
    }).join("");
  }

  /* ============================================================
     管理員
     ============================================================ */
  function loadAdmin() {
    const a = store.get(K.ADMIN, null);
    state.admin = a && a.password ? a : { password: (window.APP_META && window.APP_META.defaultAdminPassword) || "admin123" };
    if (!a) store.set(K.ADMIN, state.admin);
  }

  function doLogin(e) {
    e.preventDefault();
    const pwd = $("#adminPwd").value;
    if (pwd === state.admin.password) {
      state.adminAuthed = true;
      $("#adminPwd").value = "";
      toast("登入成功", "ok");
      renderAdmin();
      updateAdminNav();
      show("admin");
    } else {
      toast("密碼錯誤", "bad");
    }
  }

  function logout() {
    state.adminAuthed = false;
    updateAdminNav();
    show("home");
    toast("已登出");
  }

  function renderAdmin() {
    const used = state.accounts.filter(a => accountStats(a.user).attempts > 0).length;
    $("#adminMeta").textContent =
      "題庫共 " + state.bank.length + " 題 · 分類 " + CATS.length +
      " 個 · 帳號 " + state.accounts.length + " 個（" + used + " 個有練習記錄）";

    const sel = $("#adminCatFilter");
    if (!sel.options.length) {
      sel.innerHTML = '<option value="">全部分類</option>' +
        CATS.map(c => '<option value="' + c.id + '">' + esc(c.name) + "</option>").join("");
    }
    renderQTable();
    renderUsers();
  }

  function renderQTable() {
    const kw = $("#adminSearch").value.trim().toLowerCase();
    const cf = $("#adminCatFilter").value;
    let list = state.bank.slice();
    if (cf) list = list.filter(q => q.cat === cf);
    if (kw) list = list.filter(q =>
      (q.q + " " + (q.explain || "") + " " + q.options.join(" ")).toLowerCase().indexOf(kw) >= 0);

    const tb = $("#qTableBody");
    tb.innerHTML = list.map(q => {
      const c = CAT_MAP[q.cat] || { name: q.cat, color: "#888" };
      return "<tr>" +
        '<td class="muted small">' + esc(q.id) + "</td>" +
        '<td><span class="badge" style="background:' + c.color + '22;color:' + c.color + '">' + esc(c.name) + "</span></td>" +
        '<td class="qcell">' + esc(q.q) + "</td>" +
        '<td class="ans">' + LETTERS[q.answer] + "</td>" +
        '<td class="muted small">' + (DIFF_NAME[q.difficulty] || "中") + "</td>" +
        '<td><div class="op">' +
        '<button data-edit="' + esc(q.id) + '">編輯</button>' +
        '<button class="del" data-del="' + esc(q.id) + '">刪除</button>' +
        "</div></td></tr>";
    }).join("");

    $("#tableEmpty").hidden = list.length > 0;

    $$("#qTableBody [data-edit]").forEach(b =>
      b.addEventListener("click", () => openQuestionModal(b.getAttribute("data-edit"))));
    $$("#qTableBody [data-del]").forEach(b =>
      b.addEventListener("click", () => delQuestion(b.getAttribute("data-del"))));
  }

  function nextId(cat) {
    let max = 0;
    state.bank.forEach(q => {
      if (q.cat !== cat) return;
      const m = String(q.id).match(/(\d+)$/);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    });
    return cat + "-" + String(max + 1).padStart(3, "0");
  }

  function openQuestionModal(id) {
    const editing = !!id;
    const q = editing ? state.bank.find(x => x.id === id) : null;
    if (editing && !q) return;
    const cur = q || {
      cat: CATS[0].id, q: "", options: ["", "", "", ""], answer: 0, explain: "", difficulty: 2
    };
    const opts = (cur.options || []).concat(["", "", "", ""]).slice(0, 4);

    const body =
      '<div class="field"><label>分類</label><select id="fCat">' +
      CATS.map(c => '<option value="' + c.id + '"' + (c.id === cur.cat ? " selected" : "") + ">" + esc(c.name) + "</option>").join("") +
      "</select></div>" +
      '<div class="field"><label>題目</label><textarea id="fQ" rows="2">' + esc(cur.q) + "</textarea></div>" +
      '<div class="field"><label>選項（點選左側圓點標記正確答案）</label>' +
      opts.map((o, i) =>
        '<div class="opt-row"><input type="radio" name="fAns" value="' + i + '"' + (i === cur.answer ? " checked" : "") + ">" +
        '<input type="text" id="fOpt' + i + '" value="' + esc(o) + '" placeholder="選項 ' + LETTERS[i] + '"></div>'
      ).join("") + "</div>" +
      '<div class="grid2">' +
      '<div class="field"><label>難度</label><select id="fDiff">' +
      [1, 2, 3].map(d => '<option value="' + d + '"' + (d === (cur.difficulty || 2) ? " selected" : "") + ">" + DIFF_NAME[d] + "</option>").join("") +
      "</select></div>" +
      '<div class="field"><label>題號（自動）</label><input type="text" value="' + (editing ? esc(cur.id) : "新增時自動產生") + '" disabled></div>' +
      "</div>" +
      '<div class="field"><label>解析</label><textarea id="fEx" rows="2">' + esc(cur.explain || "") + "</textarea></div>";

    const foot = '<button class="btn ghost" data-close="1">取消</button>' +
      '<button class="btn primary" id="fSave">' + (editing ? "儲存變更" : "新增題目") + "</button>";

    const mask = openModal(editing ? "編輯題目" : "新增題目", body, foot);
    $("#fSave", mask).addEventListener("click", () => saveQuestion(editing ? id : null));
  }

  function saveQuestion(id) {
    const cat = $("#fCat").value;
    const text = $("#fQ").value.trim();
    const options = [0, 1, 2, 3].map(i => $("#fOpt" + i).value.trim());
    const answer = parseInt(($("input[name=fAns]:checked") || {}).value || "0", 10);
    const difficulty = parseInt($("#fDiff").value, 10);
    const explain = $("#fEx").value.trim();

    if (!text) { toast("請輸入題目內容", "bad"); return; }
    if (options.some(o => !o)) { toast("四個選項都必須填寫", "bad"); return; }

    if (id) {
      const q = state.bank.find(x => x.id === id);
      Object.assign(q, { cat: cat, q: text, options: options, answer: answer, explain: explain, difficulty: difficulty });
      toast("已儲存變更", "ok");
    } else {
      state.bank.push({
        id: nextId(cat), cat: cat, q: text, options: options,
        answer: answer, explain: explain, difficulty: difficulty
      });
      toast("已新增題目", "ok");
    }
    saveBank();
    closeModal();
    renderAdmin();
    renderHeroStats();
  }

  function delQuestion(id) {
    const q = state.bank.find(x => x.id === id);
    if (!q) return;
    const mask = openModal("確認刪除",
      "<p>確定要刪除以下題目嗎？此動作無法復原。</p><p style='margin-top:10px'><b>" + esc(q.q) + "</b></p>",
      '<button class="btn ghost" data-close="1">取消</button><button class="btn danger" id="okDel">確定刪除</button>');
    $("#okDel", mask).addEventListener("click", () => {
      state.bank = state.bank.filter(x => x.id !== id);
      const wi = state.progress.wrong.indexOf(id);
      if (wi >= 0) state.progress.wrong.splice(wi, 1);
      delete state.progress.answered[id];
      saveBank(); saveProgress();
      closeModal(); renderAdmin(); renderHeroStats();
      toast("已刪除", "ok");
    });
  }

  function exportJSON() {
    const data = JSON.stringify(state.bank, null, 2);
    const blob = new Blob([data], { type: "application/json;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "question-bank-" + new Date().toISOString().slice(0, 10) + ".json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1500);
    toast("已匯出 " + state.bank.length + " 題", "ok");
  }

  function importJSON(file) {
    const fr = new FileReader();
    fr.onload = () => {
      try {
        const arr = JSON.parse(fr.result);
        if (!Array.isArray(arr)) throw new Error("格式錯誤");
        const cleaned = [];
        arr.forEach((q, i) => {
          if (!q || !q.q || !Array.isArray(q.options) || q.options.length < 2) return;
          cleaned.push({
            id: q.id || (q.cat || "net") + "-x" + (i + 1),
            cat: CAT_MAP[q.cat] ? q.cat : CATS[0].id,
            q: String(q.q),
            options: q.options.map(String),
            answer: Math.max(0, Math.min(q.options.length - 1, parseInt(q.answer, 10) || 0)),
            explain: String(q.explain || ""),
            difficulty: parseInt(q.difficulty, 10) || 2
          });
        });
        if (!cleaned.length) throw new Error("沒有有效題目");
        const mask = openModal("匯入題庫",
          "<p>讀取到 <b>" + cleaned.length + "</b> 題。請選擇匯入方式：</p>",
          '<button class="btn ghost" data-close="1">取消</button>' +
          '<button class="btn ghost" id="impAppend">附加到現有題庫</button>' +
          '<button class="btn primary" id="impReplace">取代現有題庫</button>');
        $("#impAppend", mask).addEventListener("click", () => {
          cleaned.forEach(q => { if (state.bank.some(x => x.id === q.id)) q.id = nextId(q.cat); });
          state.bank = state.bank.concat(cleaned);
          saveBank(); closeModal(); renderAdmin(); renderHeroStats();
          toast("已附加 " + cleaned.length + " 題", "ok");
        });
        $("#impReplace", mask).addEventListener("click", () => {
          state.bank = cleaned;
          saveBank(); closeModal(); renderAdmin(); renderHeroStats();
          toast("已匯入 " + cleaned.length + " 題", "ok");
        });
      } catch (err) {
        toast("匯入失敗：" + err.message, "bad");
      }
    };
    fr.readAsText(file, "utf-8");
  }

  function openBulkModal() {
    const fmt =
      "每行一題，以 | 分隔八個欄位：\n" +
      "分類|題目|選項A|選項B|選項C|選項D|答案|解析\n\n" +
      "分類可填 id 或中文名稱；答案填 A、B、C 或 D；解析可留空。\n" +
      "無法辨識分類的行會被略過。\n\n" +
      "可用分類：\n" +
      CATS.map(c => "　" + c.id + "　" + c.name).join("\n") +
      "\n\n範例：\n" +
      "net|HTTP 默認使用的埠號是？|21|25|80|443|C|HTTP 預設使用 80 埠。";
    const body = '<div class="field"><label>批次貼上題目</label>' +
      '<textarea id="bulkText" rows="10" placeholder="' + esc(fmt) + '"></textarea></div>' +
      '<p class="muted small">' + esc(fmt).replace(/\n/g, "<br>") + "</p>";
    const mask = openModal("批次新增題目", body,
      '<button class="btn ghost" data-close="1">取消</button><button class="btn primary" id="bulkGo">開始匯入</button>');
    $("#bulkGo", mask).addEventListener("click", () => {
      const lines = $("#bulkText").value.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      let ok = 0, fail = 0;
      lines.forEach(line => {
        const p = line.split("|").map(x => x.trim());
        if (p.length < 7) { fail++; return; }
        let catId = p[0];
        if (!CAT_MAP[catId]) {
          const hit = CATS.find(c => c.name === catId || c.short === catId);
          if (!hit) { fail++; return; }   // 分類無法辨識 → 略過該行，不亂歸類
          catId = hit.id;
        }
        const ai = "ABCDEF".indexOf((p[6] || "A").toUpperCase());
        if (ai < 0) { fail++; return; }
        state.bank.push({
          id: nextId(catId), cat: catId, q: p[1],
          options: [p[2], p[3], p[4], p[5]],
          answer: Math.min(ai, 3), explain: p[7] || "", difficulty: 2
        });
        ok++;
      });
      saveBank(); closeModal(); renderAdmin(); renderHeroStats();
      toast("成功匯入 " + ok + " 題" + (fail ? "，略過 " + fail + " 行" : ""), ok ? "ok" : "bad");
    });
  }

  function changePwd() {
    const body =
      '<div class="field"><label>目前密碼</label><input type="password" id="p0"></div>' +
      '<div class="field"><label>新密碼</label><input type="password" id="p1"></div>' +
      '<div class="field"><label>確認新密碼</label><input type="password" id="p2"></div>';
    const mask = openModal("修改管理員密碼", body,
      '<button class="btn ghost" data-close="1">取消</button><button class="btn primary" id="pwdGo">確定修改</button>');
    $("#pwdGo", mask).addEventListener("click", () => {
      if ($("#p0", mask).value !== state.admin.password) { toast("目前密碼錯誤", "bad"); return; }
      const n1 = $("#p1", mask).value, n2 = $("#p2", mask).value;
      if (!n1 || n1.length < 4) { toast("新密碼至少 4 個字元", "bad"); return; }
      if (n1 !== n2) { toast("兩次輸入的新密碼不一致", "bad"); return; }
      state.admin.password = n1;
      store.set(K.ADMIN, state.admin);
      updateLoginHint();
      closeModal();
      toast("密碼已更新", "ok");
    });
  }

  /* ============================================================
     事件綁定
     ============================================================ */
  function bind() {
    $$(".navbtn[data-nav]").forEach(b =>
      b.addEventListener("click", () => {
        const n = b.getAttribute("data-nav");
        if (n === "admin") { goAdmin(); if (state.adminAuthed) renderAdmin(); return; }
        if (n === "stats") renderStats();
        if (n === "wrong") renderWrong();
        if (n === "home") { renderHeroStats(); renderPoolInfo(); }
        show(n);
      }));

    $("#themeToggle").addEventListener("click", () =>
      applyTheme(state.theme === "dark" ? "light" : "dark"));

    // 隱藏的管理員入口：連點頁腳版本號 5 下（1.8 秒內）
    let taps = 0, tapTimer = null;
    $("#secretEntry").addEventListener("click", () => {
      taps++;
      clearTimeout(tapTimer);
      tapTimer = setTimeout(() => { taps = 0; }, 1800);
      if (taps >= 5) {
        taps = 0;
        clearTimeout(tapTimer);
        openAdminEntry();
      }
    });
    // 入口二：網址加上 #admin
    window.addEventListener("hashchange", checkAdminHash);

    // 首頁
    $("#btnSelectAllCats").addEventListener("click", () => {
      state.selected = new Set(CATS.map(c => c.id));
      renderCatGrid();
    });
    $("#btnClearCats").addEventListener("click", () => {
      state.selected = new Set();
      renderCatGrid();
    });
    $$(".mode-card").forEach(el => el.addEventListener("click", () => {
      state.mode = el.getAttribute("data-mode");
      $$(".mode-card").forEach(x => x.classList.toggle("on", x === el));
      renderPoolInfo();
    }));
    $$("#countRow .chip-btn").forEach(b => b.addEventListener("click", () => {
      $$("#countRow .chip-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      state.count = parseInt(b.getAttribute("data-count"), 10);
      renderPoolInfo();
    }));
    $("#btnStart").addEventListener("click", () => startQuiz(state.mode));
    $("#optShuffle").addEventListener("change", e => { state.shuffleOpts = e.target.checked; });
    $("#optRedraw").addEventListener("change", e => {
      state.redraw = e.target.checked;
      renderPoolInfo();
    });

    // 答題
    $("#btnNext").addEventListener("click", nextQ);
    $("#btnPrev").addEventListener("click", prevQ);
    $("#btnQuit").addEventListener("click", () => {
      if (!state.quiz) { show("home"); return; }
      const mask = openModal("結束練習", "<p>確定要結束本次練習嗎？已作答的記錄會保留。</p>",
        '<button class="btn ghost" data-close="1">繼續練習</button><button class="btn danger" id="quitOk">結束</button>');
      $("#quitOk", mask).addEventListener("click", () => {
        if (state.quiz && state.quiz.timerId) clearInterval(state.quiz.timerId);
        state.quiz = null; closeModal(); show("home"); renderHeroStats();
      });
    });
    $("#btnFav").addEventListener("click", () => {
      const q = state.quiz;
      if (!q) return;
      const item = q.list[q.idx];
      const i = state.progress.fav.indexOf(item.id);
      if (i >= 0) { state.progress.fav.splice(i, 1); toast("已取消收藏"); }
      else { state.progress.fav.push(item.id); toast("已收藏", "ok"); }
      saveProgress();
      renderQuiz();
    });

    // 結果
    $("#btnResultHome").addEventListener("click", () => { renderHeroStats(); show("home"); });
    $("#btnRetryWrong").addEventListener("click", retryWrongFromResult);

    // 統計
    $("#btnResetProgress").addEventListener("click", () => {
      const mask = openModal("清除學習記錄", "<p>將清除所有作答記錄、錯題本與練習歷史。題庫本身不受影響。</p>",
        '<button class="btn ghost" data-close="1">取消</button><button class="btn danger" id="rstOk">確定清除</button>');
      $("#rstOk", mask).addEventListener("click", () => {
        state.progress = { answered: {}, wrong: [], fav: [], sessions: [] };
        saveProgress(); closeModal(); renderStats(); renderHeroStats();
        toast("已清除學習記錄", "ok");
      });
    });

    // 錯題本
    $("#btnWrongPractice").addEventListener("click", () => {
      const list = state.progress.wrong.map(id => state.bank.find(q => q.id === id)).filter(Boolean);
      launchCustomQuiz(shuffle(list), "wrong", true);
    });
    $("#btnWrongClear").addEventListener("click", () => {
      state.progress.wrong = [];
      saveProgress(); renderWrong(); renderHeroStats();
      toast("已清空錯題本", "ok");
    });

    // 使用者登入 / 登出
    $("#userLoginForm").addEventListener("submit", doUserLogin);
    $("#btnUserLogout").addEventListener("click", () => {
      const mask = openModal("登出", "<p>確定要登出目前帳號嗎？學習記錄會保留。</p>",
        '<button class="btn ghost" data-close="1">取消</button><button class="btn danger" id="ulOk">登出</button>');
      $("#ulOk", mask).addEventListener("click", () => { closeModal(); userLogout(); });
    });

    // 管理員
    $("#loginForm").addEventListener("submit", doLogin);
    $("#btnLogout").addEventListener("click", logout);
    $("#adminSearch").addEventListener("input", renderQTable);
    $("#adminCatFilter").addEventListener("change", renderQTable);
    $("#btnNewQ").addEventListener("click", () => openQuestionModal(null));
    $("#btnExport").addEventListener("click", exportJSON);
    $("#btnImport").addEventListener("click", () => $("#fileImport").click());
    $("#fileImport").addEventListener("change", e => {
      if (e.target.files[0]) importJSON(e.target.files[0]);
      e.target.value = "";
    });
    $("#btnBulk").addEventListener("click", openBulkModal);
    $("#btnChangePwd").addEventListener("click", changePwd);

    // 管理員：分頁切換
    $$("#adminTabs .tab").forEach(t => t.addEventListener("click", () => {
      $$("#adminTabs .tab").forEach(x => x.classList.toggle("active", x === t));
      const tab = t.getAttribute("data-tab");
      $("#adminTabBank").classList.toggle("hidden", tab !== "bank");
      $("#adminTabUsers").classList.toggle("hidden", tab !== "users");
      if (tab === "users") renderUsers(); else renderQTable();
    }));

    // 管理員：帳號管理
    $("#userSearch").addEventListener("input", renderUsers);
    $("#btnNewUser").addEventListener("click", () => openUserModal(null));
    $("#btnExportUsers").addEventListener("click", exportUsers);

    // 回到前台
    $("#btnBackFront").addEventListener("click", () => {
      if (state.session) { renderHeroStats(); show("home"); }
      else { show("login"); }
    });
    $("#btnResetBank").addEventListener("click", () => {
      const mask = openModal("還原預設題庫",
        "<p>將以內建題庫取代目前題庫（" + state.bank.length + " 題），你新增或修改的題目會被覆蓋。</p>",
        '<button class="btn ghost" data-close="1">取消</button><button class="btn danger" id="rbOk">確定還原</button>');
      $("#rbOk", mask).addEventListener("click", () => {
        resetBank(); closeModal(); renderAdmin(); renderHeroStats();
        toast("已還原預設題庫（" + state.bank.length + " 題）", "ok");
      });
    });

    // 鍵盤
    document.addEventListener("keydown", e => {
      if (!$("#view-quiz").classList.contains("active") || !state.quiz) return;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || ""))) return;
      const k = e.key.toUpperCase();
      if ("ABCD".indexOf(k) >= 0) {
        const i = "ABCD".indexOf(k);
        if (i < state.quiz.list[state.quiz.idx].options.length) { pick(i); e.preventDefault(); }
      } else if (e.key === "Enter" || e.key === "ArrowRight") { nextQ(); e.preventDefault(); }
      else if (e.key === "ArrowLeft") { prevQ(); e.preventDefault(); }
      else if ("1234".indexOf(e.key) >= 0) {
        const i = parseInt(e.key, 10) - 1;
        if (i < state.quiz.list[state.quiz.idx].options.length) { pick(i); e.preventDefault(); }
      }
    });
  }

  /* ============================================================
     啟動
     ============================================================ */
  function boot() {
    loadBank();
    loadAccounts();
    loadAdmin();
    restoreSession();
    loadProgress();
    applyTheme(store.get(K.THEME, "dark"));

    renderHeroStats();
    renderCatGrid();
    // 預設模式卡片樣式
    $$(".mode-card").forEach(el => el.classList.toggle("on", el.getAttribute("data-mode") === state.mode));

    bind();
    updateUserNav();
    updateAdminNav();
    updateLoginHint();
    show(state.session ? "home" : "login");
    checkAdminHash();   // 若網址帶 #admin 則直接進入管理員入口
    console.log("[刷題系統] 題庫 " + state.bank.length + " 題 · 帳號 " + state.accounts.length + " 個");
  }

  /* 唯讀除錯接口：供自動化測試與問題排查使用 */
  window.__ICK__ = {
    get bank() { return state.bank; },
    get accounts() { return state.accounts; },
    get session() { return state.session; },
    get progress() { return state.progress; },
    get quiz() { return state.quiz; },
    get state() { return state; }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

})();
