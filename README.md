# Aarushi Makeup Studio & Academy — Website

Bridal makeup studio & academy website (Mhow, Indore).
Live: https://aarushimakeupstudio.vercel.app

## Folders

| Folder | What |
|---|---|
| `frontend/` | Website — React + Vite. Build ke time har page ka SEO-ready HTML banta hai. |
| `google-form/` | Google Apps Script — enquiry Google Form + WhatsApp (CallMeBot) / email alerts. |

## Local par chalana

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ me production build + sitemap.xml + robots.txt
```

## Content badalna

- Business details, services, prices, courses, reviews → `frontend/src/data/site.js`
- SEO titles/descriptions, domain → `frontend/src/data/seo.js`
- Google Form connection → `frontend/src/config/googleForm.js`
- Photos → `frontend/public/images/` (same file naam se replace karein, `.webp` format)

## Deploy (Vercel)

Repo import karein aur **Root Directory = `frontend`** rakhein (`frontend/vercel.json` me baaki settings hain).
Project ka naam `aarushimakeupstudio` rakhein taaki URL `aarushimakeupstudio.vercel.app` bane.
Domain badle to `frontend/src/data/seo.js` me `SITE_URL` update karein.
