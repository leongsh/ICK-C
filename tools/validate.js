/* 題庫資料驗證：載入所有 data 檔，檢查 id 唯一、答案索引合法、選項數、分類覆蓋 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dir = path.join(__dirname, "..", "assets", "data");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".js"));
// _index.js 必須先載入
files.sort((a, b) => (a === "_index.js" ? -1 : b === "_index.js" ? 1 : a.localeCompare(b)));

const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of files) {
  vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), sandbox, { filename: f });
}

const cats = sandbox.window.CATEGORIES;
const qs = sandbox.window.SEED_QUESTIONS;
const errs = [];
const ids = new Set();
const perCat = {};

cats.forEach(c => perCat[c.id] = 0);

qs.forEach((q, i) => {
  const tag = q.id || ("#" + i);
  if (!q.id) errs.push(tag + ": 缺少 id");
  if (ids.has(q.id)) errs.push(tag + ": id 重複");
  ids.add(q.id);
  if (!perCat.hasOwnProperty(q.cat)) errs.push(tag + ": 未知分類 " + q.cat);
  else perCat[q.cat]++;
  if (!q.q || !String(q.q).trim()) errs.push(tag + ": 題目為空");
  if (!Array.isArray(q.options) || q.options.length < 2) errs.push(tag + ": 選項不足");
  else {
    if (q.options.some(o => !String(o).trim())) errs.push(tag + ": 有空選項");
    if (new Set(q.options.map(String)).size !== q.options.length) errs.push(tag + ": 選項重複");
  }
  if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= (q.options || []).length)
    errs.push(tag + ": 答案索引不合法 (" + q.answer + ")");
  if (!q.explain || !String(q.explain).trim()) errs.push(tag + ": 缺解析");
  if (![1, 2, 3].includes(q.difficulty)) errs.push(tag + ": 難度不合法 (" + q.difficulty + ")");
});

console.log("分類題數：");
cats.forEach(c => console.log("  " + c.icon + " " + c.name.padEnd(22) + perCat[c.id]));
console.log("\n總題數：" + qs.length);
console.log("id 唯一：" + (ids.size === qs.length ? "是" : "否"));

// 答案分佈
const dist = [0, 0, 0, 0];
qs.forEach(q => { if (q.answer >= 0 && q.answer < 4) dist[q.answer]++; });
console.log("答案分佈 A/B/C/D：" + dist.join(" / "));

// 答案位置均衡度：任一位置佔比不得超過 35%
const maxShare = Math.max.apply(null, dist) / qs.length;
if (maxShare > 0.35) {
  errs.push("答案位置過度集中（最高佔 " + Math.round(maxShare * 100) + "%），請執行 tools/rebalance.js 重新平衡");
}

if (errs.length) {
  console.log("\n發現 " + errs.length + " 個問題：");
  errs.slice(0, 60).forEach(e => console.log("  - " + e));
  process.exitCode = 1;
} else {
  console.log("\n✓ 全部檢查通過");
}
