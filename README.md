# Manantial de los Cañitos

Rediseño local en HTML5, CSS3 y JavaScript vanilla, compatible con Live Server. Sin compilación ni despliegue.

## Fotografías
Cinco originales aportados en `img/`; cuatro seleccionados tras inspección visual. El usuario confirmó el 28/10/2026 que dispone de permiso de publicación. Copias WebP optimizadas en `imgs/`, sin alterar originales. Clasificación, selección y autorización documentadas en [qa/FOTOGRAFIAS.md](qa/FOTOGRAFIAS.md).

Portada con fachada y patio; álbum con vista aérea, piscina y escena rural. No se emplean las cuatro fotografías ilustrativas del diseño antiguo. No hay fotos de interiores; pendientes de aportar. Las imágenes no permiten confirmar capacidad, temporada de piscina ni condiciones de servicios.

`js/photos.js` configura las fotos y sus descripciones. La marcada cover se muestra solo en portada, sin repetirse en la galería. El visor permite botones, flechas, Escape, gestos horizontales y devolución del foco. Las fotos también se muestran sin JavaScript mediante HTML.

## Información y contacto
Nombre, ubicación general y teléfono preexistentes. Consulta directa en `tel:+34636126378`; copia con alternativa manual. Maps abre una búsqueda, no un acceso físico verificado. Sin disponibilidad, tarifas, formularios o servicios inventados.

Fuentes de corroboración de teléfono y localidad consultadas en la primera fase:
- https://24handalucia.es/directorio/cadiz/empresa/alojamiento-rural-manantial-de-los-canitos
- https://localitybiz.es/23137796/alojamiento-rural-manantial-de-los-ca%C3%B1itos-ubrique

## Verificación
Pruebas actuales en `qa/photo-results.json`, capturas `qa/photos-*.png`. Los resultados y capturas con otros prefijos corresponden a fases anteriores. Chrome automatizado no equivale a una prueba en iPhone/Safari físico. Fuentes locales Petrona y Commissioner con sus licencias en css/.
