# Revisión de identidad verbal y legibilidad

Se compararon de nuevo los textos de las 20 webs disponibles en el workspace. Las coincidencias de tono incluyen la pausa, el ritmo, lo esencial, la conversación como eslogan y los encabezados de pequeñas etiquetas en mayúsculas. La revisión se limita a Manantial de los Cañitos.

## Texto eliminado

- «Donde empieza la pausa».
- «Agua en movimiento».
- «Volver a lo sencillo. Dejar que todo fluya».
- «Seguir el curso» y su indicación de scroll.
- «Naturaleza · Origen · Calma».
- «Lo esencial tiene su propio ritmo».
- «La piedra. La luz. El agua que sigue».
- «Piedra / La huella del tiempo» y «Luz / Otra forma de mirar».
- «Un lugar para desconectar».
- «Un nombre. Un lugar».
- «Tu próxima pausa puede empezar aquí».
- «Menos prisa. Más presente».
- «Origen del agua», «El agua como inspiración» y «Un nombre que invita a bajar el ritmo».
- «Estudio del agua».
- «El lugar al que volver».
- «El siguiente paso es una conversación».
- «Tu próxima escapada», también en la descripción Open Graph.

No se sustituyeron los microtextos por nuevas frases decorativas. Se retiraron también la ubicación duplicada de la cabecera y las letras de orientación: los trazos de fondo son decoración abstracta, no cartografía ni indicaciones de acceso.

## Jerarquía actual

El nombre conserva su composición de portada. Los títulos secundarios son «Piedra y vegetación», «El alojamiento», «Junto al manantial», «El Bosque, Cádiz» y «Consultas sobre el alojamiento». Los tres títulos centrales de información y contacto utilizan 32–54 px; el título de texturas utiliza 34 px en móvil y hasta 64 px en escritorio. Ya no se acompaña cada título de una etiqueta y una frase poética.

Los párrafos principales utilizan 17–18 px; la identificación de portada, 17–19 px; las aclaraciones fotográficas, 14 px; la nota de texturas, 16 px; las indicaciones de acceso, 15 px; y las acciones, 16 px. Se elimina el tracking amplio en información práctica, acciones y firma. La navegación usa 14–15 px. La firma mantiene una escala secundaria de 13–14 px y la identidad compacta superior, 10–12 px.

Las advertencias sobre el carácter ilustrativo de las imágenes se conservan junto a ellas. Son información necesaria para evitar atribuir esas fotografías al alojamiento o al manantial. Se conserva la advertencia práctica sobre confirmar el acceso por teléfono, junto al enlace a Maps. No se han añadido datos comerciales.

## Validación

Pruebas de Chrome ejecutadas con `qa/check.cjs` y capturas renovadas para 375, 768, 1440 y 1920 px. Revisión visual de portada y página completa en móvil, tablet y escritorio. Sin desbordamiento horizontal, fotografías cargadas y sin errores JavaScript/HTTP. Verificación de copia del número y su alternativa manual, enlaces internos, navegación a contacto, datos estructurados, movimiento reducido y contenido sin JavaScript. Resultados en `qa/results.json`.

Se mantienen las formas orgánicas, las cuatro fotografías, la paleta, las fuentes, los efectos de revelado y las acciones funcionales. Se ajusta el espacio de la secuencia de texturas para no dejar filas reservadas a los textos eliminados. No se modifica ningún otro proyecto ni se realiza despliegue.
