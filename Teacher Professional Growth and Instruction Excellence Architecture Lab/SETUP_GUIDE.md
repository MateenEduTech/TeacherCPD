# Teacher Excellence Lab — Setup & Deployment Guide
## By Mateen Yousuf | School Education Department, Kashmir

---

## 📁 FILE STRUCTURE
Create a folder on your computer:

```
jkbose-teacher-excellence-lab/
├── index.html          ← Main application (copy from output)
├── manifest.json       ← PWA manifest (copy from output)
├── service-worker.js   ← Offline caching (copy from output)
├── author.jpg          ← Your photo (rename WhatsApp_Image file)
└── icons/
    ├── icon-192.png    ← App icon 192×192 (create using tool below)
    └── icon-512.png    ← App icon 512×512
```

---

## 🖥️ HOW TO RUN LOCALLY

### Option 1 — VS Code Live Server (Recommended)
1. Install VS Code from https://code.visualstudio.com
2. Install the "Live Server" extension
3. Open your project folder in VS Code
4. Right-click `index.html` → "Open with Live Server"
5. App opens at http://127.0.0.1:5500

### Option 2 — Python Simple Server
1. Open Terminal / Command Prompt in your project folder
2. Run: `python -m http.server 8080`
3. Open browser: http://localhost:8080

### Option 3 — Double-click (limited)
- Double-click index.html directly — works for basic use
- Service Worker / offline features require a server

---

## 🌐 HOW TO HOST FOR FREE

### GitHub Pages (Recommended — Free Forever)
1. Create account at https://github.com
2. Create new repository: "teacher-excellence-lab"
3. Upload all files via web interface or GitHub Desktop
4. Go to: Settings → Pages → Source: main branch → root /
5. Your app will be live at: https://yourusername.github.io/teacher-excellence-lab

### Netlify (Drag & Drop)
1. Go to https://netlify.com
2. Drag your project folder onto the Netlify dashboard
3. App deploys in seconds with a free URL

### Cloudflare Pages
1. Go to https://pages.cloudflare.com
2. Connect your GitHub repository
3. Automatic deploys on every update

---

## 📱 HOW TO INSTALL AS MOBILE APP (PWA)

### Android Chrome
1. Open the app URL in Chrome on Android
2. Tap the ⋮ menu → "Add to Home Screen"
3. Tap "Install" — app icon appears on home screen
4. Opens full-screen, works offline

### iPhone Safari
1. Open the app URL in Safari
2. Tap the Share button (box with arrow)
3. Tap "Add to Home Screen"
4. Tap "Add" — app icon appears on home screen

---

## 🤖 APK CONVERSION (Android App)

### Method 1 — TWA (Trusted Web Activity) via Bubblewrap
Prerequisites: Node.js, Android Studio, Java JDK

```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest https://yoururl/manifest.json
bubblewrap build
```
Output: app-release-signed.apk

### Method 2 — WebView Wrapper (Android Studio)
1. Install Android Studio
2. Create new project → Empty Activity
3. Replace MainActivity.java:

```java
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WebView webView = new WebView(this);
        setContentView(webView);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setDomStorageEnabled(true);
        webView.loadUrl("file:///android_asset/index.html");
    }
}
```

4. Copy your files to: `app/src/main/assets/`
5. Build → Generate Signed APK
6. Distribute the .apk file via WhatsApp, email, or USB

### Method 3 — AppsGeyser (No Code)
1. Go to https://appsgeyser.com
2. Create WebView app
3. Enter your hosted URL
4. Download APK directly

---

## 🎨 CREATING APP ICONS

### Quick Method (Online)
1. Go to https://realfavicongenerator.net
2. Upload any 512×512 image with your initials "MY" or a book icon
3. Download the icon package
4. Place icon-192.png and icon-512.png in your /icons/ folder

### Simple SVG Icon (paste into browser console to generate)
Create a file `icon.svg` with a professional book/star design,
then screenshot and resize to 192×192 and 512×512.

---

## 💾 DATA BACKUP & RESTORE

All data is saved in browser LocalStorage. To backup:
1. Open the app in Chrome
2. Press F12 → Application → Local Storage
3. Copy all values to a text file

To restore on a new device:
- The app will start fresh (no data sync between devices)
- This is intentional for offline/privacy-first design

---

## 📊 ANALYTICS FORMULAS REFERENCE

### Instructional Quality Index (IQI)
```
IQI = (Clarity×0.20) + (Depth×0.25) + (Engagement×0.20) + (Questioning×0.20) + (Assessment×0.15)
```
Where each dimension is scored 0–100 from slider averages (raw 1–10 × 10)

### Professional Growth Index (PGI)
```
PGI = min(100, sqrt(Σ weighted_activities) × 10)
Weights: Workshop=3, Skill=2.5, Peer=2.5, Reflection=2, Observation=2, Reading=1.5
```

### Leadership Potential Score
```
LPS = (IQI × 0.40) + (PGI × 0.35) + (CPD_count × 3)  [capped at 100]
```

### Long-Term Excellence Projection
```
LTEP = (IQI × 0.35) + (PGI × 0.30) + (LPS × 0.35)  [capped at 100]
```

### Pedagogical Alignment Score (Simulation)
```
PAS = matrix[scenario][strategy][0]  — deterministic lookup
```

---

## 🛠️ CUSTOMISATION

### To add your school name:
Find `School Education Department, Kashmir` in index.html and update

### To add more CPD activities:
Update the `CPD_WEIGHTS` object in the JavaScript section

### To add more simulation scenarios:
Add entries to the `SIMULATION_SCENARIOS` array and corresponding
entries in the `matrix` object inside `runSimulation()`

### To change colours:
Update the CSS `:root` variables at the top of the `<style>` block

---

## ✅ TECHNICAL SPECIFICATIONS
- Technology: Pure HTML5 + CSS3 + Vanilla JavaScript
- No external dependencies required (except Google Fonts for typography)
- Storage: Browser LocalStorage (5MB per domain)
- Offline: Service Worker + Cache API
- PWA: Manifest + Service Worker = installable
- File size: ~90KB (index.html) — extremely lightweight
- Compatible: Chrome 80+, Firefox 78+, Safari 14+, Edge 80+
- Android: 5.0+ with Chrome
- Minimum RAM: 512MB

---

Developed by Mateen Yousuf
Teacher, School Education Department Kashmir
Aligned with NEP 2020 | NCF 2023 | Competency-Based Teaching
