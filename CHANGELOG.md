# Konst EDM Editor - 專案進度報告

## 2026-01-08 更新

### 新增功能

#### 1. Footer 區塊重新設計
- **公司 Logo**：新增 `blacklogo.png` 顯示於 footer 左側（60px）
- **ISO 認證圖示**：移動到 footer 右側（32px）
- **公司願景**：新增多語言支援的公司理念文字區塊

#### 2. 公司願景語言選擇器
- 在 Style tab 新增下拉選單，可切換公司願景語言
- 目前支援語言：
  - English: "Provide world-leading high-performance computing services to build a diverse AI ecosystem."
  - 繁體中文: "提供引領全球的高性能運算服務，打造多元AI生態系。"
- 架構已預留日文等其他語言擴展

### 修改檔案

| 檔案 | 修改內容 |
|------|----------|
| `js/config.js` | 新增 `blackLogoUrl`、`SLOGAN_TEXTS` 多語言配置、`sloganLang` 預設值 |
| `template.js` | 重新設計 Footer 區塊佈局，新增 sloganLang 參數處理 |
| `index.html` | Style tab 新增語言選擇下拉選單 |
| `styles.css` | 新增 select 下拉選單樣式 |
| `app.js` | 新增 `sloganLang` 欄位的讀取、儲存、事件監聽邏輯 |

### 外部資源更新

| 資源 | URL |
|------|-----|
| blacklogo.png | `https://raw.githubusercontent.com/uscire-08-7/static-res/main/assets/blacklogo.png` |

### Footer 區塊結構（由上至下）

```
┌─────────────────────────────────────┐
│     公司願景（置中）                  │
├─────────────────────────────────────┤
│  [Logo 60px]              [ISO 32px]│
├─────────────────────────────────────┤
│     公司地址（置中）                  │
├─────────────────────────────────────┤
│     社群連結圖示（置中）              │
├─────────────────────────────────────┤
│     保密聲明（置中）                  │
├─────────────────────────────────────┤
│     取消訂閱連結（置中）              │
└─────────────────────────────────────┘
```

### 技術細節

- **Logo 連結**：點擊 Logo 可連至 https://www.konsttech.ai
- **語言選擇**：儲存於 LocalStorage，重新整理後保留設定
- **主題相容**：Dark/Light 主題皆支援新 Footer 設計

---

*報告生成日期：2026-01-08*
