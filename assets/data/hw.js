/* 分類：電腦硬件知識 (hw) — 90 題
   本檔由 tools/rebalance.js 產生，可安全地用管理員介面或批次新增維護。 */
window.SEED_QUESTIONS.push(
{ id:"hw-101", cat:"hw", difficulty:3,
  q:"DDR5 記憶體的工作電壓約為多少？",
  options:["1.1 V", "1.5 V", "1.2 V", "1.35 V"], answer:0,
  explain:"DDR5 工作電壓約 1.1 V，比 DDR4 的 1.2 V 更低，有助降低功耗。" },

{ id:"hw-102", cat:"hw", difficulty:3,
  q:"DDR5 記憶體的起始資料速率約為？",
  options:["2400 MT/s", "4800 MT/s", "1600 MT/s", "3200 MT/s"], answer:1,
  explain:"DDR5 從 4800 MT/s 起步，可向上支援至 8400 MT/s 甚至更高。" },

{ id:"hw-103", cat:"hw", difficulty:3,
  q:"「雙通道記憶體」的主要作用是？",
  options:["把容量加倍", "自動超頻 CPU", "讓 CPU 同時透過兩條通道存取記憶體，提升記憶體頻寬", "降低記憶體電壓"], answer:2,
  explain:"雙通道可倍增記憶體頻寬，對內顯效能與整體系統反應有明顯幫助。" },

{ id:"hw-104", cat:"hw", difficulty:3,
  q:"ECC 記憶體的主要特點是？",
  options:["容量最大", "速度最快", "價格最便宜", "可偵測並修正單一位元錯誤，常用於伺服器"], answer:3,
  explain:"ECC（錯誤修正碼）記憶體能自動偵測並更正位元錯誤，提升資料可靠性，多用於伺服器與工作站。" },

{ id:"hw-105", cat:"hw", difficulty:3,
  q:"PCIe 5.0 x16 的理論單向頻寬約為？",
  options:["64 GB/s", "8 GB/s", "16 GB/s", "32 GB/s"], answer:0,
  explain:"PCIe 4.0 x16 約 32 GB/s，PCIe 5.0 x16 倍增到約 64 GB/s。" },

{ id:"hw-106", cat:"hw", difficulty:3,
  q:"NVMe SSD 比 SATA SSD 快很多，主要原因是？",
  options:["NVMe 不需驅動", "NVMe 走 PCIe 通道並使用更高效的指令集，而 SATA 受限於約 600 MB/s", "NVMe 使用光纖", "NVMe 容量較大"], answer:1,
  explain:"SATA 介面上限約 600 MB/s，NVMe 直接走 PCIe 通道，可達數 GB/s。" },

{ id:"hw-107", cat:"hw", difficulty:2,
  q:"M.2 插槽常被用來安裝什麼？",
  options:["顯示卡", "電源供應器", "NVMe 固態硬碟", "記憶體模組"], answer:2,
  explain:"M.2 是小型擴充插槽，最常見用途是安裝 NVMe SSD。" },

{ id:"hw-108", cat:"hw", difficulty:3,
  q:"USB4 的最高傳輸速率可達？",
  options:["10 Gbps", "20 Gbps", "5 Gbps", "40 Gbps"], answer:3,
  explain:"USB4 最高可達 40 Gbps，其架構基於 Thunderbolt 3 技術。" },

{ id:"hw-109", cat:"hw", difficulty:2,
  q:"USB Type-C 接頭的優點是？",
  options:["正反皆可插拔，並可支援充電、資料與視訊輸出", "只能傳輸資料", "只能充電", "必須區分正反面"], answer:0,
  explain:"Type-C 支援正反插，且可整合資料、充電與影音輸出（Alt Mode）。" },

{ id:"hw-110", cat:"hw", difficulty:3,
  q:"HDMI 2.1 的最大頻寬約為？",
  options:["10.2 Gbps", "48 Gbps", "80 Gbps", "18 Gbps"], answer:1,
  explain:"HDMI 2.1 頻寬達 48 Gbps，可支援 8K60Hz 或 4K120Hz。" },

{ id:"hw-111", cat:"hw", difficulty:3,
  q:"下列哪一個顯示介面標準的頻寬最高？",
  options:["DVI", "HDMI 1.4", "HDMI 2.1", "DisplayPort 1.2"], answer:2,
  explain:"HDMI 2.1 為 48 Gbps，高於 HDMI 1.4（10.2 Gbps）與 DisplayPort 1.2（21.6 Gbps）。" },

{ id:"hw-112", cat:"hw", difficulty:3,
  q:"80 PLUS 認證中，轉換效率等級最高的是？",
  options:["金牌", "銅牌", "白金", "鈦金"], answer:3,
  explain:"80 PLUS 等級由低至高為白牌、銅牌、銀牌、金牌、白金、鈦金。" },

{ id:"hw-113", cat:"hw", difficulty:3,
  q:"電源供應器的「轉換效率」指的是？",
  options:["輸出功率與輸入功率的比值，效率越高廢熱越少", "電壓穩定度", "風扇轉速", "額定功率大小"], answer:0,
  explain:"效率越高，越少電能被浪費成廢熱，也越省電、越安靜。" },

{ id:"hw-114", cat:"hw", difficulty:2,
  q:"顯示器的「刷新率」單位是？",
  options:["ppi", "Hz", "dpi", "ms"], answer:1,
  explain:"刷新率以 Hz 為單位，數值越高畫面越流暢；響應時間則以 ms 為單位。" },

{ id:"hw-115", cat:"hw", difficulty:2,
  q:"遊戲顯示器標示「1 ms」通常指的是？",
  options:["解析度", "對比度", "響應時間", "刷新率"], answer:2,
  explain:"響應時間越短，快速移動畫面越不容易出現拖影。" },

{ id:"hw-116", cat:"hw", difficulty:3,
  q:"解析度 2560×1440 通常被稱為？",
  options:["720p / HD", "2160p / 4K", "1080p / FHD", "1440p / QHD"], answer:3,
  explain:"1920×1080 為 FHD、2560×1440 為 QHD（2K）、3840×2160 為 4K UHD。" },

{ id:"hw-117", cat:"hw", difficulty:3,
  q:"TN 面板相比 IPS 面板，其主要優勢是？",
  options:["響應速度快、成本低", "視角最廣", "對比度最高", "色彩最準確"], answer:0,
  explain:"TN 反應快且便宜，但視角窄、色彩表現較弱，常見於入門電競螢幕。" },

{ id:"hw-118", cat:"hw", difficulty:3,
  q:"OLED 顯示器相比 LCD 的最大優勢是？",
  options:["亮度最高", "像素自發光，可做到純黑與極高對比", "壽命最長", "成本最低"], answer:1,
  explain:"OLED 每個像素自發光，不需背光，可呈現真正的黑色與極高對比度。" },

{ id:"hw-119", cat:"hw", difficulty:3,
  q:"sRGB、Adobe RGB、DCI-P3 這些名詞指的是？",
  options:["連接介面", "面板類型", "色彩空間（色域）標準", "螢幕尺寸規格"], answer:2,
  explain:"它們是不同用途的色彩空間標準，設計與影音工作會特別關注覆蓋率。" },

{ id:"hw-120", cat:"hw", difficulty:3,
  q:"UEFI 與傳統 BIOS 相比，主要改進是？",
  options:["不需要電源", "不需要主機板", "取代作業系統", "支援圖形化介面、更大硬碟分割與更快的開機"], answer:3,
  explain:"UEFI 取代傳統 BIOS，支援 GPT 分割、圖形介面與安全開機等功能。" },

{ id:"hw-121", cat:"hw", difficulty:3,
  q:"CPU 的「執行緒（Thread）」與「核心（Core）」的關係是？",
  options:["一個核心可透過超執行緒技術同時處理多個執行緒", "一個核心只能有一個執行緒", "執行緒就是實體核心", "執行緒是記憶體單位"], answer:0,
  explain:"超執行緒（SMT）讓一個實體核心同時處理多個執行緒，提升資源利用率。" },

{ id:"hw-122", cat:"hw", difficulty:3,
  q:"CPU 製程「3 nm」指的是？",
  options:["快取容量", "晶片內部電晶體結構的特徵尺寸，越小通常越省電", "CPU 的體積", "時脈頻率"], answer:1,
  explain:"製程節點越小，同面積可容納更多電晶體，通常效能更高、功耗更低。" },

{ id:"hw-123", cat:"hw", difficulty:3,
  q:"TDP 通常用來描述 CPU 的什麼特性？",
  options:["最大記憶體容量", "核心數量", "熱設計功耗，反映散熱需求", "快取大小"], answer:2,
  explain:"TDP 是散熱設計功耗參考值，數值越高通常需要越強的散熱器。" },

{ id:"hw-124", cat:"hw", difficulty:2,
  q:"CPU 散熱器中的「熱導管」主要作用是？",
  options:["增加核心數", "儲存資料", "降低電壓", "快速把熱量從 CPU 傳導到散熱鰭片"], answer:3,
  explain:"熱導管利用相變快速導熱，把熱量帶到鰭片再由風扇排出。" },

{ id:"hw-125", cat:"hw", difficulty:2,
  q:"一體式水冷散熱器相比傳統風冷的主要優勢是？",
  options:["散熱能力較強且噪音分布較佳，適合高階 CPU", "完全沒有噪音", "價格更便宜", "不需安裝"], answer:0,
  explain:"水冷把熱量帶到較大的冷排散發，適合高發熱 CPU，但成本較高且有漏液風險。" },

{ id:"hw-126", cat:"hw", difficulty:2,
  q:"機箱「風道」設計的基本原則是？",
  options:["不需要風扇", "前進後出、下進上出，形成穩定對流", "全部風扇向內吹", "全部風扇向外吹"], answer:1,
  explain:"合理風道讓冷空氣進入、熱空氣排出，避免熱氣在機箱內積聚。" },

{ id:"hw-127", cat:"hw", difficulty:3,
  q:"顯示卡的「光線追蹤（Ray Tracing）」技術主要用於？",
  options:["提升 CPU 頻率", "降低耗電", "模擬光線真實反射與折射，提升畫面真實感", "加快檔案下載"], answer:2,
  explain:"光線追蹤即時模擬光路，讓陰影、反射與折射更接近真實，但需要較強 GPU。" },

{ id:"hw-128", cat:"hw", difficulty:3,
  q:"顯示卡的「顯存（VRAM）」不足時，最可能出現什麼現象？",
  options:["無法開機", "鍵盤失效", "螢幕無法顯示", "高解析度或高材質設定下畫面卡頓"], answer:3,
  explain:"材質與貼圖需載入 VRAM，容量不足時會頻繁與主記憶體交換，造成嚴重卡頓。" },

{ id:"hw-129", cat:"hw", difficulty:3,
  q:"DLSS 與 FSR 這類技術的核心原理是？",
  options:["以較低解析度渲染再用演算法放大，提升幀率", "壓縮硬碟", "超頻記憶體", "降低螢幕刷新率"], answer:0,
  explain:"它們屬於超解析度技術，用較低解析度渲染再重建高解析畫面，兼顧畫質與效能。" },

{ id:"hw-130", cat:"hw", difficulty:2,
  q:"滑鼠的 DPI（或 CPI）數值代表？",
  options:["滑鼠按鍵數量", "滑鼠移動一英吋時游標移動的像素數，即靈敏度", "滑鼠重量", "滑鼠回報率"], answer:1,
  explain:"DPI 越高游標移動越快；回報率則以 Hz 表示，常見 125 Hz 至 1000 Hz 以上。" },

{ id:"hw-131", cat:"hw", difficulty:3,
  q:"電競滑鼠的「回報率（Polling Rate）」1000 Hz 代表？",
  options:["滑鼠可用 1000 小時", "滑鼠每秒移動 1000 像素", "每秒向電腦回報 1000 次位置", "支援 1000 種設定"], answer:2,
  explain:"回報率越高，位置更新越即時，操作延遲越低。" },

{ id:"hw-132", cat:"hw", difficulty:2,
  q:"目前主流的 3D 印表機（FDM 類型）其成型原理是？",
  options:["用雷射切割金屬", "用噴嘴噴墨到紙上", "用紫外線固化紙張", "將熱塑性材料加熱熔化後逐層擠出堆疊"], answer:3,
  explain:"FDM（熔融沉積成型）把線材加熱熔化後逐層堆疊成型。" },

{ id:"hw-133", cat:"hw", difficulty:2,
  q:"下列哪一種印表機最適合大量、快速地列印黑白文件？",
  options:["雷射印表機", "點矩陣印表機", "噴墨印表機", "熱感印表機"], answer:0,
  explain:"雷射印表機以加熱加壓方式壓印碳粉，速度快且不會有墨水暈開問題。" },

{ id:"hw-134", cat:"hw", difficulty:3,
  q:"印表機的「ppm」與「dpi」分別代表？",
  options:["每頁成本 / 解析度", "每分鐘列印頁數 / 每英吋可列印點數", "列印顏色數 / 速度", "每分鐘點數 / 頁數"], answer:1,
  explain:"ppm 衡量速度、dpi 衡量解析度（列印品質）。" },

{ id:"hw-135", cat:"hw", difficulty:3,
  q:"RAID 1 的主要特點是？",
  options:["只用於備份軟體", "速度最快但無備援", "兩顆硬碟互為鏡像，提供資料備援", "至少需要三顆硬碟"], answer:2,
  explain:"RAID 1 將資料同時寫入兩顆硬碟（鏡像），一顆損壞仍可運作，但容量利用率僅 50%。" },

{ id:"hw-136", cat:"hw", difficulty:3,
  q:"RAID 10 是哪些 RAID 層級的組合？",
  options:["RAID 1 加 RAID 5", "三個 RAID 3", "RAID 0 加 RAID 6", "鏡像（1）與等量分割（0）的組合"], answer:3,
  explain:"RAID 10 先鏡像再分割，兼具效能與備援，至少需四顆硬碟。" },

{ id:"hw-137", cat:"hw", difficulty:2,
  q:"「熱插拔（Hot Swapping）」的意思是？",
  options:["在電腦運行中直接插拔裝置而無需關機", "插拔後需重啟系統", "必須關機才能插拔", "只能插不能拔"], answer:0,
  explain:"USB 與 SATA 等介面支援熱插拔，方便隨時連接或移除週邊設備。" },

{ id:"hw-138", cat:"hw", difficulty:2,
  q:"「隨插即用（Plug and Play, PnP）」指的是？",
  options:["裝置需外接電源", "系統能自動偵測並配置新連接的裝置", "裝置只能使用一次", "必須手動安裝驅動才能使用"], answer:1,
  explain:"PnP 讓作業系統自動辨識硬體並載入適當驅動與資源配置。" },

{ id:"hw-139", cat:"hw", difficulty:3,
  q:"主機板的「晶片組（Chipset）」主要負責？",
  options:["儲存作業系統", "供應電力", "管理 CPU 與各週邊裝置之間的資料通道與功能支援", "提供運算能力"], answer:2,
  explain:"晶片組決定主機板支援的 CPU、記憶體規格、USB/SATA 數量與超頻能力等。" },

{ id:"hw-140", cat:"hw", difficulty:3,
  q:"主機板上的 CMOS 電池主要作用是？",
  options:["儲存作業系統", "提供 CPU 電力", "驅動風扇", "在主機斷電時維持 BIOS/UEFI 設定與系統時間"], answer:3,
  explain:"CMOS 鈕扣電池讓系統時間與 BIOS 設定在主機拔電後仍不遺失。" },

{ id:"hw-141", cat:"hw", difficulty:2,
  q:"SSD 的「TBW」指標代表什麼？",
  options:["總寫入位元組數，代表壽命耐久度", "讀取速度", "耗電量", "容量"], answer:0,
  explain:"TBW（Total Bytes Written）越大，代表 SSD 可承受的累計寫入量越高、壽命越長。" },

{ id:"hw-142", cat:"hw", difficulty:3,
  q:"「TRIM」指令對 SSD 的作用是？",
  options:["備份資料", "告知 SSD 哪些區塊已不再使用，維持長期寫入效能", "加密資料", "清理風扇"], answer:1,
  explain:"TRIM 讓 SSD 及早回收無效區塊，避免長期使用後寫入效能下降。" },

{ id:"hw-143", cat:"hw", difficulty:2,
  q:"下列哪一項不是固態硬碟（SSD）的優點？",
  options:["無機械噪音", "耐震力高", "單位容量價格比 HDD 便宜", "耗電量低"], answer:2,
  explain:"SSD 安靜、耐震、省電、速度快，但單位容量價格通常高於 HDD。" },

{ id:"hw-144", cat:"hw", difficulty:3,
  q:"「BIOS/UEFI」是在電腦啟動過程中的哪個階段執行？",
  options:["列印時", "作業系統載入之後", "關機時", "通電後、作業系統載入之前"], answer:3,
  explain:"BIOS/UEFI 是開機時載入的第一個軟體，負責硬體初始化並引導作業系統。" },

{ id:"hw-145", cat:"hw", difficulty:2,
  q:"購買電源供應器時，除了瓦數還應特別留意什麼？",
  options:["是否通過 80 PLUS 等效率認證與保護機制", "線材長度", "風扇品牌", "外殼顏色"], answer:0,
  explain:"效率認證與過壓、過流、短路保護等機制，直接關係供電品質與系統安全。" },

{ id:"hw-001", cat:"hw", difficulty:1,
  q:"電腦的組成單元依功能可概分為哪五大單元？",
  options:["硬碟、記憶體、CPU、顯示卡、螢幕", "輸入、控制、算術／邏輯、記憶、輸出", "輸入、輸出、電源、散熱、外殼", "主機板、CPU、RAM、ROM、GPU"], answer:1,
  explain:"五大單元為輸入單元、控制單元、算術／邏輯單元、記憶單元與輸出單元。" },

{ id:"hw-002", cat:"hw", difficulty:2,
  q:"下列哪一項屬於「輸出單元」的設備？",
  options:["鍵盤", "掃描器", "顯示器", "滑鼠"], answer:2,
  explain:"輸出單元是電腦輸出運算結果的管道，如顯示器、印表機、喇叭。" },

{ id:"hw-003", cat:"hw", difficulty:2,
  q:"中央處理單元（CPU）是由哪兩個單元組成？",
  options:["輸入單元與輸出單元", "快取與暫存器", "記憶單元與輸入單元", "控制單元與算術／邏輯單元"], answer:3,
  explain:"控制單元負責控制協調，算術／邏輯單元負責運算與邏輯判斷，兩者合稱 CPU。" },

{ id:"hw-004", cat:"hw", difficulty:2,
  q:"匯流排（Bus）依傳輸對象可分為哪三大類？",
  options:["內部匯流排、系統匯流排、擴充匯流排", "前端、後端、外部匯流排", "高速、中速、低速匯流排", "資料匯流排、控制匯流排、電源匯流排"], answer:0,
  explain:"匯流排是各單元間傳送資料或訊號的管道，分內部、系統與擴充匯流排三大類。" },

{ id:"hw-005", cat:"hw", difficulty:3,
  q:"舊款主機板的晶片組中，負責掌控高速裝置（如記憶體）的是？",
  options:["BIOS", "北橋", "CMOS", "南橋"], answer:1,
  explain:"北橋負責高速裝置（記憶體等），南橋負責低速裝置（USB、SATA）。新款主機板已將北橋整合至 CPU。" },

{ id:"hw-006", cat:"hw", difficulty:1,
  q:"USB 具備下列哪些特性？",
  options:["只能傳輸音訊", "僅能連接印表機", "隨插即用、熱插拔、可為週邊設備充電", "必須關機才能插拔"], answer:2,
  explain:"USB 支援隨插即用（PnP）與熱插拔，還可作為充電埠，應用極為廣泛。" },

{ id:"hw-007", cat:"hw", difficulty:2,
  q:"USB 3.0 插頭通常以什麼顏色標示，且其連接埠可向下相容 2.0 插頭？",
  options:["綠色", "黑色", "紅色", "藍色"], answer:3,
  explain:"USB 3.0 插頭為藍色，傳輸速度較快（約 625 MB/s），插座可向下相容 USB 2.0。" },

{ id:"hw-008", cat:"hw", difficulty:2,
  q:"下列哪一個視訊連接埠是以「類比形式」傳輸訊號，目前已逐漸被取代？",
  options:["D-Sub（VGA）", "HDMI", "DVI", "DisplayPort"], answer:0,
  explain:"D-Sub（VGA）是早期開發的連接埠，以類比形式傳輸，速度較慢，已漸被 DVI、HDMI 取代。" },

{ id:"hw-009", cat:"hw", difficulty:2,
  q:"哪一個連接埠可同時串接多台螢幕（例如組成電視牆）？",
  options:["USB", "DisplayPort", "VGA", "DVI"], answer:1,
  explain:"HDMI 與 DisplayPort 皆可傳輸影像及聲音，其中 DisplayPort 支援串接多台螢幕。" },

{ id:"hw-010", cat:"hw", difficulty:2,
  q:"下列哪一種主機板規格體積最小，但通常只有一個 PCIe 插槽？",
  options:["Micro-ATX", "ATX", "Mini-ITX", "E-ATX"], answer:2,
  explain:"Mini-ITX 為 170×170 mm，非常緊湊，適合小型機箱，但擴展選擇有限。" },

{ id:"hw-011", cat:"hw", difficulty:2,
  q:"ATX 主機板通常提供幾個擴展插槽？",
  options:["1 個", "4 個", "10 個", "7 個"], answer:3,
  explain:"ATX 擁有最多擴展插槽（約 7 個）與 4 條記憶體插槽，適合桌面電腦與工作站。" },

{ id:"hw-012", cat:"hw", difficulty:3,
  q:"SATA-3 介面的最高傳輸速率約為？",
  options:["600 MB/s", "300 MB/s", "150 MB/s", "133 MB/s"], answer:0,
  explain:"SATA-1 為 150 MB/s、SATA-2 為 300 MB/s、SATA-3 為 600 MB/s。" },

{ id:"hw-013", cat:"hw", difficulty:2,
  q:"暫存器（Register）的主要特點是？",
  options:["容量大且便宜", "內建於 CPU，容量小但存取速度極快", "斷電後資料不會消失", "用於儲存整個作業系統"], answer:1,
  explain:"暫存器內建於 CPU，容量約 16~64 bits，但速度極快，用來暫存運算中的資料與狀態。" },

{ id:"hw-014", cat:"hw", difficulty:2,
  q:"關於快取記憶體（Cache），下列敘述何者正確？",
  options:["速度比硬碟慢", "只存在於主機板上", "存取速度比主記憶體快，用來存放常用資料以提升效能", "容量很大且成本低"], answer:2,
  explain:"快取速度比主記憶體快，用以減少 CPU 到主記憶體讀取的次數，但成本高、容量不大。" },

{ id:"hw-015", cat:"hw", difficulty:3,
  q:"快取記憶體 L1、L2、L3 中，哪一個傳統上位於主記憶體與 CPU 之間？",
  options:["全部都在 CPU 內", "L2", "L1", "L3"], answer:3,
  explain:"L1、L2 位於 CPU 內部，L3 傳統上位於主記憶體與 CPU 之間（部分新款 CPU 已內建）。" },

{ id:"hw-016", cat:"hw", difficulty:2,
  q:"CPU 執行一個指令的過程稱為一個「機器週期」，其步驟為？",
  options:["擷取、解碼、執行、儲存", "開機、執行、關機、重啟", "輸入、處理、輸出、儲存", "讀取、寫入、刪除、備份"], answer:0,
  explain:"機器週期包含擷取（Fetch）、解碼（Decode）、執行（Execute）、儲存（Store）。" },

{ id:"hw-017", cat:"hw", difficulty:3,
  q:"IPS 是什麼的縮寫？",
  options:["每秒輸入次數", "每秒指令數（Instructions per second）", "網際網路服務提供者", "內部處理系統"], answer:1,
  explain:"IPS 是計算 CPU 速度的計量單位，其百萬倍為 MIPS。" },

{ id:"hw-018", cat:"hw", difficulty:2,
  q:"生產個人電腦 CPU 的兩大主要廠商是？",
  options:["Samsung 與 LG", "Apple 與 Qualcomm", "Intel 與 AMD", "NVIDIA 與 AMD"], answer:2,
  explain:"Intel 與 AMD 為 PC CPU 主要廠商；Apple 與高通則分別是 iOS 與 Android 設備 CPU 主要廠商。" },

{ id:"hw-019", cat:"hw", difficulty:2,
  q:"Intel CPU 型號後綴字母「U」代表什麼意思？",
  options:["高性能版", "超高壓版", "不鎖倍頻", "低電壓節能版"], answer:3,
  explain:"M 為標準電壓、U 為低電壓節能、H 為高電壓、X 為高性能、K 為不鎖倍頻。" },

{ id:"hw-020", cat:"hw", difficulty:2,
  q:"下列哪一項不是影響 CPU 效能的主要因素？",
  options:["機箱顏色", "快取記憶體容量", "字組大小", "時脈頻率"], answer:0,
  explain:"時脈頻率越高執行越快；字組大小（如 64 位元）與快取容量也都影響效能。" },

{ id:"hw-021", cat:"hw", difficulty:2,
  q:"RAM 又被稱為揮發性記憶體，原因是？",
  options:["只能寫入不能讀取", "電腦關機時資料會隨電源一起消失", "價格會浮動", "資料永遠不會消失"], answer:1,
  explain:"RAM 斷電後資料消失，故稱揮發性記憶體，分為 DRAM 與 SRAM 兩種。" },

{ id:"hw-022", cat:"hw", difficulty:3,
  q:"SRAM 與 DRAM 相比，其特點是？",
  options:["需持續充電更新", "容量比 DRAM 大", "不需持續充電更新即可保存資料，常用作快取記憶體", "價格比 DRAM 便宜"], answer:2,
  explain:"SRAM 不需持續充電更新，速度快但成本高，常用作快取記憶體；個人電腦的「記憶體」指 DRAM。" },

{ id:"hw-023", cat:"hw", difficulty:2,
  q:"下列哪一種記憶體是「唯讀」的，且常用來存放 BIOS 開機程式？",
  options:["SSD", "RAM", "HDD", "ROM"], answer:3,
  explain:"ROM 只能讀取不能寫入，資料不因關機消失，主機板上的 ROM 常存放 BIOS。" },

{ id:"hw-024", cat:"hw", difficulty:3,
  q:"可利用紫外線照射來刪除或寫入資料的 ROM 是？",
  options:["EPROM", "快閃記憶體", "EEPROM", "PROM"], answer:0,
  explain:"EPROM 利用紫外線照射刪除或寫入（可多次）；EEPROM 則利用電流訊號。" },

{ id:"hw-025", cat:"hw", difficulty:2,
  q:"被廣泛運用在智慧型手機、隨身碟、記憶卡上的儲存元件是？",
  options:["磁帶", "快閃記憶體（Flash Memory）", "EPROM", "SRAM"], answer:1,
  explain:"快閃記憶體以電流訊號讀寫，速度比 EEPROM 快、成本低，廣泛用於行動裝置。" },

{ id:"hw-026", cat:"hw", difficulty:2,
  q:"硬碟轉速的單位是？",
  options:["GHz", "ppm", "RPM（每分鐘旋轉圈數）", "dpi"], answer:2,
  explain:"RPM 為每分鐘旋轉圈數，轉速越快讀寫資料的速度越快。" },

{ id:"hw-027", cat:"hw", difficulty:3,
  q:"硬碟中，多個連續的磁區（sector）會組成什麼？",
  options:["磁柱（cylinder）", "磁面（surface）", "磁軌（track）", "磁叢（cluster）"], answer:3,
  explain:"磁盤上有同心圓磁軌，磁軌細分為磁區，多個連續磁區組成磁叢。" },

{ id:"hw-028", cat:"hw", difficulty:2,
  q:"SSD（固態硬碟）與傳統 HDD 相比，其優點不包括？",
  options:["單位容量價格較便宜", "耗電量低、重量輕", "讀寫速度快", "無噪音、耐震力高"], answer:0,
  explain:"SSD 以快閃記憶體為儲存元件，無機械構造；但單位容量價格通常比 HDD 高。" },

{ id:"hw-029", cat:"hw", difficulty:2,
  q:"為何標示 500GB 的硬碟，實際可用容量約只有 465GB？",
  options:["需要格式化兩次", "廠商以 1000 進位計算，作業系統以 1024 進位計算", "硬碟有壞軌", "系統佔用了一半"], answer:1,
  explain:"500GB = 500×1000³ ÷ 1024³ ≈ 465.66 GiB，是十進位與二進位換算差異所致。" },

{ id:"hw-030", cat:"hw", difficulty:3,
  q:"RAID 0 的主要特點是？",
  options:["至少需要三個硬碟", "專門用於備份", "提供最佳效能但沒有資料備援", "提供完整資料備援"], answer:2,
  explain:"RAID 0 將資料等量分割到各磁碟，效能最佳但不提供資料備援，任一磁碟損壞即資料全失。" },

{ id:"hw-031", cat:"hw", difficulty:3,
  q:"RAID 5 至少需要幾個硬碟？",
  options:["5 個", "4 個", "2 個", "3 個"], answer:3,
  explain:"RAID 5 至少需三個硬碟，將資料與奇偶校驗資訊分散儲存，可容忍一個磁碟損壞。" },

{ id:"hw-032", cat:"hw", difficulty:3,
  q:"與 RAID 5 相比，RAID 6 的最大特點是？",
  options:["增加第二個獨立奇偶校驗，可容忍任意兩塊磁碟同時失效", "不需要校驗資訊", "只需兩個硬碟", "速度最快"], answer:0,
  explain:"RAID 6 使用兩組獨立奇偶校驗，任意兩塊磁碟同時失效仍不影響資料完整性。" },

{ id:"hw-033", cat:"hw", difficulty:2,
  q:"藍光光碟（Blu-ray）單層的儲存容量約為？",
  options:["100 GB", "25 GB", "8.5 GB", "4.7 GB"], answer:1,
  explain:"藍光單層 25GB、雙層 50GB、三層 100GB（BDXL）、四層 128GB（BDXL）。" },

{ id:"hw-034", cat:"hw", difficulty:2,
  q:"GPU（圖形處理器）與 CPU 相比，其主要特點是？",
  options:["不能處理 AI 運算", "核心數少但通用性強", "擁有數百或數千個核心，擅長並列執行大量計算", "只負責儲存資料"], answer:2,
  explain:"GPU 核心數量遠多於 CPU，經最佳化可並列執行大量計算，對深度學習尤其有用。" },

{ id:"hw-035", cat:"hw", difficulty:3,
  q:"AMD 將繪圖處理器整合進 CPU 後，這種處理器被命名為？",
  options:["GPU", "NPU", "TPU", "APU（加速處理器）"], answer:3,
  explain:"APU 為 Accelerated Processing Unit，是 AMD 對整合繪圖處理器之 CPU 的命名。" },

{ id:"hw-036", cat:"hw", difficulty:2,
  q:"標準鍵盤一般共有多少個按鍵？",
  options:["104 個", "101 個", "87 個", "120 個"], answer:0,
  explain:"標準鍵盤共有 104 個按鍵；廠商另會開發增設多媒體功能鍵的多功能鍵盤。" },

{ id:"hw-037", cat:"hw", difficulty:2,
  q:"一般平價鍵盤多採用「薄膜鍵盤」，其運作原理是？",
  options:["每個按鍵都有獨立機械軸", "利用三層薄膜形成絕緣，按下鍵帽時通電送出訊號", "利用光學感應", "利用電磁感應"], answer:1,
  explain:"薄膜鍵盤以三層薄膜絕緣，按下鍵帽時導通電路送出訊號。" },

{ id:"hw-038", cat:"hw", difficulty:3,
  q:"機械鍵盤中，觸發壓力最大（約 60g）、手感較重的是哪一種軸？",
  options:["茶軸", "青軸", "黑軸", "紅軸"], answer:2,
  explain:"青軸 50g、紅軸 45g、茶軸 45g、黑軸 60g；黑軸手感較重，多為遊戲鍵盤所用。" },

{ id:"hw-039", cat:"hw", difficulty:2,
  q:"點矩陣印表機通常用來列印哪一類文件？",
  options:["高解析度照片", "3D 模型", "彩色海報", "需複寫的多聯式文件（如信用卡簽單）"], answer:3,
  explain:"點矩陣屬撞擊式印表機，以撞針撞擊色帶，適合需要複寫的多聯式文件。" },

{ id:"hw-040", cat:"hw", difficulty:2,
  q:"彩色印表機使用的印刷四原色（CMYK）是指？",
  options:["青、品紅、黃、黑", "紅、綠、藍、黑", "青、藍、紫、白", "紅、黃、藍、白"], answer:0,
  explain:"CMYK 為 Cyan（青）、Magenta（品紅）、Yellow（黃）、Black（黑）。" },

{ id:"hw-041", cat:"hw", difficulty:2,
  q:"衡量印表機列印品質的標準，單位為 dpi，其意思是？",
  options:["每秒傳輸位元", "每英吋可列印的點數", "每頁的顏色數", "每分鐘列印頁數"], answer:1,
  explain:"dpi = dots per inch，解析度越高列印品質越好；列印速度單位則為 ppm。" },

{ id:"hw-042", cat:"hw", difficulty:3,
  q:"80 PLUS 認證是針對哪一種電腦零件的規範？",
  options:["顯示卡", "記憶體", "電源供應器", "CPU"], answer:2,
  explain:"80 PLUS 保證電源供應器在 20%、50%、100% 負載時轉換效率大於 80%。" },

{ id:"hw-043", cat:"hw", difficulty:3,
  q:"電源供應器（PSU）的主要功能是？",
  options:["散熱降溫", "控制網路流量", "儲存作業系統", "將標準交流電轉成低壓穩定的直流電供組件使用"], answer:3,
  explain:"PSU 又稱「火牛」，負責將交流電轉換為穩定的直流電供電腦內部組件使用。" },

{ id:"hw-044", cat:"hw", difficulty:3,
  q:"IPS 面板相比 VA 面板，其主要優點是？",
  options:["視角廣、顏色準確、響應速度快", "對比度高、黑色更深沉", "價格最低", "耗電量最低"], answer:0,
  explain:"IPS 視角廣、色彩準確、響應快，但對比度較低；VA 對比度高但視角窄、響應較慢。" },

{ id:"hw-045", cat:"hw", difficulty:2,
  q:"下列哪一種儲存設備具有「容量大、單位儲存成本低」的優點，且大部分軟體須安裝其上才能使用？",
  options:["ROM", "硬式磁碟機（HDD）", "RAM", "快取記憶體"], answer:1,
  explain:"HDD 容量大、成本低，是個人電腦重要的儲存設備，個人電腦常見尺寸有 3.5 吋、2.5 吋。" }
);
