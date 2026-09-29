/* ============================================================
   題庫分類定義與種子題庫容器
   —— 全澳中學生資訊科技知識問答比賽 · 刷題復習系統
   ============================================================ */

window.APP_META = {
  title: "資訊科技知識 刷題復習系統",
  subtitle: "全澳中學生資訊科技知識問答比賽 · 高中組",
  version: "1.0.0",
  // 管理員預設密碼（首次啟動時寫入 localStorage，可在後台修改）
  defaultAdminPassword: "admin123"
};

window.CATEGORIES = [
  { id: "net",    name: "電腦網絡知識",             short: "網絡",   icon: "🌐", color: "#4f9cf9" },
  { id: "hw",     name: "電腦硬件知識",             short: "硬件",   icon: "🖥️", color: "#f2a03d" },
  { id: "office", name: "辦公室軟件知識",           short: "Office", icon: "📊", color: "#2ecc71" },
  { id: "python", name: "基礎 Python 知識",         short: "Python", icon: "🐍", color: "#5aa9e6" },
  { id: "web",    name: "網站相關知識",             short: "網站",   icon: "🧩", color: "#e0655e" },
  { id: "msc",    name: "澳門科學館",               short: "科學館", icon: "🔬", color: "#a86ad4" },
  { id: "daily",  name: "資訊科技在日常生活之應用", short: "生活應用", icon: "📱", color: "#1abc9c" },
  { id: "crime",  name: "網絡犯罪相關知識",         short: "網罪",   icon: "🛡️", color: "#e05c5c" },
  { id: "china",  name: "內地科技普及知識",         short: "內地科技", icon: "🚀", color: "#e8892b" }
];

/* 種子題庫：各分類檔案會 push 進來 */
window.SEED_QUESTIONS = [];

/* 題目結構說明
{
  id:        "net-001",           // 唯一編號
  cat:       "net",               // 分類 id
  q:         "題目文字",
  options:   ["選項A", "選項B", "選項C", "選項D"],
  answer:    0,                   // 正確選項索引（0 起算）
  explain:   "解析文字",
  difficulty: 1                   // 1 易 / 2 中 / 3 難
}
*/
