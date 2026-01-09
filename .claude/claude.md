# Konst EDM Editor - 專案 Context

> 本文件供 AI 助手閱讀，以了解專案背景與開發規範。

---

## 行為準則（最高優先）

1. **任何改動前必須先詢問確認** - 不要在沒有授權的情況下修改程式碼，避免改掉原本已經確認好的設計
2. **不要刪除 themes/ 資料夾的檔案** - 這些是預留的擴展架構
3. **用戶偏好繁體中文溝通**

---

## 專案概述

### 這是什麼？
**Konst EDM Editor** 是一個 HTML 電子郵件模板編輯器，用於快速生成品牌一致的 EDM（Electronic Direct Mail）。

### 主要用途
- 內部業務開發信
- 行銷品牌宣傳

### 目標用戶
- Konst Tech 內部業務團隊
- 行銷團隊

### 技術需求
- 產出的 EDM 需相容主流郵件客戶端（Gmail、Outlook、Apple Mail 等）
- 採用通用設計原則，確保跨平台顯示一致

---

## 公司背景

### Konst Tech
專注為企業與 AI 新創提供 GPU 算力的供應商，降低部署時間與算力成本。

**核心服務：**
- **Glows.ai** - 自研 AI 雲平台
- **GPU Server 供應** - H100、Pro 6000、L40S、4090 等
- **AIDC 建廠及託管服務**
- **Bare Metal 產品** - GB200、B200、H200、H100 大型集群

**競爭優勢：**
- 比主流三大雲節省 2/3 成本
- 台灣本地機房，符合數據隱私及主權 AI
- 以分鐘計費，彈性調度
- 免費算力點數測試

### Glows.ai 與 Konst Tech 關係
Glows.ai 是 Konst Tech 自研的 AI 雲平台產品。

---

## 專案架構

### 檔案結構
```
EDM/
├── index.html          # 主頁面（編輯器 UI）
├── app.js              # 主應用邏輯（事件、儲存、複製）
├── template.js         # EDM 模板生成器
├── styles.css          # 編輯器樣式
├── js/
│   └── config.js       # 統一配置（主題、社交連結、Footer）
├── themes/             # 主題定義（預留擴展，勿刪除）
│   ├── dark.js
│   ├── light.js
│   ├── sunset.js       # 預留
│   └── newyear.js      # 預留
├── assets/             # 圖片資源
│   ├── black.png       # Dark theme header logo
│   ├── white.png       # Light theme header logo
│   ├── blacklogo.png   # Footer logo（60px）
│   └── iso.png         # ISO 認證圖示（32px）
├── .claude/
│   └── CLAUDE.md       # 本文件
└── CHANGELOG.md        # 更新記錄
```

### 載入順序
```
themes/*.js → config.js（initThemes）→ template.js → app.js
```

### GitHub 倉庫
- **程式碼倉庫**: https://github.com/uscire-08-7/edm-assets （Private）
- **圖片倉庫**: https://github.com/uscire-08-7/static-res （Public）
- **分支**: main
- 圖片資源使用 static-res 的 GitHub raw URL 引用

---

## 設計規範

### Header
| 項目 | 規格 |
|------|------|
| Logo 高度 | 115px |
| Logo padding | 5px 上下 |
| Logo 連結 | https://www.konsttech.ai（必須，避免郵件客戶端顯示下載圖示）|

### Footer 區塊順序（由上至下）
1. 公司願景（置中）
2. Logo（左，60px）+ ISO 認證（右，32px）
3. 公司地址（置中）
4. 社群連結圖示（置中）
5. 保密聲明（置中）
6. 取消訂閱連結（置中）

### Footer 圖示規格
| 項目 | 規格 |
|------|------|
| blacklogo.png | 高度 60px |
| iso.png | 高度 32px |
| blacklogo 連結 | https://www.konsttech.ai |

### 字體與樣式
| 項目 | 規格 |
|------|------|
| Theme 選擇器文字 | Georgia、斜體、1.3rem、無背景框 |
| Body 內文 | Georgia 字體 |
| 標籤 | `text-transform: capitalize`（非 uppercase）|

### 預設值
| 項目 | 值 |
|------|------|
| 預設主題 | Dark |
| Dark theme logo | black.png |
| Light theme logo | white.png |
| 預設願景語言 | English |

### 公司願景文字
| 語言 | 內容 |
|------|------|
| English | Provide world-leading high-performance computing services to build a diverse AI ecosystem. |
| 繁體中文 | 提供引領全球的高性能運算服務，打造多元AI生態系。 |
| 日文 | （未來計劃）|

---

## 開發歷史

### 2026-01-09
- 分離程式碼與圖片倉庫（安全性考量）
  - edm-assets：程式碼倉庫，改為 Private
  - static-res：圖片倉庫，保持 Public（供 EDM 引用）
- 更新所有圖片 URL 指向 static-res

### 2026-01-08
- 新增 Footer 區塊重設計（blacklogo + ISO + 公司願景）
- 新增公司願景多語言選擇器（英文/中文）
- 新增 blacklogo.png 並上傳至 GitHub
- 建立 CHANGELOG.md 進度報告

### 初始版本
- 主題系統（Dark/Light）
- EDM 模板生成與預覽
- 複製 HTML 功能
- LocalStorage 資料儲存

---

## 未來計劃

- [ ] 節慶主題擴展（夕陽、新年、聖誕等）
- [ ] 日文版公司願景
- [ ] 其他語言支援

---

*最後更新：2026-01-09*
