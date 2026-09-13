# Porkbun Hosting Guide for straightstreamlabs.com

This guide provides step-by-step instructions for deploying your website to **straightstreamlabs.com** using **Porkbun**.

---

## Step 1: Close the Nameservers Popup

In the popup currently on your screen:
- Click **Cancel** (or the **X** in the top right).
- Your nameservers are already correctly set to Porkbun default nameservers (`curitiba.ns.porkbun.com`, etc.). You do not need to change them.

---

## Option 1: Deploy Using Porkbun Web Hosting (Easiest)

Looking at your Porkbun dashboard under **PRODUCTS & SERVICES**:
1. Locate **WEB HOSTING** (third column).
2. Click **Manage** directly under Web Hosting.
3. In the Web Hosting control panel, open the **File Manager** (or FTP).
4. Upload:
   `c:\Users\rhen7\OneDrive\Documents\Github\straightstreams-website.zip`
   and extract it into the public web folder (usually `public_html` or `html`).
   *(Or drag-and-drop the contents of the `straightstreams-website` folder directly).*
5. Check **URL Forwarding**:
   - In your main Porkbun dashboard, under **DNS & NAMESERVERS**, if **URL Forwarding** is currently "Configured" (pointing to Carrd), edit or remove it so traffic routes directly to your Porkbun Web Hosting.

---

## Option 2: Deploy to GitHub Pages (100% Free, Auto SSL)

If you prefer hosting directly from your GitHub repository:
1. Create a repository on GitHub named `straightstreamlabs-website`.
2. Push this folder to GitHub.
3. In GitHub repo **Settings → Pages**:
   - Select **Deploy from a branch** (`main`).
   - In **Custom domain**, enter `straightstreamlabs.com`.
4. In your Porkbun dashboard:
   - Click **DNS** (where it currently says "8 records").
   - Point the root (`@`) and `www` to GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
     - CNAME `www` -> `your-username.github.io`
