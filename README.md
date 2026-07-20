# Victor Card 官方首頁

這是一個可直接放到 GitHub Pages 的一頁式網站。

## 內含檔案

- `index.html`：首頁
- `style.css`：黑金版面設計
- `config.js`：所有文字與連結設定
- `script.js`：網站功能
- `favicon.svg`：瀏覽器圖示

## 最重要：先修改 config.js

用記事本開啟 `config.js`，把以下四個 `#` 改成正式網址：

- LINE
- Google 地圖
- Instagram
- Facebook

Google 表單網址已經先放入。

每週換新的報名表單時，只需要修改：

```js
booking: "新的 Google 表單網址"
```

## 上傳到 GitHub Pages

1. 建立 GitHub 帳號並登入。
2. 建立新 Repository，名稱建議：`victorcard-site`
3. 選擇 Public。
4. 將本資料夾內的所有檔案上傳到 Repository 根目錄。
5. 進入 `Settings` → `Pages`
6. 在 `Build and deployment`：
   - Source 選 `Deploy from a branch`
   - Branch 選 `main`
   - Folder 選 `/ (root)`
7. 儲存後等待幾分鐘。

GitHub 會先提供類似：

`https://你的帳號.github.io/victorcard-site/`

## 綁定 victorcard.tw

在 GitHub Repository：

1. 進入 `Settings` → `Pages`
2. 在 `Custom domain` 輸入：`victorcard.tw`
3. 儲存。

接著到 GoDaddy 的 DNS 管理新增 GitHub Pages 所要求的 DNS 紀錄。
等你上傳完成後，再把 GitHub Pages 畫面截圖給 ChatGPT，就能依你的實際畫面一步一步設定。

## 注意

不要把密碼、銀行帳號、身分證資料放進網站檔案。
付款資訊建議仍放在 Google 表單或由官方 LINE 個別通知。
