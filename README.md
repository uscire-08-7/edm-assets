# Konst EDM Editor

A simple, elegant email template editor for creating professional EDM (Electronic Direct Mail) campaigns.

## Features

- 📝 **Real-time Preview** - See your email as you type
- 🎨 **Modern UI** - Dark theme with glassmorphism design
- 💾 **Auto-save** - Data persists in browser localStorage
- 📋 **One-click Copy** - Copy HTML directly to Gmail
- 📱 **Responsive** - Works on desktop and tablet

## Quick Start

1. Download or clone this repository
2. Open `index.html` in your browser
3. Start editing your email content
4. Click "Copy HTML" to copy the email
5. Paste into Gmail compose window

## Files

```
EDM/
├── index.html      # Main page
├── styles.css      # Styling
├── app.js          # Application logic
├── template.js     # Email template generator
├── assets/         # Local assets
│   └── konst-logo.png
└── README.md       # This file
```

## Usage

### Input Fields

| Field | Description |
|-------|-------------|
| Name | Recipient's name |
| Headline | Email subject/title |
| Body | Main content (supports bullet points with `•`, `-`, or `*`) |
| CTA Button | Call-to-action button text |
| CTA URL | Button link destination |
| Footer | Company information |
| P.S. | Post-script message |

### Body Content Format

- Lines starting with `•`, `-`, or `*` will be rendered as bullet points
- Other lines are rendered as paragraphs

Example:
```
Dear John,
I hope this email finds you well.

Our services include:
• AI Infrastructure
• GPU Cloud
• Data Center Solutions

Looking forward to hearing from you.
```

## License

MIT License - Feel free to use and modify.
