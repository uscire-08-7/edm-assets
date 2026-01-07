/**
 * New Year Theme
 * 新年主題（春節風格）
 * 
 * TODO: 待配色確認
 * 這是 Konst EDM Editor 的新年主題設定
 */

const NewYearTheme = {
    name: 'New Year',
    // TODO: 待配色確認
    headerBg: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 100%)',
    headerTextColor: '#ffd700',
    bodyBg: '#fff5f5',
    bodyTextColor: '#4a1c1c',
    ctaBg: 'linear-gradient(135deg, #c41e3a, #8b0000)',
    ctaTextColor: '#ffd700'
};

// Export
if (typeof window !== 'undefined') {
    window.NewYearTheme = NewYearTheme;
}
