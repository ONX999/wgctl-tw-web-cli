# wgctl-tw User Guide (English)

## 📦 Introduction
`wgctl-tw` is a WireGuard CLI tool designed for Android / Termux, featuring:

- QR code export
- APN diagnostics
- Multi-user management
- Language switching (zh-TW / en)

## 🚀 Installation (Termux)
```bash
pkg install git
git clone https://github.com/universe/wgctl-tw
cd wgctl-tw
bash install.sh
```

## 📖 Usage

### 1. QR Code Export
Generate a WireGuard configuration QR code:
```bash
wgctl-tw export --qr
```

**Features:**
- Generate QR code from WireGuard config
- Compatible with WireGuard mobile apps
- Quick scanning and import

### 2. APN Diagnostics
Check APN network connection status:
```bash
wgctl-tw diagnose --apn
```

**Diagnostic Items:**
- APN configuration verification
- Connection status check
- IP address detection
- Latency measurement
- Bandwidth testing

### 3. Multi-user Management
List all WireGuard users:
```bash
wgctl-tw user --list
```

**User Information:**
- Username
- Role (Admin/User/Guest)
- Last login time
- Total user count

### 4. Help Command
View available commands:
```bash
wgctl-tw help
# or
wgctl-tw --help
```

### 5. Version Information
Check tool version:
```bash
wgctl-tw version
# or
wgctl-tw --version
```

## 🌐 Web CLI Simulator

This project includes a web-based CLI simulator for demonstration and teaching purposes.

### Features:
- 📦 QR export simulation with real-time preview
- 📡 APN diagnostics simulation
- 👥 Multi-user management simulation
- 🈳 Language switching (zh-TW / en)
- 📱 iOS Safari compatible
- 🌐 Deployable to GitHub Pages

### Quick Start:
1. Open `index.html` in a web browser
2. Select a module from the dropdown or enter a command
3. Click "Send Command" to execute (or press Ctrl+Enter)
4. View results in the output area

### Supported Commands:
```bash
wgctl-tw export --qr          # QR code export
wgctl-tw diagnose --apn       # APN diagnostics
wgctl-tw user --list          # List users
wgctl-tw help                 # Show help
wgctl-tw version              # Show version
```

## 🔧 Configuration

### Language Settings
The web interface supports language switching:
- **繁體中文 (zh-TW)** - Traditional Chinese (default)
- **English (en)** - English

Use the language selector in the top-right corner to switch.

## 📱 Mobile Usage

### iOS Safari:
- Full Web Worker support for background execution
- Responsive design for mobile screens
- Touch-friendly interface

### Android:
- Compatible with all modern browsers
- Can be added to home screen as PWA

## 🚀 Deployment

### GitHub Pages:
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select main branch as source
4. Access via `https://yourusername.github.io/wgctl-tw-web-cli/`

### Local Hosting:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🛠️ Technical Details

### Project Structure:
```
wgctl-tw-web-cli/
├── index.html           # Main page
├── main.js              # CLI simulation controller
├── cli-worker.js        # Web Worker for background processing
├── qr-export.js         # QR code generation module
├── lang.js              # Language pack (zh-TW / en)
├── README.md            # Project documentation
└── docs/                # Tutorial documents
    ├── zh-TW.md         # Traditional Chinese guide
    └── en.md            # English guide
```

### Technologies:
- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling
- **Vanilla JavaScript** - ES6 modules
- **Web Workers** - Background processing
- **QRCode Generator** - QR code library

## 📚 Resources

- [GitHub Repository](https://github.com/universe/wgctl-tw)
- [WireGuard Official Site](https://www.wireguard.com/)
- [Termux Documentation](https://termux.dev/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or issues, please open an issue on GitHub.

---

**Note:** This is a web-based simulator for demonstration purposes. For actual WireGuard configuration, please use the official CLI tool or mobile apps.
