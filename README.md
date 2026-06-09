
# Pulse-Music
Pulse — PWA for music discovery, charts, and industry intelligence
=======
# Pulse Music

Pulse Music is a Progressive Web App for music discovery and industry intelligence. It delivers live chart data, new releases, genre insights, trending video feeds, and platform settings in a polished single-page experience.

## Project Overview

Pulse Music was built as a static client-side web app with modern PWA support. It is designed for music fans and industry watchers, with a focus on African and global music trends.

## Key Features

- Live Billboard Hot 100 ticker
- Personalized feed builder by country and genre
- Local and international new release panels
- Music intelligence dashboard with:
  - YouTube local trending videos
  - Deezer genre charts with preview playback
  - Local podcasts and interviews
- Signup/login modal flow with verification UI
- Theme switcher (dark/light)
- Multi-language interface options
- Settings panel with notification toggles
- Admin dashboard access via `pulse_admin.html`
- PWA manifest and installable experience
- Offline caching via `sw.js`

## Tech Stack

- HTML
- CSS
- JavaScript
- Web App Manifest (`manifest.json`)
- Service Worker (`sw.js`)
- Static assets and icons

## Project Files

- `Pulse.html` — main app page
- `manifest.json` — PWA configuration
- `sw.js` — service worker cache logic
- `pulse_admin.html` — admin / analytics portal
- `launch-pulse.bat` — local Chrome app launcher
- `icon-192.png`, `icon-512.png` — app icons

## How to Run

### Option 1: Open locally
1. Open `Pulse.html` in your browser.
2. The app will load and register the service worker.

### Option 2: Use the launcher
1. Run `launch-pulse.bat`.
2. It opens `Pulse.html` in Chrome app mode.

### Option 3: Deploy with GitHub Pages
1. Create a new GitHub repository.
2. Push the project files to the repository.
3. GitHub Actions will automatically build and deploy to GitHub Pages (workflow included).
4. Your app will be live at `https://your-username.github.io/pulse-music`

## Notes

- The app uses external services such as Deezer and YouTube via client-side fetch requests.
- `sw.js` caches the main app shell and can serve the app offline for static assets.
- `manifest.json` enables installable PWA behavior.

## Future Improvements

- Add a backend API for authenticated user data and saved preferences
- Improve offline support for dynamic feed content
- Add real chart API integration instead of fallback/localized data
- Add a hosted deployment URL in the README once published

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

Built for portfolio demonstration and music discovery.
>>>>>>> df72313 (Initial commit — prepare Pulse Music for GitHub Pages)
