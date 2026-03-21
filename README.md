# devops-portfolio-builder

Portfolio personal de **Luis Fernando Navarrete Estrada**, enfocado en SRE, DevOps, observabilidad, FinOps y automatizacion de infraestructura.

- Live: `https://portafolio.luam.ovh`
- Cloudflare Workers: `https://devops-portfolio-builder.luisfernandonavarrete.workers.dev`

## Stack

| Area | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 8 |
| Estilos | Tailwind CSS v3 + shadcn/ui |
| Runtime de deploy | Cloudflare Workers Assets + Wrangler |
| Package manager | Bun |

## Optimizaciones actuales

- `Above the fold`: hero con imagen responsive en `AVIF/WebP/JPEG`, preload del fondo principal y dimensiones explicitas para evitar CLS.
- `Fuentes`: fuentes self-hosted en `public/fonts/` con `@font-face` y `font-display: swap`; ya no dependen de Bunny Fonts.
- `JS inicial`: se elimino `react-router-dom` para una navegacion estatica simple basada en `window.location.pathname`.
- `Mobile rendering`: se redujeron animaciones y efectos pesados del fondo en mobile para mejorar LCP, TBT e interactividad.
- `Below the fold`: secciones diferidas con lazy loading y render progresivo.
- `Build output`: compresion `gzip` y `brotli`, division de chunks y minificacion con Terser.
- `SEO`: metadatos OG/Twitter, JSON-LD, canonical y preload hints.

## Resultados medidos

- Lighthouse mobile: `96`
- Lighthouse desktop: `100`
- Mobile FCP: `2.3s`
- Mobile LCP: `2.3s`
- Mobile TBT: `20ms`
- Desktop LCP: `0.5s`

Detalles completos en `plans/optimization-results.md`.

## Desarrollo local

```bash
bun install
bun run dev       # http://localhost:8080
bun run build     # build de produccion
bun run preview   # preview local del build
```

Tambien puedes usar `npm`, pero el lockfile oficial del proyecto es `bun.lock`.

## Deploy

```bash
bun run build
bunx wrangler deploy
```

La configuracion de despliegue vive en `wrangler.toml` y sirve `dist/` como assets estaticos desde Cloudflare Workers.

## Validacion rapida

```bash
bun run build
bun run preview --host 127.0.0.1 --port 4173
npx lighthouse http://127.0.0.1:4173 --preset=desktop --only-categories=performance
```

Nota: `bun run lint` todavia reporta errores previos no relacionados en `tailwind.config.ts` y `src/components/ui/textarea.tsx`.

## Estructura relevante

```text
public/
├── assets/                  # imagenes responsive optimizadas
└── fonts/                   # fuentes self-hosted

src/
├── components/
│   ├── CyberBackground.tsx  # fondo visual optimizado para mobile
│   ├── DeferredSection.tsx  # montaje progresivo below-the-fold
│   ├── HeroSection.tsx      # hero y LCP principal
│   ├── Navbar.tsx           # nav fija con prefetch y scroll optimizado
│   └── ErrorBoundary.tsx    # fallback global
├── pages/
│   ├── Index.tsx            # pagina principal
│   └── NotFound.tsx         # fallback simple sin router
├── App.tsx                  # seleccion de pagina basada en pathname
└── index.css                # tema, animaciones y reducciones mobile
```

## Documentacion adicional

- `plans/performance-optimization-plan.md`
- `plans/optimization-results.md`
