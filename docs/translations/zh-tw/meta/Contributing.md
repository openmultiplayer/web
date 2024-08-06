---
title: 提交貢獻
description: 如何給SA-MP Wiki和open.mp的說明文件提交貢獻。
---

這份說明文件是開放給任何人參與修改的！你只需要有一個 [GitHub](https://github.com) 帳號和一些空閒時間。你甚至不需要學習使用 Git，你可以全部在網頁界面上進行！

如果你想要幫助維護某個特定語言，請對 [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) 說明文件發起一個 PR，並加入一行你的語言目錄和你的使用者名稱。

## 編輯內容

在每個頁面上，都有一個按鈕可以讓你前往 GitHub 的編輯頁面：

![在每個 wiki 頁面上都有「編輯此頁面」連結](images/contributing/edit-this-page.png)

例如，在 [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) 頁面上點擊這個按鈕，會帶你前往 [這個頁面](https://github.com/openmultiplayer/web/blob/master/docs/scripting/functions/SetVehicleAngularVelocity.md)，讓你透過文字編輯器修改檔案（假設你已經登入 GitHub）。

修改你要的內容後，提交一個「拉取請求」（Pull Request），這樣 Wiki 維護人員和其他社群成員就可以檢查你的更改，討論是否需要進一步的修改，然後合併它。

## 新增內容

新增內容需要多花點功夫。你可以有兩個方法：

### 透過 GitHub 網頁界面新增

當你在 GitHub 上瀏覽某個目錄時，檔案列表右上角會有一個「Add file」按鈕：

![「新增檔案」按鈕](images/contributing/add-new-file.png)

你可以直接上傳你已經寫好的 Markdown 檔案，或是在 GitHub 的文字編輯器中直接撰寫。

這個檔案必須要有 `.md` 的檔案副檔名，並且內容是 Markdown 語法。如果你想更深入了解 Markdown，可以參考[這份指南](https://guides.github.com/features/mastering-markdown/)。

完成後，按下「Propose new file」就會開啟一個拉取請求，等待審查。

### Git

如果你想使用 Git，你只需要使用以下命令克隆 Wiki 存儲庫：

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

使用你喜歡的編輯器打開它。我建議使用 Visual Studio Code，因為它具有編輯和格式化 Markdown 文件的出色工具。正如你所看到的，我正在使用 Visual Studio Code 創建這篇文章！

![Visual Studio Code markdown preview](images/contributing/vscode.png)

我建議你使用兩個擴展程序，讓你的體驗更好：

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)，由 David Anson 開發--這是一個擴展程序，可以確保你的 Markdown 正確格式化。它可以避免一些語法和語意上的錯誤。並不是所有的警告都很重要，但有些可以提高可讀性。請適當地使用最佳判斷力，如有疑問，請向審查者詢問！
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)，由 Prettier.js 團隊開發--這是一個格式化程序，可以自動格式化你的 Markdown 文件，以便它們都使用一致的風格。Wiki 存儲庫的 `package.json` 中有一些設置，擴展程序應該自動使用這些設置。請確保在你的編輯器設置中啟用"保存時格式化"，這樣每次保存時你的 Markdown 文件都會自動格式化！

## 注意事項、提示和約定

### 內部鏈接

不要使用絕對 URL 進行站內鏈接。使用相對路徑。

- ❌

  ```md
  和 [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer) 搭配使用
  ```

- ✔

  ```md
  和 [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer) 搭配使用
  ```

`../` 表示"返回上一級目錄"，因此如果你正在編輯的文件位於"functions"目錄中，並且你要鏈接到"callbacks"，則使用 `../` 返回到"scripting/"，然後進入 callbacks 目錄，最後輸入你想要鏈接的回調函數的文件名（不包括 `.md`）。

### 圖片

圖片需要放在 `/static/images` 目錄下的子目錄中。當你在 `![]()` 中連結圖片時，只需使用 `/images/` 作為基本路徑（不需要使用 `static`，因為那只是用於存儲庫）。

如果不確定，請閱讀另一個使用圖片的頁面，並複製其中的操作。

### 元資料

在 _任何_ 文件中，都應該首先是元資料：

```mdx
---
title: 我的文件
description: 這是一個關於CJ、BigSmoke和火車的頁面，耶！
---
```

每個頁面都應包含標題和描述。

有關可以放在 `---` 之間的完整列表，請參閱[Docusaurus說明文件](https://v2.docusaurus.io/docs/markdown-features#markdown-headers)。

### 標題

不要使用 `#` 創建一級標題（`<h1>`），因為這是自動生成的。你的第一個標題應始終是 `##`。

- ❌

  ```md
  # 我的標題

  這是關於...的文件

  # 子章節
  ```

- ✔

  ```md
  這是關於...的文件

  ## 子章節
  ```

### 使用 `Code` 碼片段進行技術參考

當撰寫包含函數名稱、數字、表達式或任何不是標準書面語言的內容時，將它們用 \`反引號\` 括起來。這有助於區分用於描述事物的語言和用於描述技術要素（例如函數名稱和代碼片段）的語言。

- ❌

  > fopen 函数將返回一個類型為 File: 的標記值，在這一行上沒有問題，因為返回值也被存儲到具有 File: 標記的變量中（注意大小寫也相同）。然而，在下一行中，值 4 被添加到文件處理程序上。4 沒有標記 [...]

- ✔

  > `fopen` 函数將返回一個類型為 `File:` 的標記值，在這一行上沒有問題，因為返回值也被存儲到具有 `File:` 標記的變量中（注意大小寫也相同）。然而，在下一行中，值 `4` 被添加到文件處理程序上。`4` 沒有標記

在上述示例中，`fopen` 是一個函數名稱，而不是英文單詞，因此將其與 `code` 碼片段標記括起來有助於區分它與其他內容。

此外，如果該段落參考一個示例代碼塊，這有助於讀者將詞語與示例關聯起來。

### 表格

如果表格有標題，它們應該放在頂部：

- ❌

  ```md
  |         |                                      |
  | ------- | ------------------------------------ |
  | 耐久度  | 引擎狀態                             |
  | 650     | 未受損                              |
  | 650-550 | 白煙                                 |
  | 550-390 | 灰煙                                 |
  | 390-250 | 黑煙                                 |
  | < 250   | 著火（幾秒後將爆炸）                 |
  ```

- ✔

  ```md
  | 耐久度  | 引擎狀態                             |
  | ------- | ------------------------------------ |
  | 650     | 未受損                              |
  | 650-550 | 白煙                                 |
  | 550-390 | 灰煙                                 |
  | 390-250 | 黑煙                                 |
  | < 250   | 著火（幾秒後將爆炸）                 |
  ```

## 從SA-MP Wiki遷移

大部分內容已經移植，但如果你發現缺少一個頁面，這是一個將內容轉換為Markdown的簡短指南。

### 獲取HTML

1. 點擊此按鈕

   (Firefox)

   ![image](images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](images/contributing/f62bb8112543.png)

2. 懸停在主Wiki頁面的左邊邊緣或角落，直到看到 `#content`

   ![image](images/contributing/65761ffbc429.png)

   或搜尋 `<div id=content>`

   ![image](images/contributing/77befe2749fd.png)

3. 複製該元素的內部HTML

   ![image](images/contributing/8c7c75cfabad.png)

   現在你只有實際內容的 HTML 代碼，我們關心的部分，可以轉換為Markdown。

### 將HTML轉換為Markdown

要將基本HTML（沒有表格）轉換為Markdown，請使用：

https://mixmark-io.github.io/turndown/

![image](images/contributing/77f4ea555bbb.png)

^^ 注意，現在它完全弄壞了表格...

### HTML表格轉換為Markdown表格

因為上述工具不支持表格，所以使用此工具：

https://jmalarcon.github.io/markdowntables/

只需將 `<table>` 元素複製到其中：

![image](images/contributing/57f171ae0da7.png)

### 清理

轉換可能不會完美。因此，你需要進行一些手動清理工作。上面列出的格式擴展應有助於這方面，但你可能仍然需要花時間進行手動編輯。

如果沒有時間，別擔心！提交一份未完成的草稿，其他人可以接手！ 

## 授權協議

所有 open.mp 項目都有一份 [貢獻者授權協議](https://cla-assistant.io/openmultiplayer/homepage)。這基本上意味著你同意讓我們使用你的工作，並將其置於開源許可證下。第一次提交拉取請求時，CLA-Assistant 機器人會發布一個鏈接，你可以在那裡簽署協議。
