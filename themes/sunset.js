/**
 * Sunset Theme
 * 夕陽暖色調主題
 *
 * TODO: 待配色確認
 */

const SunsetTheme = {
    id: 'sunset',
    name: 'Sunset',
    enabled: false,  // TODO: 配色確認後啟用

    // Header 樣式
    headerBg: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
    headerTextColor: '#ffffff',
    logoUrl: 'https://raw.githubusercontent.com/uscire-08-7/edm-assets/main/assets/black.png', // TODO: 可能需要專屬 logo

    // Body 樣式
    bodyBg: '#fff8f0',
    bodyTextColor: '#4a3728',

    // CTA 按鈕樣式
    ctaBg: 'linear-gradient(135deg, #ff6b35, #f7931e)',
    ctaTextColor: '#ffffff',

    // 預覽選擇器樣式（用於 Editor UI）
    previewBg: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
    previewTextColor: '#ffffff'
};

// Export
if (typeof window !== 'undefined') {
    window.SunsetTheme = SunsetTheme;
}
