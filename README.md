# Straight Stream Labs — Official Website

Official website for **Straight Stream Labs** (`straightstreamlabs.com`), makers of high-fidelity scenario training tools for first responders and public safety professionals.

## Key Features

- **Full Brand Identity**: Features high-resolution brand logo banners and dark slate tactical styling.
- **Product Showcase**: Highlights **Fireground Scenario Trainer** (Google Play Store) and **EMT Scenario Trainer** (in development).
- **Guaranteed Privacy Compliance**: Preserves the exact Google Play Store-linked Privacy Policy across `/privacy.html`, `/privacy-policy.html`, and `/privacypolicy.html`.
- **Zero-Dependency Static Architecture**: Pure, modern semantic HTML5, CSS3, and vanilla JS. Fast loading, responsive, and deployable to Turbify, GitHub Pages, Cloudflare Pages, Netlify, or Apache/Nginx.

## File Structure

```text
straightstreams-website/
├── index.html                   # Primary landing page and product showcase
├── privacy.html                 # Official, verbatim privacy policy
├── privacy-policy.html          # Compatibility redirect alias
├── privacypolicy.html           # Compatibility redirect alias
├── SS_Covers_Main.html          # Legacy redirect safeguard
├── turbify-upload-guide.md      # Step-by-step instructions for Turbify hosting
├── assets/
│   ├── css/
│   │   └── style.css            # Responsive dark tactical design
│   ├── js/
│   │   └── main.js              # Accessible mobile menu and interactions
│   └── images/
│       ├── logo-full.png        # Full-width horizontal logo banner
│       ├── logo-icon.png        # Circular "SS LABS" icon badge
│       └── favicon.png          # Browser tab icon
└── README.md
```

## Local Preview

To preview the website locally on your computer:

```bash
# Using Python
python -m http.server 8080

# Using Node / npx
npx serve .
```

Open your browser to `http://localhost:8080`.
