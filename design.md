# Design — Portafolio carocromatica

Sistema de diseño extraído del portafolio actual (`carocromatica.github.io`) como base para el nuevo portafolio.

## Paleta de colores

### Colores de marca

| Token | Hex | Uso actual |
|---|---|---|
| `--color-teal` | `#6CD0CD` | Trazos y formas del fondo (`fondo.svg`), ilustraciones |
| `--color-amber` | `#FFB700` | Formas y trazos del fondo, acentos |
| `--color-coral` | `#FF495C` | Acento principal; overlay del menú lateral (`rgba(255,73,92,0.5)`) |
| `--color-coral-dark` | `#D1263E` | Variante oscura del coral, estados hover/énfasis |
| `--color-orange` | Materialize `orange darken-1` (`#FB8C00`) | Botones Demo / Code de proyectos |

### Neutros

| Token | Hex | Uso actual |
|---|---|---|
| `--color-ink` | `#1E252B` | Texto/ilustración principal (SVG) |
| `--color-ink-alt` | `#1E1E1E` | Variante oscura |
| `--color-nav` | `#212121` | Barra de navegación (Materialize `grey darken-4`) |
| `--color-white` | `#FFFFFF` | Texto sobre fondos oscuros |
| `--color-gray-100` | `#F4F4F4` | Superficies claras |
| `--color-gray-200` | `#F2F2F2` | Superficies claras |
| `--color-gray-300` | `#E0E0E0` | Bordes / divisores |

## Variables CSS

```css
:root {
  /* Marca */
  --color-teal: #6CD0CD;
  --color-amber: #FFB700;
  --color-coral: #FF495C;
  --color-coral-dark: #D1263E;
  --color-orange: #FB8C00;

  /* Neutros */
  --color-ink: #1E252B;
  --color-ink-alt: #1E1E1E;
  --color-nav: #212121;
  --color-white: #FFFFFF;
  --color-gray-100: #F4F4F4;
  --color-gray-200: #F2F2F2;
  --color-gray-300: #E0E0E0;

  /* Overlay */
  --overlay-coral: rgba(255, 73, 92, 0.5);
}
```

## Tipografía

- **Familia:** Lato (400 y 900) vía Google Fonts
- **Títulos (h5):** 3em, bold
- **Texto "About":** 1.5em

## Iconos y framework actual

- Material Icons, Font Awesome 5.4.1
- Materialize CSS (el nuevo portafolio puede prescindir de él)

## Fondo

Ilustración SVG (`fondo.svg`) fija, `background-size: cover`, con formas orgánicas en teal y amber sobre fondo claro.

## Breakpoints actuales

- Móvil: `320px–480px` (el header deja de ocupar `100vh`)
- Menú móvil: `max-width: 400px`
