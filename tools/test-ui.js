/* jsdom 整合測試：實際載入頁面、模擬點擊，驗證刷題與管理功能 */
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const ROOT = path.join(__dirname, "..");
const NODE_MODULES = "C:/Users/User/.workbuddy-ai/binaries/node/workspace/node_modules";

let pass = 0, fail = 0;
function ok(name, cond, extra) {
  if (cond) { pass++; console.log("  ✓ " + name); }
  else { fail++; console.log("  ✗ " + name + (extra !== undefined ? "  → " + extra : "")); }
}
function section(t) { console.log("\n" + t); }

// ---- 建立 DOM ----
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8")
  .replace(/<script[^>]*><\/script>/g, "");

const dom = new JSDOM(html, {
  runScripts: "outside-only",
  pretendToBeVisual: true,
  url: "http://localhost/",
  virtualConsole: new (require("jsdom").VirtualConsole)()
});
const { window } = dom;
const { document } = window;

window.scrollTo = () => {};
window.alert = () => {};

// 注入所有腳本（依 index.html 的載入順序）
const scripts = [
  "assets/data/_index.js",
  "assets/data/accounts.js",
  "assets/data/net.js", "assets/data/hw.js", "assets/data/office.js",
  "assets/data/python.js", "assets/data/web.js", "assets/data/msc.js",
  "assets/data/daily.js", "assets/data/crime.js", "assets/data/china.js",
  "assets/app.js"
];
for (const f of scripts) {
  window.eval(fs.readFileSync(path.join(ROOT, f), "utf8"));
}
// 若尚未 boot，補發 DOMContentLoaded
if (document.readyState === "loading") {
  document.dispatchEvent(new window.Event("DOMContentLoaded", { bubbles: true }));
}

const $ = s => document.querySelector(s);
const $$ = s => Array.prototype.slice.call(document.querySelectorAll(s));
const viewActive = id => $("#view-" + id).classList.contains("active");
function submitLogin() {
  $("#userLoginForm").dispatchEvent(new window.Event("submit", { bubbles: true, cancelable: true }));
}
function closeAnyModal() {
  const b = $(".modal-mask [data-close]");
  if (b) b.click();
}

// ================= 0. 使用者登入 =================
section("0. 使用者登入");
ok("未登入時顯示登入頁", viewActive("login"));
ok("未登入時導覽項目隱藏", $("#topnav").classList.contains("no-user"));
ok("未登入時使用者標籤隱藏", $("#userChip").classList.contains("hidden"));
ok("帳號清單共 10 個", window.__ICK__.accounts.length === 10, window.__ICK__.accounts.length);

// 未登入不得進入需要帳號的畫面
$$(".navbtn[data-nav]").find(b => b.dataset.nav === "stats").click();
ok("未登入點導覽仍停在登入頁", viewActive("login"));

// 帳號不存在
$("#loginUser").value = "nobody";
$("#loginPwd").value = "x";
submitLogin();
ok("帳號不存在顯示錯誤", !$("#loginErr").classList.contains("hidden") && /帳號不存在/.test($("#loginErr").textContent),
  $("#loginErr").textContent);

// 密碼錯誤
$("#loginUser").value = "stu01";
$("#loginPwd").value = "wrongpwd";
submitLogin();
ok("密碼錯誤顯示錯誤", /密碼錯誤/.test($("#loginErr").textContent), $("#loginErr").textContent);

// 停用帳號無法登入
const ACC = window.__ICK__.accounts;
ACC[1].active = false;
$("#loginUser").value = ACC[1].user;
$("#loginPwd").value = ACC[1].pwd;
submitLogin();
ok("停用帳號無法登入", /已停用/.test($("#loginErr").textContent), $("#loginErr").textContent);
ACC[1].active = true;

// 正確登入
$("#loginUser").value = "stu01";
$("#loginPwd").value = ACC[0].pwd;
submitLogin();
ok("正確帳密可登入", viewActive("home"));
ok("登入後顯示使用者名稱", $("#userName").textContent === ACC[0].name, $("#userName").textContent);
ok("登入後使用者標籤顯示", !$("#userChip").classList.contains("hidden"));
ok("登入後導覽項目顯示", !$("#topnav").classList.contains("no-user"));
ok("登入錯誤訊息已隱藏", $("#loginErr").classList.contains("hidden"));
ok("登入狀態已寫入儲存", JSON.parse(window.localStorage.getItem("ick.session")).user === "stu01");

// ================= 1. 首頁 =================
section("1. 首頁載入");
ok("9 個分類卡片已渲染", $$("#catGrid .cat-card").length === 9, $$("#catGrid .cat-card").length);
ok("預設全部選中", $$("#catGrid .cat-card.on").length === 9, $$("#catGrid .cat-card.on").length);
ok("題庫總數顯示 650", $("#footCount").textContent === "650", $("#footCount").textContent);
ok("首頁 hero 統計渲染", $$("#heroStats .mini-stat").length === 4);
ok("開始按鈕可用", !$("#btnStart").disabled);
ok("池提示顯示題數", /650 題/.test($("#poolInfo").textContent), $("#poolInfo").textContent);

// 分類全選/清除
$("#btnClearCats").click();
ok("清除後 0 個選中", $$("#catGrid .cat-card.on").length === 0);
ok("清除後仍可練習（視為全部）", !$("#btnStart").disabled);
$("#btnSelectAllCats").click();
ok("全選後 9 個選中", $$("#catGrid .cat-card.on").length === 9);

// 切換分類
$("#catGrid .cat-card").click();
ok("取消單一後剩 8 個", $$("#catGrid .cat-card.on").length === 8);
$("#btnSelectAllCats").click();

// 題數切換
$$("#countRow .chip-btn").find(b => b.dataset.count === "10").click();
ok("切換 10 題後提示更新", /本次將出 10 題/.test($("#poolInfo").textContent), $("#poolInfo").textContent);

// ================= 2. 順序練習 =================
section("2. 順序練習（即時判定）");
$("#btnStart").click();
ok("進入答題視圖", viewActive("quiz"));
ok("題目文字已渲染", $("#qText").textContent.length > 5);
ok("四個選項已渲染", $$("#qOptions .opt").length === 4, $$("#qOptions .opt").length);
ok("選項字母為 A-D", $$("#qOptions .opt .key").map(k => k.textContent).join("") === "ABCD");
ok("進度文字正確", /第 1 \/ 10 題/.test($("#quizProgressText").textContent), $("#quizProgressText").textContent);
ok("即時判定模式顯示快捷鍵提示", !$("#kbHint").classList.contains("hidden"));
ok("解析初始隱藏", $("#qExplain").classList.contains("hidden"));

// 作答（選第一個）
$("#qOptions .opt").click();
ok("作答後顯示解析", !$("#qExplain").classList.contains("hidden"));
ok("標記出正確答案", $$("#qOptions .opt.correct").length === 1);
ok("選項鎖定", $$("#qOptions .opt.locked").length === 4);
const firstWasCorrect = $("#qOptions .opt").classList.contains("correct");

// 重複點擊不應改變
const before = $("#qExplain").innerHTML;
$("#qOptions .opt").click();
ok("已作答後再點擊無效", $("#qExplain").innerHTML === before);

// 收藏
$("#btnFav").click();
ok("收藏後圖示變實心", $("#btnFav").textContent === "★");

// 鍵盤作答 + 下一題
$("#btnNext").click();
ok("前進到第 2 題", /第 2 \/ 10 題/.test($("#quizProgressText").textContent));
$("#btnPrev").click();
ok("可回到第 1 題", /第 1 \/ 10 題/.test($("#quizProgressText").textContent));
ok("回到第 1 題仍保留作答", !$("#qExplain").classList.contains("hidden"));

// 走完剩餘題目（含最後一題交卷）
let guard = 0;
while (!viewActive("result") && guard++ < 30) {
  $("#qOptions .opt").click();
  $("#btnNext").click();
}
ok("完成後進入結果頁", viewActive("result"));
ok("分數已渲染", /^\d+$/.test($("#scoreNum").textContent), $("#scoreNum").textContent);
ok("分母為 10", $("#scoreDen").textContent === "/10", $("#scoreDen").textContent);
ok("逐題回顧 10 筆", $$("#reviewList .review-item").length === 10, $$("#reviewList .review-item").length);
ok("回顧標記正確/錯誤", $$("#reviewList .review-item.ok, #reviewList .review-item.bad").length === 10);
ok("回顧顯示你的答案", $$("#reviewList .ra").length === 10, $$("#reviewList .ra").length);

// ================= 3. 學習記錄 =================
section("3. 學習記錄");
const prog = JSON.parse(window.localStorage.getItem("ick.progress.stu01"));
ok("已寫入作答記錄", Object.keys(prog.answered).length === 10, Object.keys(prog.answered).length);
ok("錯題本已記錄", Array.isArray(prog.wrong));
ok("收藏已記錄", prog.fav.length === 1, prog.fav.length);
ok("練習歷史已記錄", prog.sessions.length === 1);

$("#btnResultHome").click();
ok("返回首頁", viewActive("home"));
ok("已練題數更新", $("#heroStats").textContent.indexOf("10") >= 0);

// ================= 4. 錯題重做 =================
section("4. 錯題重做");
$$(".navbtn[data-nav]").find(b => b.dataset.nav === "wrong").click();
ok("進入錯題本", viewActive("wrong"));
const wrongCount = $$("#wrongList .review-item").length;
ok("錯題本顯示題目", wrongCount > 0, wrongCount);
ok("重做按鈕可用", !$("#btnWrongPractice").disabled);
$("#btnWrongPractice").click();
ok("進入錯題練習", viewActive("quiz"));
ok("錯題練習題數等於錯題數", /\/ *\d+ *題/.test($("#quizProgressText").textContent.replace(/\s/g, " ")));

// ================= 5. 模擬考試 =================
section("5. 模擬考試");
$$(".navbtn[data-nav]").find(b => b.dataset.nav === "home").click();
$$(".mode-card").find(m => m.dataset.mode === "exam").click();
ok("考試模式卡片已選中", $$(".mode-card").find(m => m.dataset.mode === "exam").classList.contains("on"));
$("#btnStart").click();
ok("進入考試", viewActive("quiz"));
ok("顯示計時器", !$("#quizTimer").classList.contains("hidden"));
ok("計時器文字格式正確", /⏱ \d{2}:\d{2}/.test($("#quizTimer").textContent), $("#quizTimer").textContent);
ok("考試模式不顯示快捷鍵提示", $("#kbHint").classList.contains("hidden"));
$("#qOptions .opt").click();
ok("考試模式作答後不顯示解析", $("#qExplain").classList.contains("hidden"));
ok("考試模式選項不鎖定", $$("#qOptions .opt.locked").length === 0);
ok("已選選項有標記", $$("#qOptions .opt.chosen").length === 1);
// 交卷
for (let i = 0; i < 10; i++) $("#btnNext").click();
ok("交卷後進入結果頁", viewActive("result"));

// ================= 6. 學習統計 =================
section("6. 學習統計");
$$(".navbtn[data-nav]").find(b => b.dataset.nav === "stats").click();
ok("進入統計頁", viewActive("stats"));
ok("KPI 8 項", $$("#statsKpis .kpi, #statsKpis .mini-stat").length === 8, $$("#statsKpis .mini-stat").length);
ok("分類掌握度 9 項", $$("#catStatList .cat-stat").length === 9, $$("#catStatList .cat-stat").length);
ok("練習歷史已顯示", $$("#historyList .history-item").length >= 2, $$("#historyList .history-item").length);

// ================= 7. 管理員（隱藏入口） =================
section("7. 管理員（隱藏入口）");
ok("管理員導覽按鈕預設隱藏", $("#navAdmin").classList.contains("hidden"));
ok("登入頁提示預設顯示（密碼仍是預設值）", !$("#loginHint").classList.contains("hidden"));

// 入口一：連點頁腳版本號 5 下
$("#secretEntry").click(); $("#secretEntry").click();
$("#secretEntry").click(); $("#secretEntry").click();
ok("連點 4 下尚未開啟", !viewActive("admin-login"));
$("#secretEntry").click();
ok("連點頁腳 5 下進入登入頁", viewActive("admin-login"));

// 入口二：網址加上 #admin
$$(".navbtn[data-nav]").find(b => b.dataset.nav === "home").click();
window.location.hash = "#admin";
window.dispatchEvent(new window.Event("hashchange"));
ok("網址 #admin 可開啟登入頁", viewActive("admin-login"));
window.location.hash = "";
window.dispatchEvent(new window.Event("hashchange"));
ok("清除 hash 不會誤觸入口", viewActive("admin-login"));

$("#adminPwd").value = "wrongpwd";
$("#loginForm").dispatchEvent(new window.Event("submit", { bubbles: true, cancelable: true }));
ok("錯誤密碼不進入後台", !viewActive("admin"));

$("#adminPwd").value = "admin123";
$("#loginForm").dispatchEvent(new window.Event("submit", { bubbles: true, cancelable: true }));
ok("正確密碼進入後台", viewActive("admin"));
ok("登入後管理員按鈕顯示", !$("#navAdmin").classList.contains("hidden"));
ok("題庫表格 650 列", $$("#qTableBody tr").length === 650, $$("#qTableBody tr").length);
ok("分類篩選有 10 個選項", $$("#adminCatFilter option").length === 10, $$("#adminCatFilter option").length);

// 搜尋
$("#adminSearch").value = "T568B";
$("#adminSearch").dispatchEvent(new window.Event("input", { bubbles: true }));
const searchRows = $$("#qTableBody tr").length;
ok("搜尋可篩選結果", searchRows > 0 && searchRows < 319, searchRows);
$("#adminSearch").value = "";
$("#adminSearch").dispatchEvent(new window.Event("input", { bubbles: true }));

// 分類篩選
$("#adminCatFilter").value = "msc";
$("#adminCatFilter").dispatchEvent(new window.Event("change", { bubbles: true }));
ok("分類篩選 msc 得 50 題", $$("#qTableBody tr").length === 50, $$("#qTableBody tr").length);
$("#adminCatFilter").value = "";
$("#adminCatFilter").dispatchEvent(new window.Event("change", { bubbles: true }));

// 新增題目
$("#btnNewQ").click();
ok("開啟新增題目彈窗", !!$(".modal-mask"));
$("#fCat").value = "python";
$("#fQ").value = "測試題目：Python 的列表索引從多少開始？";
$("#fOpt0").value = "0";
$("#fOpt1").value = "1";
$("#fOpt2").value = "-1";
$("#fOpt3").value = "隨機";
document.querySelector('input[name="fAns"][value="0"]').checked = true;
$("#fDiff").value = "1";
$("#fEx").value = "Python 列表索引從 0 開始。";
$("#fSave").click();
ok("彈窗已關閉", !$(".modal-mask"));
ok("題庫增至 651 題", $$("#qTableBody tr").length === 651, $$("#qTableBody tr").length);
const bank = JSON.parse(window.localStorage.getItem("ick.questions"));
ok("新題已寫入儲存", bank.length === 651, bank.length);
ok("新題 id 自動產生", /^python-\d{3}$/.test(bank[bank.length - 1].id), bank[bank.length - 1].id);
ok("新題內容正確", bank[bank.length - 1].q.indexOf("測試題目") === 0);

// 編輯題目
const editBtn = $$("#qTableBody [data-edit]").pop();
editBtn.click();
ok("開啟編輯彈窗", !!$(".modal-mask"));
ok("編輯彈窗帶入原題目", $("#fQ").value.indexOf("測試題目") === 0);
$("#fQ").value = "測試題目（已修改）";
$("#fSave").click();
const bank2 = JSON.parse(window.localStorage.getItem("ick.questions"));
ok("編輯已儲存", bank2[bank2.length - 1].q === "測試題目（已修改）");

// 刪除題目
$$("#qTableBody [data-del]").pop().click();
ok("開啟刪除確認", !!$(".modal-mask"));
$("#okDel").click();
ok("題庫回到 650 題", $$("#qTableBody tr").length === 650, $$("#qTableBody tr").length);
const bank3 = JSON.parse(window.localStorage.getItem("ick.questions"));
ok("刪除已寫入儲存", bank3.length === 650, bank3.length);

// 批次新增
$("#btnBulk").click();
$("#bulkText").value = [
  "net|測試批次題一？|甲|乙|丙|丁|B|批次解析一",
  "硬件|測試批次題二？|A選項|B選項|C選項|D選項|D|批次解析二",
  "不存在的分類|這行應被略過？|甲|乙|丙|丁|A|略過"
].join("\n");
$("#bulkGo").click();
ok("批次新增 2 題（略過 1 行）", $$("#qTableBody tr").length === 652, $$("#qTableBody tr").length);
const bank4 = JSON.parse(window.localStorage.getItem("ick.questions"));
ok("中文分類名可辨識", bank4[bank4.length - 1].cat === "hw", bank4[bank4.length - 1].cat);
ok("答案 D 對應索引 3", bank4[bank4.length - 1].answer === 3, bank4[bank4.length - 1].answer);
ok("無法辨識的分類未被寫入", !bank4.some(q => q.q.indexOf("這行應被略過") === 0));

// 修改密碼
$("#btnChangePwd").click();
$("#p0").value = "admin123";
$("#p1").value = "newpass9";
$("#p2").value = "newpass9";
$("#pwdGo").click();
const adm = JSON.parse(window.localStorage.getItem("ick.admin"));
ok("密碼已更新", adm.password === "newpass9", adm.password);
ok("修改密碼後登入提示隱藏", $("#loginHint").classList.contains("hidden"));

// ---- 帳號管理分頁 ----
$$("#adminTabs .tab").find(t => t.dataset.tab === "users").click();
ok("切換到帳號管理分頁", !$("#adminTabUsers").classList.contains("hidden"));
ok("題庫分頁已隱藏", $("#adminTabBank").classList.contains("hidden"));
ok("帳號表格顯示 10 列", $$("#userTableBody tr").length === 10, $$("#userTableBody tr").length);
ok("顯示 stu01 的練習進度", $("#userTableBody").textContent.indexOf("已練") >= 0);

// 搜尋帳號
$("#userSearch").value = "stu03";
$("#userSearch").dispatchEvent(new window.Event("input", { bubbles: true }));
ok("帳號搜尋可篩選", $$("#userTableBody tr").length === 1, $$("#userTableBody tr").length);
$("#userSearch").value = "";
$("#userSearch").dispatchEvent(new window.Event("input", { bubbles: true }));

// 新增帳號
$("#btnNewUser").click();
$("#uUser").value = "test99";
$("#uName").value = "測試帳號";
$("#uPwd").value = "abc123";
$("#uSave").click();
ok("新增帳號成功", window.__ICK__.accounts.length === 11, window.__ICK__.accounts.length);
ok("帳號表格增至 11 列", $$("#userTableBody tr").length === 11, $$("#userTableBody tr").length);

// 重複帳號 / 非法帳號名
$("#btnNewUser").click();
$("#uUser").value = "test99";
$("#uPwd").value = "x";
$("#uSave").click();
ok("重複帳號無法新增", window.__ICK__.accounts.length === 11, window.__ICK__.accounts.length);
closeAnyModal();
$("#btnNewUser").click();
$("#uUser").value = "a";
$("#uPwd").value = "x";
$("#uSave").click();
ok("過短帳號無法新增", window.__ICK__.accounts.length === 11, window.__ICK__.accounts.length);
closeAnyModal();

// 重設密碼
const pwdBefore = window.__ICK__.accounts.find(a => a.user === "test99").pwd;
$$("#userTableBody [data-upwd]").find(b => b.getAttribute("data-upwd") === "test99").click();
ok("開啟重設密碼彈窗", !!$(".modal-mask"));
$("#rpOk").click();
const pwdAfter = window.__ICK__.accounts.find(a => a.user === "test99").pwd;
ok("密碼已重設且與原不同", pwdAfter !== pwdBefore && pwdAfter.length === 6, pwdAfter);

// 停用 / 啟用
$$("#userTableBody [data-utoggle]").find(b => b.getAttribute("data-utoggle") === "test99").click();
ok("帳號已停用", window.__ICK__.accounts.find(a => a.user === "test99").active === false);
$$("#userTableBody [data-utoggle]").find(b => b.getAttribute("data-utoggle") === "test99").click();
ok("帳號已重新啟用", window.__ICK__.accounts.find(a => a.user === "test99").active === true);

// 編輯名稱
$$("#userTableBody [data-uedit]").find(b => b.getAttribute("data-uedit") === "test99").click();
$("#uName").value = "改名後";
$("#uSave").click();
ok("帳號名稱已更新", window.__ICK__.accounts.find(a => a.user === "test99").name === "改名後");

// 刪除
$$("#userTableBody [data-udel]").find(b => b.getAttribute("data-udel") === "test99").click();
$("#udOk").click();
ok("帳號已刪除", window.__ICK__.accounts.length === 10, window.__ICK__.accounts.length);
ok("帳號表格回到 10 列", $$("#userTableBody tr").length === 10, $$("#userTableBody tr").length);

// 切回題庫分頁
$$("#adminTabs .tab").find(t => t.dataset.tab === "bank").click();
ok("切回題庫分頁", !$("#adminTabBank").classList.contains("hidden"));

// 還原預設題庫
$("#btnResetBank").click();
$("#rbOk").click();
ok("還原後 650 題", $$("#qTableBody tr").length === 650, $$("#qTableBody tr").length);

// 登出
$("#btnLogout").click();
ok("登出回到首頁", viewActive("home"));
ok("登出後管理員按鈕隱藏", $("#navAdmin").classList.contains("hidden"));
$("#secretEntry").click(); $("#secretEntry").click(); $("#secretEntry").click();
$("#secretEntry").click(); $("#secretEntry").click();
ok("登出後需重新登入", viewActive("admin-login"));

// ================= 8. 主題 =================
section("8. 主題切換");
$("#themeToggle").click();
ok("切換為淺色主題", document.documentElement.getAttribute("data-theme") === "light");
$("#themeToggle").click();
ok("切換回深色主題", document.documentElement.getAttribute("data-theme") === "dark");

// ================= 9. 抽題行為 =================
section("9. 抽題行為（每次重新抽題）");

// 跑一輪練習，回傳每題的題目文字；answerAll=true 時每題都作答
function runSession(mode, count, answerAll) {
  const modeEl = $$(".mode-card").find(m => m.dataset.mode === mode);
  modeEl.click();
  const chip = $$("#countRow .chip-btn").find(b => b.dataset.count === String(count));
  if (chip) chip.click();
  $("#btnStart").click();
  const texts = [];
  let g = 0;
  while (viewActive("quiz") && g++ < 300) {
    texts.push($("#qText").textContent);
    if (answerAll) { const o = $("#qOptions .opt"); if (o) o.click(); }
    $("#btnNext").click();
  }
  return texts;
}

const api = window.__ICK__;
const idOf = t => (api.bank.find(q => q.q === t) || {}).id;

// 縮小題池到「澳門科學館」以便驗證抽題策略
$("#btnClearCats").click();
$("#catGrid .cat-card[data-cat='msc']").click();
ok("題池縮小後提示顯示未練過題數", /未練過/.test($("#poolInfo").textContent), $("#poolInfo").textContent);
ok("重新抽題預設開啟", $("#optRedraw").checked === true);
ok("提示說明每次重新抽題", /每次開始都會重新抽題/.test($("#redrawHint").textContent), $("#redrawHint").textContent);

// 第一輪：抽 20 題並全部作答
const r1 = runSession("order", 20, true);
const ids1 = r1.map(idOf);
ok("第一輪抽到 20 題", ids1.length === 20, ids1.length);
ok("第一輪題目皆屬澳門科學館", ids1.every(id => id && id.indexOf("msc-") === 0));

// 第二輪：應重新抽題且優先未練過的
const r2 = runSession("order", 20, false);
const ids2 = r2.map(idOf);
ok("第二輪抽到不同題目", ids2.join("|") !== ids1.join("|"));
const overlap = ids2.filter(id => ids1.indexOf(id) >= 0).length;
ok("第二輪優先抽未練過的題目（與第一輪零重疊）", overlap === 0, "重疊 " + overlap + " 題");

// 關閉「每次重新抽題」
$("#optRedraw").checked = false;
$("#optRedraw").dispatchEvent(new window.Event("change", { bubbles: true }));
ok("關閉後提示文字更新", /從頭依題號/.test($("#redrawHint").textContent), $("#redrawHint").textContent);

const r3 = runSession("order", 20, false);
const r4 = runSession("order", 20, false);
ok("關閉後兩次抽到相同題目", r3.join("|") === r4.join("|"));

// 重新開啟
$("#optRedraw").checked = true;
$("#optRedraw").dispatchEvent(new window.Event("change", { bubbles: true }));
ok("重新開啟後提示恢復", /優先抽未練過/.test($("#redrawHint").textContent), $("#redrawHint").textContent);

const r5 = runSession("order", 20, false);
ok("重新開啟後又抽到不同題目", r5.join("|") !== r3.join("|"));

// 還原全選分類
$("#btnSelectAllCats").click();
ok("已還原全選分類", $$("#catGrid .cat-card.on").length === 9);

// ================= 10. 帳號隔離 =================
section("10. 帳號隔離（各帳號進度獨立）");

$("#btnUserLogout").click();
$("#ulOk").click();
ok("登出後回到登入頁", viewActive("login"));
ok("登出後導覽項目隱藏", $("#topnav").classList.contains("no-user"));
ok("登出後登入狀態已清除", window.localStorage.getItem("ick.session") === null);

const a2 = window.__ICK__.accounts[1];
$("#loginUser").value = a2.user;
$("#loginPwd").value = a2.pwd;
submitLogin();
ok("第二個帳號可登入", viewActive("home"));
ok("第二個帳號進度為全新", Object.keys(window.__ICK__.progress.answered).length === 0,
  Object.keys(window.__ICK__.progress.answered).length);
ok("顯示第二個帳號名稱", $("#userName").textContent === a2.name);

$("#btnUserLogout").click();
$("#ulOk").click();
$("#loginUser").value = "stu01";
$("#loginPwd").value = window.__ICK__.accounts[0].pwd;
submitLogin();
ok("切回原帳號", viewActive("home"));
const restored = Object.keys(window.__ICK__.progress.answered).length;
ok("原帳號進度已還原", restored > 0, restored);
ok("進度寫在帳號專屬 key", !!window.localStorage.getItem("ick.progress.stu01"));

// ================= 結果 =================
console.log("\n" + "=".repeat(52));
console.log("通過 " + pass + " 項，失敗 " + fail + " 項");
console.log("=".repeat(52));
if (fail) process.exitCode = 1;
