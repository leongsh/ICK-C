/* 分類：辦公室軟件知識 (office) — 70 題
   本檔由 tools/rebalance.js 產生，可安全地用管理員介面或批次新增維護。 */
window.SEED_QUESTIONS.push(
{ id:"office-101", cat:"office", difficulty:2,
  q:"Excel 中 SUMIF 函數的作用是？",
  options:["依指定條件篩選後加總對應數值", "找出最大值", "計算平均值", "計算排名"], answer:0,
  explain:"SUMIF(範圍, 條件, 加總範圍) 可對符合條件的項目加總；多條件用 SUMIFS。" },

{ id:"office-102", cat:"office", difficulty:2,
  q:"Excel 中 COUNTIF 函數的作用是？",
  options:["加總數值", "計算符合指定條件的儲存格數量", "計算平均值", "排序資料"], answer:1,
  explain:"COUNTIF(範圍, 條件) 統計符合條件的個數；多條件用 COUNTIFS。" },

{ id:"office-103", cat:"office", difficulty:2,
  q:"Excel 中要自動加總上方或左側的連續數值，最快的快速鍵是？",
  options:["Shift + F3", "Ctrl + S", "Alt + =", "Ctrl + D"], answer:2,
  explain:"Alt + = 會自動插入 SUM 函數並智慧選取相鄰的數值範圍。" },

{ id:"office-104", cat:"office", difficulty:3,
  q:"Excel 中按 F4 鍵在編輯公式時的作用是？",
  options:["刪除儲存格", "重新計算", "插入新工作表", "在相對參照與絕對參照之間切換"], answer:3,
  explain:"F4 可切換 A1、$A$1、A$1、$A1 四種參照形式，方便複製公式。" },

{ id:"office-105", cat:"office", difficulty:3,
  q:"Excel 公式中的「$A$1」代表什麼參照？",
  options:["絕對參照，複製公式時行列都不會改變", "混合參照", "文字值", "相對參照"], answer:0,
  explain:"$ 鎖定欄或列：$A$1 完全鎖定、A$1 鎖列、$A1 鎖欄。" },

{ id:"office-106", cat:"office", difficulty:3,
  q:"XLOOKUP 相比 VLOOKUP 的主要優勢不包括？",
  options:["預設精確比對", "只能在同一工作表使用", "可設定找不到時的回傳值", "可向左查詢"], answer:1,
  explain:"XLOOKUP 可左右查詢、自訂找不到值、預設精確比對，且可跨工作表，限制較少。" },

{ id:"office-107", cat:"office", difficulty:3,
  q:"VLOOKUP 最主要的限制是？",
  options:["不能跨工作表", "最多只能查 100 列", "只能從查閱欄向右查詢", "無法處理文字"], answer:2,
  explain:"VLOOKUP 的傳回欄必須在查閱欄右側；需向左查詢時可改用 INDEX + MATCH 或 XLOOKUP。" },

{ id:"office-108", cat:"office", difficulty:3,
  q:"INDEX 與 MATCH 組合常被用來取代 VLOOKUP，其好處是？",
  options:["速度一定最快", "可自動產生圖表", "不需要參數", "可向左查詢且插入欄位時不易出錯"], answer:3,
  explain:"MATCH 找出位置、INDEX 依位置取值，不受欄位方向限制，也比固定欄號穩健。" },

{ id:"office-109", cat:"office", difficulty:2,
  q:"Excel 中要切換「篩選」功能，常用的快速鍵是？",
  options:["Ctrl + Shift + L", "Ctrl + N", "Ctrl + F", "Ctrl + P"], answer:0,
  explain:"Ctrl + Shift + L 可在選取的資料範圍上切換自動篩選。" },

{ id:"office-110", cat:"office", difficulty:2,
  q:"Excel 中「凍結窗格」的用途是？",
  options:["隱藏資料", "捲動工作表時固定標題列或欄，方便對照", "自動排序", "保護工作表不被修改"], answer:1,
  explain:"在檢視索引標籤選擇凍結窗格，可固定首列或首欄，閱讀長表格時非常實用。" },

{ id:"office-111", cat:"office", difficulty:3,
  q:"Excel 的「資料驗證」功能主要用於？",
  options:["檢查拼字", "轉換檔案格式", "限制儲存格可輸入的內容或範圍，並可提供下拉選單", "加密活頁簿"], answer:2,
  explain:"資料驗證可限制輸入類型、範圍或建立下拉清單，減少輸入錯誤。" },

{ id:"office-112", cat:"office", difficulty:3,
  q:"Excel 樞紐分析表中的「交叉分析篩選器（Slicer）」作用是？",
  options:["插入註解", "保護公式", "建立圖表", "以按鈕方式直覺篩選樞紐分析表資料"], answer:3,
  explain:"交叉分析篩選器提供圖形化按鈕，讓使用者快速切換篩選條件。" },

{ id:"office-113", cat:"office", difficulty:3,
  q:"在 Excel 中，儲存格顯示「#####」通常是因為？",
  options:["欄寬不足，無法顯示完整數字", "儲存格被鎖定", "檔案損毀", "公式錯誤"], answer:0,
  explain:"欄寬不足時數值會顯示為 #，調整欄寬即可；若是公式錯誤則會顯示 #VALUE! 等錯誤碼。" },

{ id:"office-114", cat:"office", difficulty:3,
  q:"Excel 錯誤值「#DIV/0!」代表？",
  options:["數值型態錯誤", "公式除以零或空白儲存格", "找不到參照", "名稱打錯"], answer:1,
  explain:"除以 0 會產生 #DIV/0!；#REF! 為參照失效、#VALUE! 為型態錯誤、#NAME? 為名稱錯誤。" },

{ id:"office-115", cat:"office", difficulty:3,
  q:"Excel 錯誤值「#REF!」代表？",
  options:["除以零", "迴圈參照", "公式參照的儲存格已被刪除或失效", "文字格式錯誤"], answer:2,
  explain:"當公式引用的儲存格被刪除時會出現 #REF!，需重新修正參照。" },

{ id:"office-116", cat:"office", difficulty:2,
  q:"Excel 中要快速選取整欄資料的最後一列，可搭配哪個鍵？",
  options:["Ctrl + Z", "Ctrl + P", "Ctrl + F4", "Ctrl + ↓"], answer:3,
  explain:"Ctrl + 方向鍵可跳至連續資料區塊的邊界，處理大表格時非常高效。" },

{ id:"office-117", cat:"office", difficulty:2,
  q:"在 Word 中，要強制從下一頁開始新的一頁，最適當的做法是？",
  options:["插入分頁符號（Ctrl + Enter）", "連續按 Enter 直到換頁", "調整行距", "插入文字方塊"], answer:0,
  explain:"用分頁符號可確保內容固定從新頁開始，不會因前文增刪而位移。" },

{ id:"office-118", cat:"office", difficulty:3,
  q:"Word 中「分節符號」的主要用途是？",
  options:["建立目錄", "讓同一文件的不同節套用不同頁面設定（如方向、頁碼）", "刪除頁面", "插入圖片"], answer:1,
  explain:"分節符號可讓各節擁有獨立的頁面方向、邊界、頁首頁尾與頁碼格式。" },

{ id:"office-119", cat:"office", difficulty:2,
  q:"Word 的「追蹤修訂」功能位於哪個索引標籤？",
  options:["插入", "常用", "校閱", "設計"], answer:2,
  explain:"校閱索引標籤提供追蹤修訂、註解、比較與保護等功能，適合團隊審閱文件。" },

{ id:"office-120", cat:"office", difficulty:2,
  q:"Word 中要為某段文字加上解釋並顯示在頁面下方，應使用？",
  options:["插入文字方塊", "插入圖片", "插入超連結", "插入註腳"], answer:3,
  explain:"註腳顯示於頁面底部，章節附註則集中於文件或章節結尾，皆位於參考資料索引標籤。" },

{ id:"office-121", cat:"office", difficulty:3,
  q:"Word 中若希望「目錄」能自動更新頁碼與標題，前提是？",
  options:["標題必須套用內建的標題樣式", "必須使用文字方塊", "標題必須手動加粗", "必須先轉成 PDF"], answer:0,
  explain:"自動目錄依標題樣式的階層產生，修改內容後按 F9 或更新目錄即可同步。" },

{ id:"office-122", cat:"office", difficulty:2,
  q:"Word 中顯示或隱藏段落標記等格式符號的快速鍵是？",
  options:["Ctrl + K", "Ctrl + Shift + 8", "Ctrl + U", "Ctrl + B"], answer:1,
  explain:"Ctrl + Shift + 8（即 Ctrl + *）可切換顯示段落標記、空格與定位點等格式符號。" },

{ id:"office-123", cat:"office", difficulty:3,
  q:"PowerPoint 中「Shift + F5」的作用是？",
  options:["結束放映", "新增投影片", "從目前投影片開始放映", "從第一張開始放映"], answer:2,
  explain:"F5 從第一張放映，Shift + F5 則從目前所在的投影片開始放映。" },

{ id:"office-124", cat:"office", difficulty:3,
  q:"PowerPoint 放映時按 B 鍵會發生什麼？",
  options:["結束放映", "播放下一個動畫", "跳到最後一頁", "畫面變黑（再按一次恢復）"], answer:3,
  explain:"放映中按 B 切換黑屏、按 W 切換白屏，方便講者暫時轉移觀眾注意力。" },

{ id:"office-125", cat:"office", difficulty:2,
  q:"PowerPoint 的「版面配置（Layout）」功能是？",
  options:["套用預先定義的標題與內容排列方式", "插入影片", "設定轉場", "更換字型"], answer:0,
  explain:"版面配置決定投影片上標題、內容、圖片等預留位置的排列，母片則統一其樣式。" },

{ id:"office-126", cat:"office", difficulty:3,
  q:"PowerPoint 的「排練計時」功能位於哪個索引標籤？",
  options:["動畫", "投影片放映", "設計", "插入"], answer:1,
  explain:"排練計時可記錄每張投影片的停留時間，之後可搭配自動換頁播放。" },

{ id:"office-127", cat:"office", difficulty:3,
  q:"PowerPoint 的「簡報者檢視畫面」最大優點是？",
  options:["可加密簡報", "可自動翻譯", "簡報者能看到備忘稿、下一張投影片與計時器，觀眾只看見投影片", "可提高解析度"], answer:2,
  explain:"簡報者檢視畫面把講者資訊與觀眾畫面分離，提升演講掌控度。" },

{ id:"office-128", cat:"office", difficulty:2,
  q:"若要將 PowerPoint 簡報以固定版式分享給無法編輯的人，最適合的做法是？",
  options:["儲存為 .pptx 原始檔", "複製到記事本", "列印成文字檔", "匯出為 PDF 或影片"], answer:3,
  explain:"匯出 PDF 可保留版面且不易被修改；匯出影片則適合自動播放。" },

{ id:"office-129", cat:"office", difficulty:2,
  q:"PowerPoint 簡報的「設計構想（Designer）」使用什麼技術提供版面建議？",
  options:["人工智慧自動分析內容並推薦排版", "複製其他檔案", "隨機套用模板", "手動輸入座標"], answer:0,
  explain:"Designer 利用 AI 依投影片內容自動產生多種排版建議供選擇。" },

{ id:"office-130", cat:"office", difficulty:3,
  q:"在 Word 中「合併列印」時，資料來源最常使用哪一種檔案？",
  options:["PDF", "Excel 試算表或 Outlook 聯絡人清單", "圖片檔", "簡報檔"], answer:1,
  explain:"合併列印以 Excel 名單等為資料來源，搭配主文件產生大量個人化文件。" },

{ id:"office-131", cat:"office", difficulty:2,
  q:"Microsoft 365 的 OneDrive 主要提供什麼服務？",
  options:["文書編輯", "影片剪輯", "雲端檔案儲存與跨裝置同步", "防毒掃描"], answer:2,
  explain:"OneDrive 提供雲端儲存、版本記錄與跨裝置同步，支援多人共同編輯。" },

{ id:"office-132", cat:"office", difficulty:2,
  q:"在 Microsoft 365 中，支援團隊聊天、視訊會議與檔案協作的工具是？",
  options:["Excel", "小畫家", "PowerPoint", "Microsoft Teams"], answer:3,
  explain:"Teams 整合聊天、會議、通話與檔案協作，是團隊協同工作的中樞。" },

{ id:"office-133", cat:"office", difficulty:3,
  q:"Office 文件的「共同編輯（Co-authoring）」是指？",
  options:["多人同時在同一份文件上編輯並即時看到彼此的變更", "輪流編輯", "把檔案複製多份", "用電子郵件傳送"], answer:0,
  explain:"共同編輯需將檔案存放於雲端（如 OneDrive／SharePoint），可即時同步變更。" },

{ id:"office-134", cat:"office", difficulty:3,
  q:"Excel 中「格式化為表格（Ctrl + T）」的好處是？",
  options:["自動加密", "自動套用樣式並讓新增資料時公式與格式自動延伸", "自動備份", "自動列印"], answer:1,
  explain:"轉為表格後可使用結構化參照，新增列時格式、公式與篩選會自動擴展。" },

{ id:"office-135", cat:"office", difficulty:3,
  q:"在 Excel 中建立圖表後要修改座標軸標題，應從哪裡操作？",
  options:["檢視索引標籤", "資料索引標籤", "圖表設計／格式索引標籤，或右鍵點選圖表項目設定", "常用索引標籤"], answer:2,
  explain:"選取圖表後會出現圖表設計與格式索引標籤，幾乎所有圖表元素都能個別調整。" },

{ id:"office-136", cat:"office", difficulty:3,
  q:"Word 中「樣式（Styles）」的最大價值是？",
  options:["減小檔案體積", "自動翻譯", "加快打字速度", "統一整份文件格式，並支援自動目錄與導覽"], answer:3,
  explain:"樣式讓格式集中管理，修改樣式即可全域更新，也是自動目錄的基礎。" },

{ id:"office-137", cat:"office", difficulty:2,
  q:"在 Word 中要快速把游標移到文件開頭，可使用的快速鍵是？",
  options:["Ctrl + Home", "Shift + Home", "Alt + Home", "Ctrl + End"], answer:0,
  explain:"Ctrl + Home 移到文件開頭、Ctrl + End 移到文件結尾。" },

{ id:"office-138", cat:"office", difficulty:2,
  q:"下列哪一項不是 Microsoft 365 訂閱版相比買斷版的主要優勢？",
  options:["跨裝置使用", "永久擁有該版本授權", "持續獲得功能更新", "雲端儲存空間"], answer:1,
  explain:"Microsoft 365 為訂閱制，需持續付費才能使用；買斷版則一次性購買永久授權但無持續更新。" },

{ id:"office-001", cat:"office", difficulty:2,
  q:"在 Word 中，若希望新文件的段落預設為「首行縮排」，應如何設定？",
  options:["每次手動按空白鍵", "設定頁首頁尾", "修改內文樣式的段落縮排設定", "調整頁面邊界"], answer:2,
  explain:"將游標置於段落中，於常用索引標籤以右鍵點選內文樣式→修改→段落→縮排選第一行。" },

{ id:"office-002", cat:"office", difficulty:2,
  q:"在 Word 中要顯示垂直尺規，應到哪裡設定？",
  options:["常用 > 顯示", "檢視 > 尺規", "插入 > 尺規", "檔案 > 選項 > 進階，在「顯示」下勾選在整頁模式中顯示垂直尺規"], answer:3,
  explain:"垂直尺規需在檔案 > 選項 > 進階 > 顯示中勾選「在整頁模式中顯示垂直尺規」。" },

{ id:"office-003", cat:"office", difficulty:2,
  q:"在 Word 中，若希望首頁不顯示頁首，應使用哪一項設定？",
  options:["勾選「第一頁不同」", "更改頁面方向", "設定頁面邊界", "刪除頁首"], answer:0,
  explain:"選取頁首後勾選「第一頁不同」即可讓首頁不顯示頁首或頁尾。" },

{ id:"office-004", cat:"office", difficulty:2,
  q:"Word 的「自動目錄」功能主要依據什麼來產生？",
  options:["頁面邊界", "套用的標題樣式與階層", "字體大小", "圖片數量"], answer:1,
  explain:"先設定樣式與階層，Word 即可自動產生目錄，並可修改目錄格式。" },

{ id:"office-005", cat:"office", difficulty:2,
  q:"Word 的「合併列印」功能位於哪一個索引標籤？",
  options:["插入", "設計", "郵件", "校閱"], answer:2,
  explain:"合併列印在「郵件」索引標籤中，可選取收件者並插入合併欄位，用於大量文件。" },

{ id:"office-006", cat:"office", difficulty:3,
  q:"使用 Word 合併列印時，若想找出重複的資料，可使用哪一項功能？",
  options:["追蹤修訂", "拼字檢查", "字數統計", "編輯收件者清單中的「尋找重複值」"], answer:3,
  explain:"在編輯收件者清單時，可利用「尋找重複值」找出重複的資料。" },

{ id:"office-007", cat:"office", difficulty:2,
  q:"在 Word 中要翻譯整份文件，應從哪裡操作？",
  options:["校閱 > 翻譯 > 翻譯文件", "常用 > 語言", "設計 > 主題", "插入 > 文字"], answer:0,
  explain:"校閱 > 翻譯 > 翻譯文件，翻譯後的複本會在個別視窗中開啟。" },

{ id:"office-008", cat:"office", difficulty:2,
  q:"Word 的「聽寫」功能可透過哪一組鍵盤快速鍵開始？",
  options:["Ctrl + Shift + F1", "Alt + F1", "Ctrl + F1", "F12"], answer:1,
  explain:"在啟用麥克風的裝置上登入 Microsoft 365 後，可用 Alt + F1 開始聽寫。" },

{ id:"office-009", cat:"office", difficulty:2,
  q:"在 Word 中要以手寫筆繪製簽名，應使用哪一個索引標籤？",
  options:["插入", "設計", "繪圖", "校閱"], answer:2,
  explain:"在功能區的「繪圖」索引標籤點選手寫筆即可繪製簽名，並可調整粗細與色彩。" },

{ id:"office-010", cat:"office", difficulty:2,
  q:"Word 手寫筆提供幾種筆畫粗細設定？",
  options:["3 種", "16 種", "8 種", "5 種"], answer:3,
  explain:"有五種畫筆粗細設定（約 0.25 至 3.5 公釐），並有十六種實心色彩可供使用。" },

{ id:"office-011", cat:"office", difficulty:3,
  q:"VLOOKUP 函數的語法包含哪四項資訊？",
  options:["查閱值、範圍、欄位號、大約符合或完全符合", "名稱、日期、數量、金額", "儲存格、工作表、公式、格式", "欄、列、值、條件"], answer:0,
  explain:"=VLOOKUP(查閱值, 範圍, 範圍中包含傳回值的欄位號, 大約符合 TRUE 或完全符合 FALSE)。" },

{ id:"office-012", cat:"office", difficulty:3,
  q:"VLOOKUP 要進行「精準搜尋」時，第四個參數應設為？",
  options:["TRUE", "FALSE", "省略", "1"], answer:1,
  explain:"完全符合（精準搜尋）用 FALSE，大約符合（範圍搜尋）用 TRUE。" },

{ id:"office-013", cat:"office", difficulty:2,
  q:"Excel 的「設定格式化的條件」中，「三色色階」的功能是？",
  options:["把數字四捨五入", "將文字轉為三種字體", "依儲存格數值大小以不同顏色深淺呈現", "將表格分為三欄"], answer:2,
  explain:"色階可依值的高低以顏色深淺醒目提示，例如顯示前 10% 與後 10% 的值。" },

{ id:"office-014", cat:"office", difficulty:2,
  q:"建立 Excel 樞紐分析表的正確路徑是？",
  options:["常用 > 格式化", "資料 > 排序", "公式 > 函數", "插入 > 樞紐分析表"], answer:3,
  explain:"選取來源資料後，移至插入 > 樞紐分析表，再選擇放置位置即可建立。" },

{ id:"office-015", cat:"office", difficulty:3,
  q:"為獲得最佳的樞紐分析結果，資料整理應遵循什麼原則？",
  options:["將資料整理為欄而非列，每欄有標題且避免合併儲存格", "盡量使用雙列標題", "將資料整理為列而非欄", "大量使用合併儲存格"], answer:0,
  explain:"乾淨的表格式資料、每欄有唯一非空白標籤、避免雙列標題與合併儲存格，效果最佳。" },

{ id:"office-016", cat:"office", difficulty:2,
  q:"在 Excel 中快速插入「目前日期」的快速鍵是？",
  options:["Ctrl + Shift + ;", "Ctrl + ;", "Ctrl + D", "Ctrl + T"], answer:1,
  explain:"Ctrl + ; 插入目前日期；Ctrl + Shift + ; 插入目前時間。" },

{ id:"office-017", cat:"office", difficulty:2,
  q:"在 Excel 中快速插入「目前時間」的快速鍵是？",
  options:["Alt + ;", "Ctrl + ;", "Ctrl + Shift + ;", "Ctrl + Alt + T"], answer:2,
  explain:"Ctrl + Shift + ; 可插入目前時間，插入的值為靜態值，不會隨重算而變動。" },

{ id:"office-018", cat:"office", difficulty:2,
  q:"Excel 以快速鍵插入的日期屬於哪一種值？",
  options:["動態值，每次開啟都會更新", "公式值", "文字值，不能參與計算", "靜態值，不會隨重新計算或開啟而變更"], answer:3,
  explain:"Excel 擷取目前日期的「快照」插入儲存格，該值不會改變，故視為靜態。" },

{ id:"office-019", cat:"office", difficulty:2,
  q:"在 PowerPoint 中，新增一張投影片的快速鍵是？",
  options:["Ctrl + M", "Ctrl + Shift + N", "Ctrl + N", "Ctrl + P"], answer:0,
  explain:"Ctrl + N 建立新簡報，Ctrl + M 新增投影片。" },

{ id:"office-020", cat:"office", difficulty:2,
  q:"在 PowerPoint 中開始投影片放映的快速鍵是？",
  options:["F7", "F5", "F12", "F2"], answer:1,
  explain:"F5 開始放映；Ctrl + S 儲存簡報、Ctrl + Z 復原、Ctrl + Y 取消復原。" },

{ id:"office-021", cat:"office", difficulty:2,
  q:"PowerPoint 中「復原上一個動作」的快速鍵是？",
  options:["Ctrl + R", "Ctrl + X", "Ctrl + Z", "Ctrl + Y"], answer:2,
  explain:"Ctrl + Z 復原上一個動作，Ctrl + Y 則取消復原。" },

{ id:"office-022", cat:"office", difficulty:2,
  q:"PowerPoint 的「投影片母片」主要功能是？",
  options:["檢查拼字", "插入影片", "錄製旁白", "統一設定整份簡報的版面格式與樣式"], answer:3,
  explain:"母片在相同格式需多處共用時效果最大，一般設定後不需更改，但需懂得何處修改。" },

{ id:"office-023", cat:"office", difficulty:2,
  q:"若要開啟 PowerPoint 的「投影片母片」檢視，應從哪個索引標籤進入？",
  options:["檢視", "插入", "動畫", "設計"], answer:0,
  explain:"在「檢視」索引標籤上選取「投影片母片」即可進入母片檢視。" },

{ id:"office-024", cat:"office", difficulty:2,
  q:"PowerPoint 中「轉場」與「動畫」的差別是？",
  options:["兩者完全相同", "轉場作用於投影片之間，動畫作用於投影片上的物件", "轉場只能用在圖片", "轉場作用於物件，動畫作用於投影片"], answer:1,
  explain:"轉場是投影片之間的切換效果（最常用「淡出」），動畫則是物件本身的進場、出場效果。" },

{ id:"office-025", cat:"office", difficulty:3,
  q:"PowerPoint 的「設計構想（Designer）」功能位於哪個索引標籤？",
  options:["插入", "轉場", "設計", "校閱"], answer:2,
  explain:"選擇功能區上的設計 > Designer，即可隨時取得版面設計構想建議。" },

{ id:"office-026", cat:"office", difficulty:2,
  q:"在 PowerPoint 中插入線上影片（如 YouTube）的路徑是？",
  options:["設計 > 影片", "動畫 > 影片", "插入 > 音訊 > 線上音訊", "插入 > 視訊 > 線上視訊，貼上影片 URL"], answer:3,
  explain:"複製影片 URL 後，於插入 > 視訊 > 線上視訊貼上即可嵌入。" },

{ id:"office-027", cat:"office", difficulty:2,
  q:"PowerPoint 的「錄製」功能可以做到什麼？",
  options:["錄製旁白與畫面，並可匯出為視訊", "只能播放動畫", "只能截圖", "只能錄音"], answer:0,
  explain:"可選「從首張投影片」或「從目前投影片錄製」，並用錄製 > 匯出至視訊分享。" },

{ id:"office-028", cat:"office", difficulty:3,
  q:"PowerPoint 錄製時若要避免背景雜亂，可使用哪一項相機選項？",
  options:["關閉視訊", "模糊背景", "黑白模式", "降低解析度"], answer:1,
  explain:"在相機選項功能表中選取「模糊背景」，可協助避免觀眾分心的背景。" },

{ id:"office-029", cat:"office", difficulty:2,
  q:"Microsoft 365 的雲端訂閱服務，屬於哪一種雲端服務模式？",
  options:["IaaS", "PaaS", "SaaS", "DaaS"], answer:2,
  explain:"Microsoft 365、Google Workspace、Salesforce 等透過瀏覽器存取的軟體應用屬 SaaS。" },

{ id:"office-030", cat:"office", difficulty:2,
  q:"在 Word 中插入頁碼，通常可透過哪一項功能完成？",
  options:["插入 > 圖片", "設計 > 浮水印", "常用 > 編號", "插入 > 頁首或頁尾（部分內建設計含頁碼）"], answer:3,
  explain:"移至插入 > 頁首或頁尾選擇樣式，部分內建設計即包含頁碼。" },

{ id:"office-031", cat:"office", difficulty:2,
  q:"Excel 的「設定格式化的條件」主要用途是？",
  options:["根據條件或準則變更儲存格範圍的外觀", "保護工作表", "自動排序資料", "刪除重複資料"], answer:0,
  explain:"可將符合特定條件的值醒目提示，或讓格式隨每個儲存格值不同而變化。" },

{ id:"office-032", cat:"office", difficulty:3,
  q:"下列哪一項不屬於 Word 常用的應用類型？",
  options:["履歷表", "資料庫查詢語法", "報價單", "封面"], answer:1,
  explain:"Word 常用於封面、報價單、圖冊、表式信函、履歷表、書本／標書等文書處理。" }
);
