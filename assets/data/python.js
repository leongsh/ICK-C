/* 分類：基礎 Python 知識 (python) — 70 題
   本檔由 tools/rebalance.js 產生，可安全地用管理員介面或批次新增維護。 */
window.SEED_QUESTIONS.push(
{ id:"py-101", cat:"python", difficulty:2,
  q:"在 Python 中執行 print(10 // 3) 的輸出是？",
  options:["3", "3.33", "1", "3.0"], answer:0,
  explain:"// 為整數除法（向下取整），10 // 3 = 3；10 / 3 才是 3.333..." },

{ id:"py-102", cat:"python", difficulty:2,
  q:"在 Python 中執行 print(10 % 3) 的輸出是？",
  options:["3.33", "1", "0", "3"], answer:1,
  explain:"% 為取餘數運算，10 除以 3 餘 1。" },

{ id:"py-103", cat:"python", difficulty:2,
  q:"在 Python 中執行 print(2 ** 3) 的輸出是？",
  options:["5", "9", "8", "6"], answer:2,
  explain:"** 為次方運算，2 的 3 次方等於 8。" },

{ id:"py-104", cat:"python", difficulty:3,
  q:"在 Python 中執行 print(5 << 1) 的輸出是？",
  options:["5", "2", "25", "10"], answer:3,
  explain:"<< 為左移運算，5（0101）左移一位變 1010，即 10，相當於乘以 2。" },

{ id:"py-105", cat:"python", difficulty:3,
  q:"在 Python 中執行 print(8 >> 2) 的輸出是？",
  options:["2", "4", "6", "16"], answer:0,
  explain:">> 為右移運算，8（1000）右移兩位變 10，即 2，相當於除以 4。" },

{ id:"py-106", cat:"python", difficulty:2,
  q:"下列哪一種 Python 資料型別是「不可變（immutable）」的？",
  options:["dict", "tuple", "list", "set"], answer:1,
  explain:"tuple（元組）建立後不可修改；list、dict、set 都是可變的。" },

{ id:"py-107", cat:"python", difficulty:2,
  q:"Python 中字典（dict）的資料是以什麼形式儲存？",
  options:["有序數字索引", "布林值", "鍵值對（key-value）", "單一數值"], answer:2,
  explain:"字典以鍵值對儲存，透過鍵（key）快速取得對應的值（value）。" },

{ id:"py-108", cat:"python", difficulty:3,
  q:"Python 中 set（集合）的特點是？",
  options:["必須是數字", "有固定順序", "元素可重複", "元素不重複且無序，適合去重與集合運算"], answer:3,
  explain:"集合自動去除重複元素，並支援交集、聯集、差集等運算。" },

{ id:"py-109", cat:"python", difficulty:2,
  q:"Python 中 len([1, 2, 3, 4]) 的結果是？",
  options:["4", "10", "5", "3"], answer:0,
  explain:"len() 回傳序列的元素個數，此列表有 4 個元素。" },

{ id:"py-110", cat:"python", difficulty:2,
  q:"Python 中 'Hello'.upper() 的結果是？",
  options:["hello", "HELLO", "hELLO", "Hello"], answer:1,
  explain:"upper() 將字串轉為全大寫；lower() 則轉為全小寫。" },

{ id:"py-111", cat:"python", difficulty:2,
  q:"Python 中 'a,b,c'.split(',') 的結果是？",
  options:["{'a','b','c'}", "'abc'", "['a', 'b', 'c']", "('a','b','c')"], answer:2,
  explain:"split() 依指定分隔符把字串切成列表。" },

{ id:"py-112", cat:"python", difficulty:3,
  q:"Python 中 ','.join(['a','b','c']) 的結果是？",
  options:["['a','b','c']", "('a','b','c')", "'abc'", "'a,b,c'"], answer:3,
  explain:"join() 以指定字串為分隔符，把序列中的字串連接成一個字串。" },

{ id:"py-113", cat:"python", difficulty:3,
  q:"Python 中 list.append() 與 list.extend() 的差別是？",
  options:["append 加入單一元素，extend 把可迭代物件的元素逐一加入", "append 只能加數字", "兩者完全相同", "extend 只能加字串"], answer:0,
  explain:"append 把整個物件當一個元素加入；extend 則展開後逐項加入。" },

{ id:"py-114", cat:"python", difficulty:3,
  q:"Python 中 sorted(list) 與 list.sort() 的差別是？",
  options:["兩者都回傳新列表", "sorted 回傳新列表，sort 直接修改原列表", "sorted 只能排數字", "sort 會回傳新列表"], answer:1,
  explain:"sorted() 是內建函式，回傳排序後的新列表；list.sort() 是方法，就地排序並回傳 None。" },

{ id:"py-115", cat:"python", difficulty:2,
  q:"Python 中 dict.get('key', 0) 的第二個參數作用是？",
  options:["刪除鍵", "設定鍵的值", "當鍵不存在時回傳的預設值", "排序鍵"], answer:2,
  explain:"get() 可避免鍵不存在時拋出 KeyError，改為回傳指定的預設值。" },

{ id:"py-116", cat:"python", difficulty:2,
  q:"Python 中 range(5) 產生的序列是？",
  options:["1,2,3,4,5", "0,1,2,3,4,5", "5", "0,1,2,3,4"], answer:3,
  explain:"range(5) 從 0 開始、不含 5，共 5 個數字。" },

{ id:"py-117", cat:"python", difficulty:3,
  q:"Python 中 range(1, 10, 2) 產生的序列是？",
  options:["1,3,5,7,9", "2,4,6,8,10", "1,2,3,...,10", "1,10"], answer:0,
  explain:"range(起, 迄, 間隔) 從 1 開始、每次加 2、不含 10。" },

{ id:"py-118", cat:"python", difficulty:2,
  q:"Python 迴圈中的 break 與 continue 差別是？",
  options:["continue 結束迴圈", "break 結束整個迴圈，continue 跳過本次進入下一次", "break 只跳一次", "兩者相同"], answer:1,
  explain:"break 立即離開迴圈；continue 略過本次剩餘程式碼，直接進入下一輪。" },

{ id:"py-119", cat:"python", difficulty:2,
  q:"Python 中 if / elif / else 的執行邏輯是？",
  options:["只執行 else", "隨機執行一個分支", "由上而下判斷，第一個成立的條件執行後即跳過其餘分支", "所有分支都會執行"], answer:2,
  explain:"條件由前而後依序判斷，命中一個分支後其餘分支不再執行。" },

{ id:"py-120", cat:"python", difficulty:3,
  q:"Python 中 lambda 的用途是？",
  options:["匯入模組", "定義類別", "宣告變數", "建立簡短的匿名函數"], answer:3,
  explain:"lambda 參數: 運算式，可建立單一運算式的匿名函數，常搭配 map、filter、sorted 使用。" },

{ id:"py-121", cat:"python", difficulty:3,
  q:"Python 中列表推導式 [x*x for x in range(4)] 的結果是？",
  options:["[0, 1, 4, 9]", "[1, 4, 9, 16]", "[0, 1, 2, 3]", "[4, 4, 4, 4]"], answer:0,
  explain:"range(4) 為 0~3，平方後得到 [0, 1, 4, 9]。" },

{ id:"py-122", cat:"python", difficulty:2,
  q:"Python 中要匯入整個模組，語法是？",
  options:["using math", "import math", "include math", "require math"], answer:1,
  explain:"import math 匯入整個模組；from math import sqrt 則只匯入特定成員。" },

{ id:"py-123", cat:"python", difficulty:3,
  q:"Python 中 try / except 的用途是？",
  options:["定義函數", "宣告類別", "捕捉並處理程式執行時發生的例外，避免程式崩潰", "加快執行速度"], answer:2,
  explain:"try 區塊放可能出錯的程式碼，except 區塊負責處理對應的例外。" },

{ id:"py-124", cat:"python", difficulty:3,
  q:"Python 中開啟檔案的推薦寫法是？",
  options:["f = read('f.txt')", "open('f.txt')", "file.open('f.txt')", "with open('f.txt', 'r') as f:"], answer:3,
  explain:"with 語句會自動關閉檔案，即使發生例外也能正確釋放資源。" },

{ id:"py-125", cat:"python", difficulty:2,
  q:"Python 中 f-string 的寫法是？",
  options:["f\"姓名：{name}\"", "\"姓名：%name%\"", "\"姓名：$name\"", "\"姓名：{{name}}\""], answer:0,
  explain:"f-string 在字串前加 f，並用大括號嵌入變數或運算式，簡潔易讀。" },

{ id:"py-126", cat:"python", difficulty:2,
  q:"Python 中 type(3.14) 的結果是？",
  options:["<class 'bool'>", "<class 'float'>", "<class 'int'>", "<class 'str'>"], answer:1,
  explain:"含小數點的數字為 float（浮點數）；整數為 int。" },

{ id:"py-127", cat:"python", difficulty:3,
  q:"在 Python 中，bool([]) 的結果是？",
  options:["True", "錯誤", "False", "None"], answer:2,
  explain:"空列表、空字串、0、None 等「空值」在布林判斷中皆為 False。" },

{ id:"py-128", cat:"python", difficulty:2,
  q:"Python 中 input() 函式回傳的資料型別是？",
  options:["float", "bool", "int", "str"], answer:3,
  explain:"input() 一律回傳字串，若要當數字使用需用 int() 或 float() 轉換。" },

{ id:"py-129", cat:"python", difficulty:3,
  q:"Python 中 str(123) 的作用是？",
  options:["把整數 123 轉為字串 '123'", "四捨五入", "計算長度", "把字串轉為整數"], answer:0,
  explain:"str() 進行型別轉換；int('123') 則是反向把字串轉成整數。" },

{ id:"py-130", cat:"python", difficulty:3,
  q:"Python 中若縮排不一致，最可能出現哪一種錯誤？",
  options:["TypeError", "IndentationError", "KeyError", "NameError"], answer:1,
  explain:"Python 以縮排界定程式碼區塊，縮排不一致會引發 IndentationError。" },

{ id:"py-131", cat:"python", difficulty:3,
  q:"Python 中呼叫不存在的變數名稱，會出現哪一種錯誤？",
  options:["IndexError", "ValueError", "NameError", "SyntaxError"], answer:2,
  explain:"使用未定義的名稱會拋出 NameError；索引超出範圍則是 IndexError。" },

{ id:"py-132", cat:"python", difficulty:3,
  q:"Python 中存取列表超出範圍的索引，會出現哪一種錯誤？",
  options:["KeyError", "TypeError", "NameError", "IndexError"], answer:3,
  explain:"列表索引超出範圍拋出 IndexError；字典鍵不存在則拋出 KeyError。" },

{ id:"py-133", cat:"python", difficulty:2,
  q:"Python 中定義函數時，若要回傳計算結果應使用哪個關鍵字？",
  options:["return", "output", "print", "yield"], answer:0,
  explain:"return 把結果交回呼叫者；print 只是輸出到畫面，不會回傳值。" },

{ id:"py-134", cat:"python", difficulty:3,
  q:"Python 函數定義 def greet(name='訪客') 中的 '訪客' 是？",
  options:["必填參數", "參數的預設值", "全域變數", "回傳值"], answer:1,
  explain:"設定預設值後，呼叫時若未提供該參數即使用預設值。" },

{ id:"py-135", cat:"python", difficulty:3,
  q:"Python 中要同時取得字典的鍵與值進行遍歷，應使用？",
  options:["for v in d.values():", "for d in dict:", "for k, v in d.items():", "for k in d:"], answer:2,
  explain:"items() 回傳鍵值對，可同時解包為鍵與值。" },

{ id:"py-136", cat:"python", difficulty:3,
  q:"Python 中 sorted(['banana','apple','cherry']) 的結果是？",
  options:["['banana', 'apple', 'cherry']", "['cherry', 'banana', 'apple']", "原列表不變", "['apple', 'banana', 'cherry']"], answer:3,
  explain:"sorted() 依字串的字典序遞增排序並回傳新列表。" },

{ id:"py-137", cat:"python", difficulty:3,
  q:"Python 中執行 print('3' + '4') 的輸出是？",
  options:["34", "'34'", "7", "錯誤"], answer:0,
  explain:"兩個字串相加是字串串接，結果為 '34'；若要相加數字需先轉型。" },

{ id:"py-138", cat:"python", difficulty:3,
  q:"Python 中執行 print(7 / 2) 的輸出是？",
  options:["3.0", "3.5", "4", "3"], answer:1,
  explain:"/ 為浮點除法，結果為 3.5；若要取整數商需使用 //。" },

{ id:"py-001", cat:"python", difficulty:1,
  q:"Python 使用什麼方式來定義程式碼區塊（如 if、for 的內容）？",
  options:["begin / end", "小括號 ()", "縮排", "大括號 {}"], answer:2,
  explain:"Python 以縮排定義程式碼區塊，慣例上使用 4 個空格。" },

{ id:"py-002", cat:"python", difficulty:1,
  q:"在 Python 中，單行註釋使用什麼符號開頭？",
  options:["--", "/*", "//", "#"], answer:3,
  explain:"Python 使用 # 添加單行註釋；// 是 JavaScript 的單行註釋。" },

{ id:"py-003", cat:"python", difficulty:1,
  q:"在 Python 中定義函數使用哪一個關鍵字？",
  options:["def", "func", "define", "function"], answer:0,
  explain:"Python 使用 def 關鍵字定義函數，例如 def add(a, b): return a + b。" },

{ id:"py-004", cat:"python", difficulty:2,
  q:"下列哪一項在 Python 中屬於「可變的有序集合」？",
  options:["tuple", "list（列表）", "int", "str"], answer:1,
  explain:"列表（list）是 Python 中可變的有序集合，可新增、刪除或修改元素。" },

{ id:"py-005", cat:"python", difficulty:2,
  q:"二進制是一種基數為多少的數位系統？",
  options:["16", "8", "2", "10"], answer:2,
  explain:"二進制基數為 2，僅使用 0 和 1，例如十進制的 2 在二進制中表示為 10。" },

{ id:"py-006", cat:"python", difficulty:2,
  q:"在 Python 中執行 print(5 & 3)，輸出結果是？",
  options:["7", "8", "6", "1"], answer:3,
  explain:"& 為 AND 位運算：0101 AND 0011 = 0001，即 1。" },

{ id:"py-007", cat:"python", difficulty:2,
  q:"在 Python 中執行 print(5 | 3)，輸出結果是？",
  options:["7", "8", "1", "6"], answer:0,
  explain:"| 為 OR 位運算：0101 OR 0011 = 0111，即 7。" },

{ id:"py-008", cat:"python", difficulty:2,
  q:"在 Python 中執行 print(5 ^ 3)，輸出結果是？",
  options:["1", "6", "8", "7"], answer:1,
  explain:"^ 為 XOR 位運算：0101 XOR 0011 = 0110，即 6。" },

{ id:"py-009", cat:"python", difficulty:3,
  q:"下列哪一個位運算符號在 Python 中代表 XOR？",
  options:["|", "&", "^", "~"], answer:2,
  explain:"& 為 AND、| 為 OR、^ 為 XOR、~ 為按位取反。" },

{ id:"py-010", cat:"python", difficulty:2,
  q:"用於高效處理大型多維數組和矩陣的 Python 函式庫是？",
  options:["Matplotlib", "Requests", "Pandas", "NumPy"], answer:3,
  explain:"NumPy 專注於多維數組與矩陣運算；Pandas 側重數據清理與分析。" },

{ id:"py-011", cat:"python", difficulty:2,
  q:"用於數據清理與分析、提供 DataFrame 結構的函式庫是？",
  options:["Pandas", "TensorFlow", "Scikit-learn", "NumPy"], answer:0,
  explain:"Pandas 提供數據清理和分析的數據結構與工具，核心為 DataFrame。" },

{ id:"py-012", cat:"python", difficulty:2,
  q:"提供各種演算法與工具進行數據挖掘和數據分析的函式庫是？",
  options:["NLTK", "Scikit-learn", "Matplotlib", "Requests"], answer:1,
  explain:"Scikit-learn 提供機器學習演算法與工具；Matplotlib 則負責資料視覺化。" },

{ id:"py-013", cat:"python", difficulty:2,
  q:"用於繪製各種圖形和視覺化數據的 Python 函式庫是？",
  options:["NumPy", "Selenium", "Matplotlib", "Pandas"], answer:2,
  explain:"Matplotlib 用於繪製圖形與視覺化數據。" },

{ id:"py-014", cat:"python", difficulty:2,
  q:"用於向 Web 伺服器發送 HTTP 請求並處理回應的函式庫是？",
  options:["Selenium", "Flask", "Beautiful Soup", "Requests"], answer:3,
  explain:"Requests 用於發送 HTTP 請求與處理回應，是網頁爬蟲常用工具之一。" },

{ id:"py-015", cat:"python", difficulty:2,
  q:"用於從 HTML 和 XML 文件中提取數據的函式庫是？",
  options:["Beautiful Soup", "Requests", "NumPy", "Django"], answer:0,
  explain:"Beautiful Soup 專門解析 HTML／XML 並提取數據，常與 Requests 搭配使用。" },

{ id:"py-016", cat:"python", difficulty:3,
  q:"下列哪一項是輕量級的網頁伺服器與網站框架？",
  options:["TensorFlow", "Flask", "NLTK", "Django"], answer:1,
  explain:"Flask 是輕量級框架；Django 則是功能較完整的高級 Web 框架。" },

{ id:"py-017", cat:"python", difficulty:2,
  q:"用於自然語言處理（如分類、詞幹提取、標記、解析）的函式庫是？",
  options:["PyTorch", "Selenium", "NLTK", "NumPy"], answer:2,
  explain:"NLTK（Natural Language Toolkit）支援分類、詞幹提取、標記、解析與語義推理。" },

{ id:"py-018", cat:"python", difficulty:2,
  q:"Jupyter Notebook 的主要特點是？",
  options:["是一種資料庫", "只能執行 Python 腳本", "是一種作業系統", "開源的 Web 應用，可建立包含程式碼、方程、視覺化與文本的文檔"], answer:3,
  explain:"Jupyter Notebook 允許建立與分享同時包含程式碼、方程、視覺化與文本的互動式文檔。" },

{ id:"py-019", cat:"python", difficulty:2,
  q:"下列哪兩個是主流的深度學習框架？",
  options:["TensorFlow 與 PyTorch", "Flask 與 Django", "NumPy 與 Pandas", "Requests 與 Selenium"], answer:0,
  explain:"TensorFlow 與 PyTorch 皆為開源的深度學習／機器學習框架。" },

{ id:"py-020", cat:"python", difficulty:2,
  q:"Python 可用於下列哪些領域？",
  options:["僅能做網站開發", "資料分析與人工智慧、網站開發、自動化與爬蟲、科學計算、遊戲開發", "僅能做資料分析", "僅能做自動化腳本"], answer:1,
  explain:"Python 應用極廣，涵蓋 AI、Web 開發、爬蟲自動化、科學計算與遊戲圖形開發等。" },

{ id:"py-021", cat:"python", difficulty:2,
  q:"在 Python 中，下列哪一種寫法可以正確註解多行程式碼？",
  options:["使用 <!-- --> 包住", "使用 ## 開頭", "使用三個連續引號包住文字", "使用 // 開頭"], answer:2,
  explain:"Python 沒有專用多行註釋符號，慣例上用三個引號的字串來達成。" },

{ id:"py-022", cat:"python", difficulty:2,
  q:"下列哪一項是 Python 中用於條件判斷的語句？",
  options:["class", "import", "def", "if"], answer:3,
  explain:"if 用於條件判斷；def 定義函數、import 匯入模組、class 定義類別。" },

{ id:"py-023", cat:"python", difficulty:2,
  q:"Python 中的 for 迴圈與 while 迴圈的主要差別是？",
  options:["for 常用於遍歷序列，while 依條件重複執行", "for 只能執行一次", "while 不能中斷", "兩者完全相同"], answer:0,
  explain:"for 迴圈常用於遍歷序列（如列表），while 迴圈則在條件為真時重複執行。" },

{ id:"py-024", cat:"python", difficulty:3,
  q:"Python 中 print(12 & 10) 的輸出結果是？",
  options:["2", "8", "6", "14"], answer:1,
  explain:"12 = 1100、10 = 1010，AND 運算得 1000（二進位）= 8。" },

{ id:"py-025", cat:"python", difficulty:3,
  q:"Python 中 print(6 ^ 3) 的輸出結果是？",
  options:["2", "9", "5", "3"], answer:2,
  explain:"6 = 110、3 = 011，XOR 得 101（二進位）= 5。" },

{ id:"py-026", cat:"python", difficulty:2,
  q:"下列哪一個不是 Python 的基本資料類型？",
  options:["int（整數）", "str（字串）", "float（浮點數）", "pointer（指標）"], answer:3,
  explain:"Python 常見基本類型有 int、float、str、bool 等，並無 C 語言式的指標類型。" },

{ id:"py-027", cat:"python", difficulty:2,
  q:"Python 中被稱為「高級的 Web 框架，可快速開發安全和可維護的網站」的是？",
  options:["Django", "Bottle", "Flask", "FastAPI"], answer:0,
  explain:"Django 為高級 Web 框架，內建許多功能，可快速開發安全且可維護的網站。" },

{ id:"py-028", cat:"python", difficulty:3,
  q:"用於建立網絡爬蟲的高效框架是？",
  options:["Matplotlib", "Selenium", "Pandas", "NLTK"], answer:1,
  explain:"Selenium 可驅動瀏覽器，常用於建立需要模擬操作的網絡爬蟲。" },

{ id:"py-029", cat:"python", difficulty:2,
  q:"在 Python 中，變數 x = 10、y = '20'，執行 x + y 的結果是？",
  options:["20", "30（數字）", "1020（字串）", "錯誤"], answer:2,
  explain:"數字與字串相加會進行字串串接，結果為字串 1020。" },

{ id:"py-030", cat:"python", difficulty:2,
  q:"Python 縮排慣例上使用幾個空格？",
  options:["3 個", "8 個", "2 個", "4 個"], answer:3,
  explain:"Python 慣例使用 4 個空格進行縮排，以定義程式碼區塊。" },

{ id:"py-031", cat:"python", difficulty:3,
  q:"Python 中 print(9 | 6) 的輸出結果是？",
  options:["15", "0", "7", "14"], answer:0,
  explain:"9 = 1001、6 = 0110，OR 運算得 1111（二進位）= 15。" },

{ id:"py-032", cat:"python", difficulty:2,
  q:"下列哪一項最適合用 Python 的 Pandas 處理？",
  options:["發送 HTTP 請求", "讀取 CSV 並進行資料清理與統計", "訓練深度神經網絡", "渲染 3D 遊戲畫面"], answer:1,
  explain:"Pandas 擅長表格型資料的讀取、清理、篩選與統計分析。" }
);
