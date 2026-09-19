# ChaiGPT Cafe & Restaurant — Website

The website for ChaiGPT Cafe & Restaurant, Jamshoro, split into normal project files.

## What's in this folder

```
index.html      the page structure
styles.css      all styling
script.js       nav, menu tabs, scroll animations, gallery/menu modal
assets/         every photo and the logo used on the site
README.md       this file
```

Open `index.html` in a browser and the site runs locally exactly as it does live — no build step, no install, no dependencies.

## Put it live on GitHub Pages (free hosting)

1. **Create a repository**
   Go to [github.com/new](https://github.com/new), name it (e.g. `chaigpt-website`), and create it (public repos get free GitHub Pages hosting).

2. **Upload everything**
   On the repo's main page, click **"Add file" → "Upload files"**, then drag in `index.html`, `styles.css`, `script.js`, and the whole `assets` folder together, keeping this same structure. Commit to the `main` branch.
   *(The `assets` folder and its contents must stay named exactly as they are — `index.html`, `styles.css`, and `script.js` all reference those file paths directly.)*

3. **Turn on GitHub Pages**
   Go to **Settings → Pages** (left sidebar). Under "Build and deployment", set:
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)**

   Click **Save**.

4. **Visit your site**
   After a minute or two, GitHub will show a link like:
   `https://yourusername.github.io/chaigpt-website/`
   That's your live website.

## Using your own domain (optional)

If you own a domain (e.g. `chaigpt.pk`):
1. In **Settings → Pages**, enter it under "Custom domain" and save.
2. At your domain registrar, add a `CNAME` record pointing to `yourusername.github.io`.
3. Wait for DNS to propagate (can take a few hours), then check "Enforce HTTPS" once it's available.

## Making future edits

- **Text or price changes**: edit `index.html` directly on GitHub (pencil ✎ icon) — menu items, hours, and copy all live in plain HTML.
- **Colors, fonts, spacing**: all in `styles.css`, controlled mostly by the CSS variables at the very top of the file.
- **A new photo**: add the image file into `assets/`, then point the relevant `<img src="assets/your-file.jpg">` at it in `index.html`.
- **Bigger changes**: easiest to come back here and ask Claude, then re-upload the changed files the same way (Step 2 above) to overwrite the old ones.

## Notes

- Fonts (Fraunces, Caveat, Figtree) load from Google Fonts over the internet automatically once the site is live — no setup needed.
- Everything is plain HTML/CSS/JavaScript with no framework and no external services beyond Google Fonts, so it will keep working indefinitely with no maintenance.
