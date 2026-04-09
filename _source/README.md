# Solutions with Ang

Health & Wellness website for Angela Brazier — Certified Diet Free Life Coach.

## Project Structure

- **`_source/`**: React + Vite source code (components, pages, assets)
- **Root (`/`)**: Production-ready files served by Ferozo hosting (`index.html`, `assets/`, `contact.php`)

## Development

```bash
cd _source
npm install
npm run build
```

Build output goes to the project root automatically via `vite.config.ts`.

## Deployment

Push to `main` branch → GitHub Actions builds automatically → Ferozo serves from root.

## Architecture Rules

- `contact.php` lives **only** at the root — never in `_source/public/`
- All routes use base `/` (not `/web/`)
- See `INSTRUCCIONES_FEROZO.md` for full deployment details
