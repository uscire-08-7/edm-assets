/**
 * Konst EDM Editor - Configuration
 * 
 * Centralized configuration for themes, logos, and social links
 */

// ===================================
// Theme Configurations
// ===================================
const THEMES = {
    dark: {
        name: 'Dark',
        headerBg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f1a 100%)',
        headerTextColor: '#ffffff',
        bodyBg: '#ffffff',
        bodyTextColor: '#374151',
        ctaBg: 'linear-gradient(135deg, #5C5CE0, #8B5CF6)',
        ctaTextColor: '#ffffff'
    },
    light: {
        name: 'Light',
        headerBg: '#ffffff',
        headerTextColor: '#1a1a2e',
        bodyBg: '#ffffff',
        bodyTextColor: '#374151',
        ctaBg: 'linear-gradient(135deg, #5C5CE0, #8B5CF6)',
        ctaTextColor: '#ffffff'
    },
    sunset: {
        name: 'Sunset',
        // TODO: 待配色確認
        headerBg: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
        headerTextColor: '#ffffff',
        bodyBg: '#fff8f0',
        bodyTextColor: '#4a3728',
        ctaBg: 'linear-gradient(135deg, #ff6b35, #f7931e)',
        ctaTextColor: '#ffffff'
    },
    newyear: {
        name: 'New Year',
        // TODO: 待配色確認
        headerBg: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 100%)',
        headerTextColor: '#ffd700',
        bodyBg: '#fff5f5',
        bodyTextColor: '#4a1c1c',
        ctaBg: 'linear-gradient(135deg, #c41e3a, #8b0000)',
        ctaTextColor: '#ffd700'
    }
};

// ===================================
// Logo Configurations
// ===================================
const LOGOS = {
    konst_dark: {
        name: 'Konst (Dark)',
        url: '', // TODO: 待提供 URL
        forTheme: ['dark', 'sunset', 'newyear']
    },
    konst_light: {
        name: 'Konst (Light)',
        url: 'https://www.konsttech.ai/images/types=logo-white-text.svg',
        forTheme: ['light']
    },
    glows_dark: {
        name: 'Glows.ai (Dark)',
        url: '', // TODO: 待提供 URL
        forTheme: ['dark', 'sunset', 'newyear']
    },
    glows_light: {
        name: 'Glows.ai (Light)',
        url: '', // TODO: 待提供 URL
        forTheme: ['light']
    }
};

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
    visualIcon: {
        url: 'https://ci3.googleusercontent.com/mail-sig/AIorK4zX4D2omxNIlc7mCUY3YYW7_tp7Jheg2CRyRLXLRdSAPu5-bJKU5ZHnQNMUMQ_iRd1xrU1x0vCdYll8',
        height: '40px' // 縮小比例
    },
    confidentialText: 'The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.'
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
    logo: 'konst_light'
};

// Export for use in other modules
window.EditorConfig = {
    THEMES,
    LOGOS,
    SOCIAL_LINKS,
    FOOTER_CONFIG,
    DEFAULTS
};
