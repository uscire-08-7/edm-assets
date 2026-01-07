/**
 * Dark Theme
 * 深色主題（目前預設）
 * 
 * 這是 Konst EDM Editor 的深色主題設定
 */

const DarkTheme = {
    name: 'Dark',
    headerBg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f1a 100%)',
    headerTextColor: '#ffffff',
    bodyBg: '#ffffff',
    bodyTextColor: '#374151',
    ctaBg: 'linear-gradient(135deg, #5C5CE0, #8B5CF6)',
    ctaTextColor: '#ffffff'
};

// Export
if (typeof window !== 'undefined') {
    window.DarkTheme = DarkTheme;
}
