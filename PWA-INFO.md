# PWA Setup - Pepsi Application

## What's Been Done

Your application is now a fully functional Progressive Web App (PWA) with the following capabilities:

### ✅ Implemented Features:

1. **Service Worker** - Automatic caching for offline functionality
2. **Web App Manifest** - Enables app installation on desktop/mobile devices
3. **Auto-update** - Application automatically updates when a new version is available
4. **PWA Icons** - Generated icons in different sizes (192x192, 512x512, Apple touch icon)
5. **Meta Tags** - Added all necessary meta tags for iOS and Android support
6. **Offline Caching** - Caching of all JS, CSS, HTML and asset files

## How to Test PWA

### 1. Local Testing:

```bash
# Build the application
npm run build

# Start preview server
npm run preview
```

### 2. Testing in Chrome/Edge:

- Open the application in Chrome/Edge
- Go to DevTools (F12) -> Application tab -> Service Workers
- Check if the Service Worker is registered
- In the URL bar you'll see an installation icon (usually plus or download icon)
- Click on it to install the PWA

### 3. Testing on Mobile:

#### Android:
- Open the application in Chrome
- Click on the menu (three dots)
- Select "Add to Home Screen" or "Install app"

#### iOS:
- Open the application in Safari
- Click the Share button
- Select "Add to Home Screen"

### 4. Testing Offline Functionality:

- Install the PWA
- Open DevTools -> Network tab
- Select "Offline" in the dropdown menu
- Refresh the page - the application should work!

## Lighthouse Score

To check PWA quality:
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Progressive Web App"
4. Click "Generate report"

## Next Steps

### Additional Features You Can Add:

1. **Push Notifications** - For user notifications
2. **Background Sync** - Synchronization when connection is restored
3. **Splash Screen** - Custom screen during app launch
4. **Share API** - Share content with other applications
5. **App Shortcuts** - Shortcuts in the app context menu

### Replacing Icons:

Current icons are placeholders. To add the real Pepsi logo:

1. Save your logo as an SVG file in `public/icon.svg`
2. Install sharp: `npm install -D sharp`
3. Run the following code to generate icons:

```javascript
// generate-icons.js
import sharp from 'sharp';
import { readFileSync } from 'fs';

const svgBuffer = readFileSync('./public/icon.svg');

async function generateIcons() {
  await sharp(svgBuffer).resize(192, 192).png().toFile('./public/pwa-192x192.png');
  await sharp(svgBuffer).resize(512, 512).png().toFile('./public/pwa-512x512.png');
  await sharp(svgBuffer).resize(180, 180).png().toFile('./public/apple-touch-icon.png');
  console.log('Icons generated!');
}

generateIcons();
```

## Configuring PWA

All PWA settings are in `vite.config.ts`:

- **theme_color**: Browser UI color (currently Pepsi blue #005eb8)
- **background_color**: Splash screen background color
- **name/short_name**: Application name
- **display**: Display mode (standalone = without browser UI)

## Deploy

For deployment, you can use:

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: `npm run build` then drag & drop the `dist` folder
- **GitHub Pages**: Configure GitHub Actions

⚠️ **Important**: PWA only works over HTTPS (or localhost for development)!

## Resources

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
- [Workbox](https://developer.chrome.com/docs/workbox/)
