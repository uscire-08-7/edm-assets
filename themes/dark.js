/**
 * Dark Theme
 * 深色主題（預設）
 */

const DarkTheme = {
    id: 'dark',
    name: 'Dark',
    enabled: true,  // 是否在 UI 中顯示

    // Header 樣式
    headerBg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f1a 100%)',
    headerTextColor: '#ffffff',
    logoUrl: 'https://raw.githubusercontent.com/uscire-08-7/static-res/main/assets/black.png',

    // Body 樣式
    bodyBg: '#ffffff',
    bodyTextColor: '#374151',

    // CTA 按鈕樣式
    ctaBg: 'linear-gradient(135deg, #5C5CE0, #8B5CF6)',
    ctaTextColor: '#ffffff',

    // 預覽選擇器樣式（用於 Editor UI）
    previewBg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f1a 100%)',
    previewTextColor: '#ffffff'
};

// Export
if (typeof window !== 'undefined') {
    window.DarkTheme = DarkTheme;
}
