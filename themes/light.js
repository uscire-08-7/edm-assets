/**
 * Light Theme
 * 白色主題
 */

const LightTheme = {
    id: 'light',
    name: 'Light',
    enabled: true,  // 是否在 UI 中顯示

    // Header 樣式
    headerBg: '#f8f9fa',
    headerTextColor: '#1a1a2e',
    logoUrl: 'https://raw.githubusercontent.com/uscire-08-7/edm-assets/main/assets/white.png',

    // Body 樣式
    bodyBg: '#ffffff',
    bodyTextColor: '#374151',

    // CTA 按鈕樣式
    ctaBg: 'linear-gradient(135deg, #5C5CE0, #8B5CF6)',
    ctaTextColor: '#ffffff',

    // 預覽選擇器樣式（用於 Editor UI）
    previewBg: '#ffffff',
    previewTextColor: '#1a1a2e'
};

// Export
if (typeof window !== 'undefined') {
    window.LightTheme = LightTheme;
}
