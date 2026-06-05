# Entregable Final - Movies SPR

**Pagina publicada:** https://spr-movie.onrender.com/

## Datos del estudiante

**Nombre del proyecto:** Movies SPR  
**Curso:** Artificial Intelligence with Machine Learning in Java  
**Empresa del caso:** Movies SPR  
**Contacto:** +51 9266 338 291  
**Marca asociada:** Software he creation  
**Logo de Software he creation:** `</>` con el primer `<` en color rojo  

## Presentacion

Este proyecto es una pagina web estatica creada para representar una plataforma de streaming llamada **Movies SPR**. La pagina funciona como catalogo visual, sistema de recomendacion, panel de usuario, seccion de votaciones y evidencia del trabajo final solicitado.

La idea principal es mostrar como una plataforma puede dejar de recomendar peliculas solo por popularidad y empezar a recomendar contenido segun el perfil de cada usuario, sus gustos, las peliculas que selecciona y su participacion dentro de la pagina.

## Por que use HTML, CSS y JavaScript

Use **HTML** para construir la estructura de la pagina: login, catalogo, panel de detalles, preferencias, votaciones, comentarios y seccion tecnica del entregable.

Use **CSS** para dar el estilo visual de Movies SPR. La paleta principal usa rojo, negro y blanco, buscando una apariencia elegante, fuerte y similar a una plataforma de entretenimiento.

Use **JavaScript** para hacer que la pagina tenga comportamiento real: guardar el perfil del usuario, recordar su correo, registrar peliculas seleccionadas, generar recomendaciones, contar votos, publicar comentarios, responder comentarios y reaccionar con pulgar arriba o pulgar abajo.

Elegí estos lenguajes porque permiten entregar una pagina lista para subir a Render como sitio estatico, sin depender de instalaciones complicadas ni servidores adicionales.

## Estructura de carpetas

```text
SprMovie/
  index.html
  cuenta.html
  votaciones.html
  comentarios.html
  ficha-tecnica.html
  render.yaml
  README.md
  css/
    styles.css
  js/
    script.js
  assets/
    logo/
      logo-spr-movie.png
    posters/
      portadas de peliculas descargadas
```

## Como funciona la pagina

El sitio esta dividido en paginas para que la navegacion sea clara:

- `index.html`: inicio, mejor pelicula, catalogo y ficha de pelicula.
- `cuenta.html`: perfil, preferencias y recomendaciones personales.
- `votaciones.html`: votacion semanal para elegir la siguiente pelicula destacada.
- `comentarios.html`: publicacion de comentarios, respuestas y reacciones.
- `ficha-tecnica.html`: explicacion completa del entregable y del sistema de recomendacion.

### 1. Inicio de sesion

Al abrir la pagina, Movies SPR pide crear o ingresar una cuenta con:

- Nombre
- Correo
- Edad
- Genero favorito

Cuando el usuario recarga la pagina, se vuelve a pedir acceso, pero si ya habia creado su cuenta, el formulario aparece rellenado automaticamente con sus datos guardados.

### 2. Bienvenida personalizada

Despues de iniciar sesion, aparece un mensaje positivo de bienvenida. El mensaje usa el nombre del usuario y su genero favorito para que la experiencia se sienta personalizada.

### 3. Catalogo de peliculas

La cartelera contiene un catalogo amplio con mas de 60 peliculas. Cada pelicula muestra:

- Portada
- Nombre
- Año
- Genero principal

Las portadas estan descargadas dentro del proyecto, en la carpeta `assets/posters`, para que la pagina tenga mejor presentacion y no dependa completamente de enlaces externos.

### 4. Busqueda y filtros

El usuario puede buscar peliculas por nombre, genero, año, director o reparto. Tambien puede filtrar por generos usando los botones del catalogo.

### 5. Detalle de pelicula

Al presionar una portada, se abre un panel con:

- Portada
- Nombre
- Fecha de estreno
- Duracion
- Valoracion
- Descripcion
- Director
- Reparto
- Generos

En el caso de **Deadpool & Wolverine**, aparece un reproductor integrado dentro de la pagina.

### 6. Panel de cuenta y preferencias

Movies SPR tiene una seccion llamada **Mi cuenta**. Ahi se muestra:

- Nombre del usuario
- Correo
- Edad
- Genero favorito
- Peliculas seleccionadas
- Recomendaciones generadas para ese usuario

Cada vez que el usuario toca una pelicula, la pagina la registra como parte de sus preferencias.

### 7. Recomendaciones personalizadas

El sistema recomienda peliculas usando varios criterios:

- Genero favorito del usuario
- Peliculas que selecciono
- Coincidencias entre generos
- Valoracion de la pelicula
- Año de estreno
- Edad del usuario

Con esos datos se genera un porcentaje de afinidad y se muestran recomendaciones en el panel de usuario.

### 8. Votacion semanal

La pagina incluye una seccion de votaciones. Cada cuenta puede votar una sola vez por la pelicula que quiere ver como siguiente destacada.

La votacion muestra:

- Peliculas candidatas
- Cantidad de votos
- Porcentaje de apoyo
- Pelicula que va ganando

La pelicula con mas votos se presenta como la proxima mejor pelicula de Movies SPR.

### 9. Comentarios y comunidad

Movies SPR incluye un feed de comentarios. Cada comentario muestra:

- Nombre de la persona
- Comentario
- Fecha y hora
- Respuestas
- Reacciones con pulgar arriba
- Reacciones con pulgar abajo

Los usuarios pueden publicar comentarios, responder a otros comentarios y reaccionar.

### 10. Seccion tecnica del entregable

La pagina tambien incluye una ficha tecnica con todo lo que pide el trabajo final:

- Tipos de datos usados
- Patrones y correlaciones
- Analisis de preferencias
- Recomendaciones por usuarios similares
- Uso de caracteristicas de peliculas
- Arbol de decision
- Recursividad
- Cross-validation
- Metricas de rendimiento
- Comparacion con sistema actual
- Formato de satisfaccion
- Infraestructura
- Costos estimados
- Preguntas guia
- Casos de exito

## Como subirlo a Render

El proyecto ya incluye `render.yaml`, por eso Render puede detectarlo como sitio estatico.

Configuracion manual:

- **Build Command:** dejar vacio
- **Publish Directory:** `.`

## Como abrirlo localmente

Opcion directa:

1. Abrir la carpeta `SprMovie`.
2. Abrir `index.html` en el navegador.

Opcion con servidor local:

```powershell
cd C:\Users\Clive\Desktop\Entregable\SprMovie
python -m http.server 8090 --bind 127.0.0.1
```

Luego abrir:

```text
http://127.0.0.1:8090
```

## Conclusion

Con Movies SPR quise representar una plataforma completa, no solo una pagina informativa. El usuario puede iniciar sesion, explorar peliculas, recibir recomendaciones, votar, comentar y revisar la explicacion tecnica del sistema. Todo esta organizado en paginas claras para que el profesor pueda navegar cada seccion y ver como se cumple el caso practico del trabajo final.
