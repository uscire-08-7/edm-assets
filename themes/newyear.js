/**
 * New Year Theme
 * 新年主題（春節風格）
 *
 * TODO: 待配色確認
 */

const NewYearTheme = {
    id: 'newyear',
    name: 'New Year',
    enabled: false,  // TODO: 配色確認後啟用

    // Header 樣式
    headerBg: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 100%)',
    headerTextColor: '#ffd700',
    logoUrl: 'https://raw.githubusercontent.com/uscire-08-7/edm-assets/main/assets/black.png', // TODO: 可能需要專屬 logo

    // Body 樣式
    bodyBg: '#fff5f5',
    bodyTextColor: '#4a1c1c',

    // CTA 按鈕樣式
    ctaBg: 'linear-gradient(135deg, #c41e3a, #8b0000)',
    ctaTextColor: '#ffd700',

    // 預覽選擇器樣式（用於 Editor UI）
    previewBg: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 100%)',
    previewTextColor: '#ffd700'
};

// Export
if (typeof window !== 'undefined') {
    window.NewYearTheme = NewYearTheme;
}
