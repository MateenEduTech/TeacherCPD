# Teacher CPD & Reflective Practice Studio
## Developed by Mateen Yousuf — Teacher, School Education Department Kashmir
### Aligned with NEP 2020 | NCF 2023 | Competency-Based Pedagogy

---

## 📁 File Structure

```
/cpd-studio-app/
├── index.html          ← Main application (single file)
├── manifest.json       ← PWA manifest
├── service-worker.js   ← Offline caching
├── author.jpg          ← Author photo
└── README.md           ← This guide
```

---

## 🚀 How to Run Locally

### Option 1 — VS Code Live Server (Recommended)
1. Install VS Code from https://code.visualstudio.com
2. Install the "Live Server" extension
3. Open the project folder in VS Code
4. Right-click `index.html` → "Open with Live Server"
5. App opens at http://127.0.0.1:5500

### Option 2 — Python Simple Server
```bash
# Python 3
python -m http.server 8080
# Then open: http://localhost:8080
```

### Option 3 — Direct Browser (limited PWA features)
Double-click `index.html` to open directly in browser.
Note: Service worker will not activate on `file://` URLs.

---

## 🌐 How to Host for Free

### GitHub Pages (Recommended)
1. Create a free account at https://github.com
2. Create a new public repository (e.g., `cpd-studio`)
3. Upload all files to the repository
4. Go to Settings → Pages → Source: main branch → / (root)
5. Your app will be live at: `https://yourusername.github.io/cpd-studio`

### Netlify
1. Go to https://netlify.com → Sign up free
2. Drag and drop your project folder onto the Netlify dashboard
3. App is live instantly with a free URL
4. Optional: connect a custom domain

### Cloudflare Pages
1. Go to https://pages.cloudflare.com
2. Connect your GitHub repository
3. Deploy with zero configuration

---

## 📱 Installing as PWA (Add to Home Screen)

### Android Chrome
1. Open the app in Chrome browser
2. Tap the three dots menu (⋮)
3. Tap "Add to Home screen"
4. Tap "Add" to confirm
5. App installs like a native app

### iOS Safari
1. Open the app in Safari
2. Tap the Share button (□↑)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

---

## 📦 Converting to Android APK

### Method 1 — TWA (Trusted Web Activity) via Bubblewrap
This is the recommended method for publishing to Google Play Store.

**Prerequisites:**
- Node.js (https://nodejs.org)
- Android Studio (https://developer.android.com/studio)
- Java JDK 11+

**Steps:**
```bash
# 1. Install Bubblewrap CLI
npm install -g @bubblewrap/cli

# 2. Initialize TWA project
mkdir cpd-studio-apk && cd cpd-studio-apk
bubblewrap init --manifest https://yoursite.com/manifest.json

# 3. Build the APK
bubblewrap build

# 4. Signed APK will be in app/build/outputs/apk/release/
```

### Method 2 — WebView Wrapper (Offline APK)
Use this if you want the app to run fully offline without a website URL.

1. **Install Android Studio**
2. **Create a new project**: Empty Activity → Java
3. **Replace MainActivity.java:**
```java
import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
    private WebView webView;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        webView = findViewById(R.id.webview);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);  // Enables localStorage
        settings.setAllowFileAccess(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        webView.setWebViewClient(new WebViewClient());
        
        // Load the local HTML file
        webView.loadUrl("file:///android_asset/index.html");
    }
    
    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) webView.goBack();
        else super.onBackPressed();
    }
}
```

4. **Add to activity_main.xml:**
```xml
<WebView
    android:id="@+id/webview"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

5. **Copy app files:** Place `index.html`, `manifest.json`, `service-worker.js`, and `author.jpg` in `app/src/main/assets/`

6. **Build APK:** Build → Build Bundle(s)/APK(s) → Build APK(s)

7. **Signing the APK:**
```
Build → Generate Signed Bundle / APK
→ Create new keystore → Fill details → Build Release APK
```

### App Icon & Splash Screen
- Add app icons in `app/src/main/res/mipmap-*/`
- Add splash screen: File → New → Activity → Splash Activity
- Replace with your school/app logo

---

## 💾 Data Storage

All data is stored in the browser's **localStorage** — no server needed.

| Key | Contents |
|-----|----------|
| `lessonPlans` | Saved lesson plans |
| `reflectionEntries` | Reflective journal entries |
| `cpdLogs` | CPD activity logs |
| `obsReports` | Observation reports |
| `schoolPlans` | School improvement action plans |

**Backup tip:** In browser DevTools → Application → Local Storage → copy all data for backup.

---

## 🛠️ Technical Notes

- **No internet required** after first load
- **No login** — completely anonymous
- **No backend** — pure HTML/CSS/JavaScript
- **Print-friendly** — use browser print for PDF export
- **Touch-optimized** — works on mobile, tablet, desktop

---

## 📞 Contact

**Mateen Yousuf**  
Teacher, School Education Department  
Jammu & Kashmir, India
