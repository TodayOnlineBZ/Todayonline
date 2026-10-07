# TodayOnline

De onepager van TodayOnline, gebouwd met Astro.

## Lokaal draaien

```
npm install
npm run dev
```

## Bouwen

```
npm run build
```

De site komt in `dist/`.

## Cloudflare Pages

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node-versie: 22 (staat in `.nvmrc`)

## Waar staat wat

- `src/data/site.js`: alle teksten van het stappenplan, de projecten, de tools en de contactgegevens.
- `src/components/`: één bestand per sectie van de pagina.
- `src/assets/work/`: screenshots van projecten. Bestandsnaam `<naam>-desktop.jpg`; een lange screenshot scrolt vanzelf.
- `public/tools/`: de toollogo's als masker.
- `public/_redirects` (Cloudflare) en `vercel.json` (Vercel): doorverwijzingen van de oude WordPress-adressen.
- `src/pages/privacy.astro` en `disclaimer.astro`: tekst nog overzetten.

## Sanity (inhoud beheren)

- Studio: https://todayonline.sanity.studio/
- Project-ID `iejh710k`, dataset `production` (staat in `src/data/cms.js`).
- De site haalt de inhoud op tijdens het bouwen. Is Sanity niet bereikbaar, dan gebruikt de site de teksten uit `src/data/site.js`.
- Beheerbaar in Sanity: het stappenplan (vijf stappen), de projecten, de toepassing bij elke tool en de contactgegevens.
- Een wijziging in Sanity staat pas online na een nieuwe build.

### Automatisch opnieuw bouwen na publiceren

1. Cloudflare Pages: Settings, Builds & deployments, Deploy hooks. Maak een hook aan en kopieer de URL.
2. Sanity: sanity.io/manage, project TodayOnline, API, Webhooks. Maak een webhook met die URL, methode POST, bij create, update en delete.
