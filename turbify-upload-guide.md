# Turbify Web Hosting Upload Guide for straightstreams.com

This guide provides step-by-step instructions to upload and deploy your new website to **Turbify** (formerly Yahoo Small Business Web Hosting) so that it is live at **straightstreams.com**.

---

## Option 1: Upload via Turbify Web File Manager (Recommended & Quickest)

1. **Log in to your Turbify Account**:
   - Go to [turbify.com](https://www.turbify.com/) and log in with your account credentials.
2. **Access Web Hosting Control Panel**:
   - Click on **Web Hosting** or **Dashboard** for `straightstreams.com`.
3. **Open the File Manager**:
   - Under the hosting management tools, locate and click on **File Manager** (or **cPanel File Manager**).
   - Navigate to your public root folder, typically named `public_html` or `html` or root directory.
4. **Backup Old Files (Optional)**:
   - If there is an old redirect or placeholder file (e.g. `SS_Covers_Main.html` or old index), you can move them into a backup folder.
5. **Upload the Website Files**:
   - Zip the contents of `straightstreams-website/` or upload the following files and folders directly:
     - `index.html`
     - `privacy.html`
     - `privacy-policy.html`
     - `privacypolicy.html`
     - `SS_Covers_Main.html`
     - `assets/` (including `assets/css/`, `assets/js/`, `assets/images/`)
6. **Verify Index Configuration**:
   - If Turbify has an "Index File" or "Default Document" setting, verify that `index.html` is listed first.
   - If Turbify had a domain forward rule pointing to `SS_Covers_Main.html`, turn off the forward or remove the 307 redirect rule so that requests to `straightstreams.com` load `index.html` directly.

---

## Option 2: Upload via FTP / SFTP

If you prefer using an FTP client like **FileZilla** or **Cyberduck**:

1. In your Turbify Hosting Control Panel, find your **FTP Settings**:
   - **Host / Server**: `ftp.straightstreams.com` (or the server address given by Turbify)
   - **Username**: Your Turbify FTP username
   - **Port**: 21 (FTP/FTPS) or 22 (SFTP)
2. Connect using your FTP client.
3. Open the public web directory (`public_html` or `/`).
4. Upload all files and the `assets` folder from `c:\Users\rhen7\OneDrive\Documents\Github\straightstreams-website\`.

---

## Option 3: Modern Free Hosting (GitHub Pages / Cloudflare Pages)

Because this website is completely self-contained static HTML, CSS, and JS with zero server dependencies, you can also host it for free with high performance and automatic HTTPS certificates:

1. Create a GitHub repository (e.g., `straightstreamlabs/website` or in your account).
2. Push this folder to the repository.
3. In GitHub Settings -> **Pages**, select **Deploy from a branch** (`main`).
4. Add custom domain `straightstreams.com`.
5. In Turbify DNS Manager, update your DNS A / CNAME records to point to GitHub Pages or Cloudflare.

---

## Verification Checklist

- [ ] Visit `http://straightstreams.com` and `https://straightstreams.com` (should load the full logo and homepage).
- [ ] Visit `https://straightstreams.com/privacy.html` (should load the privacy policy).
- [ ] Test on a mobile phone to ensure the responsive navigation and touch targets look sharp.
- [ ] Click "Get on Google Play" to ensure it opens the Fireground Scenario Trainer listing.
- [ ] Click the contact link to ensure it launches an email to `straightstreamlabs@gmail.com`.
