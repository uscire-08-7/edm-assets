# Konst EDM Editor - 專案記憶

## 架構
- **主題系統**：使用 `themes/*.js` 作為單一來源，`config.js` 載入並匯出
- 未來會擴展多種節慶主題（夕陽、新年、聖誕等），`themes/` 資料夾的檔案是預留架構，勿建議刪除
- 載入順序：themes/*.js → config.js（initThemes） → template.js → app.js

## 設計偏好
- Theme 選擇器文字：Georgia 字體、斜體、1.3rem、無背景框
- Body 內文：Georgia 字體
- 標籤：使用 `text-transform: capitalize`（非 uppercase）
- Header logo：115px 高度，5px 上下 padding
- Logo 必須包含超連結（https://www.konsttech.ai）避免郵件客戶端顯示下載圖示

## 預設值
- 預設主題：Dark
- Dark theme logo：black.png
- Light theme logo：white.png

## 語言
- 用戶偏好繁體中文溝通
