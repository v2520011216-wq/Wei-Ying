# 張維媖（ZHANG WEI-YING）個人學術履歷網站

國立臺灣大學歷史學系學士｜臺大建築與城鄉研究所 申請專案

本專案建置於 React 19 + Vite + Tailwind CSS，並已配置 GitHub Actions 自動發布至 **GitHub Pages**。

---

## 🚀 部署至 GitHub Pages 步驟

本專案已為您預先配置好 `base: './'` 與自動構建腳本 `.github/workflows/deploy.yml`。

### 步驟 1：建立 GitHub Repository
1. 登入 [GitHub](https://github.com/) 並點擊右上角的 **New repository**。
2. 設定專案名稱（例如 `academic-cv` 或 `weiying-academic-portfolio`）。
3. 設為 **Public**（公開），點選 **Create repository**。

### 步驟 2：將程式碼推送到 GitHub
如果您是使用電腦上的 Git：
```bash
git init
git add .
git commit -m "Initial commit for academic CV website"
git branch -M main
git remote add origin https://github.com/<您的GitHub帳號>/<您的專案名稱>.git
git push -u origin main
```
*(或者，如果您在 Google AI Studio 右上角選單中點選 **Export to GitHub**，系統會直接幫您推送到指定的 GitHub 儲存庫)*

### 步驟 3：在 GitHub 設定頁開啟 Pages
1. 進入您剛建立的 GitHub 倉庫頁面，點選上方的 **Settings**（設定）。
2. 在左側側邊欄中找到 **Pages**。
3. 在 **Build and deployment** 下方的 **Source** 下拉選單中：
   - 選擇 **GitHub Actions**。
4. 回到倉庫上方的 **Actions** 標籤頁，您會看到名為 `Deploy to GitHub Pages` 的自動化流程正在運行（約 1~2 分鐘）。
5. 流程完成後，頁面頂端將顯示您的專屬網站網址：
   `https://<您的帳號>.github.io/<專案名稱>/`

---

## 💻 本地端開發（Local Development）

```bash
# 安裝相依套件
npm install

# 啟動本地開發伺服器
npm run dev

# 測試靜態檔案打包構建
npm run build
```
