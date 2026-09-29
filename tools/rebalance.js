/* ============================================================
   題庫選項重排工具
   ------------------------------------------------------------
   載入所有題庫檔 → 將正確答案的位置均勻打散到 A/B/C/D
   → 重新輸出成「一分類一檔」的 consolidated 檔案
   用法：node tools/rebalance.js [--check]
   ============================================================ */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const DATA = path.join(ROOT, "assets", "data");
const CHECK_ONLY = process.argv.includes("--check");

/* ---- 決定性亂數（同一題每次結果一致） ---- */
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function shuffleWithSeed(arr, seed) {
  const a = arr.slice();
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

/* ---- 載入題庫 ---- */
const files = fs.readdirSync(DATA).filter(f => f.endsWith(".js"));
const sandbox = { window: {} };
vm.createContext(sandbox);
// _index.js 必須先載入
const ordered = files.sort((a, b) =>
  a === "_index.js" ? -1 : b === "_index.js" ? 1 : a.localeCompare(b));
for (const f of ordered) {
  vm.runInContext(fs.readFileSync(path.join(DATA, f), "utf8"), sandbox, { filename: f });
}
const CATS = sandbox.window.CATEGORIES;
const bank = sandbox.window.SEED_QUESTIONS;

/* ---- 重排：把正確答案輪流放到第 0/1/2/3 位 ---- */
const counters = {};
const rebalanced = bank.map(q => {
  const n = q.options.length;
  if (!counters[q.cat]) counters[q.cat] = 0;
  const target = counters[q.cat] % n;
  counters[q.cat]++;

  const correct = q.options[q.answer];
  const others = q.options.filter((_, i) => i !== q.answer);
  const shuffled = shuffleWithSeed(others, hash(q.id));
  const opts = [];
  let oi = 0;
  for (let i = 0; i < n; i++) opts.push(i === target ? correct : shuffled[oi++]);

  return {
    id: q.id, cat: q.cat, q: q.q,
    options: opts, answer: target,
    explain: q.explain, difficulty: q.difficulty
  };
});

/* ---- 統計 ---- */
const dist = [0, 0, 0, 0];
rebalanced.forEach(q => { if (q.answer < 4) dist[q.answer]++; });
console.log("重排後答案分佈 A/B/C/D：" + dist.join(" / "));

const perCat = {};
CATS.forEach(c => perCat[c.id] = 0);
rebalanced.forEach(q => perCat[q.cat]++);
console.log("總題數：" + rebalanced.length);
CATS.forEach(c => console.log("  " + c.name.padEnd(22) + perCat[c.id]));

if (CHECK_ONLY) { console.log("\n（--check 模式，未寫入檔案）"); process.exit(0); }

/* ---- 輸出：一分類一檔 ---- */
const J = v => JSON.stringify(v);
for (const c of CATS) {
  const list = rebalanced.filter(q => q.cat === c.id);
  const body = list.map(q =>
    '{ id:' + J(q.id) + ', cat:' + J(q.cat) + ', difficulty:' + q.difficulty +
    ',\n  q:' + J(q.q) +
    ',\n  options:[' + q.options.map(J).join(", ") + ']' +
    ', answer:' + q.answer +
    ',\n  explain:' + J(q.explain) + " }"
  ).join(",\n\n");

  const out =
    "/* 分類：" + c.name + " (" + c.id + ") — " + list.length + " 題\n" +
    "   本檔由 tools/rebalance.js 產生，可安全地用管理員介面或批次新增維護。 */\n" +
    "window.SEED_QUESTIONS.push(\n" + body + "\n);\n";

  fs.writeFileSync(path.join(DATA, c.id + ".js"), out, "utf8");
  console.log("已寫入 " + c.id + ".js（" + list.length + " 題）");
}

/* ---- 移除已被合併的 part-2 檔 ---- */
const stale = CATS.map(c => c.id + "-2.js").filter(f => fs.existsSync(path.join(DATA, f)));
stale.forEach(f => {
  fs.unlinkSync(path.join(DATA, f));
  console.log("已移除合併前的暫存檔 " + f);
});
console.log("\n完成。");
