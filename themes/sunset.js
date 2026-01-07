/**
 * Sunset Theme
 * 暖色調主題
 * 
 * TODO: 待配色確認
 * 這是 Konst EDM Editor 的 Sunset 主題設定
 */

const SunsetTheme = {
    name: 'Sunset',
    // TODO: 待配色確認
    headerBg: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
    headerTextColor: '#ffffff',
    bodyBg: '#fff8f0',
    bodyTextColor: '#4a3728',
    ctaBg: 'linear-gradient(135deg, #ff6b35, #f7931e)',
    ctaTextColor: '#ffffff'
};

// Export
if (typeof window !== 'undefined') {
    window.SunsetTheme = SunsetTheme;
}
