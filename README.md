# devops-portfolio-builder

Portfolio personal de **Luis Fernando Navarrete Estrada** — Site Reliability Engineer con 5+ años en sistemas distribuidos, observabilidad y automatización de infraestructura.

**Live:** https://portafolio.luam.ovh

---

## Stack

| | |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 7 + SWC |
| Estilos | Tailwind CSS v3 + shadcn/ui |
| Deploy | Cloudflare Pages |

## Optimizaciones implementadas

- **Lazy loading** — secciones below-the-fold cargadas con `React.lazy` + `Suspense`
- **Code splitting** — chunks separados: `vendor-react`, `vendor-radix`, `vendor-icons`, `vendor-data`, `vendor-ui`
- **Compresión** — gzip + brotli en todos los assets de producción
- **WebP** — imágenes convertidas con fallback PNG (`avatar.webp` 50KB vs 281KB original)
- **Prefetch on-hover** — los chunks de cada sección se prefetchean al hacer hover en el navbar
- **Error Boundary** — captura global de errores con UI de recuperación
- **SEO** — OG, Twitter Card, JSON-LD structured data, canonical, preload hints

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # build de producción
npm run preview    # preview del build
```

> Requiere Node.js 18+ y npm 9+

## Variables de entorno

Copia `.env.example` a `.env` y ajusta los valores:

```bash
cp .env.example .env
```

## Estructura

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed nav con prefetch on-hover
│   ├── HeroSection.tsx     # Above-the-fold, eager load
│   ├── SkillsSection.tsx   # Lazy
│   ├── ProjectsSection.tsx # Lazy
│   ├── ExperienceSection.tsx # Lazy
│   ├── CertsSection.tsx    # Lazy
│   ├── FooterSection.tsx   # Lazy
│   ├── ErrorBoundary.tsx   # Global error handler
│   └── SectionSkeleton.tsx # Loading fallback
└── pages/
    └── Index.tsx           # Orquesta lazy loading
```
