# ReadOPM – One Punch Man AI Colored Manga Reader

Static manga reader for AI-colorized One Punch Man chapters 100–221. Images are served from Cloudflare R2 via a Worker.

## Deploy to Cloudflare Pages (GitHub)

### 1. Push to GitHub

Push this repo (or the `ReadOPM` folder as its own repo) to GitHub.

### 2. Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select your GitHub repo and authorize
3. Configure build settings:
   - **Build command:** Leave empty (static site)
   - **Build output directory:** `.` (this repo root)
4. Click **Save and Deploy**

### 3. Result

Your site will be live at `https://<project-name>.pages.dev` (or your custom domain).

### Custom domain (optional)

In the Pages project → **Custom domains** → **Set up a custom domain** and add your domain.

---

## Local development

Open `index.html` in a browser or use a local server:

```bash
npx serve ReadOPM
# or: python -m http.server 8080 --directory ReadOPM
```

Images load from the Worker URL (configured in `config.js`).
