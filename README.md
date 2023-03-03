# 短址產生器
本專案是已 Express + MongoDB 完成的短網址產生器。使用者可以將長度較長的目標網址轉換為短址，而產生的短址可以將使用者導向目標網址。

## 產品功能
- 使用者可以在首頁輸入指定網址，按下 "縮址" 按鈕，將指定網址轉換成短網址
- 在伺服器運作的期間，使用短網址可以將頁面導向原本的網站(轉換前的網址)
- 使用者在顯示短網址的頁面中，直接點擊短網址，可以直接導向原本的網站(轉換前的網址)
- 使用者在顯示短網址的頁面中，點下 "copy" 按鈕，可以將短網址複製到剪貼簿
- 使用者可以點選畫面中標題下方的連結圖片回到首頁


## 使用工具
1. Node.js v12.22.12
2. Express v4.16.4
3. Express-Handlebars v3.0.0
4. Bootstrap v5.3
5. Visual Studio Code
6. Robo 3T v1.4
7. Mongoose v5.9.7
8. dotenv v16.0.3
9. MongoDB Atlas

## 安裝流程
1. 開啟終端機(Terminal)，使用指令 `cd` 移動到想安裝檔案的位置
```
cd <想安裝檔案的路徑>
```
2. 執行 `git clone` 指令，下載檔案
```
git clone https://github.com/av124773/url_shortener.git
```
3. 下載完成後，移動至專案資料夾內，使用 `npm install` 安裝需要的套件
```
cd url_shortener
npm install
```
4. 完成後輸入指令執行專案
```
npm run start
```
5. 專案啟動成功會以下的文字提示
```
This app is running on port: 3001.
mongoose connected!
```
6. 打開瀏覽器輸入網址[http://localhost:3001](http://localhost:3001)
 
## 執行錯誤解決方法
如果執行後發生以下錯誤
```
Error [MongooseError]: The `uri` parameter to `openUri()` must be a string, 
got "undefined". Make sure the first parameter to `mongoose.connect()` or 
`mongoose.createConnection()` is a string.
```
可能是因為沒有將資料庫連結設定至環境變數，這時請在專案資料夾中新增檔案 `.env`
```
touch .env
```
使用 VScode 或記事本開啟，在檔案中加入資料庫連結，例如：
```
MONGODB_URI=mongodb+srv://<帳號>:<密碼>@cluster0.n3idk03.mongodb.net/<資料庫名稱>?retryWrites=true&w=majority
```
 