/**
 * Light Theme
 * 白色主題
 * 
 * 這是 Konst EDM Editor 的白色主題設定
 */

const LightTheme = {
    name: 'Light',
    headerBg: '#ffffff',
    headerTextColor: '#1a1a2e',
    bodyBg: '#ffffff',
    bodyTextColor: '#374151',
    ctaBg: 'linear-gradient(135deg, #5C5CE0, #8B5CF6)',
    ctaTextColor: '#ffffff'
};

// Export
if (typeof window !== 'undefined') {
    window.LightTheme = LightTheme;
}
