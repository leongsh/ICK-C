/* 分類：電腦網絡知識 (net) — 100 題
   本檔由 tools/rebalance.js 產生，可安全地用管理員介面或批次新增維護。 */
window.SEED_QUESTIONS.push(
{ id:"net-101", cat:"net", difficulty:2,
  q:"HTTP 協議默認使用的埠號是？",
  options:["80", "443", "25", "21"], answer:0,
  explain:"HTTP 默認使用 80 埠；HTTPS 默認使用 443 埠。" },

{ id:"net-102", cat:"net", difficulty:2,
  q:"HTTPS 協議默認使用的埠號是？",
  options:["8080", "443", "8443", "80"], answer:1,
  explain:"HTTPS 默認使用 443 埠，在 HTTP 之上加入 TLS/SSL 加密。" },

{ id:"net-103", cat:"net", difficulty:2,
  q:"FTP 協議默認使用的控制埠號是？",
  options:["23", "22", "21", "20"], answer:2,
  explain:"FTP 使用 21 埠作控制連線、20 埠作資料傳輸。" },

{ id:"net-104", cat:"net", difficulty:2,
  q:"SSH（安全外殼）協議默認使用的埠號是？",
  options:["25", "21", "23", "22"], answer:3,
  explain:"SSH 使用 22 埠，可加密遠端登入；不加密的 Telnet 則用 23 埠。" },

{ id:"net-105", cat:"net", difficulty:2,
  q:"DNS 服務默認使用的埠號是？",
  options:["53", "80", "67", "25"], answer:0,
  explain:"DNS 使用 53 埠（UDP 為主，區域傳送時用 TCP）。" },

{ id:"net-106", cat:"net", difficulty:2,
  q:"SMTP（簡單郵件傳輸協議）默認使用的埠號是？",
  options:["143", "25", "80", "110"], answer:1,
  explain:"SMTP 用 25 埠發送郵件；POP3 用 110、IMAP 用 143 收取郵件。" },

{ id:"net-107", cat:"net", difficulty:3,
  q:"DHCP 協議的主要作用是？",
  options:["解析網域名稱", "過濾垃圾郵件", "自動為設備分配 IP 位址等網路參數", "加密網路流量"], answer:2,
  explain:"DHCP 讓設備接入網路時自動取得 IP、子網掩碼、閘道與 DNS 設定，免除手動配置。" },

{ id:"net-108", cat:"net", difficulty:3,
  q:"ARP 協議的功能是？",
  options:["同步網路時間", "把網域名稱解析為 IP", "分配 IP 位址", "把 IP 位址解析為對應的 MAC 位址"], answer:3,
  explain:"ARP（位址解析協議）在區域網路內將 IP 位址對應到 MAC 位址，工作於網絡層。" },

{ id:"net-109", cat:"net", difficulty:2,
  q:"DNS 協議的功能是？",
  options:["把網域名稱解析為 IP 位址", "分配 IP 位址", "壓縮檔案", "加密資料"], answer:0,
  explain:"DNS（網域名稱系統）把人類易記的網域名稱轉換成機器可用的 IP 位址。" },

{ id:"net-110", cat:"net", difficulty:3,
  q:"ICMP 協議最典型的應用是？",
  options:["收發電子郵件", "ping 指令，用於測試網路連通性", "下載檔案", "傳輸網頁"], answer:1,
  explain:"ICMP 用於傳遞網路錯誤與控制訊息，ping 與 traceroute 都依賴它。" },

{ id:"net-111", cat:"net", difficulty:2,
  q:"要測試與某個 IP 位址是否連通，最常用的指令是？",
  options:["format", "dir", "ping", "copy"], answer:2,
  explain:"ping 透過 ICMP 回聲請求測試連通性與往返延遲。" },

{ id:"net-112", cat:"net", difficulty:3,
  q:"要查看數據包從本機到目的地經過了哪些路由器，應使用哪個指令？",
  options:["netstat", "nslookup", "ipconfig", "tracert（Windows）/ traceroute（Linux）"], answer:3,
  explain:"tracert / traceroute 逐跳顯示封包經過的路由節點。" },

{ id:"net-113", cat:"net", difficulty:3,
  q:"在 Windows 中查看本機 IP 位址、子網掩碼與預設閘道，應使用哪個指令？",
  options:["ipconfig", "tracert", "nslookup", "ping"], answer:0,
  explain:"ipconfig 顯示本機網路配置；Linux/macOS 對應指令為 ifconfig 或 ip addr。" },

{ id:"net-114", cat:"net", difficulty:3,
  q:"下列哪一個不是私有 IP 位址範圍？",
  options:["192.168.0.0 ~ 192.168.255.255", "8.8.8.0 ~ 8.8.8.255", "172.16.0.0 ~ 172.31.255.255", "10.0.0.0 ~ 10.255.255.255"], answer:1,
  explain:"私有 IP 範圍為 10.0.0.0/8、172.16.0.0/12、192.168.0.0/16；8.8.8.8 是 Google 的公用 DNS。" },

{ id:"net-115", cat:"net", difficulty:3,
  q:"子網掩碼 255.255.255.192 對應的 CIDR 表示法是？",
  options:["/25", "/27", "/26", "/24"], answer:2,
  explain:"192 = 11000000，加上前三組共 26 個 1，故為 /26，可用主機數量 64。" },

{ id:"net-116", cat:"net", difficulty:3,
  q:"一個 /24 的網段共有多少個可用主機位址？",
  options:["256", "255", "128", "254"], answer:3,
  explain:"/24 共 256 個位址，扣除網路位址（.0）與廣播位址（.255），可用 254 個。" },

{ id:"net-117", cat:"net", difficulty:3,
  q:"192.168.1.0/26 這個子網的廣播位址是？",
  options:["192.168.1.63", "192.168.1.64", "192.168.1.255", "192.168.1.31"], answer:0,
  explain:"/26 每段 64 個位址，第一段為 192.168.1.0~63，其中 .63 為廣播位址。" },

{ id:"net-118", cat:"net", difficulty:2,
  q:"IPv4 位址中，主機位址全為 0（如 203.74.205.0）代表什麼？",
  options:["對整個網路廣播", "該網路本身（網路位址）", "本機迴路", "保留未使用"], answer:1,
  explain:"主機位址為 0 代表網路位址；主機位址為 255 則代表對該網路廣播。" },

{ id:"net-119", cat:"net", difficulty:3,
  q:"Wi-Fi 7 對應的 IEEE 標準是？",
  options:["802.11ax", "802.11ac", "802.11be", "802.11n"], answer:2,
  explain:"Wi-Fi 7 為 IEEE 802.11be，又被稱為極高吞吐量（EHT）標準。" },

{ id:"net-120", cat:"net", difficulty:3,
  q:"Wi-Fi 7 的理論最大傳輸速率約為？",
  options:["24 Gbps", "100 Gbps", "9.6 Gbps", "46 Gbps"], answer:3,
  explain:"Wi-Fi 7 理論峰值約 46 Gbps，約為 Wi-Fi 6E（9.6 Gbps）的 4.8 倍。" },

{ id:"net-121", cat:"net", difficulty:3,
  q:"Wi-Fi 7 相比前代的關鍵技術之一是 MLO，其全稱與作用是？",
  options:["多鏈路操作，可同時使用 2.4/5/6 GHz 多個頻段", "多點廣播，擴大覆蓋", "多重登入，支援多帳號", "多層加密，提升安全性"], answer:0,
  explain:"MLO（Multi-Link Operation）讓設備同時跨多個頻段收發資料，降低延遲與斷流。" },

{ id:"net-122", cat:"net", difficulty:3,
  q:"Wi-Fi 7 支援的最大頻道頻寬是？",
  options:["160 MHz", "320 MHz", "500 MHz", "80 MHz"], answer:1,
  explain:"Wi-Fi 6E 為 160 MHz，Wi-Fi 7 倍增到 320 MHz，可同時承載更多資料。" },

{ id:"net-123", cat:"net", difficulty:3,
  q:"Wi-Fi 7 採用 4096-QAM 調變，相比 Wi-Fi 6 的 1024-QAM 提升了什麼？",
  options:["延長傳輸距離", "增加天線數量", "每個符號可編碼更多位元，提升頻譜效率", "降低發射功率"], answer:2,
  explain:"4096-QAM 每符號可編碼 12 位元，比 1024-QAM 的 10 位元多約 20%。" },

{ id:"net-124", cat:"net", difficulty:3,
  q:"Wi-Fi 7 新增使用的 6 GHz 頻段，其頻率範圍約為？",
  options:["5.150 ~ 5.850 GHz", "2.400 ~ 2.4835 GHz", "8.0 ~ 9.0 GHz", "5.925 ~ 7.125 GHz"], answer:3,
  explain:"6 GHz 頻段約 5.925~7.125 GHz，提供約 1200 MHz 的乾淨頻譜。" },

{ id:"net-125", cat:"net", difficulty:2,
  q:"2.4 GHz 與 5 GHz 頻段相比，2.4 GHz 的特點是？",
  options:["穿牆能力較強但速度較慢、干擾較多", "速度最快且無干擾", "僅支援 Wi-Fi 7", "傳輸距離最短"], answer:0,
  explain:"2.4 GHz 波長長、穿牆力強但速度較慢且易受干擾，適合 IoT 設備。" },

{ id:"net-126", cat:"net", difficulty:3,
  q:"WPA3 採用哪一種握手方式取代 WPA2 的預共享金鑰（PSK）？",
  options:["WEP", "SAE（對等實體同時認證）", "TKIP", "RC4"], answer:1,
  explain:"SAE（Dragonfly 握手）可抵禦離線字典攻擊，是 WPA3 的核心改進。" },

{ id:"net-127", cat:"net", difficulty:3,
  q:"WPA3 的「前向保密（Forward Secrecy）」指的是？",
  options:["密碼永不失效", "自動更換 IP", "即使日後密碼洩露，過去的會話也無法被解密", "自動備份資料"], answer:2,
  explain:"前向保密確保歷史通訊內容不會因金鑰洩露而被回溯解密。" },

{ id:"net-128", cat:"net", difficulty:3,
  q:"OWE（機會性無線加密）在 WPA3 中的作用是？",
  options:["自動連接最強訊號", "提高無線發射功率", "加快漫遊切換", "為無密碼的開放式公共 Wi-Fi 提供個別化的資料加密"], answer:3,
  explain:"OWE 讓機場、咖啡店等開放網路的用戶也能獲得加密保護，防止被竊聽。" },

{ id:"net-129", cat:"net", difficulty:3,
  q:"曾被公開的 WPA3「Dragonblood」漏洞屬於哪一類問題？",
  options:["降級攻擊與側通道攻擊", "硬體過熱", "訊號衰減", "頻寬不足"], answer:0,
  explain:"Dragonblood 包含迫使連線降級回 WPA2 的降級攻擊，廠商已透過軟體更新修補大部分問題。" },

{ id:"net-130", cat:"net", difficulty:2,
  q:"路由器上的 WPS 功能為何建議關閉？",
  options:["會自動重啟", "存在 PIN 碼破解後門，可繞過密碼直接連線", "會增加耗電", "會降低網速"], answer:1,
  explain:"WPS 的 PIN 機制可被暴力破解，等於繞過無線密碼，屬重大安全隱患。" },

{ id:"net-131", cat:"net", difficulty:3,
  q:"路由器工作於 OSI 模型的哪一層，並依據什麼決定轉發路徑？",
  options:["傳輸層，依埠號", "實體層，依電壓", "網絡層，依路由表", "資料連結層，依 MAC 表"], answer:2,
  explain:"路由器工作於第三層，透過路由表決定數據包的最佳傳輸路徑。" },

{ id:"net-132", cat:"net", difficulty:3,
  q:"路由器上的 QoS 功能主要用來？",
  options:["自動更新韌體", "阻擋所有廣告", "加密所有流量", "依應用類型分配頻寬，優先保障低延遲需求"], answer:3,
  explain:"QoS（服務品質）可識別視訊、遊戲、IoT 等流量並優先調度，避免互相搶頻寬。" },

{ id:"net-133", cat:"net", difficulty:2,
  q:"家用路由器提供的 NAT 功能，除了節省公有 IP 外還有什麼附帶好處？",
  options:["對外網隱藏內部私有 IP，形成第一道天然屏障", "自動備份", "自動防毒", "加快下載速度"], answer:0,
  explain:"NAT 使外部無法直接定址內部設備，客觀上起到遮蔽內部網路的作用。" },

{ id:"net-134", cat:"net", difficulty:3,
  q:"在企業無線網路中，「漫遊（Roaming）」指的是？",
  options:["重新開機", "設備在不同無線基地台之間移動時保持連線不中斷", "切換到行動數據", "更換密碼"], answer:1,
  explain:"漫遊讓終端在多個 AP 之間平滑切換，維持會話連續性。" },

{ id:"net-135", cat:"net", difficulty:3,
  q:"Mesh（網狀）無線網路架構的特點是？",
  options:["所有設備直連數據機", "只有一台基地台", "多個節點互相連接並共同分配覆蓋範圍", "不使用無線訊號"], answer:2,
  explain:"Mesh 由多個節點協同覆蓋大範圍，常見於現代家用與校園網路。" },

{ id:"net-136", cat:"net", difficulty:2,
  q:"藍牙（Bluetooth）通常屬於哪一種網路類型？",
  options:["都會核心網", "城域網（MAN）", "廣域網（WAN）", "個人區域網（PAN）"], answer:3,
  explain:"藍牙覆蓋約十公尺，屬個人區域網（PAN）。" },

{ id:"net-137", cat:"net", difficulty:2,
  q:"覆蓋一座城市範圍的網路通常稱為？",
  options:["MAN（城域網）", "LAN", "WAN", "PAN"], answer:0,
  explain:"網路依範圍可分 PAN（個人）、LAN（區域）、MAN（城市）、WAN（廣域）。" },

{ id:"net-138", cat:"net", difficulty:3,
  q:"CDN（內容傳遞網路）的主要作用是？",
  options:["加密用戶密碼", "把內容快取到靠近用戶的節點，降低延遲並分擔源站壓力", "分配 IP 位址", "過濾病毒"], answer:1,
  explain:"CDN 透過地理分散的邊緣節點就近提供內容，提升載入速度與可用性。" },

{ id:"net-139", cat:"net", difficulty:3,
  q:"SDN（軟體定義網路）的核心思想是？",
  options:["只使用無線網路", "取消路由器", "將控制平面與資料平面分離，由軟體集中控制網路", "完全依賴硬體交換"], answer:2,
  explain:"SDN 讓網路控制邏輯集中於軟體控制器，使網路配置更靈活、可程式化。" },

{ id:"net-140", cat:"net", difficulty:3,
  q:"VPN 的主要功能是？",
  options:["免費上網", "增加儲存空間", "提升網路速度", "在公用網路上建立加密通道，保護傳輸內容"], answer:3,
  explain:"VPN 建立加密隧道，常用於公共 Wi-Fi 防竊聽與遠端安全存取企業內網。" },

{ id:"net-141", cat:"net", difficulty:3,
  q:"企業網路中的 DMZ（非軍事區）通常用來放置？",
  options:["對外提供服務的伺服器（如網站、郵件），以隔離內網", "印表機", "備份磁帶", "員工個人電腦"], answer:0,
  explain:"DMZ 是介於外網與內網之間的緩衝區，降低對外服務被攻破後波及內網的風險。" },

{ id:"net-142", cat:"net", difficulty:3,
  q:"IDS 與 IPS 的主要差別是？",
  options:["IPS 只做備份", "IDS 偵測並告警，IPS 還會主動攔截", "兩者完全相同", "IDS 只能防毒"], answer:1,
  explain:"IDS（入侵偵測）側重發現與告警，IPS（入侵防禦）則進一步阻斷可疑流量。" },

{ id:"net-143", cat:"net", difficulty:3,
  q:"TCP 的流量控制（Flow Control）主要透過什麼機制實現？",
  options:["三次握手", "ARP 廣播", "滑動視窗（Sliding Window）", "TTL 遞減"], answer:2,
  explain:"TCP 以滑動視窗動態調整傳送速率，避免接收端緩衝區溢出。" },

{ id:"net-144", cat:"net", difficulty:3,
  q:"UDP 相比 TCP 的主要特點是？",
  options:["一定比 TCP 慢", "必須先三次握手", "可靠傳輸且有重傳機制", "無連接、開銷小、速度快但不保證可靠"], answer:3,
  explain:"UDP 不建立連接也不保證送達，適合即時影音、DNS 等對延遲敏感的場景。" },

{ id:"net-145", cat:"net", difficulty:3,
  q:"下列哪一類應用最適合使用 UDP？",
  options:["即時語音與視訊串流", "線上銀行轉帳", "檔案下載校驗", "電子郵件傳送"], answer:0,
  explain:"即時影音寧可偶爾丟包也不願等待重傳，因此常用 UDP；金融與檔案傳輸則需 TCP。" },

{ id:"net-146", cat:"net", difficulty:2,
  q:"「頻寬」與「延遲」的差別是？",
  options:["頻寬指延遲時間", "頻寬指單位時間可傳資料量，延遲指資料往返所需時間", "延遲指儲存容量", "兩者意思相同"], answer:1,
  explain:"頻寬決定「水管多粗」，延遲決定「水多久到」，兩者共同影響使用體驗。" },

{ id:"net-147", cat:"net", difficulty:3,
  q:"網路中「抖動（Jitter）」指的是？",
  options:["訊號強度", "頻寬上限", "延遲的不穩定程度", "封包遺失率"], answer:2,
  explain:"抖動是延遲的變動量，對語音、視訊與雲遊戲體驗影響很大，MLO 可顯著降低抖動。" },

{ id:"net-148", cat:"net", difficulty:3,
  q:"Preamble Puncturing 是 Wi-Fi 7 的哪一項改進？",
  options:["自動選擇最佳路由", "自動更換密碼", "加密管理幀", "可排除受干擾的頻譜片段而不放棄整個寬頻道"], answer:3,
  explain:"Preamble Puncturing 讓 AP 避開局部干擾的頻段，提升超寬頻道在密集環境的可靠性。" },

{ id:"net-149", cat:"net", difficulty:3,
  q:"PMF（受保護管理幀）主要防禦哪一種攻擊？",
  options:["偽造「解除認證」封包把用戶踢下線的阻斷服務攻擊", "SQL 注入", "釣魚郵件", "密碼暴力破解"], answer:0,
  explain:"PMF 對管理幀進行加密與完整性保護，可抵禦偽造解除認證訊框的 DoS 攻擊。" },

{ id:"net-150", cat:"net", difficulty:3,
  q:"AFC（自動頻率協調）在 6 GHz 頻段的作用是？",
  options:["加密無線訊號", "協調 AP 避免干擾既有微波等授權使用者", "自動更新驅動", "自動分配 IP 位址"], answer:1,
  explain:"標準功率的 6 GHz AP 需透過 AFC 系統查詢可用頻率，避免干擾既有授權業務。" },

{ id:"net-001", cat:"net", difficulty:1,
  q:"下列哪一項不是電腦網絡的主要功能？",
  options:["資源共享", "數據傳輸", "自動編寫程式", "遠程訪問"], answer:2,
  explain:"網絡的主要功能包括數據傳輸、資源共享、遠程訪問和通信協作；網絡不會自動編寫程式。" },

{ id:"net-002", cat:"net", difficulty:1,
  q:"LAN（局域網）通常覆蓋的範圍是？",
  options:["不同城市之間", "不同國家之間", "全球範圍", "一個辦公室、學校或工廠等有限區域"], answer:3,
  explain:"LAN 在有限地理範圍內連接設備，具高速、低延遲、高安全性；跨城市或國家的是 WAN。" },

{ id:"net-003", cat:"net", difficulty:2,
  q:"廣域網（WAN）通常使用下列哪一類設施來實現長距離數據傳輸？",
  options:["電話線、光纖和衛星等公共通信設施", "僅紅外線", "僅藍牙", "僅 USB 線"], answer:0,
  explain:"WAN 跨越較大地理範圍，通常借助電話線、光纖、衛星等公共通信設施。" },

{ id:"net-004", cat:"net", difficulty:1,
  q:"OSI 參考模型一共分為幾層？",
  options:["4 層", "7 層", "5 層", "8 層"], answer:1,
  explain:"OSI 為七層模型：實體層、資料連結層、網絡層、傳輸層、會話層、表達層、應用層。" },

{ id:"net-005", cat:"net", difficulty:1,
  q:"OSI 模型中最底層、負責將資料轉換成電子訊號並傳送出去的是？",
  options:["網絡層", "應用層", "實體層（Physical Layer）", "資料連結層"], answer:2,
  explain:"實體層定義物理設備之間的數據傳輸方式，如電氣信號、光信號與物理連接介質。" },

{ id:"net-006", cat:"net", difficulty:2,
  q:"在 OSI 模型中，負責處理 MAC 位址並產生「訊框（frame）」的是哪一層？",
  options:["傳輸層", "網絡層", "實體層", "資料連結層（Data Link Layer）"], answer:3,
  explain:"資料連結層負責實體定址（加入 MAC 位址產生訊框）及錯誤檢測與校正。" },

{ id:"net-007", cat:"net", difficulty:2,
  q:"負責路由選擇和邏輯尋址、讓數據包能跨越多個網絡的是？",
  options:["網絡層（Network Layer）", "傳輸層", "會話層", "資料連結層"], answer:0,
  explain:"網絡層負責邏輯定址（加入 IP 位址產生 packet）與路徑選擇，協議如 IP、ICMP、ARP。" },

{ id:"net-008", cat:"net", difficulty:2,
  q:"負責端到端連接、流量控制，並將訊息切割成「區段（segment）」的是？",
  options:["表達層", "傳輸層（Transport Layer）", "會話層", "網絡層"], answer:1,
  explain:"傳輸層負責切割重組、流量控制與偵錯處理，主要協議為 TCP 與 UDP。" },

{ id:"net-009", cat:"net", difficulty:2,
  q:"負責數據格式轉換、加密／解密與壓縮／解壓縮的是哪一層？",
  options:["應用層", "傳輸層", "表達層（Presentation Layer）", "會話層"], answer:2,
  explain:"表達層處理格式轉換（如 ASCII 與 EBCDIC）、加解密及壓縮，協議如 SSL、TLS、JPEG。" },

{ id:"net-010", cat:"net", difficulty:2,
  q:"負責建立、維護和終止兩個系統之間對話的是？",
  options:["實體層", "傳輸層", "網絡層", "會話層（Session Layer）"], answer:3,
  explain:"會話層管理對話連線，例如協定雙方使用全雙工或半雙工傳輸，協議如 NetBIOS、RPC。" },

{ id:"net-011", cat:"net", difficulty:1,
  q:"HTTP、FTP、SMTP、DNS 這些協議屬於 OSI 模型的哪一層？",
  options:["應用層", "傳輸層", "資料連結層", "網絡層"], answer:0,
  explain:"應用層為用戶提供電子郵件、文件傳輸、遠端登錄等服務。" },

{ id:"net-012", cat:"net", difficulty:2,
  q:"TCP 與 UDP 兩種協議工作在 OSI 的哪一層？",
  options:["應用層", "傳輸層", "網絡層", "會話層"], answer:1,
  explain:"TCP 提供可靠的位元組流服務，UDP 較快但不保證可靠，兩者都位於傳輸層。" },

{ id:"net-013", cat:"net", difficulty:2,
  q:"IP、ICMP、ARP 屬於 OSI 模型的哪一層？",
  options:["傳輸層", "表達層", "網絡層", "資料連結層"], answer:2,
  explain:"網絡層負責路由與邏輯尋址，代表協議為 IP、ICMP、ARP。" },

{ id:"net-014", cat:"net", difficulty:2,
  q:"TCP 協議採用什麼策略來建立連接？",
  options:["四次揮手", "兩次握手", "一次確認", "三次握手"], answer:3,
  explain:"TCP 透過三次握手建立可靠連接：客戶端送 SYN → 服務端回 SYN/ACK → 客戶端回 ACK。" },

{ id:"net-015", cat:"net", difficulty:3,
  q:"TCP 三次握手中，第二步服務端回傳的封包帶有什麼標誌？",
  options:["SYN/ACK", "僅 SYN", "僅 FIN", "僅 RST"], answer:0,
  explain:"服務端接收成功後回傳帶有 SYN/ACK 的封包，表示已收到並同意建立連接。" },

{ id:"net-016", cat:"net", difficulty:2,
  q:"TCP 關閉連接時需要「四次揮手」，主要原因是？",
  options:["需要重新分配 IP", "TCP 連接是全雙工的，每個方向須單獨關閉", "TCP 比 UDP 慢", "需要重新握手"], answer:1,
  explain:"TCP 全雙工，一方發送 FIN 只表示該方向不再有資料流動，另一方向仍可繼續傳送。" },

{ id:"net-017", cat:"net", difficulty:2,
  q:"TCP/IP 四層模型不包括下列哪一層？",
  options:["應用層", "網際層", "會話層", "傳輸層"], answer:2,
  explain:"TCP/IP 四層為應用層、傳輸層、網際層、網路接口層；會話層是 OSI 模型才有的。" },

{ id:"net-018", cat:"net", difficulty:2,
  q:"TCP/IP 模型的「網際層」大致對應 OSI 模型的哪一層？",
  options:["傳輸層", "表達層", "資料連結層", "網絡層"], answer:3,
  explain:"網際層負責 IP 位址的路由，功能上對應 OSI 的網絡層。" },

{ id:"net-019", cat:"net", difficulty:3,
  q:"TCP/IP 模型由哪個機構制定？",
  options:["DARPA（美國國防高等研究計劃署）", "ISO（國際標準化組織）", "IEEE", "W3C"], answer:0,
  explain:"OSI 由 ISO 制定；TCP/IP 則由 DARPA 制定，並實際應用於全球互聯網。" },

{ id:"net-020", cat:"net", difficulty:2,
  q:"交換機（Switch）與集線器（Hub）相比，交換機根據什麼精確轉發數據？",
  options:["IP 位址", "MAC 位址", "檔名", "端口號"], answer:1,
  explain:"交換機根據 MAC 位址精確轉發，每個端口是單獨的碰撞域；集線器則廣播給所有設備。" },

{ id:"net-021", cat:"net", difficulty:2,
  q:"集線器（Hub）工作在 OSI 模型的哪一層？",
  options:["傳輸層", "資料連結層", "物理層（Layer 1）", "網絡層"], answer:2,
  explain:"集線器工作在物理層，採半雙工、共享同一碰撞域，效率低且已過時。" },

{ id:"net-022", cat:"net", difficulty:2,
  q:"中繼器（Repeater）的主要作用是？",
  options:["轉換數位與類比訊號", "加密網絡流量", "分配 IP 位址", "增強傳輸訊號以延伸訊號傳輸距離"], answer:3,
  explain:"傳輸媒介有最長距離限制，超過會衰減，中繼器用來加強訊號以延伸距離。" },

{ id:"net-023", cat:"net", difficulty:1,
  q:"數據機（Modem）的功能是？",
  options:["轉換數位訊號及類比訊號", "過濾垃圾郵件", "放大無線訊號", "儲存網頁快取"], answer:0,
  explain:"Modem 是家用電腦上網必備的硬體之一，負責數位訊號與類比訊號之間的轉換。" },

{ id:"net-024", cat:"net", difficulty:3,
  q:"單模光纖（SMF）的核心直徑大約是多少？",
  options:["50 μm", "8–10 μm", "62.5 μm", "125 μm"], answer:1,
  explain:"單模光纖核心直徑 8–10 μm，光源為激光器，適合長距離通訊與骨幹網。" },

{ id:"net-025", cat:"net", difficulty:3,
  q:"下列哪一項是「多模光纖」的典型應用場景？",
  options:["衛星通訊", "跨國骨幹網", "局域網、數據中心", "海底電纜"], answer:2,
  explain:"多模光纖傳輸距離較短（數百米至數公里），常用於局域網與數據中心。" },

{ id:"net-026", cat:"net", difficulty:3,
  q:"雙絞線 T568B 的線序，第一條（第 1 腳）是什麼顏色？",
  options:["綠白", "棕白", "藍", "橙白"], answer:3,
  explain:"T568B 線序為：橙白、橙、綠白、藍、藍白、綠、棕白、棕。" },

{ id:"net-027", cat:"net", difficulty:3,
  q:"在 100M 交換機網絡中，雙絞線只需要哪幾條芯線就可以通信？",
  options:["1、2、3、6", "3、4、5、6", "1、2、3、4", "1、3、5、7"], answer:0,
  explain:"100M 網絡中只需 1、2、3、6 四條跳線即可通信。" },

{ id:"net-028", cat:"net", difficulty:2,
  q:"Cat 5e 雙絞線的最大傳輸速率是？",
  options:["25 Gbps", "1 Gbps", "10 Gbps", "100 Mbps"], answer:1,
  explain:"Cat 5e 支援 1 Gbps（1000BASE-T）；Cat 6a、Cat 7 才達 10 Gbps。" },

{ id:"net-029", cat:"net", difficulty:2,
  q:"下列哪一種雙絞線類別可支援 10 Gbps 傳輸速率？",
  options:["Cat 5", "Cat 5e", "Cat 6a", "Cat 3"], answer:2,
  explain:"Cat 6a 支援 10 Gbps、頻寬 500 MHz；Cat 5e 為 1 Gbps。" },

{ id:"net-030", cat:"net", difficulty:2,
  q:"同軸電纜的主要優點是？",
  options:["成本最低", "完全不受電磁干擾", "可彎曲成任意角度", "抗干擾性強、信號衰減小，適合長距離傳輸"], answer:3,
  explain:"同軸電纜以網狀金屬層隔絕雜訊，抗干擾性強、頻寬大，常用於電視與網絡。" },

{ id:"net-031", cat:"net", difficulty:2,
  q:"星狀拓樸（Star Topology）的特點是？",
  options:["所有節點都連接到一個中央設備", "所有節點連成一條主線", "每個節點兩兩互連", "節點首尾相連成環"], answer:0,
  explain:"星狀拓樸以中央設備（交換機／集線器）為核心，便於管理，但中央設備故障影響全網。" },

{ id:"net-032", cat:"net", difficulty:1,
  q:"廣播電台發送節目、聽眾只能收聽，這屬於哪一種通信方式？",
  options:["全雙工通信", "單工通信", "半雙工通信", "隨機雙工"], answer:1,
  explain:"單工通信只能單方向傳輸，發送端與接收端固定，廣播即典型例子。" },

{ id:"net-033", cat:"net", difficulty:1,
  q:"手持對講機雙方可以互相通話，但同一時刻只能一方講話，屬於？",
  options:["單工通信", "廣播通信", "半雙工通信", "全雙工通信"], answer:2,
  explain:"半雙工可雙向通信但不能同時進行，須輪流交替，對講機是典型例子。" },

{ id:"net-034", cat:"net", difficulty:1,
  q:"語音電話通訊、視像電話通訊屬於哪一種通信方式？",
  options:["半雙工通信", "單向廣播", "單工通信", "全雙工通信"], answer:3,
  explain:"全雙工通信在任意時刻線路上都存在雙向信號傳輸，雙方同時可收可發。" },

{ id:"net-035", cat:"net", difficulty:2,
  q:"IPv4 位址由多少位元（bits）組成？",
  options:["32 位元", "128 位元", "64 位元", "16 位元"], answer:0,
  explain:"IPv4 由 32 位二進位組成，通常表示為四組 0–255 的十進位數字，以點分隔。" },

{ id:"net-036", cat:"net", difficulty:2,
  q:"IPv4 位址被劃分為哪幾類？",
  options:["公有、私有兩類", "A、B、C、D、E 五類", "A、B、C 三類", "I、II、III 三類"], answer:1,
  explain:"IPv4 分為 A、B、C、D、E 五類，各有不同用途與規模。" },

{ id:"net-037", cat:"net", difficulty:3,
  q:"Class A 的 IPv4 位址，其第一個數值的範圍是？",
  options:["128 ~ 191", "224 ~ 239", "0 ~ 127", "192 ~ 223"], answer:2,
  explain:"Class A 第一個位元固定為 0，故第一個數值介於 0（00000000）~ 127（01111111）。" },

{ id:"net-038", cat:"net", difficulty:2,
  q:"若某 IP 位址為 210.242.128.129，子網路遮罩為 255.255.255.0，則網路位址是？",
  options:["129", "210.242.128.129", "210.242", "210.242.128"], answer:3,
  explain:"遮罩中 255 代表網路位址、0 代表主機位址，故前三碼 210.242.128 為網路位址。" },

{ id:"net-039", cat:"net", difficulty:2,
  q:"下列哪一個是迴路地址（Loopback Address），代表本機？",
  options:["127.0.0.1", "192.168.1.1", "255.255.255.255", "0.0.0.0"], answer:0,
  explain:"127.0.0.1 是迴路地址，代表本機；主機位址為 255 則代表對整個網路廣播。" },

{ id:"net-040", cat:"net", difficulty:3,
  q:"NAT（網路位址變換）技術的主要作用是？",
  options:["加密網路封包", "把私有 IP 轉換成公有 IP，讓多部電腦共用一個公有 IP 上網", "提高無線訊號強度", "分配網域名稱"], answer:1,
  explain:"NAT 讓區域網路中多部使用私有 IP 的電腦，可共用一個或少數公有 IP 上網。" },

{ id:"net-041", cat:"net", difficulty:2,
  q:"IPv6 位址由多少位元組成？",
  options:["256 位元", "32 位元", "128 位元", "64 位元"], answer:2,
  explain:"IPv6 為 128 位元，以 8 組 4 個 16 進位數字組成，每組以冒號隔開。" },

{ id:"net-042", cat:"net", difficulty:3,
  q:"關於 IPv6 的敘述，下列何者正確？",
  options:["以 4 組十進位數字組成", "不支援手機等設備", "與 IPv4 位址數量相同", "以 8 組 4 個 16 進位數字組成，每組以冒號隔開"], answer:3,
  explain:"IPv6 以冒號分隔 8 組 16 進位數字，可用位址數量遠超 IPv4。" },

{ id:"net-043", cat:"net", difficulty:2,
  q:"IEEE 802.11x 系列無線區域網路通訊協定，一般又被稱為？",
  options:["Wi-Fi（無線相容認證）", "Ethernet", "Bluetooth", "NFC"], answer:0,
  explain:"IEEE 802.11x 由 IEEE 制定，因 Wi-Fi 聯盟推動，常被稱為 Wi-Fi。" },

{ id:"net-044", cat:"net", difficulty:3,
  q:"Wi-Fi 6 對應的 IEEE 標準是？",
  options:["802.11be", "802.11ax", "802.11n", "802.11ac"], answer:1,
  explain:"Wi-Fi 6（含 6E）對應 802.11ax；802.11ac 是 Wi-Fi 5，802.11be 是 Wi-Fi 7。" },

{ id:"net-045", cat:"net", difficulty:3,
  q:"2017 年出現、針對 WPA2 握手協議漏洞的攻擊稱為？",
  options:["SQL 注入", "釣魚攻擊", "KRACK 攻擊", "DDoS 攻擊"], answer:2,
  explain:"KRACK 攻擊針對 WPA2 握手協議漏洞，促使 Wi-Fi 聯盟於 2018 年推出 WPA3。" },

{ id:"net-046", cat:"net", difficulty:2,
  q:"無線連線加密方式由弱至強的正確排序是？",
  options:["WEP → WPA2 → WPA → WPA3", "WPA → WEP → WPA3 → WPA2", "WPA3 → WPA2 → WPA → WEP", "WEP → WPA → WPA2+AES → WPA3"], answer:3,
  explain:"WEP 幾分鐘即可破解已淘汰；WPA3 為最新標準，採用 SAE 握手更安全。" },

{ id:"net-047", cat:"net", difficulty:2,
  q:"路由器（Router）主要工作在 OSI 模型的哪一層？",
  options:["網絡層", "應用層", "物理層", "資料連結層"], answer:0,
  explain:"路由器負責在不同網路之間選擇路徑轉發數據包，工作於網絡層。" },

{ id:"net-048", cat:"net", difficulty:2,
  q:"「網路位址（netID）」與「主機位址（hostID）」的作用分別是？",
  options:["分配頻寬 / 分配記憶體", "識別所屬網路 / 識別該網路上的設備", "加密資料 / 解密資料", "識別設備 / 識別網路"], answer:1,
  explain:"網路位址識別所屬網路，主機位址識別該網路上的電腦設備。" },

{ id:"net-049", cat:"net", difficulty:3,
  q:"CIDR 表示法 /26 對應的子網掩碼是？",
  options:["255.255.255.128", "255.255.255.224", "255.255.255.192", "255.255.255.0"], answer:2,
  explain:"/26 表示前 26 位為 1，即 255.255.255.192，可用主機數量為 64。" },

{ id:"net-050", cat:"net", difficulty:2,
  q:"下列哪一種傳輸媒介使用光訊號傳輸，具備極高頻寬與抗電磁干擾能力？",
  options:["電話線", "雙絞線", "同軸電纜", "光纖"], answer:3,
  explain:"光纖以光訊號傳輸，頻寬高、抗電磁干擾，分為單模與多模兩種。" }
);
