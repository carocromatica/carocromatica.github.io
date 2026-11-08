# Contexto del proyecto — Portafolio de Caro (Carocromatica)

Documento para retomar el trabajo sin perder las decisiones tomadas. Última actualización: 8 nov 2026.

## Qué es

Rediseño del portafolio de **Carolina Torres (Carocromatica)**, *Product Designer y Front-End Developer* en Chile. Parte del repositorio `carocromatica/carocromatica.github.io`, clonado en esta carpeta. El sitio original (`index.html`, hecho con Materialize) **no se tocó**; las páginas nuevas conviven con él.

## Concepto

> **La diseñadora está pensando en las personas que usan sus productos. Cada círculo de la nube de pensamiento es un usuario.**

- La nube es un globo de diálogo hecho de círculos de colores, con caritas (usuarios). Su colita baja hasta la cabeza de la diseñadora.
- Tono buscado: moderno y cálido, **menos infantil**. Sin círculos diminutos que ensucien, sin círculos sueltos fuera de la nube.
- Frase guía del hero: *"Construyo experiencias digitales pensando en las personas."*

## Archivos

| Archivo | Qué es | Estado |
|---|---|---|
| `index.html` | Sitio original | Intacto |
| `design.md` | Paleta y tipografía extraídas del sitio original | **Desactualizado**: dice Lato; las páginas nuevas usan Lexend + Atkinson |
| `indexskill.html` | Primer rediseño de prueba (hero con tres círculos superpuestos tipo riso, bordes ondulados, manchas orgánicas) | Experimento cerrado |
| `indexspark.html` | Concepto "embudo": triángulo de círculos-usuario cuya punta cae sobre la diseñadora en "Sobre mí" | Versión anterior, aún funcional |
| **`indexspark2.html`** | **Versión actual.** Burbuja de diálogo, diseñadora dentro del hero | **La que seguimos desarrollando** |
| `indexspark.css` | CSS compartido por `indexspark*.html`. Los estilos de la versión 2 van bajo `body.v2` | Activo |
| `indexspark-invertido.html` | Variante antigua (nube izquierda, texto derecha) | Obsoleta, sin commitear; pendiente borrar |
| `spark/carocromatica.svg` | Ilustración de la diseñadora | Activo |
| `spark/marca.svg` | Logo de Caro (círculo oscuro con una "C" de colores) | Activo en el navbar de la v2 |
| `svg/`, `cv/` | Logos de skills, mockups de proyectos y CV del sitio original | Se reutilizan |
| `.claude/`, `.impeccable/` | Skill Impeccable y su configuración (detector de diseño) | **No se commitean** |

## Cómo verlo

Hay que servirlo por HTTP (abierto como archivo, las imágenes no cargan):

```bash
cd /Users/carolinatorres/Documents/Portafolio
python3 -m http.server 8765
```

Luego abrir `http://localhost:8765/indexspark2.html` (recargar con Cmd+Shift+R).

## Sistema de diseño

**Colores** (los del sitio original; se mantienen):
- Teal/cyan `#6CD0CD` · Ámbar/amarillo `#FFB700` · Coral/rojo `#FF495C` · Coral oscuro `#D1263E`
- Tinta `#1E252B` · Fondo **blanco** `#FFFFFF`
- Tintas claras derivadas para los círculos: teal `#B6E8E6`, ámbar `#FFDB7A`, coral `#FFA4AE`
- El logo `marca.svg` trae sus propios colores (`#ff2e56`, `#ffc500`, `#3ad2cd`, `#113044`); se usa tal cual.

**Tipografía de la v2:**
- Titulares: **Lexend Bold (700)**
- Texto: **Atkinson Hyperlegible Next** (400 y 600), humanista y pensada para la legibilidad, en línea con "pensar en las personas"
- Íconos: Font Awesome 5.4.1
- Probadas y descartadas: Bricolage Grotesque, Schibsted Grotesk, Urbanist, Young Serif, Copse, Inter Tight, Carme, Glory, Truculenta, Puritan, Righteous.
- Preferencia de Caro: sans-serif **humanistas** para texto continuo.

## Contenido y textos (v2)

- **h1 (para SEO):** "Product Designer y Front-End Developer." El saludo "Hola, soy Caro." es un `<p>` aparte. "Caro" lleva el **texto** en degradado amarillo → rojo (colores del design system).
- **Subtítulo:** "Construyo experiencias digitales pensando en las personas."
- **Sobre mí** en dos columnas: a la izquierda las palabras clave (Investigación UX, Diseño de servicios, Diseño UX/UI, Desarrollo front-end, con bullets triangulares que apuntan a la derecha); a la derecha tres párrafos de descripción y los links (CV, GitHub, Behance, LinkedIn).
- **Skills, Proyectos** (EcoGO!, Synapse, Translab, Pinterest Replica) y **Contacto**: conservan el contenido del sitio original.

## Cómo funciona la nube (`indexspark2.html`)

- Los círculos se **generan con JavaScript** en cada carga (no están escritos en el HTML). Son unos 160, con tamaños distintos, superpuestos un poco, algunos con trama de puntos.
- La silueta es un óvalo con una colita, medida desde el artboard de Caro y expresada como fracciones del hero. La punta de la colita se alinea con la cabeza de la diseñadora, **medida con `offsetLeft/offsetTop`** (con `getBoundingClientRect` la animación de entrada de la diseñadora desplazaba la burbuja, sobre todo en Brave).
- Cada círculo grande y liso lleva una carita de líneas finas (varias expresiones). Hover: crece un 14%.
- **Easter egg:** tres caritas grandes y separadas parpadean de vez en cuando; al tocarlas cambian de cara, sueltan chispas y muestran un mensaje ("¡Me encontraste! Soy un usuario secreto." / "Shhh… ¿ya viste los proyectos más abajo?" / "Tres de tres. Gracias por mirar con tanta atención.").
- Un clic en la diseñadora regenera la nube. También se regenera al cambiar el tamaño de la ventana.
- **Móvil (≤ 52rem):** no hay globo (ni se genera); solo queda la diseñadora debajo del texto.
- Respeta `prefers-reduced-motion`.

## Decisiones de diseño tomadas

- Fondo blanco liso (sin grano de papel).
- Navbar **transparente y no fijo**, solo con links a la derecha; el logo de Caro va a la izquierda.
- Texto del hero anclado abajo; el rol en una sola línea en pantallas de 80rem o más.
- Nada de círculos sueltos fuera de la nube, ni puntitos de 2px.
- Sin caritas negras ni círculos blancos (se perderían sobre el fondo blanco).

## Git

- Rama de trabajo: **`nuevo-portafolio`** (4 commits sobre `master`), **sin push**.
- Subirla: `git push -u origin nuevo-portafolio`.
- Commits en español, con la línea `Co-Authored-By`.
- Sin commitear a propósito: `.claude/`, `.impeccable/`, `indexspark-invertido.html`.

## Pendientes y cosas por verificar

- Revisar con las tipografías nuevas las secciones **Skills, Proyectos y Contacto**, y **Sobre mí en móvil**: no se vieron renderizadas tras los últimos cambios.
- El degradado de "Caro" quedó en amarillo → rojo; el último ajuste no se vio renderizado. **Contraste:** el amarillo sobre blanco da ~1.6:1 (bajo el 3:1 recomendado para texto grande). Opciones: oscurecer el amarillo, sombra suave o empezar en el rojo.
- Actualizar `design.md` (tipografía y colores de las páginas nuevas).
- Borrar `indexspark-invertido.html` y agregar `.claude/` y `.impeccable/` al `.gitignore`.
- Decidir si `indexspark.html` e `indexskill.html` se archivan, ya que la v2 es la elegida.
- El detector de Impeccable marca un aviso `tight-leading` (interlineado de 1.24) que no se logró ubicar.
- Elegir qué archivo pasa a ser el `index.html` definitivo.
- No existe `PRODUCT.md` de Impeccable (se saltó el `init` para ir más rápido).

## Cómo le gusta trabajar a Caro

- Itera con **capturas anotadas** (líneas verdes sobre la imagen) y artboards de Illustrator; conviene seguir sus trazos al pie de la letra.
- Escribe en español, con mensajes cortos; pide "commit" cuando quiere guardar.
- Prueba en **Brave**. Si algo se ve distinto a lo esperado, suele ser por la caché: Cmd+Shift+R.
- Prefiere ver propuestas probadas en el navegador antes que descripciones.
