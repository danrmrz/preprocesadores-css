import React from 'react';

import intro from '../../assets/static/less/intro.jpg'
import avatar from '../../assets/static/less/avatar.jpg'
import xbox from '../../assets/static/less/xbox.jpg'
import fortnite from '../../assets/static/less/fortnite.jpg'
import cuphead from '../../assets/static/less/cuphead.jpg'

import '../../assets/styles/less/Articulo.less'

const Articulo = () => pug`
  section.intro
    .intro__imagen: img(src=intro, alt="Hero imagen")
    .intro__contenido
      span.intro__categoria Noticias
      h1.intro__titulo Cyberpunk 2077 tiene tres prólogos distintos
    .intro__autor
      img(src=avatar, alt="Avatar")
      span.intro__autor-titulo Autor
      span.intro__autor-nombre Jhon Wick

  article.articulo--principal
    p.articulo--principal__intro
      |En Cyberpunk 2077 los jugadores podrán seleccionar entre tres 
      |historias de origen diferentes, cada una presentando una ubicación 
      |de partida distinta para su personaje.
    p
      |Conversando con VG247, el diseñador Pawel Sasko explicó un sistema 
      |que CD Projekt RED llama "Lifepaths" (caminos de vida), que en la 
      |práctica suena muy similar a las historias sobre el origen del 
      |personaje de Dragon Age: Origins.
    p
      |Uno de estos caminos de vida comienza en los Badlands, las áridas 
      |tierras que rodean Night City (suponemos que es el Nomad). CD 
      |Projekt RED no ha ofrecido descripción de las otras áreas, pero 
      |parece sensato suponer que los personajes de Corpo podrían 
      |comenzar en un distrito más corporativo de Night City, mientras 
      |que Street Kids podrían provenir de áreas de barrios marginales.
    h3 Noticias, fecha de lanzamiento y plataformas de Cyberpunk 2077
    p
      |En otras noticias, recientemente descubrimos que CD Projekt RED 
      |tiene planes de desarrollar tres juegos Cyberpunk, y que 
      |Cyberpunk 2077 contará con tramas románticas similares a las que 
      |vimos en The Witcher 3. Si el romance no es su estilo, no se 
      |preocupen, podrán ser tan malvados como deseen gracias a que 
      |Cyberpunk 2077 no tendrá un sistema de moralidad.
    p
      |Cyberpunk 2077 se pondrá disponible el 16 de abril de 2020 y se 
      |lanzará en versiones para PC, PlayStation 4 y Xbox One.
    h2 No te Pierdas...

  section.contenedor--cajas
    .caja
      .caja__imagen: img(src=xbox, alt="Xbox Game Pass")
      .caja__contenido
        span.caja__categoria Xbox
        h3 Conoce las actualizaciones de Game Pass
        p
          |A una semana terminado el E3, Microsoft anunció la 1era rotación 
          |de juegos para Xbox
        a Leer Mas
    .caja
      .caja__imagen: img(src=fortnite, alt="Fortnite")
      .caja__contenido
        span.caja__categoria Fortnite
        h3 Fortnite une fuerzas con Stranger Things
        p
          |Portales hacia el Upside Down han aparecido dentro de 
          |Fortnite, y aunque no funcionan igual.
        a Lees Mas
    .caja
      .caja__imagen: img(src=cuphead, alt="Cuphead")
      .caja__contenido
        span.caja__categoria Cuphead
        h3 Cuphead se atrasa hasta el año 2020
        p
          |Los miembros de Studio MDHR revelan la razón detrás del 
          |atraso de la fecha de lanzamiento.
        a Lees Mas


    //- +caja(xbox, "Xbox", "Conoce las actualizaciones de Game Pass", "A una semana terminado el E3, Microsoft anunció la 1era rotación de juegos para Xbox")
    //- +caja(fortnite, "Fortnite", "Fortnite une fuerzas con Stranger Things", "Portales hacia el Upside Down han aparecido dentro de Fortnite, y aunque no funcionan igual.")
    //- +caja(cuphead, "Cuphead", "Cuphead se atrasa hasta el año 2020", "Los miembros de Studio MDHR revelan la razón detrás del atraso de la fecha de lanzamiento.")
    
    //- El plugin transform-react-pug no soporta el uso de mixin
`

export default Articulo;