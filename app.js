/**
 * Konst EDM Editor - Main Application
 * 
 * Handles form interactions, preview updates, and data persistence
 */

(function () {
    'use strict';

    // ===================================
    // DOM Elements
    // ===================================
    const elements = {
        // Form inputs - Content tab
        recipientName: document.getElementById('recipientName'),
        headline: document.getElementById('headline'),
        bodyContent: document.getElementById('bodyContent'),
        ctaText: document.getElementById('ctaText'),
        ctaUrl: document.getElementById('ctaUrl'),
        footerInfo: document.getElementById('footerInfo'),
        psText: document.getElementById('psText'),

        // Form inputs - Style tab
        themeInputs: document.querySelectorAll('input[name="theme"]'),

        // Form inputs - Signature tab
        signature: document.getElementById('signature'),

        // Tab elements
        tabBtns: document.querySelectorAll('.tab-btn'),
        tabContents: document.querySelectorAll('.tab-content'),

        // Preview
        emailPreview: document.getElementById('emailPreview'),

        // Buttons
        saveBtn: document.getElementById('saveBtn'),
        clearBtn: document.getElementById('clearBtn'),
        copyBtn: document.getElementById('copyBtn'),

        // Toast
        toast: document.getElementById('toast')
    };

    // ===================================
    // Default Values（從 EditorConfig 取得）
    // ===================================
    const DEFAULTS = window.EditorConfig?.DEFAULTS || {
        recipientName: '',
        headline: 'Next-Gen Globally Distributed AI Cloud',
        bodyContent: '• Scale your AI workloads globally with ease',
        ctaText: 'Get Started →',
        ctaUrl: 'https://glows.ai',
        footerInfo: 'Konst Tech Inc., Taiwan',
        psText: 'Have questions? Reply directly to this email.',
        signature: '- The Konst Team',
        theme: 'dark'
    };

    // LocalStorage key
    const STORAGE_KEY = 'konst-edm-data';

    // ===================================
    // Utility Functions
    // ===================================

    /**
     * Show a toast notification
     * @param {string} message - Message to display
     * @param {boolean} isError - Whether this is an error message
     */
    function showToast(message, isError = false) {
        elements.toast.textContent = message;
        elements.toast.classList.toggle('error', isError);
        elements.toast.classList.add('show');

        setTimeout(() => {
            elements.toast.classList.remove('show');
        }, 3000);
    }

    /**
     * Get current form data
     * @returns {Object} - Form data object
     */
    function getFormData() {
        // Get selected theme
        let selectedTheme = DEFAULTS.theme;
        elements.themeInputs.forEach(input => {
            if (input.checked) selectedTheme = input.value;
        });

        return {
            recipientName: elements.recipientName.value || 'there',
            headline: elements.headline.value || DEFAULTS.headline,
            bodyContent: elements.bodyContent.value || DEFAULTS.bodyContent,
            ctaText: elements.ctaText.value || DEFAULTS.ctaText,
            ctaUrl: elements.ctaUrl.value || DEFAULTS.ctaUrl,
            footerInfo: elements.footerInfo.value || DEFAULTS.footerInfo,
            psText: elements.psText.value || DEFAULTS.psText,
            signature: elements.signature.value || DEFAULTS.signature,
            theme: selectedTheme
        };
    }

    /**
     * Set form data
     * @param {Object} data - Data to populate form with
     */
    function setFormData(data) {
        elements.recipientName.value = data.recipientName || '';
        elements.headline.value = data.headline || DEFAULTS.headline;
        elements.bodyContent.value = data.bodyContent || DEFAULTS.bodyContent;
        elements.ctaText.value = data.ctaText || DEFAULTS.ctaText;
        elements.ctaUrl.value = data.ctaUrl || DEFAULTS.ctaUrl;
        elements.footerInfo.value = data.footerInfo || DEFAULTS.footerInfo;
        elements.psText.value = data.psText || DEFAULTS.psText;
        elements.signature.value = data.signature || DEFAULTS.signature;

        // Set theme
        const theme = data.theme || DEFAULTS.theme;
        elements.themeInputs.forEach(input => {
            input.checked = (input.value === theme);
        });
    }

    // ===================================
    // Preview Functions
    // ===================================

    /**
     * Update the email preview
     */
    function updatePreview() {
        const data = getFormData();
        elements.emailPreview.innerHTML = window.EmailTemplate.preview(data);
    }

    // ===================================
    // Storage Functions
    // ===================================

    /**
     * Get raw form data (without fallback defaults, for saving)
     * @returns {Object} - Raw form data object
     */
    function getRawFormData() {
        let selectedTheme = DEFAULTS.theme;
        elements.themeInputs.forEach(input => {
            if (input.checked) selectedTheme = input.value;
        });

        return {
            recipientName: elements.recipientName.value,
            headline: elements.headline.value,
            bodyContent: elements.bodyContent.value,
            ctaText: elements.ctaText.value,
            ctaUrl: elements.ctaUrl.value,
            footerInfo: elements.footerInfo.value,
            psText: elements.psText.value,
            signature: elements.signature.value,
            theme: selectedTheme
        };
    }

    /**
     * Save data to LocalStorage
     */
    function saveData() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(getRawFormData()));
            showToast('✓ Saved');
        } catch (e) {
            console.error('Failed to save:', e);
            showToast('Save failed', true);
        }
    }

    /**
     * Load data from LocalStorage
     */
    function loadData() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const data = JSON.parse(saved);
                setFormData(data);
            } else {
                // Load defaults
                setFormData(DEFAULTS);
            }
        } catch (e) {
            console.error('Failed to load:', e);
            setFormData(DEFAULTS);
        }
    }

    /**
     * Clear data and reset to defaults
     */
    function clearData() {
        if (confirm('Clear all content?')) {
            localStorage.removeItem(STORAGE_KEY);
            setFormData({
                recipientName: '',
                headline: DEFAULTS.headline,
                bodyContent: DEFAULTS.bodyContent,
                ctaText: DEFAULTS.ctaText,
                ctaUrl: DEFAULTS.ctaUrl,
                footerInfo: DEFAULTS.footerInfo,
                psText: DEFAULTS.psText,
                signature: DEFAULTS.signature,
                theme: DEFAULTS.theme
            });
            updatePreview();
            showToast('✓ Cleared');
        }
    }

    // ===================================
    // Copy Functions
    // ===================================

    /**
     * Copy HTML to clipboard
     */
    async function copyToClipboard() {
        const data = getFormData();
        const html = window.EmailTemplate.generate(data);

        try {
            // Try using the Clipboard API with HTML support
            if (navigator.clipboard && window.ClipboardItem) {
                const blob = new Blob([html], { type: 'text/html' });
                const item = new ClipboardItem({ 'text/html': blob });
                await navigator.clipboard.write([item]);
            } else {
                // Fallback: copy as plain text
                await navigator.clipboard.writeText(html);
            }
            showToast('✓ Copied');
        } catch (err) {
            console.error('Copy failed:', err);

            // Fallback method using execCommand
            const textarea = document.createElement('textarea');
            textarea.value = html;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();

            try {
                document.execCommand('copy');
                showToast('✓ Copied');
            } catch (e) {
                showToast('Copy failed', true);
            }

            document.body.removeChild(textarea);
        }
    }

    // ===================================
    // Event Listeners
    // ===================================

    function setupEventListeners() {
        // Tab switching
        elements.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.dataset.tab;

                // Update active tab button
                elements.tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update active tab content
                elements.tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === `tab-${tabId}`) {
                        content.classList.add('active');
                    }
                });
            });
        });

        // Input changes trigger preview update
        const inputs = [
            elements.recipientName,
            elements.headline,
            elements.bodyContent,
            elements.ctaText,
            elements.ctaUrl,
            elements.footerInfo,
            elements.psText,
            elements.signature
        ];

        inputs.forEach(input => {
            input.addEventListener('input', updatePreview);
        });

        // Theme changes trigger preview update
        elements.themeInputs.forEach(input => {
            input.addEventListener('change', updatePreview);
        });

        // Button clicks
        elements.saveBtn.addEventListener('click', saveData);
        elements.clearBtn.addEventListener('click', clearData);
        elements.copyBtn.addEventListener('click', copyToClipboard);
    }

    // ===================================
    // Initialization
    // ===================================

    function init() {
        // Load saved data
        loadData();

        // Setup event listeners
        setupEventListeners();

        // Initial preview
        updatePreview();

        console.log('Konst EDM Editor initialized');
    }

    // Start the app when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
