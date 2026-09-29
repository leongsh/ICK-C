/* ============================================================
   使用者帳號產生器
   ------------------------------------------------------------
   用法：
     node tools/gen-accounts.js              產生 10 個帳號（預設）
     node tools/gen-accounts.js 20           產生 20 個帳號
     node tools/gen-accounts.js 10 stu       自訂帳號前綴（stu01…）

   產出：assets/data/accounts.js
   密碼字元排除容易混淆的 i l o 0 1，方便學生抄寫與輸入。
   ============================================================ */
const fs = require("fs");
const path = require("path");

const COUNT = Math.max(1, parseInt(process.argv[2], 10) || 10);
const PREFIX = (process.argv[3] || "stu").replace(/[^a-zA-Z]/g, "") || "stu";

const ALPHABET = "abcdefghjkmnpqrstuvwxyz23456789"; // 無 i l o 0 1
const PWD_LEN = 6;

function randPwd() {
  const buf = new Uint8Array(PWD_LEN);
  // 使用 crypto 取得高品質亂數
  require("crypto").randomFillSync(buf);
  let s = "";
  for (let i = 0; i < PWD_LEN; i++) s += ALPHABET[buf[i] % ALPHABET.length];
  return s;
}

const accounts = [];
const used = new Set();
for (let i = 1; i <= COUNT; i++) {
  const user = PREFIX + String(i).padStart(2, "0");
  let pwd;
  do { pwd = randPwd(); } while (used.has(pwd));
  used.add(pwd);
  accounts.push({
    user: user,
    pwd: pwd,
    name: "學生 " + String(i).padStart(2, "0"),
    active: true
  });
}

const J = v => JSON.stringify(v);
const body = accounts.map(a =>
  "{ user:" + J(a.user) + ", pwd:" + J(a.pwd) +
  ", name:" + J(a.name) + ", active:true }"
).join(",\n  ");

const out =
  "/* ============================================================\n" +
  "   使用者帳號清單（" + accounts.length + " 個）\n" +
  "   由 tools/gen-accounts.js 產生，可在管理員後台「帳號管理」中修改。\n" +
  "   注意：密碼以明文儲存，僅適用於課室自學場景，非正式身分驗證。\n" +
  "   ============================================================ */\n" +
  "window.SEED_ACCOUNTS = [\n  " + body + "\n];\n";

const dest = path.join(__dirname, "..", "assets", "data", "accounts.js");
fs.writeFileSync(dest, out, "utf8");

console.log("已產生 " + accounts.length + " 個帳號 → " + dest + "\n");
console.log("帳號".padEnd(12) + "密碼".padEnd(10) + "名稱");
console.log("-".repeat(34));
accounts.forEach(a => console.log(a.user.padEnd(12) + a.pwd.padEnd(10) + a.name));
console.log("\n請將上表提供給學生。學生登入後可自行修改密碼。");
