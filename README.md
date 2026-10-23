# Alojamiento Rural Manantial de los Cañitos

Web estática independiente. Concepto: **Origen del agua**. HTML5, CSS3 y JavaScript vanilla; sin frameworks, dependencias de ejecución ni compilación.

## Revisión de textos y jerarquía

La versión actual elimina los lemas de pausa, ritmo, desconexión y escapada, así como las etiquetas decorativas, la indicación de scroll y las anotaciones de esquina. Mantiene la arquitectura, fotografías, paleta, formas y animaciones. Usa títulos descriptivos de escala media y texto práctico de 14–19 px, con mayúsculas reservadas principalmente a la identidad de portada. Las aclaraciones sobre fotografías se conservan por su valor informativo y ahora son legibles. Detalles de la revisión en [qa/REVISION-TEXTOS.md](qa/REVISION-TEXTOS.md). Las capturas y resultados de pruebas corresponden a esta versión; la auditoría inicial describe el diseño de partida.

## Abrir la web

Abrir esta carpeta en VS Code y ejecutar **Open with Live Server** sobre `index.html`. También puede abrirse directamente como archivo local; copiar teléfono dispone de una alternativa compatible con ese contexto. Todos los recursos visuales y tipográficos son locales, con rutas relativas.

## Archivos

- `index.html`: contenido semántico, metadatos y JSON-LD.
- `css/style.css`: identidad, formas, movimiento y adaptaciones responsive.
- `css/*.ttf`: fuentes locales; `css/OFL-*.txt`: sus licencias.
- `js/script.js`: copiar teléfono, alternativa manual, revelado de imágenes y año.
- `img/`: cuatro fotografías WebP, sin recursos de otras landings.
- `favicon.svg`: símbolo propio de tres corrientes.
- `qa/`: auditoría de originalidad, resultados, capturas completas y scripts auxiliares de comprobación. No son necesarios para abrir la web.

## Datos y alcance

Únicamente se utilizan el nombre, la actividad, el teléfono **636 126 378** y la dirección aportados:

> Junto al Manantial de los Cañitos  
> Carretera  
> 11670 El Bosque, Cádiz

No se atribuyen habitaciones, capacidad, equipamiento, servicios, tarifas, opiniones, horarios ni disponibilidad. No se presenta el manantial como parte de la propiedad. No hay reservas, formularios, WhatsApp ni correos inventados.

Maps realiza una **búsqueda textual** de la dirección facilitada; no se ha verificado la entrada física. La cartografía es abstracta y está identificada como tal. Los enlaces telefónicos usan `tel:+34636126378`; la copia escribe exactamente `636126378`.

## Fotografías: procedencia y licencia

No se aportaron fotografías autorizadas del alojamiento. Las cuatro imágenes son **ilustrativas de naturaleza**, no fotografías del negocio, del manantial ni necesariamente de la Sierra de Cádiz. Se indica en pies, textos alternativos y en la secuencia de texturas. No se han generado imágenes mediante IA, ni se han utilizado interiores o instalaciones de otras propiedades.

| Archivo | Autor y original | Licencia | Preparación |
| --- | --- | --- | --- |
| `img/agua.webp` | Chaitanya Rayampally · [Clear water flowing over colorful river rocks](https://unsplash.com/photos/clear-water-flowing-over-colorful-river-rocks-RxcgraTlwRI), Vail, Colorado | [Unsplash License](https://unsplash.com/license) | WebP, 1600 × 1067, recorte visual orgánico |
| `img/caliza.webp` | cottonbro studio · [Close-Up Shot of a Limestone](https://www.pexels.com/photo/close-up-shot-of-a-limestone-9862517/) | [Pexels License](https://www.pexels.com/legal-pages/license/) | WebP, 900 × 1350, recorte visual orgánico |
| `img/luz.webp` | Nothing Ahead · [Fresh green leaf in sunlight](https://www.pexels.com/photo/fresh-green-leaf-in-sunlight-7501439/) | [Pexels License](https://www.pexels.com/legal-pages/license/) | WebP, 1000 × 561, recorte y saturación moderada en CSS |
| `img/cauce.webp` | wal_172619 · [Close-Up of Clear Flowing Stream Water with Rocks](https://www.pexels.com/photo/close-up-of-clear-flowing-stream-water-with-rocks-37178526/) | [Pexels License](https://www.pexels.com/legal-pages/license/) | WebP, 1400 × 933, recorte visual orgánico |

Licencias consultadas el 23/10/2026. Permiten uso comercial y adaptación según sus condiciones. Se conserva la autoría y se enlaza el original. Descarga y conversión mediante los servidores de imágenes de las plataformas. Peso conjunto de fotografías: aproximadamente 740 KiB. Las imágenes secundarias cargan de forma diferida; la principal tiene prioridad alta y precarga.

## Tipografía e identidad

**Syne** para nombres y titulares amplios, **Petrona** para voces serenas y **Commissioner** para información práctica. Descargadas del [repositorio oficial Google Fonts](https://github.com/google/fonts), directorios `ofl/syne`, `ofl/petrona` y `ofl/commissioner`. Licencia SIL Open Font License 1.1, incluida por familia en `css/`.

Paleta: caliza `#E6E8E3`, azul agua `#487C89`, arena `#D0B89C`, pizarra `#283E42` y blanco mineral `#FAFBF9`. El botón de llamada utiliza la sombra `#416F7B` para un contraste de aproximadamente 5,35:1 con el blanco mineral. El texto principal sobre caliza tiene aproximadamente 9,16:1. El azul sobre caliza se reserva para titulares grandes y dibujos.

La comparación con las 20 webs anteriores está documentada en [qa/AUDITORIA.md](qa/AUDITORIA.md). No se copiaron componentes visuales ni recursos de aquellas carpetas.

## Accesibilidad y comportamiento

- Enlace de salto, estructura semántica, un H1 y títulos de sección.
- Enlaces y botones nativos accesibles mediante teclado, con foco visible.
- Navegación flotante compacta; en móvil, contacto y llamada directa siempre accesibles.
- Copia con Clipboard API, alternativa local con selección y copia, y campo manual si el navegador deniega ambas.
- Mensaje de resultado mediante `role="status"`.
- Respeto de `prefers-reduced-motion`, también si cambia durante la visita.
- Contenido y fotografías visibles sin JavaScript; la llamada y Maps son enlaces nativos.
- Fotografías decoradas con formas CSS, sin carruseles, parallax ni animaciones perpetuas.

## SEO local

Título, descripción, Open Graph, idioma español, textos alternativos y datos estructurados `LodgingBusiness` con información confirmada. No se añade un dominio ficticio, coordenadas ni datos comerciales sin confirmar. `og:image` usa una ruta relativa porque este es un proyecto exclusivamente local: su compatibilidad con tarjetas sociales no puede validarse sin una URL pública definitiva. No se ha inventado una URL canónica.

## Verificación realizada

Pruebas en Google Chrome mediante Playwright el 23/10/2026, con anchos **375, 768, 1440 y 1920 px**. Capturas completas `qa/full-*.png` y portadas `qa/cover-*.png`. Se revisaron visualmente los cuatro formatos y se corrigieron los solapes observados.

Resultados detallados: [qa/results.json](qa/results.json). Comprobaciones: ausencia de scroll horizontal; cuatro fotografías cargadas por tamaño; ausencia de errores JavaScript y respuestas HTTP de error; anclas internas; navegación móvil al contacto; Clipboard API con lectura del contenido copiado; alternativa manual con permisos simulados como denegados; enlace de salto por teclado; revelado completo durante scroll; movimiento reducido y contenido sin JavaScript; JSON-LD parseable.

Los enlaces a Maps se comprobaron por su destino y consulta, sin verificar físicamente el acceso. Los enlaces `tel:` se comprobaron por su valor; no se realizó una llamada. La revisión de accesibilidad no equivale a una auditoría certificada ni se han probado todos los navegadores o lectores de pantalla.

El script `qa/check.cjs` usa una instalación temporal de Playwright y Chrome del equipo, inicia un servidor local solo durante las comprobaciones y lo cierra al terminar. No añade dependencias a la web. `qa/download-assets.cjs` documenta los recursos descargados.

Se verificó mediante SHA-256 que los archivos preexistentes de las otras carpetas no cambiaron. No se realizaron despliegues ni se añadieron configuraciones de Netlify.
