/**
 * Konst EDM Editor - Configuration
 *
 * 集中管理配置：從 themes/*.js 載入主題，統一管理社交連結和 Footer
 */

// ===================================
// Theme Configurations
// 從 themes/*.js 載入（需先載入各主題文件）
// ===================================
const THEMES = {};

// 註冊主題函數 - 供 themes/*.js 使用
function registerTheme(theme) {
    if (theme && theme.id) {
        THEMES[theme.id] = theme;
    }
}

// 初始化時載入已定義的主題
function initThemes() {
    // 檢查並註冊各主題（themes/*.js 會將主題掛載到 window）
    if (typeof window.DarkTheme !== 'undefined') {
        registerTheme(window.DarkTheme);
    }
    if (typeof window.LightTheme !== 'undefined') {
        registerTheme(window.LightTheme);
    }
    if (typeof window.SunsetTheme !== 'undefined') {
        registerTheme(window.SunsetTheme);
    }
    if (typeof window.NewYearTheme !== 'undefined') {
        registerTheme(window.NewYearTheme);
    }
}

// 取得主題
function getTheme(themeId) {
    return THEMES[themeId] || THEMES['dark'] || Object.values(THEMES)[0];
}

// 取得所有已啟用的主題（用於 UI 顯示）
function getEnabledThemes() {
    // 根據主題的 enabled 屬性判斷是否顯示
    return Object.values(THEMES).filter(theme => theme.enabled === true);
}

// 取得所有主題
function getAllThemes() {
    return THEMES;
}

// ===================================
// Social Links Configuration
// ===================================
const SOCIAL_LINKS = {
    discord: {
        url: 'https://discord.com/invite/glowsai',
        icon: `<img src="https://cdn-icons-png.flaticon.com/24/5968/5968756.png" alt="Discord" width="20" height="20" style="display:block;">`
    },
    facebook: {
        url: 'https://www.facebook.com/KONSTTechnology',
        icon: `<img src="https://cdn-icons-png.flaticon.com/24/20/20673.png" alt="Facebook" width="20" height="20" style="display:block;">`
    },
    linkedin: {
        url: 'https://www.linkedin.com/company/konsttech/',
        icon: `<img src="https://cdn-icons-png.flaticon.com/24/3536/3536569.png" alt="LinkedIn" width="20" height="20" style="display:block;">`
    },
    twitter: {
        url: 'https://x.com/glowsai',
        icon: `<img src="https://cdn-icons-png.flaticon.com/24/5968/5968830.png" alt="X" width="20" height="20" style="display:block;">`
    },
    github: {
        url: 'https://github.com/glowsai',
        icon: `<img src="https://cdn-icons-png.flaticon.com/24/2111/2111432.png" alt="GitHub" width="20" height="20" style="display:block;">`
    },
    youtube: {
        url: 'https://www.youtube.com/@Glows_ai/videos',
        icon: `<img src="https://cdn-icons-png.flaticon.com/24/1384/1384028.png" alt="YouTube" width="20" height="20" style="display:block;">`
    }
};

// ===================================
// Footer Configuration
// ===================================
const FOOTER_CONFIG = {
    logoLink: 'https://www.konsttech.ai',
    isoBadgeUrl: 'https://raw.githubusercontent.com/uscire-08-7/edm-assets/main/assets/iso.png',
    blackLogoUrl: 'https://raw.githubusercontent.com/uscire-08-7/edm-assets/main/assets/blacklogo.png',
    confidentialText: 'The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.'
};

// ===================================
// Company Slogan (多語言)
// ===================================
const SLOGAN_TEXTS = {
    en: 'Provide world-leading high-performance computing services to build a diverse AI ecosystem.',
    zh: '提供引領全球的高性能運算服務，打造多元AI生態系。'
};

// ===================================
// Default Values
// ===================================
const DEFAULTS = {
    recipientName: '',
    headline: 'Next-Gen Globally Distributed AI Cloud',
    bodyContent: `• Scale your AI workloads globally with ease
• Access high-end GPUs (H100, A100) on demand
• Deploy and scale with unparalleled simplicity
• Pay only for what you use - no commitments`,
    ctaText: 'Get Started →',
    ctaUrl: 'https://glows.ai',
    footerInfo: 'Konst Tech Inc., Taiwan',
    psText: 'Have questions? Reply directly to this email and we\'ll help you get started.',
    signature: '- The Konst Team',
    theme: 'dark',
    sloganLang: 'en'
};

// ===================================
// Export
// ===================================
window.EditorConfig = {
    // 主題相關
    THEMES,
    registerTheme,
    initThemes,
    getTheme,
    getEnabledThemes,
    getAllThemes,

    // 其他配置
    SOCIAL_LINKS,
    FOOTER_CONFIG,
    SLOGAN_TEXTS,
    DEFAULTS
};
