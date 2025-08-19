# OxCARES: Oxford Clinical AI Research for Enhanced Safety — Website

A lightweight, static, multi‑page website for OxCARES with a clean, modern design. No build step required.

## Local preview

Open `index.html` in your browser. If you prefer a local server (for correct routing of relative assets), use Python:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Structure

- `index.html` — Home
- `about.html` — About OxCARES
- `people.html` — Team and collaborators
- `research.html` — Research themes and projects
- `publications.html` — Publications
- `news.html` — News
- `events.html` — Events
- `contact.html` — Contact
- `assets/css/styles.css` — Custom styles (on top of Pico.css)
- `assets/js/main.js` — Minimal interactivity (e.g. mobile nav)
- `assets/img/` — Images and logos

## Customisation

- Update copy on each page to reflect current projects, people, and outputs.
- Replace placeholder images in `assets/img/`.
- Adjust colours and typography in `assets/css/styles.css`.

## Deployment

Any static hosting works (GitHub Pages, Netlify, Vercel static, S3, on‑prem). For GitHub Pages:

1. Push this repository to GitHub.
2. In GitHub repo settings → Pages → Build and deployment → Source: deploy from branch. Choose `main` and `/ (root)`.
3. Save. Your site will be available at the Pages URL.

## Acknowledgements

Clinician partners at OxSTaR: see the OxSTaR Centre website for more information: https://www.oxstar.ox.ac.uk/
