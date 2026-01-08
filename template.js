/**
 * Konst EDM Template Generator
 *
 * This module generates HTML email templates with Konst branding
 * 配置統一從 EditorConfig 載入
 */

/**
 * Escape HTML special characters to prevent XSS
 * @param {string} str - String to escape
 * @returns {string} - Escaped string
 */
function escapeHtml(str) {
    if (!str) return '';
    const escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };
    return String(str).replace(/[&<>"']/g, char => escapeMap[char]);
}

/**
 * 驗證並清理 URL（防止 javascript: 等危險協議）
 * @param {string} url - 要驗證的 URL
 * @param {string} fallback - 驗證失敗時的備用 URL
 * @returns {string} - 安全的 URL
 */
function sanitizeUrl(url, fallback = '#') {
    if (!url) return fallback;

    try {
        const parsed = new URL(url);
        // 只允許 http 和 https 協議
        if (['http:', 'https:'].includes(parsed.protocol)) {
            return escapeHtml(url);
        }
    } catch (e) {
        // URL 解析失敗，檢查是否為相對路徑
        if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
            return escapeHtml(url);
        }
    }

    return fallback;
}

/**
 * 取得配置（從 EditorConfig）
 */
function getConfig() {
    const config = window.EditorConfig || {};

    // 預設主題樣式（當主題不存在時的 fallback）
    const DEFAULT_THEME = {
        id: 'dark',
        name: 'Dark',
        headerBg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f1a 100%)',
        headerTextColor: '#ffffff',
        logoUrl: 'https://raw.githubusercontent.com/uscire-08-7/edm-assets/main/assets/black.png',
        bodyBg: '#ffffff',
        bodyTextColor: '#374151',
        ctaBg: 'linear-gradient(135deg, #5C5CE0, #8B5CF6)',
        ctaTextColor: '#ffffff'
    };

    return {
        SOCIAL_LINKS: config.SOCIAL_LINKS || {},
        FOOTER_CONFIG: config.FOOTER_CONFIG || {},
        SLOGAN_TEXTS: config.SLOGAN_TEXTS || { en: '', zh: '' },
        getTheme: (id) => {
            const theme = config.getTheme ? config.getTheme(id) : null;
            return theme || DEFAULT_THEME;
        }
    };
}

/**
 * 處理 body content - 智能偵測 bullets vs paragraphs
 * @param {string} bodyContent - 原始內容
 * @returns {string} - HTML 字串
 */
function processBodyContent(bodyContent) {
    const lines = bodyContent.split('\n').filter(line => line.trim());
    const bodyParts = [];
    let currentList = [];

    lines.forEach(line => {
        const trimmed = line.trim();
        const isBullet = /^[•\-\*]\s/.test(trimmed);

        if (isBullet) {
            const text = escapeHtml(trimmed.replace(/^[•\-\*]\s*/, '').trim());
            currentList.push(`<li style="margin-bottom: 8px; color: #374151;">${text}</li>`);
        } else {
            // Flush any pending list items
            if (currentList.length > 0) {
                bodyParts.push(`<ul style="margin: 0 0 16px 0; padding-left: 20px; color: #374151;">${currentList.join('')}</ul>`);
                currentList = [];
            }
            // Regular paragraph
            bodyParts.push(`<p style="margin: 0 0 16px 0; color: #374151; line-height: 1.6;">${escapeHtml(trimmed)}</p>`);
        }
    });

    // Flush remaining list items
    if (currentList.length > 0) {
        bodyParts.push(`<ul style="margin: 0 0 16px 0; padding-left: 20px; color: #374151;">${currentList.join('')}</ul>`);
    }

    return bodyParts.join('');
}

/**
 * Generate the full EDM HTML
 * @param {Object} data - Template data
 * @returns {string} - Complete HTML string
 */
function generateEmailHTML(data) {
    const {
        recipientName = 'there',
        headline = 'Next-Gen Globally Distributed AI Cloud',
        bodyContent = '• Scale your AI workloads globally\n• Access high-end GPUs on demand\n• Deploy with unparalleled ease',
        ctaText = 'Get Started →',
        ctaUrl = 'https://glows.ai',
        footerInfo = 'Konst Tech Inc., Taiwan',
        psText = 'Have questions? Reply directly to this email and we\'ll help you get started.',
        signature = '- The Konst Team',
        theme = 'dark',
        sloganLang = 'en'
    } = data;

    // 從 config 取得配置
    const config = getConfig();
    const themeStyles = config.getTheme(theme);
    const SOCIAL_LINKS = config.SOCIAL_LINKS;
    const FOOTER_CONFIG = config.FOOTER_CONFIG;
    const sloganText = config.SLOGAN_TEXTS[sloganLang] || config.SLOGAN_TEXTS.en || '';

    // Escape user inputs
    const safeRecipientName = escapeHtml(recipientName);
    const safeHeadline = escapeHtml(headline);
    const safeCtaText = escapeHtml(ctaText);
    const safeCtaUrl = sanitizeUrl(ctaUrl, 'https://glows.ai');
    const safeFooterInfo = escapeHtml(footerInfo);
    const safePsText = escapeHtml(psText);

    // Process body content
    const bodyHTML = processBodyContent(bodyContent);

    // Convert signature newlines to <br> for HTML (escape first)
    const signatureHTML = escapeHtml(signature).replace(/\n/g, '<br>');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konst - ${safeHeadline}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
        <tr>
            <td style="padding: 20px 0;">
                <!-- Email Container -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

                    <!-- Header Banner -->
                    <tr>
                        <td style="background: ${themeStyles.headerBg}; padding: 5px 30px; text-align: center;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="text-align: center;">
                                        <!-- Konst Logo Image -->
                                        <a href="${FOOTER_CONFIG.logoLink || 'https://www.konsttech.ai'}" target="_blank" style="text-decoration: none;">
                                            <img src="${themeStyles.logoUrl}" alt="Konst" style="height: 115px; width: auto; display: inline-block; border: 0;">
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <!-- Greeting -->
                            <p style="font-size: 16px; color: #374151; margin: 0 0 24px 0;">
                                Hi <strong>${safeRecipientName}</strong>,
                            </p>

                            <!-- Headline -->
                            <h1 style="font-size: 24px; font-weight: 600; color: #111827; margin: 0 0 20px 0; line-height: 1.3;">
                                ${safeHeadline}
                            </h1>

                            <!-- Body Content -->
                            <div style="margin: 0 0 30px 0; font-family: Georgia, Arial, serif;">
                                ${bodyHTML}
                            </div>

                            <!-- CTA Button - Centered -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td align="center">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                            <tr>
                                                <td style="border-radius: 6px; background: ${themeStyles.ctaBg || 'linear-gradient(135deg, #5C5CE0, #8B5CF6)'};">
                                                    <a href="${safeCtaUrl}" target="_blank" style="display: inline-block; padding: 14px 32px; font-size: 16px; font-weight: 600; color: ${themeStyles.ctaTextColor || '#ffffff'}; text-decoration: none; border-radius: 6px;">
                                                        ${safeCtaText}
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Signature -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <p style="font-size: 14px; color: #374151; margin: 0 0 8px 0; line-height: 1.5;">
                                ${signatureHTML}
                            </p>
                            <p style="font-size: 13px; color: #6b7280; margin: 0;">
                                P.S. ${safePsText}
                            </p>
                        </td>
                    </tr>

                    <!-- Divider -->
                    <tr>
                        <td style="padding: 0 30px;">
                            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 0;">
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px;">
                            <!-- Company Slogan -->
                            <p style="font-size: 12px; color: #4b5563; margin: 0 0 16px 0; text-align: center; line-height: 1.5;">
                                ${escapeHtml(sloganText)}
                            </p>

                            <!-- Logo (Left) + ISO Badge (Right) -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 12px;">
                                <tr>
                                    <td style="text-align: left; vertical-align: middle;">
                                        <a href="${FOOTER_CONFIG.logoLink || 'https://www.konsttech.ai'}" target="_blank" style="text-decoration: none;">
                                            <img src="${FOOTER_CONFIG.blackLogoUrl}" alt="Konst" style="height: 60px; width: auto;">
                                        </a>
                                    </td>
                                    <td style="text-align: right; vertical-align: middle;">
                                        <img src="${FOOTER_CONFIG.isoBadgeUrl}" alt="ISO/IEC 27001:2022 Certified" style="height: 32px; width: auto;">
                                    </td>
                                </tr>
                            </table>

                            <!-- Company Info -->
                            <p style="font-size: 12px; color: #6b7280; margin: 0 0 16px 0; text-align: center;">
                                ${safeFooterInfo}
                            </p>

                            <!-- Social Links (Centered) -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                                <tr>
                                    <td style="padding: 0 8px;">
                                        <a href="${SOCIAL_LINKS.discord?.url || '#'}" target="_blank" style="text-decoration: none;">
                                            ${SOCIAL_LINKS.discord?.icon || ''}
                                        </a>
                                    </td>
                                    <td style="padding: 0 8px;">
                                        <a href="${SOCIAL_LINKS.facebook?.url || '#'}" target="_blank" style="text-decoration: none;">
                                            ${SOCIAL_LINKS.facebook?.icon || ''}
                                        </a>
                                    </td>
                                    <td style="padding: 0 8px;">
                                        <a href="${SOCIAL_LINKS.linkedin?.url || '#'}" target="_blank" style="text-decoration: none;">
                                            ${SOCIAL_LINKS.linkedin?.icon || ''}
                                        </a>
                                    </td>
                                    <td style="padding: 0 8px;">
                                        <a href="${SOCIAL_LINKS.twitter?.url || '#'}" target="_blank" style="text-decoration: none;">
                                            ${SOCIAL_LINKS.twitter?.icon || ''}
                                        </a>
                                    </td>
                                    <td style="padding: 0 8px;">
                                        <a href="${SOCIAL_LINKS.github?.url || '#'}" target="_blank" style="text-decoration: none;">
                                            ${SOCIAL_LINKS.github?.icon || ''}
                                        </a>
                                    </td>
                                    <td style="padding: 0 8px;">
                                        <a href="${SOCIAL_LINKS.youtube?.url || '#'}" target="_blank" style="text-decoration: none;">
                                            ${SOCIAL_LINKS.youtube?.icon || ''}
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <!-- Confidential Notice -->
                            <p style="font-size: 9px; color: #9ca3af; margin: 16px 0 0 0; text-align: center; line-height: 1.4;">
                                ${FOOTER_CONFIG.confidentialText || ''}
                            </p>

                            <!-- Unsubscribe -->
                            <p style="font-size: 11px; color: #9ca3af; margin: 16px 0 0 0; text-align: center;">
                                <a href="#" style="color: #6b7280; text-decoration: underline;">Unsubscribe</a>
                                &nbsp;|&nbsp;
                                <a href="#" style="color: #6b7280; text-decoration: underline;">Manage preferences</a>
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`.trim();
}

/**
 * Generate preview-safe HTML (for displaying in the editor)
 * @param {Object} data - Template data
 * @returns {string} - HTML string for preview
 */
function generatePreviewHTML(data) {
    const {
        recipientName = 'there',
        headline = 'Next-Gen Globally Distributed AI Cloud',
        bodyContent = '• Scale your AI workloads globally\n• Access high-end GPUs on demand\n• Deploy with unparalleled ease',
        ctaText = 'Get Started →',
        ctaUrl = 'https://glows.ai',
        footerInfo = 'Konst Tech Inc., Taiwan',
        psText = 'Have questions? Reply directly to this email and we\'ll help you get started.',
        signature = '- The Konst Team',
        theme = 'dark',
        sloganLang = 'en'
    } = data;

    // 從 config 取得配置
    const config = getConfig();
    const themeStyles = config.getTheme(theme);
    const SOCIAL_LINKS = config.SOCIAL_LINKS;
    const FOOTER_CONFIG = config.FOOTER_CONFIG;
    const sloganText = config.SLOGAN_TEXTS[sloganLang] || config.SLOGAN_TEXTS.en || '';

    // Escape user inputs
    const safeRecipientName = escapeHtml(recipientName);
    const safeHeadline = escapeHtml(headline);
    const safeCtaText = escapeHtml(ctaText);
    const safeCtaUrl = sanitizeUrl(ctaUrl, 'https://glows.ai');
    const safeFooterInfo = escapeHtml(footerInfo);
    const safePsText = escapeHtml(psText);

    // Process body content
    const bodyHTML = processBodyContent(bodyContent);

    // Convert signature newlines to <br> for HTML (escape first)
    const signatureHTML = escapeHtml(signature).replace(/\n/g, '<br>');

    return `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    <!-- Header Banner -->
    <div style="background: ${themeStyles.headerBg}; padding: 5px 30px; text-align: center;">
        <!-- Konst Logo Image -->
        <a href="${FOOTER_CONFIG.logoLink || 'https://www.konsttech.ai'}" target="_blank" style="text-decoration: none;">
            <img src="${themeStyles.logoUrl}" alt="Konst" style="height: 115px; width: auto; display: inline-block; border: 0;">
        </a>
    </div>

    <!-- Main Content -->
    <div style="padding: 40px 30px;">
        <p style="font-size: 16px; color: #374151; margin: 0 0 24px 0;">
            Hi <strong>${safeRecipientName}</strong>,
        </p>

        <h1 style="font-size: 24px; font-weight: 600; color: #111827; margin: 0 0 20px 0; line-height: 1.3;">
            ${safeHeadline}
        </h1>

        <div style="margin: 0 0 30px 0; font-family: Georgia, Arial, serif;">
            ${bodyHTML}
        </div>

        <!-- CTA Button - Centered -->
        <div style="text-align: center;">
            <a href="${safeCtaUrl}" target="_blank" style="display: inline-block; padding: 14px 32px; font-size: 16px; font-weight: 600; color: ${themeStyles.ctaTextColor || '#ffffff'}; text-decoration: none; border-radius: 6px; background: ${themeStyles.ctaBg || 'linear-gradient(135deg, #5C5CE0, #8B5CF6)'};">
                ${safeCtaText}
            </a>
        </div>
    </div>

    <!-- Signature -->
    <div style="padding: 0 30px 30px 30px;">
        <p style="font-size: 14px; color: #374151; margin: 0 0 8px 0; line-height: 1.5;">
            ${signatureHTML}
        </p>
        <p style="font-size: 13px; color: #6b7280; margin: 0;">
            P.S. ${safePsText}
        </p>
    </div>

    <!-- Divider -->
    <div style="padding: 0 30px;">
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 0;">
    </div>

    <!-- Footer -->
    <div style="padding: 30px;">
        <!-- Company Slogan -->
        <p style="font-size: 12px; color: #4b5563; margin: 0 0 16px 0; text-align: center; line-height: 1.5;">
            ${escapeHtml(sloganText)}
        </p>

        <!-- Logo (Left) + ISO Badge (Right) -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <a href="${FOOTER_CONFIG.logoLink || 'https://www.konsttech.ai'}" target="_blank" style="text-decoration: none;">
                <img src="${FOOTER_CONFIG.blackLogoUrl}" alt="Konst" style="height: 60px; width: auto;">
            </a>
            <img src="${FOOTER_CONFIG.isoBadgeUrl}" alt="ISO/IEC 27001:2022 Certified" style="height: 32px; width: auto;">
        </div>

        <!-- Company Info -->
        <p style="font-size: 12px; color: #6b7280; margin: 0 0 16px 0; text-align: center;">
            ${safeFooterInfo}
        </p>

        <!-- Social Links (Centered) -->
        <div style="display: flex; justify-content: center; gap: 16px;">
            <a href="${SOCIAL_LINKS.discord?.url || '#'}" target="_blank" style="text-decoration: none;">
                ${SOCIAL_LINKS.discord?.icon || ''}
            </a>
            <a href="${SOCIAL_LINKS.facebook?.url || '#'}" target="_blank" style="text-decoration: none;">
                ${SOCIAL_LINKS.facebook?.icon || ''}
            </a>
            <a href="${SOCIAL_LINKS.linkedin?.url || '#'}" target="_blank" style="text-decoration: none;">
                ${SOCIAL_LINKS.linkedin?.icon || ''}
            </a>
            <a href="${SOCIAL_LINKS.twitter?.url || '#'}" target="_blank" style="text-decoration: none;">
                ${SOCIAL_LINKS.twitter?.icon || ''}
            </a>
            <a href="${SOCIAL_LINKS.github?.url || '#'}" target="_blank" style="text-decoration: none;">
                ${SOCIAL_LINKS.github?.icon || ''}
            </a>
            <a href="${SOCIAL_LINKS.youtube?.url || '#'}" target="_blank" style="text-decoration: none;">
                ${SOCIAL_LINKS.youtube?.icon || ''}
            </a>
        </div>

        <!-- Confidential Notice -->
        <p style="font-size: 9px; color: #9ca3af; margin: 16px 0 0 0; text-align: center; line-height: 1.4;">
            ${FOOTER_CONFIG.confidentialText || ''}
        </p>

        <!-- Unsubscribe -->
        <p style="font-size: 11px; color: #9ca3af; margin: 16px 0 0 0; text-align: center;">
            <a href="#" style="color: #6b7280; text-decoration: underline;">Unsubscribe</a>
            &nbsp;|&nbsp;
            <a href="#" style="color: #6b7280; text-decoration: underline;">Manage preferences</a>
        </p>
    </div>
</div>`.trim();
}

// Export for use in app.js
window.EmailTemplate = {
    generate: generateEmailHTML,
    preview: generatePreviewHTML
};
