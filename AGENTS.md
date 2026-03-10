# AGENTS.md — Jauría CrossFit · Landing Page

> **ROL DE CODEX:** Frontend Angular 18 exclusivamente.
> Para orquestación, infra, Supabase admin y Linear → usar Claude Code.

---

## Proyecto

Landing page pública de **Jauría Strength and Fitness** — gimnasio CrossFit en Ecuador.
Angular 18.2.14 standalone, sin SSR, solo client-side rendering.

**URL local:** `localhost:4200`
**Repo:** `alvarodevrace/jauria-landingpage`
**Rama de trabajo:** `develop`

---

## Stack

- **Framework:** Angular 18.2.14 standalone
- **Estilos:** SCSS con design system propio
- **DB:** Supabase — solo tabla `leads` (formulario de contacto)
- **Sin routing** — SPA de una sola página con scroll

---

## Paleta de colores — DEFINITIVA

```scss
$color-bg:       #0a0a0a;   // negro fondo
$color-surface:  #141414;
$color-surface2: #1e1e1e;
$color-primary:  #B71C1C;   // rojo sangre — ÚNICO acento
$color-white:    #FFFFFF;
$color-text:     #CCCCCC;
$color-muted:    #666666;
$color-border:   #2a2a2a;

// Colores de horarios (NO usar otros)
WOD:          #B71C1C
Open Gym:     #CCCCCC
Barbell Club: #7B1111
```

Tipografías: **Bebas Neue** (headings) + **Inter** (cuerpo)

---

## Estructura

```
src/
├── app/
│   ├── core/
│   │   ├── navbar/
│   │   └── footer/
│   └── pages/home/
│       ├── hero/          ← slider 6 fotos, Ken Burns, 100svh
│       ├── stats/         ← counter IntersectionObserver
│       ├── programas/     ← grid 1→2→3 col
│       ├── galeria/       ← masonry + lightbox
│       ├── membresias/    ← cards con planes
│       ├── horarios/      ← tabla scroll horizontal mobile
│       ├── testimonios/   ← carousel autoplay
│       └── contacto/      ← form → Supabase leads
├── environments/
│   └── environment.ts     ← Supabase URL + anon key
└── styles/
    ├── _variables.scss
    ├── _typography.scss
    └── _animations.scss
```

---

## Secciones (10/10 completas)

| Sección | Estado | Notas clave |
|---|---|---|
| Navbar | ✅ | sticky, transparente→negro, hamburger mobile 44×44px |
| Hero | ✅ | slider 6 fotos, Ken Burns GPU, CTAs stack en móvil |
| Stats | ✅ | counter animado con IntersectionObserver |
| Programas | ✅ | hover overlay rojo |
| Galería | ✅ | masonry, lightbox responsive |
| Membresías | ✅ | badge popular centrado en tablet |
| Horarios | ✅ | scroll horizontal móvil, min-width 660px |
| Testimonios | ✅ | carousel CSS/TS, autoplay |
| Contacto | ✅ | form → tabla leads en Supabase |
| Footer | ✅ | 1-col móvil, social 44×44px |

---

## Supabase — tabla leads

```typescript
// Solo insert desde el formulario de contacto
await supabase.from('leads').insert({
  nombre, email, telefono, mensaje, programa
});
```

Supabase URL: `https://bxatcmcommoqnxnyqchu.supabase.co`
Anon key: en `src/environments/environment.ts`

---

## Patrones obligatorios

```typescript
// Siempre standalone
@Component({ standalone: true, imports: [...] })

// Signals para estado
loading = signal(false);

// inject() no constructor
private service = inject(MiService);
```

---

## Assets

- Logo: `src/assets/images/logo.jpg`
- Fotos: `src/assets/images/` (13 JPGs del gym)
- Instagram: `https://www.instagram.com/jauriastrengthandfitness/`
- Facebook: `https://www.facebook.com/jauriastrengthandfitness/?locale=es_LA`

---

## Reglas

### ✅ HACER
- Modificar secciones existentes respetando la paleta y tipografías
- Usar las mismas animaciones del `_animations.scss`
- Responsive mobile-first
- Build limpio: `npm run build`
- Trabajar en rama `develop`

### ❌ NO HACER
- Agregar Angular Router (es SPA de una página)
- Usar Angular Material, Bootstrap ni Tailwind
- Cambiar la paleta de colores
- Subir a `main` directamente

---

## Comandos

```bash
npm start       # localhost:4200
npm run build   # verificar build limpio
git checkout develop
```

---

## Datos pendientes (ALV-53)

Estos datos son de prueba y deben reemplazarse cuando el coach los provea:
- Precios de membresías
- Número real de WhatsApp del coach
- Horarios reales de clases
- Testimonios reales de atletas
