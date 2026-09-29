/* 分類：網站相關知識 (web) — 90 題
   本檔由 tools/rebalance.js 產生，可安全地用管理員介面或批次新增維護。 */
window.SEED_QUESTIONS.push(
{ id:"web-101", cat:"web", difficulty:2,
  q:"HTML 中 <title> 標籤的內容會顯示在哪裡？",
  options:["瀏覽器分頁標籤上", "圖片上", "網址列", "頁面正文中"], answer:0,
  explain:"<title> 定義文件標題，顯示在瀏覽器分頁或視窗標題列，也影響搜尋結果。" },

{ id:"web-102", cat:"web", difficulty:2,
  q:"HTML 中 <meta charset=\"UTF-8\"> 的作用是？",
  options:["設定頁面顏色", "宣告文件使用 UTF-8 字元編碼，避免中文亂碼", "載入圖片", "定義標題"], answer:1,
  explain:"宣告字元編碼可讓瀏覽器正確解讀中文字元，避免出現亂碼。" },

{ id:"web-103", cat:"web", difficulty:2,
  q:"HTML 中 <img> 標籤的 alt 屬性作用是？",
  options:["設定圖片位置", "設定圖片大小", "提供圖片替代文字，圖片無法顯示時顯示，也有助無障礙閱讀", "設定圖片格式"], answer:2,
  explain:"alt 是重要的無障礙屬性，供螢幕閱讀器朗讀，也利於 SEO。" },

{ id:"web-104", cat:"web", difficulty:3,
  q:"HTML 表單中 <input type=\"password\"> 的顯示效果是？",
  options:["自動加密後才顯示", "只能輸入數字", "正常顯示文字", "輸入內容以圓點或星號遮蔽"], answer:3,
  explain:"password 類型會遮蔽輸入內容；注意它只遮蔽顯示，仍需 HTTPS 才能確保傳輸安全。" },

{ id:"web-105", cat:"web", difficulty:3,
  q:"下列哪一個 HTML 標籤用於定義「定義清單中的術語」？",
  options:["<dt>", "<li>", "<dd>", "<dl>"], answer:0,
  explain:"<dl> 為定義清單、<dt> 為術語、<dd> 為該術語的描述。" },

{ id:"web-106", cat:"web", difficulty:2,
  q:"在 CSS 選擇器優先級中，由高至低的正確排序是？",
  options:["全部相同", "行內樣式 > ID > class > 元素", "class > ID > 元素 > 行內樣式", "元素 > class > ID > 行內樣式"], answer:1,
  explain:"行內樣式優先級最高，其次為 ID、類別，最後是元素選擇器。" },

{ id:"web-107", cat:"web", difficulty:3,
  q:"CSS 中 !important 的作用是？",
  options:["設定錯誤提示", "標記重要文字", "強制提升該宣告的優先級，覆蓋其他規則", "加快渲染速度"], answer:2,
  explain:"!important 會凌駕一般優先級規則，但過度使用會讓樣式難以維護。" },

{ id:"web-108", cat:"web", difficulty:3,
  q:"CSS 盒模型中，由內而外的正確順序是？",
  options:["content → margin → border → padding", "margin → border → padding → content", "border → padding → content → margin", "content → padding → border → margin"], answer:3,
  explain:"內容外部依序是內邊距、邊框、外邊距。" },

{ id:"web-109", cat:"web", difficulty:3,
  q:"CSS 單位 rem 與 em 的差別是？",
  options:["rem 相對根元素字型大小，em 相對父元素字型大小", "em 是百分比單位", "兩者完全相同", "rem 是像素單位"], answer:0,
  explain:"rem 以 <html> 的字型大小為基準，較易維持整體比例一致。" },

{ id:"web-110", cat:"web", difficulty:2,
  q:"CSS 中 vw 與 vh 單位分別代表？",
  options:["百分比", "視窗寬度的 1% 與視窗高度的 1%", "倍數", "像素"], answer:1,
  explain:"vw/vh 是相對視窗尺寸的單位，常用於滿版版面設計。" },

{ id:"web-111", cat:"web", difficulty:3,
  q:"CSS 中 justify-content 與 align-items 在 Flexbox 中分別控制？",
  options:["兩者都控制交叉軸", "兩者都控制主軸", "主軸對齊與交叉軸對齊", "交叉軸與主軸"], answer:2,
  explain:"justify-content 控制主軸方向排列，align-items 控制交叉軸方向對齊。" },

{ id:"web-112", cat:"web", difficulty:3,
  q:"要讓 Flexbox 的子項目在空間不足時自動換行，應設定？",
  options:["overflow: hidden", "position: fixed", "display: block", "flex-wrap: wrap"], answer:3,
  explain:"flex-wrap: wrap 允許子項目換行；nowrap（預設）則會擠壓或溢出。" },

{ id:"web-113", cat:"web", difficulty:3,
  q:"CSS Grid 中 grid-gap（或 gap）屬性的作用是？",
  options:["設定網格行列之間的間隙", "設定網格顏色", "設定網格行數", "設定網格列數"], answer:0,
  explain:"gap 設定網格項目之間的間距，取代傳統以 margin 撐開的做法。" },

{ id:"web-114", cat:"web", difficulty:3,
  q:"響應式設計（Responsive Web Design）主要依靠哪一項技術？",
  options:["使用 Flash", "媒體查詢（Media Queries）依螢幕寬度套用不同樣式", "增加圖片數量", "加大字型"], answer:1,
  explain:"@media 可依裝置寬度切換版面，讓同一份網頁適配手機、平板與電腦。" },

{ id:"web-115", cat:"web", difficulty:3,
  q:"HTML 中的 <meta name=\"viewport\" content=\"width=device-width\"> 作用是？",
  options:["設定頁面語言", "設定背景色", "讓行動裝置以裝置實際寬度渲染頁面，避免縮小顯示", "載入字型"], answer:2,
  explain:"沒有這行設定時，手機瀏覽器會以桌面寬度縮放頁面，導致文字極小。" },

{ id:"web-116", cat:"web", difficulty:2,
  q:"JavaScript 中 document.querySelector('.box') 會選取什麼？",
  options:["id 為 box 的元素", "所有 class 為 box 的元素", "標籤名為 box 的元素", "第一個 class 為 box 的元素"], answer:3,
  explain:"querySelector 只回傳第一個符合的元素；要選全部需用 querySelectorAll。" },

{ id:"web-117", cat:"web", difficulty:3,
  q:"JavaScript 中 addEventListener('click', fn) 的作用是？",
  options:["為元素註冊點擊事件的處理函式", "直接執行 fn 一次", "刪除元素", "建立新元素"], answer:0,
  explain:"事件監聽讓元素在事件發生時呼叫指定的處理函式。" },

{ id:"web-118", cat:"web", difficulty:3,
  q:"JavaScript 中 filter() 方法的作用是？",
  options:["計算總和", "建立新陣列，包含通過回呼函式測試的元素", "修改原陣列每個元素", "排序陣列"], answer:1,
  explain:"filter 依條件篩選並回傳新陣列，不改變原陣列。" },

{ id:"web-119", cat:"web", difficulty:3,
  q:"JavaScript 中 reduce() 方法常被用來？",
  options:["篩選元素", "刪除元素", "把陣列元素累加或累積成單一結果", "排序元素"], answer:2,
  explain:"reduce 透過累加器把陣列歸納為一個值，例如求總和或最大值。" },

{ id:"web-120", cat:"web", difficulty:3,
  q:"JavaScript 箭頭函式 (a, b) => a + b 等同於？",
  options:["無法等同", "function(a + b) {}", "function(a, b) { a + b; }", "function(a, b) { return a + b; }"], answer:3,
  explain:"箭頭函式是簡寫語法，單一運算式會自動成為回傳值。" },

{ id:"web-121", cat:"web", difficulty:3,
  q:"JavaScript 中 JSON.parse() 的作用是？",
  options:["把 JSON 字串轉為 JavaScript 物件", "傳送網路請求", "驗證密碼", "把物件轉為字串"], answer:0,
  explain:"JSON.parse 解析字串成物件；JSON.stringify 則把物件序列化為字串。" },

{ id:"web-122", cat:"web", difficulty:3,
  q:"JavaScript 中 fetch() 的用途是？",
  options:["操作 DOM", "發送 HTTP 請求取得資料，回傳 Promise", "儲存檔案到本機", "設定樣式"], answer:1,
  explain:"fetch 是現代瀏覽器提供的網路請求 API，常搭配 async/await 使用。" },

{ id:"web-123", cat:"web", difficulty:3,
  q:"JavaScript 中 async/await 的主要用途是？",
  options:["建立資料庫", "加快程式執行速度", "以同步寫法處理非同步操作，讓程式碼更易讀", "取代所有函式"], answer:2,
  explain:"await 會等待 Promise 完成，讓非同步流程寫起來像同步程式碼。" },

{ id:"web-124", cat:"web", difficulty:2,
  q:"HTTP 請求方法中，GET 與 POST 的主要差別是？",
  options:["兩者完全相同", "GET 不能使用", "POST 只能取得資料", "GET 用於取得資料且參數在網址，POST 用於提交資料且放在請求主體"], answer:3,
  explain:"GET 參數暴露於 URL，適合查詢；POST 資料放在 body，適合提交與上傳。" },

{ id:"web-125", cat:"web", difficulty:3,
  q:"HTTP 狀態碼 404 代表？",
  options:["找不到請求的資源", "權限不足", "伺服器內部錯誤", "請求成功"], answer:0,
  explain:"4xx 為用戶端錯誤（404 找不到、403 禁止、401 未授權），5xx 為伺服器錯誤。" },

{ id:"web-126", cat:"web", difficulty:3,
  q:"HTTP 狀態碼 500 代表？",
  options:["找不到資源", "伺服器內部錯誤", "重新導向", "請求成功"], answer:1,
  explain:"5xx 表示伺服器端處理請求時發生錯誤。" },

{ id:"web-127", cat:"web", difficulty:3,
  q:"HTTP 狀態碼 200 代表？",
  options:["找不到資源", "永久重新導向", "請求成功", "禁止存取"], answer:2,
  explain:"200 OK 表示請求已成功處理並回傳內容；3xx 為重新導向。" },

{ id:"web-128", cat:"web", difficulty:3,
  q:"HTTP 狀態碼 301 代表？",
  options:["請求成功", "需要登入", "伺服器錯誤", "資源已永久移至新網址"], answer:3,
  explain:"301 為永久重新導向，302 為暫時重新導向。" },

{ id:"web-129", cat:"web", difficulty:3,
  q:"URL（統一資源定位器）通常包含哪些部分？",
  options:["協定、網域名稱、路徑，可選埠號與查詢字串", "只有 IP 位址", "只有網域名稱", "只有檔名"], answer:0,
  explain:"例如 https://example.com:443/path?q=1#top，包含協定、主機、埠、路徑、查詢與片段。" },

{ id:"web-130", cat:"web", difficulty:3,
  q:"Cookie 與 localStorage 的主要差別是？",
  options:["localStorage 會隨請求傳送", "Cookie 會隨每次 HTTP 請求自動傳送，localStorage 僅存於瀏覽器本地", "Cookie 容量較大", "兩者完全相同"], answer:1,
  explain:"Cookie 容量小且會自動附帶於請求（常用於會話），localStorage 容量較大但不參與請求。" },

{ id:"web-131", cat:"web", difficulty:3,
  q:"localStorage 與 sessionStorage 的差別是？",
  options:["localStorage 只在分頁有效", "sessionStorage 永久保存", "localStorage 關閉瀏覽器後仍保留，sessionStorage 僅在本次分頁有效", "兩者相同"], answer:2,
  explain:"sessionStorage 的生命週期限於當前分頁工作階段，關閉即清除。" },

{ id:"web-132", cat:"web", difficulty:2,
  q:"HTTPS 相比 HTTP 的主要差異是？",
  options:["不需要網域名稱", "不使用 TCP", "速度一定更快", "以 TLS/SSL 加密傳輸內容，防止竊聽與竄改"], answer:3,
  explain:"HTTPS 在 HTTP 之下加入加密層，保護帳密與資料傳輸安全，已是現代網站標準。" },

{ id:"web-133", cat:"web", difficulty:3,
  q:"網站的「無障礙設計（Accessibility）」主要目的是？",
  options:["讓所有人包括身心障礙者都能順利使用網站", "加快載入速度", "降低伺服器成本", "提高網站排名"], answer:0,
  explain:"透過語義化標籤、alt 文字、足夠對比度與鍵盤操作支援，讓更多人能使用網站。" },

{ id:"web-134", cat:"web", difficulty:3,
  q:"ARIA 屬性（如 aria-label）在網頁中的作用是？",
  options:["加快渲染", "補充語意資訊，協助輔助技術理解介面", "設定動畫", "設定顏色"], answer:1,
  explain:"ARIA 為無障礙豐富網際網路應用規範，用於補充原生語意的不足。" },

{ id:"web-135", cat:"web", difficulty:3,
  q:"SEO（搜尋引擎優化）中最基礎的做法不包括？",
  options:["使用語義化標籤與合適的標題階層", "提供行動裝置友善的版面", "大量隱藏關鍵字欺騙搜尋引擎", "撰寫具描述性的 title 與 meta description"], answer:2,
  explain:"隱藏關鍵字屬作弊手法，可能導致網站被降權或移除索引。" },

{ id:"web-136", cat:"web", difficulty:3,
  q:"Git 這類版本控制系統的主要價值是？",
  options:["壓縮圖片", "加快網頁載入", "美化介面", "記錄程式碼變更歷史，方便協作與回溯"], answer:3,
  explain:"版本控制可追蹤每次變更、分支開發並在必要時回復舊版本，是團隊協作基礎。" },

{ id:"web-137", cat:"web", difficulty:3,
  q:"下列哪一組屬於前端框架／函式庫？",
  options:["React、Vue、Angular", "Django、Flask、Laravel", "Nginx、Apache、IIS", "MySQL、PostgreSQL、MongoDB"], answer:0,
  explain:"React、Vue、Angular 為主流前端框架；Django/Flask 為後端、MySQL 等為資料庫。" },

{ id:"web-138", cat:"web", difficulty:3,
  q:"下列哪一組屬於後端開發技術？",
  options:["Figma、Photoshop", "Node.js、Django、PHP", "HTML、CSS、Sass", "Chrome、Firefox"], answer:1,
  explain:"Node.js、Django（Python）、PHP、Laravel 等負責伺服器端邏輯與資料處理。" },

{ id:"web-139", cat:"web", difficulty:3,
  q:"單頁應用（SPA）的特點是？",
  options:["每個頁面都要重新載入整個網頁", "只能在手機上運行", "整個網站只有一個 HTML 頁面，透過 JavaScript 動態切換內容", "不使用 JavaScript"], answer:2,
  explain:"SPA 以 AJAX／fetch 動態更新畫面，切換頁面時不需整頁重新載入，體驗較流暢。" },

{ id:"web-140", cat:"web", difficulty:2,
  q:"瀏覽器開發者工具（F12）最常用來做什麼？",
  options:["掃描病毒", "製作簡報", "編輯圖片", "檢視 HTML/CSS、除錯 JavaScript 與查看網路請求"], answer:3,
  explain:"開發者工具提供元素檢視、主控台、網路與效能分析等功能，是網頁除錯必備。" },

{ id:"web-141", cat:"web", difficulty:3,
  q:"瀏覽器中的「同源政策（Same-Origin Policy）」是為了？",
  options:["限制不同來源的網頁互相存取資源，防範惡意腳本", "加快圖片載入", "限制使用者數量", "提高網頁速度"], answer:0,
  explain:"同源政策是重要的瀏覽器安全機制，跨來源存取需透過 CORS 授權。" },

{ id:"web-142", cat:"web", difficulty:3,
  q:"CSS 的 transition 屬性作用是？",
  options:["設定字型", "讓屬性變化產生平滑的過渡動畫", "設定元素位置", "定義動畫關鍵影格"], answer:1,
  explain:"transition 用於狀態切換時的平滑過渡；複雜多段動畫則用 animation 與 @keyframes。" },

{ id:"web-143", cat:"web", difficulty:3,
  q:"CSS 中 overflow: hidden 的作用是？",
  options:["隱藏整個元素", "顯示滾動條", "裁切超出元素範圍的內容並隱藏", "自動換行"], answer:2,
  explain:"overflow 控制內容溢出時的處理方式：hidden 裁切、scroll 顯示滾動條、auto 自動判斷。" },

{ id:"web-144", cat:"web", difficulty:3,
  q:"下列哪一種做法最能提升網頁載入效能？",
  options:["增加更多動畫", "使用更大的圖片", "在同一頁載入所有資源", "壓縮並延遲載入圖片與程式資源"], answer:3,
  explain:"圖片壓縮、資源延遲載入（lazy load）與快取可顯著縮短載入時間。" },

{ id:"web-001", cat:"web", difficulty:2,
  q:"世界上第一個萬維網（World Wide Web）由誰開發？",
  options:["Tim Berners-Lee", "Bill Gates", "Linus Torvalds", "Steve Jobs"], answer:0,
  explain:"Tim Berners-Lee 於 1989 年在歐洲核子研究組織（CERN）開發了世界上第一個萬維網。" },

{ id:"web-002", cat:"web", difficulty:2,
  q:"1990 年，Tim Berners-Lee 發明了哪三項構成現代網頁基礎的技術？",
  options:["XML、JSON、AJAX", "HTML、HTTP、URL", "CSS、JavaScript、SQL", "TCP、IP、FTP"], answer:1,
  explain:"HTML（超文本標記語言）、HTTP（超文本傳輸協議）與 URL（統一資源定位器）。" },

{ id:"web-003", cat:"web", difficulty:3,
  q:"世界上第一個網站於哪一年上線？",
  options:["1989 年", "1995 年", "1991 年", "1990 年"], answer:2,
  explain:"世界上第一個網站於 1991 年 8 月 6 日上線，內容是介紹萬維網的使用方法。" },

{ id:"web-004", cat:"web", difficulty:2,
  q:"Web 1.0 時代的主要特徵是？",
  options:["語義網與人工智慧", "強調用戶生成內容", "區塊鏈與去信任機制", "靜態網頁、只讀內容、缺乏互動性"], answer:3,
  explain:"Web 1.0 以靜態網頁為主，主要展示文本和圖片，多為只讀且缺乏動態處理。" },

{ id:"web-005", cat:"web", difficulty:2,
  q:"Web 2.0 時代強調的是？",
  options:["互動性、社交性及用戶生成內容", "只讀靜態內容", "語義網", "去中心化信任"], answer:0,
  explain:"Web 2.0 引入 CSS、JavaScript、AJAX 等技術，出現博客、維基、社交媒體等應用。" },

{ id:"web-006", cat:"web", difficulty:3,
  q:"Web 3.0 主要依靠哪些技術使網頁內容更智能化、更個性化？",
  options:["單一伺服器", "人工智能、機器學習和大數據", "表格與框架", "Flash 動畫"], answer:1,
  explain:"Web 3.0 為語義網時代，依靠 AI、機器學習與大數據，並以 RDF、SPARQL 連接數據。" },

{ id:"web-007", cat:"web", difficulty:2,
  q:"制定網頁標準（HTML、CSS、XML 等）的主要機構是？",
  options:["ISO", "IEEE", "W3C（World Wide Web Consortium）", "DARPA"], answer:2,
  explain:"W3C 制定多種網頁標準，確保不同瀏覽器之間的兼容性，提升網頁可讀性與可維護性。" },

{ id:"web-008", cat:"web", difficulty:2,
  q:"關於 HTML，下列敘述何者正確？",
  options:["HTML 用於定義資料庫", "HTML 是作業系統", "HTML 是一種編程語言", "HTML 是一種標記語言，不是編程語言"], answer:3,
  explain:"HTML（Hyper Text Markup Language）是標記語言，用標記標籤來描述網頁。" },

{ id:"web-009", cat:"web", difficulty:1,
  q:"HTML 標籤通常以什麼符號包圍關鍵詞？",
  options:["尖括號 < >", "大括號 { }", "方括號 [ ]", "小括號 ( )"], answer:0,
  explain:"HTML 標籤由尖括號包圍的關鍵詞組成，例如 <html>，且通常成對出現。" },

{ id:"web-010", cat:"web", difficulty:2,
  q:"HTML 文檔的第一行、位於 <html> 標籤之前的聲明是？",
  options:["<head>", "<!DOCTYPE html>", "<meta>", "<title>"], answer:1,
  explain:"<!DOCTYPE> 聲明必須是 HTML 文檔的第一行，用來指示瀏覽器使用哪個 HTML 版本。" },

{ id:"web-011", cat:"web", difficulty:2,
  q:"下列哪一個 HTML 標籤用來定義段落？",
  options:["<div>", "<br>", "<p>", "<span>"], answer:2,
  explain:"<p> 定義段落；<br> 插入換行；<div> 為通用容器；<span> 為行內容器。" },

{ id:"web-012", cat:"web", difficulty:2,
  q:"在 HTML 中，用來定義超連結的標籤是？",
  options:["<link>", "<href>", "<url>", "<a>"], answer:3,
  explain:"<a> 定義超連結；<link> 則用於定義文檔與外部資源（如樣式表）的關係。" },

{ id:"web-013", cat:"web", difficulty:2,
  q:"下列哪一個標籤用來插入圖像？",
  options:["<img>", "<pic>", "<image>", "<figure>"], answer:0,
  explain:"<img> 用於插入圖像；<figure> 則是定義圖像、圖表等內容的獨立單元。" },

{ id:"web-014", cat:"web", difficulty:2,
  q:"用來定義「無序列表」的 HTML 標籤是？",
  options:["<ol>", "<ul>", "<li>", "<dl>"], answer:1,
  explain:"<ul> 為無序列表、<ol> 為有序清單、<li> 為清單項、<dl> 為定義清單。" },

{ id:"web-015", cat:"web", difficulty:2,
  q:"在表格中，用來定義「表頭儲存格」的標籤是？",
  options:["<tr>", "<thead>", "<th>", "<td>"], answer:2,
  explain:"<tr> 定義表格行、<th> 定義表頭儲存格、<td> 定義數據儲存格。" },

{ id:"web-016", cat:"web", difficulty:2,
  q:"下列哪一組標籤屬於「語義化標籤」？",
  options:["<table>、<tr>、<td>", "<font>、<center>、<big>", "<div>、<span>、<b>", "<main>、<figure>、<mark>"], answer:3,
  explain:"HTML5 語義化標籤如 <main>、<figure>、<figcaption>、<time>、<mark>、<details>、<summary>。" },

{ id:"web-017", cat:"web", difficulty:2,
  q:"在 HTML 中，CSS 樣式可以透過哪三種方式加入？",
  options:["外部樣式表、內部樣式表、內聯樣式", "僅內聯樣式", "僅內部樣式表", "僅外部樣式表"], answer:0,
  explain:"外部樣式表以 <link> 連結 CSS 檔；內部樣式表置於 <style>；內聯樣式寫在 style 屬性。" },

{ id:"web-018", cat:"web", difficulty:2,
  q:"CSS 的完整名稱是？",
  options:["Coded Style Syntax", "Cascading Style Sheets（層疊樣式表）", "Creative Style Sheet", "Computer Style System"], answer:1,
  explain:"CSS 為 Cascading Style Sheets，用於定義 HTML 元素的顯示方式，實現內容與表現分離。" },

{ id:"web-019", cat:"web", difficulty:2,
  q:"在 CSS 中，要選擇「具有指定 ID 的元素」，應使用什麼符號？",
  options:["*", "@", "#", "."], answer:2,
  explain:"#id 選擇具有指定 ID 的元素；.class 選擇指定類名的元素。" },

{ id:"web-020", cat:"web", difficulty:2,
  q:"在 CSS 中，「.container」這種選擇器的作用是？",
  options:["選擇第一個子元素", "選擇所有元素", "選擇指定 ID 的元素", "選擇所有具有指定類名（class）的元素"], answer:3,
  explain:"以點開頭的選擇器為類別選擇器，會選取所有具有該類名的元素。" },

{ id:"web-021", cat:"web", difficulty:3,
  q:"CSS 選擇器「ul > li」代表什麼？",
  options:["選擇所有 ul 的直接子元素 li", "選擇 ul 內所有後代的 li", "選擇同級中所有 li", "選擇緊接在 ul 後的 li"], answer:0,
  explain:"> 為子選擇器，只選直接子元素；空格為後代選擇器，會選所有後代。" },

{ id:"web-022", cat:"web", difficulty:2,
  q:"CSS 偽類「:hover」的作用是？",
  options:["選擇第 n 個子元素", "當滑鼠懸停在元素上時應用樣式", "選擇第一個子元素", "在元素內容前插入內容"], answer:1,
  explain:":hover 為偽類選擇器；::before、::after 則為偽元素選擇器。" },

{ id:"web-023", cat:"web", difficulty:2,
  q:"CSS 中設定「元素內邊距」的屬性是？",
  options:["margin", "border", "padding", "spacing"], answer:2,
  explain:"padding 為內邊距、margin 為外邊距、border 為邊框。" },

{ id:"web-024", cat:"web", difficulty:2,
  q:"CSS 中設定「元素外邊距」的屬性是？",
  options:["gap", "padding", "border", "margin"], answer:3,
  explain:"margin 設定元素外邊距；padding 設定內邊距。" },

{ id:"web-025", cat:"web", difficulty:3,
  q:"CSS 屬性 box-sizing 設為 border-box 的意義是？",
  options:["寬高包含內邊距與邊框，盒模型計算方式改變", "自動設定為 flex", "移除所有邊框", "只計算內容寬高"], answer:0,
  explain:"box-sizing: border-box 讓元素的寬高包含 padding 與 border，便於版面計算。" },

{ id:"web-026", cat:"web", difficulty:3,
  q:"要啟用 Flexbox 佈局，應設定哪一個 CSS 屬性？",
  options:["flex: block", "display: flex", "position: flex", "float: flex"], answer:1,
  explain:"display: flex 啟用 Flexbox；justify-content 控制主軸對齊、align-items 控制交叉軸對齊。" },

{ id:"web-027", cat:"web", difficulty:3,
  q:"CSS 中 grid-template-columns 屬性用於？",
  options:["定義網格的行", "設定網格顏色", "定義網格的列", "設定網格間隙"], answer:2,
  explain:"grid-template-columns 定義列、grid-template-rows 定義行、grid-gap 設定間隙。" },

{ id:"web-028", cat:"web", difficulty:2,
  q:"CSS 中設定「元素堆疊順序」的屬性是？",
  options:["stack", "layer", "order", "z-index"], answer:3,
  explain:"z-index 設定元素的堆疊順序，數值越大越上層。" },

{ id:"web-029", cat:"web", difficulty:3,
  q:"CSS 的 position 屬性中，哪一個值是相對於「瀏覽器視窗」固定定位、捲動時不會移動？",
  options:["fixed", "static", "absolute", "relative"], answer:0,
  explain:"fixed 相對於視窗固定定位；relative 相對於自身原位置、absolute 相對於最近的定位祖先。" },

{ id:"web-030", cat:"web", difficulty:2,
  q:"在 JavaScript 中，ES6 引入、具有塊級作用域且可重新賦值的變數宣告關鍵字是？",
  options:["var", "let", "define", "const"], answer:1,
  explain:"let 具塊級作用域且可重新賦值；const 不可重新賦值；var 具函數作用域。" },

{ id:"web-031", cat:"web", difficulty:3,
  q:"在 JavaScript 中，關於 const 的敘述何者正確？",
  options:["可以重新賦值", "完全不可修改任何內容", "宣告的變數不可重新賦值，但物件屬性可變", "具有函數作用域"], answer:2,
  explain:"const 為塊級作用域，不可重新賦值，但若為物件，其屬性內容仍可修改。" },

{ id:"web-032", cat:"web", difficulty:3,
  q:"JavaScript 中運算符「===」與「==」的差別是？",
  options:["兩者完全相同", "== 比較更嚴格", "=== 只比較數字", "=== 為嚴格比較（含型別），== 為不嚴格比較"], answer:3,
  explain:"=== 全等於會同時比較值與型別；== 會進行型別轉換後再比較。" },

{ id:"web-033", cat:"web", difficulty:2,
  q:"在 JavaScript 中，「10」+ 20 的結果是？",
  options:["「1020」（字串）", "1020（數字）", "30", "錯誤"], answer:0,
  explain:"數字與字串相加會進行字串串接，結果為字串 1020。" },

{ id:"web-034", cat:"web", difficulty:2,
  q:"JavaScript 中，哪一種資料類型表示「真或假」？",
  options:["String", "Boolean", "Number", "Object"], answer:1,
  explain:"Boolean 布林值表示 true 或 false；String 為字串、Number 為數字、Object 為物件。" },

{ id:"web-035", cat:"web", difficulty:2,
  q:"JavaScript 中用來建立「新陣列，元素為回呼函數返回值」的陣列方法是？",
  options:["filter", "forEach", "map", "push"], answer:2,
  explain:"map 建立新陣列；filter 篩選符合條件的元素；forEach 只遍歷不返回新陣列。" },

{ id:"web-036", cat:"web", difficulty:2,
  q:"JavaScript 中，push 方法的作用是？",
  options:["移除最後一個元素", "移除第一個元素", "反轉陣列", "在陣列末尾添加一個或多個元素"], answer:3,
  explain:"push 在陣列末尾添加元素；pop 則移除並返回最後一個元素。" },

{ id:"web-037", cat:"web", difficulty:2,
  q:"下列哪一個是 JavaScript 的單行註釋寫法？",
  options:["// 註釋內容", "<!-- 註釋 -->", "# 註釋內容", "-- 註釋"], answer:0,
  explain:"JavaScript 單行註釋以 // 開頭，多行註釋以 /* 開頭、*/ 結尾。" },

{ id:"web-038", cat:"web", difficulty:2,
  q:"在 HTML 中，JavaScript 代碼必須位於哪一組標籤之間？",
  options:["<style> 與 </style>", "<script> 與 </script>", "<code> 與 </code>", "<js> 與 </js>"], answer:1,
  explain:"JavaScript 代碼須放在 <script> 標籤之間，也可用 src 屬性引用外部檔案。" },

{ id:"web-039", cat:"web", difficulty:3,
  q:"在外部文件中放置 JavaScript 的優點不包括？",
  options:["易於閱讀和維護", "已快取的檔案可加速頁面載入", "可自動加密程式碼", "分離 HTML 和代碼"], answer:2,
  explain:"外部腳本優點為分離內容與代碼、便於維護、可被瀏覽器快取加速載入。" },

{ id:"web-040", cat:"web", difficulty:2,
  q:"JavaScript 中，根據 ID 選取元素的方法是？",
  options:["document.findById()", "document.querySelectorAll()", "document.getElement()", "document.getElementById()"], answer:3,
  explain:"getElementById() 依 ID 選取元素；querySelectorAll() 則以 CSS 選擇器選取所有匹配元素。" },

{ id:"web-041", cat:"web", difficulty:3,
  q:"若要使用 CSS 選擇器選取「所有匹配的元素」，應使用哪一個方法？",
  options:["querySelectorAll()", "getElementById()", "getElementsByTag()", "querySelector()"], answer:0,
  explain:"querySelectorAll() 返回所有匹配的元素列表；querySelector() 只返回第一個匹配元素。" },

{ id:"web-042", cat:"web", difficulty:2,
  q:"在 JavaScript 中，要更改 id 為 demo 的元素內容，正確寫法是？",
  options:["document.getElementById.innerHTML = 'Hello'", "document.getElementById('demo').innerHTML = 'Hello'", "document.demo.innerHTML = 'Hello'", "demo.innerHTML('Hello')"], answer:1,
  explain:"以 getElementById() 查找元素後，透過 innerHTML 屬性更改內容。" },

{ id:"web-043", cat:"web", difficulty:2,
  q:"JavaScript 中，「使用者點擊元素時觸發」的事件是？",
  options:["mouseover", "submit", "click", "keydown"], answer:2,
  explain:"click 為點擊事件、mouseover 為滑鼠移入、keydown 為按下鍵盤、submit 為表單提交。" },

{ id:"web-044", cat:"web", difficulty:2,
  q:"現代網頁前端開發中，下列哪一組是常見的框架／函式庫？",
  options:["NumPy、Pandas、Matplotlib", "MySQL、MongoDB、Redis", "Django、Flask、FastAPI", "React、Vue.js、Angular"], answer:3,
  explain:"React、Vue.js 與 Angular 讓網頁開發更模塊化與高效，是主流前端框架。" },

{ id:"web-045", cat:"web", difficulty:3,
  q:"PWA 與 SPA 分別指什麼？",
  options:["進階網絡應用程序與單頁應用", "程式化網頁應用與序列化協議", "私有廣域網路與服務提供者", "個人無線助理與統計分析"], answer:0,
  explain:"PWA（Progressive Web App）與 SPA（Single Page Application）是現代網頁的發展趨勢。" },

{ id:"web-046", cat:"web", difficulty:3,
  q:"「網頁可存取性」主要是指？",
  options:["降低伺服器成本", "讓包括殘疾人和老年人在內的所有人都能方便訪問網頁內容", "增加廣告曝光", "提高網頁載入速度"], answer:1,
  explain:"透過語義化標籤、提供文字替代描述等，可提升可存取性，確保所有用戶無障礙獲取資訊。" }
);
