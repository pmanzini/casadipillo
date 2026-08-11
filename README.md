# Casa di Pillo

Sito vetrina statico per Casa di Pillo a Frontino, realizzato con React, TypeScript e Vite. L'applicazione è una PWA bilingue italiano/inglese e vive interamente sotto `src/casadipilloapp`.

## Sviluppo locale

```bash
cd src/casadipilloapp
npm install
npm run dev
```

La build di produzione viene generata in `src/casadipilloapp/dist` con `npm run build` eseguito dalla directory dell'app.

## Immagini

Gli originali sono conservati in `src/casadipilloapp/src/assets/images`. Le versioni WebP ottimizzate per il web sono generate in `src/casadipilloapp/src/assets/optimized`:

- `carousel`: larghezza massima 640 px, per le strisce fotografiche e i dispositivi mobili
- `slideshow`: larghezza massima 1600 px, per hero e lightbox

Per rigenerarle dopo aver aggiunto o sostituito immagini:

```bash
cd src/casadipilloapp
npm run optimize:images
```

Lo script Python richiede Pillow (`python -m pip install -r requirements-images.txt`) e mantiene invariati i file originali.

## GitHub Pages

Il workflow `.github/workflows/deploy-pages.yml` pubblica automaticamente ogni push su `main`. Nel repository GitHub va impostato **Settings > Pages > Source: GitHub Actions**. Il dominio personalizzato `lacasadipillo.it` può essere finalizzato nelle impostazioni Pages e tramite DNS.

## Struttura

- `src/casadipilloapp/App.tsx`: pagina e interazioni della vetrina
- `src/casadipilloapp/i18n.ts`: testi italiano/inglese e lingua persistita nel browser
- `src/casadipilloapp/assets/images`: immagini originali del sito
- `src/casadipilloapp/gallery.ts`: catalogo delle gallerie
- `src/casadipilloapp/styles.css`: design responsive
