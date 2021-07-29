//Ejercicio 1: Sobre mí
//Para comenzar este recorrido vamos a empezar creando nuestro primer objeto. 
// Para ello vamos a declarar una variable que la vamos a llamar sobreMi, la misma debe definir un objeto con tres propiedades: nombre, apellido y edad.
// Declará la variable con las propiedades que acabamos de describir.

// const sobreMi = {
//     nombre: "Mariana",
//     apellido: "Deleau",
//     edad: 47,   
// };
  
//Ejercicio 2: Presentar
//En el ejercicio anterior creamos la variable sobreMi. Ahora queremos una función que, a partir de un perfil recibido como argumento, nos presente a la persona. Por ejemplo:

// let perfil = {
//     nombre: "Olivia",
//     apellido: "Marsu",
//     edad: 21
//   }
  
//    const presentacion = (perfil) => {
//     return 'Hola, mi nombre es ' + perfil.nombre + ' ' + perfil.apellido + ' y tengo ' +  perfil.edad + ' años';
//   }
  
//   console.log(presentacion(perfil))

//Ejercicio 3: Canción
//Contamos con algunos objetos que representan canciones de Spotify. Peeero tienen sus propiedades en inglés.Queremos una función cancion que retorne un nuevo objeto, a partir de las propiedades del objeto que recibimos como argumento.El mismo debe tener las propiedades titulo, banda, y duracion(en segundos, ya que en el parámetro está en milisegundos).Por ejemplo:
//Definí la función cancion que reciba como argumento un objeto song y retorne las propiedades como acabamos de describir.

// let cancion = (song) => {
 
//     const titulo = song.title;
//     const banda = song.bandName;
//     const duracion = song.duration/1000;
    
//     return{titulo, banda, duracion}
    
//   };
  

//OPCION ADRIAN
// const cancion = (song) => { 
//     const title = song.title;
//     const bandName = song.bandName;
//     const duration = song.duration/1000;
     
//      return {title, bandName, duration}

// }
// let song = {
//     title: "Rock and Roll",
//     bandName: "Led Zeppelin",
//     duration: 166000,
//     album: "Led Zeppelin IV"
// }
// const respuesta = cancion(song);
// console.log(respuesta)

// const cancion2 = (song) =>{
//     //delete song.album;
//     song.duration = this.duration/1000;

//     return song
// }
// const respuesta2 = cancion2(song);
// console.log(respuesta2)

//Ejercicio 4: Base de datos
//Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos. Los datos que tenemos son id, email, nombre y teléfono:
// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

// Y queremos almacenarlos con el siguiente formato:
// let ejemplo = {
//     id: 0,
//     nombre: "Ejemplo",
//     email: "ejemplo@terra.com",
//     telefono: "1029384756"
// }
  
// Definí un objeto para cada persona. Las variables deben llamarse ada, grace, hedy, radia y sheryl.

// let ada = {
//     id: 1,
//     nombre: "Ada Lovelace",
//     email: "ada@gmail.com",
//     telefono: "1234567890",
//   }
  
//   let grace = {
//     id: 2,
//     nombre: "Grace Hopper",
//     email: "grace@hotmail.com",
//     telefono: "0987654321",
//   }
  
//   let hedy = {
//     id: 3,
//     nombre: "Hedy Lamarr",
//     email: "hedy@gmail.com",
//     telefono: "06789054321",
//   }
  
//   let radia = {
//     id: 4,
//     nombre: "Radia Perlman",
//     email: "radia@yahoo.com",
//     telefono: "1234509876",
//   }
  
//   let sheryl = {
//     id: 5,
//     nombre: "Sheryl Sandberg",
//     email: "Sheryl@facebook.com",
//     telefono: "5432167890",
//   }

  

//Ejercicio 6: Corrección de datos
//Tenemos la variable datos que tiene un objeto con los datos de una persona. El teléfono de la misma está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto.

// let datos = {
//   id: 1,
//   nombre: "Ada",
//   apellido: "Lovelace",
//   email: "ada.lovelace@gmail.com",
//   telefono: "1234567890",
//   edad: "29",
//   programa: true,
// };


// const modificarTelefono = function(numero){

//   datos.telefono = `${numero}`
//   return datos

// }; 


// const modificarEdad = function(edad){

//   datos.edad = Number(edad)
//   return datos

// }; 


// console.log(modificarTelefono('5555'))
// console.log(modificarEdad(Number(29)))


//Ejercicio 7: Lenguaje favorito

// let datos =
// {
//   id: 1,
//   nombre: "Ada",
//   apellido: "Lovelace",
//   email: "ada.lovelace@gmail.com",
//   telefono: "1234567890",
//   edad: 29,
//   programa: true,  
// };

// const agregarLenguajeFavorito = (datos) => {
  
//   if (datos.programa) {
    
//     datos.lenguajeFavorito = 'Javascript'
//   }
// return datos
// }


// console.log(agregarLenguajeFavorito(datos))


//Ejercicio 8: Lenguaje favorito II

// const agregarLenguajesFavoritos = (lenguajes) =>{
  
//   if(datos.programa){
    
//       datos.lenguajesFavoritos = lenguajes
//       return datos
//   }  
  
// }

// console.log(agregarLenguajesFavoritos(['JavaScript', 'Ruby']))

//Ejercicio 9: Disco
//Queremos obtener el nombre, año de lanzamiento y banda de un disco , para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]". Por ejemplo:

// let disco = {
//   id: 1,
//   nombre: 'Wasting Light',
//   anioLanzamiento: 2011,
//   cantidadDeTemas: 12,
//   banda: {
//     nombre: 'Foo Fighters',
//     anioFormacion: 1994
//   }
// };

// let infoDelDisco = (disco) => {
  
//   return `El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`
  
// }

// console.log(infoDelDisco(disco))


//Ejercicio 10: Habilidades
//Contamos con un programa que almacena perfiles de LinkedIn con el siguiente formato:

// let perfil = {
//   id: 123456789,
//   nombre: "Ada Lovelace",
//   url: "https://www.linkedin.com/in/ada-lovelace",
//   habilidades: ["HTML", "CSS", "SASS"],
// };


// const agregarHabilidad = (perfil, habilidad) => {

//   perfil.habilidades.push(habilidad)
//   return perfil

// }

// console.log(agregarHabilidad(perfil,'JavaScript'))



//Ejercicio 11: Playlist
//Necesitamos obtener la información de las playlist de una conocida plataforma para escuchar música online . Las playlist son objetos con el siguiente formato...

// let playlistDeEjemplo = {
//   nombre: "Lista de Nirvana",
//   privada: true,
//   canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
// }

// ... y queremos visualizar así la información:

// Lista de Nirvana
// Privada: Si
// Canciones:
// Smells Like Teen Spirit
// In Bloom
// Come As You Are

// const infoDeLaPlaylist = (playlistDeEjemplo) => {
  
//   return `${playlistDeEjemplo.nombre}
// Privada: Si
// Canciones:
// ${playlistDeEjemplo.canciones[0]}
// ${playlistDeEjemplo.canciones[1]}
// ${playlistDeEjemplo.canciones[2]}`

// }

// console.log(infoDeLaPlaylist(playlistDeEjemplo))

// const infoDeLaPlaylist = (playlistDeEjemplo) => {
  
//   if (playlistDeEjemplo.privada) {
      
//     return `${playlistDeEjemplo.nombre}
// Privada: Sí
// Canciones: 
// ${playlistDeEjemplo.canciones[0]}
// ${playlistDeEjemplo.canciones[1]}
// ${playlistDeEjemplo.canciones[2]}`
    
//   } else {
//     return `${playlistDeEjemplo.nombre}
// Privada: No
// Canciones: 
// ${playlistDeEjemplo.canciones[0]}
// ${playlistDeEjemplo.canciones[1]}
// ${playlistDeEjemplo.canciones[2]}`
//   }

// }

//OPCION MATI
// const infoDeLaPlaylist = (playlistDeEjemplo) => {

//   return `${playlistDeEjemplo.nombre}
// Privada: ${playlistDeEjemplo.privada ?"Sí":"No"}
// Canciones: 
// ${playlistDeEjemplo.canciones[0]}
// ${playlistDeEjemplo.canciones[1]}
// ${playlistDeEjemplo.canciones[2]}`

// }

// console.log(infoDeLaPlaylist(playlistDeEjemplo))

//Ejercicio 12: Ganadora
//En la Biblioteca tenemos un array de objetos ganadoras, con las ganadoras de algunas temporadas de Rupaul. Cada objeto tiene las propiedades nombre, temporada y foto. Recorré el array utilizando for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6

// let ganadoras = [
//   {
//     nombre: "Bebe Zahara Benet",
//     temporada: "1",
//     foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
//   },
//   {
//     nombre: "Tyra Sanchez",
//     temporada: "2",
//     foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
//   },
//   {
//     nombre: "Raja",
//     temporada: "3",
//     foto: "http://www.nokeynoshade.party/images/raja.jpg",
//   },
//   {
//     nombre: "Sharon Needles",
//     temporada: "4",
//     foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
//   },
//   {
//     nombre: "Jinkx Monsoon",
//     temporada: "5",
//     foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
//   },
//   {
//     nombre: "Bianca Del Rio",
//     temporada: "6",
//     foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
//   }
//   ]

// const informacionGanadoras = () => {
//   let infoGanadora = "";
//   for (let ganadora of ganadoras) {
//     infoGanadora += `${ganadora.nombre} ganó la temporada ${ganadora.temporada}\n`;
//   }
//   return infoGanadora
// }

// console.log(informacionGanadoras())

// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6



//Ejercicio 13: Vamos las bandas
// Contamos con distintas bandas que se almacenan con el siguiente formato:
// { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false }
// A partir de un array de bandas queremos saber si están activas o no de la siguiente forma:
//Definí la función estanActivas que tome un array de bandas por parámetro y retorne por cada una de ellas los siguientes mensajes según corresponda.

// let bandas = [
//   { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
//   { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
//   { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
//   { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
//   { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
// ];

// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
// Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990

// const estanActivas = () => {

//     let final = "";

//   for (let banda of bandas) {
//     const {activa, nombre, fundacion} = banda
//     if (activa) {
      
//       final += `${nombre} está activa desde el año ${fundacion}\n`

//     } else{
      
//         final += `${nombre} no está activa\n`

//     }

//     }
//     return final
// }

// console.log(estanActivas(bandas))

//Ejercicio 14: Banda
//Para modelar bandas contamos con objetos con su nombre, año de lanzamiento, si sigue en actividad, una foto, el listado de integrantes y una lista de sus discos. Por ejemplo:

// let ledZeppelin = {
//     nombre: "Led Zeppelin",
//     anio: 1968,
//     activa: false,
//     miniatura:
//       "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
//     integrantes: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
//     discos: [
//       {
//         nombre: "Led Zeppelin",
//         anio: 1969,
//         canciones: ["Good Times, Bad Times", "Communication Breakdown"],
//         duracion: 2691,
//       },
//       {
//         nombre: "Led Zeppelin II",
//         anio: 1969,
//         canciones: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
//         duracion: 2502,
//       },
//       {
//         nombre: "Led Zeppelin III",
//         anio: 1970,
//         canciones: ["Immigrant Song"],
//         duracion: 2489,
//       },
//       {
//         nombre: "Led Zeppelin IV",
//         anio: 1971,
//         canciones: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
//         duracion: 2559,
//       },
//     ],
// };
  

//A partir de un objeto queremos obtener información de la banda de la siguiente forma:
//  informacionDeLaBanda(ledZeppelin)
//  "Led Zeppelin se fundó en el año 1968. Tiene 4 integrantes: Jimmy Page, Robert Plant, John Paul Jones, John Bonham. Tiene en total 4 discos. Tiene en total 9 canciones entre todos los discos. En promedio, cada canción dura 1137.888888888889 segundos."

// const informacionDeLaBanda = (ledZeppelin) => {

//   const { nombre, anio, discos } = ledZeppelin;
//   const integrantesCantidad = ledZeppelin.integrantes.length;
//   const albums = discos.length;
//   // const musicos = () => {

//   //     let miembros=""
//   //     for (let integrante of ledZeppelin.integrantes) {
//   //         miembros += `${ integrante }, ` 
//   //     }
//   //     return miembros         
//   // }

//   const canciones = ledZeppelin.discos[0].canciones.length + ledZeppelin.discos[1].canciones.length + ledZeppelin.discos[2].canciones.length + ledZeppelin.discos[3].canciones.length
  
//   const duracion = (ledZeppelin.discos[0].duracion + ledZeppelin.discos[1].duracion + ledZeppelin.discos[2].duracion + ledZeppelin.discos[3].duracion) / canciones
  
//   return `${nombre} se fundó en el año ${anio}. Tiene ${integrantesCantidad} integrantes: ${ledZeppelin.integrantes[0]}, ${ledZeppelin.integrantes[1]}, ${ledZeppelin.integrantes[2]}, ${ledZeppelin.integrantes[3]}. Tiene un total de ${albums} discos. Tiene en total ${canciones} canciones entre todos los discos. En promedio, cada canción dura ${duracion} segundos.`

// }

// console.log(informacionDeLaBanda(ledZeppelin))


// const informacionDeLaBanda = (band) => {
//   const {nombre, anio, discos, integrantes}= band
//  let counterCanciones = 0;
//  let counterDuracion = 0;
//  for(const { canciones, duracion } of discos ){
//      //porque discos es array
//       //const {canciones }= disco;
//      counterCanciones += canciones.length;
//      counterDuracion += duracion;
//  }
//   const promedioCanciones = counterDuracion / counterCanciones;

//   return `${nombre} se fundó en el año ${anio}. Tiene ${integrantes.length} integrantes: ${integrantes.join(', ')}. Tiene en total ${discos.length} discos. Tiene en total ${counterCanciones} canciones entre todos los discos. En promedio, cada canción dura ${promedioCanciones} segundos.`;
// }




//OBJETOS DINAMICOS
//Ejercicio 1: Una persona nueva

//Declará una variable propiedadNombre y asignale un nombre;
// declará una variable propiedadEdad y asignale una edad;
// declará una variable persona con las propiedades nombre y edad;
// El nombre y la edad del objeto persona estarán dadas por propiedadNombre y propiedadEdad.

// let propiedadNombre = 'Mariana';
// let propiedadEdad = 47;

// let persona = {
  
//   nombre: propiedadNombre, 
//   edad: propiedadEdad
  
// }


//Ejercicio 2: Conociendo una persona
//Mostrá en la consola las propiedades del objeto persona. Primero el nombre y luego la edad.

// console.log( persona['nombre'])
// console.log( persona['edad'])


//Ejercicio 3: Keys
// En la Biblioteca contamos con un producto.
// Utilizá keys para conocer sus propiedades.

//Object.keys((producto))


//Ejercicio 4: Producto
//Queremos visualizar fácilmente las propiedades y valores de nuestros productos con el siguiente formato: "producto[PROPIEDAD] -> VALOR". Para ello definiremos una función que se comporte de la siguiente forma:

// producto['id'] -> ADA-020
// producto['titulo'] -> Gubergren sed est amet voluptua
// producto['precio'] -> 123.75
// producto['imagen'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
// producto['condicion'] -> nuevo
// producto['envioGratis'] -> true
// producto['ubicacion'] -> Capital Federal
// `

// let producto = {
//   id: "ADA-020",
//   titulo: "Gubergren sed est amet voluptua",
//   precio: 123.75,
//   imagen:
//     "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
//   condicion: "nuevo",
//   envioGratis: true,
//   ubicacion: "Capital Federal",
// };

// const obtenerPropiedadesYValores = (producto) => {
//   const propiedades = Object.keys((producto));
//    let valores = "";
//    for (let prop of propiedades) {
//      valores += `${prop} -> ${producto[prop]} \n`
//    }
//    return valores
//  }
 

// console.log(obtenerPropiedadesYValores(producto))


//Ejercicio 5: Email
// Contamos con perfiles que tienen nombreDeCuenta y contrasenia y pueden tener o no el campo email.Por ejemplo:

// let perfilSinEmail = {
//   nombreDeCuenta: "ada_lovelace",
//   contrasenia: "1234567890!"
// };

// let perfilConEmail = {
//   nombreDeCuenta: "ellie_arroway",
//   contrasenia: "vegaeterna",
//   email: "ellie@argos.org"
// };

//A partir de un perfil queremos saber si tiene o no email:

// const tieneEmail = (perfil) => {
//   if (perfil.email){
//     return 'El usuario tiene la propiedad email'
//   } else {
//     return 'El usuario no tiene la propiedad email'
//   }
// }

//OPCION CON OPERADOR TERNARIO
//const tieneEmail = (perfil) => {
 //return perfil.email ? 'El usuario tiene la propiedad email' : 'El usuario no tiene la propiedad email'
//}


//Ejercicio 6: Propiedad
// Necesitamos definir una función que nos ayude a determinar si un objeto cuenta con una propiedad.Para lograrlo vamos a definir la función tienePropiedad que reciba un perfil y una propiedad por parámetro y retorne si dicho perfil contiene esa propiedad.Por ejemplo:

// let perfil = {
//   nombreDeCuenta: "ada_lovelace",
//   contrasenia: "1234567890!",
// };

//  let perfilConEmail = {
//   nombreDeCuenta: "ellie_arroway",
//   contrasenia: "vegaeterna",
//   email: "ellie@argos.org"
// };

// const tienePropiedad = (perfil, prop) => {
//   return perfil[prop]
// }

// const tienePropiedad = (perfil, prop) => {
//   if (perfil[prop]) {
//     return true
//   } else {
//     return false
//   }
// }


//  console.log(tienePropiedad(perfil, "email"));
// //false
// console.log(tienePropiedad(perfil, "contrasenia"));
// //true
// console.log(tienePropiedad(perfilConEmail, "email"));
// //true
// console.log(tienePropiedad(perfilConEmail, "id"));
// //false


//FUNCIONES DENTRO DE OBJETOS

//Ejercicio 1: Hola mundo
// Necesitamos una variable holaMundo y asignarle un objeto con los siguientes métodos:
// mostrarMensaje: retorna el mensaje "¡Hola mundo!";
// obtenerMensaje: retorna un string con el mensaje "¡Alo mundo!"

// let holaMundo = {
  
//   mostrarMensaje: function(){
//    return "¡Hola mundo!"
//  },
 
//   obtenerMensaje: function(){
//    return "¡Alo mundo!"
//  },
 
//  }

// console.log(holaMundo.mostrarMensaje())
// //"¡Hola mundo!"

// console.log(holaMundo.obtenerMensaje())
// //"¡Alo mundo!"


//Ejercicio 2: Películas
//Necesitamos agregarle al objeto pelicula  un método mostrarInfo que retorne el mensaje: "Película: [NOMBRE PELICULA] - Año: [AÑO PELICULA]":
//Definí el método mostrarInfo dentro del objeto pelicula.

// let pelicula = {
//   titulo: "The Dark Knight",
//   anio: 2008,
//   director: "Christopher Nolan", 
//   mostrarInfo: function(){
//     return `Película: ${pelicula.titulo} - Año: ${pelicula.anio}`
//   },
// };

//  console.log(pelicula.mostrarInfo())
// //"Película: The Dark Knight - Año: 2008"


// Ejercicio 3: Playlist
// Queremos agregarle a playlist un método que se llame agregarCancion que va a recibir un string como parámetro(el nombre de una canción) y va a agregarlo en la propiedad canciones del objeto.
// Definí el método agregarCancion.

// let playlist = {
//   nombre: "Rupaul Lipsyncs",
//   creadaPor: "Ada",
//   seguidores: 8743,
//   canciones: [],
//   agregarCancion: function (cancion){
//     playlist.canciones.push(cancion)
//     return this
//   }
// };

// console.log(playlist.agregarCancion('Esta es la canción'))

//Ejercicio 4: Perfil
// Necesitamos agregarle al objeto perfil un método obtenerNombreCompleto, que debe retornar un string con primerNombre y apellido concatenados, separados por un espacio:
// Definí el método obtenerNombreCompleto dentro de la variable perfil.


// let perfil = {
//   nombre: "Hedy",
//   apellido: "Lamarr",
//   edad: 30,
//   obtenerNombreCompleto: function () {
//     return `${perfil.nombre} ${perfil.apellido}`
//   }
// };

// console.log(perfil.obtenerNombreCompleto())
// //"Hedy Lamarr"

//Ejercicio 5: Perfil II
//Tenemos la misma variable perfil del ejercicio anterior, con información sobre una persona, pero con una diferencia en la estructura. 
//Agregá nuevamente el método obtenerNombreCompleto al perfil para que retorne el nombre tal como antes.

// let perfil = {
//   nombreCompleto: {
//     nombre: "Hedy",
//     apellido: "Lamarr",
//   },
//   edad: 30,
//   obtenerNombreCompleto: function () {
//     return `${perfil.nombreCompleto.nombre} ${perfil.nombreCompleto.apellido}`
//   },

// };

// console.log(perfil.obtenerNombreCompleto())

//Ejercicio 6: Carrito
// Tenemos un objeto carrito, que guarda datos de un carrito de compras en una tienda virtual, tiene dos propiedades: cuenta(un objeto con los datos de la persona que está haciendo la compra) y productos(un array de objetos, con todos los productos que está por comprar).Los productos tienen 4 propiedades: id(un número), titulo(un string con el nombre del producto), precio(un número con el precio del producto) y envioIncluido(un booleano que indica si el producto tiene o no cargos por envio).Por ejemplo:
// Definí el método agregarAlCarrito que tome por parámetro un producto y lo agregue al array de productos del carrito, y el método obtenerTotal que retorne la suma de todos los precios de los productos que están en el carrito.

//  let mouse = {
//   id: 0,
//   titulo: "Mouse Genius",
//   precio: 150,
//   envioIncluido: false
// };

// let carrito = {
//   cuenta: {
//     id: 123,
//     nombre: "Ada Lovelace",
//   },
//   productos: [],
//   agregarAlCarrito: function (producto) {
//     this.productos.push(producto)
//     return this
//   },
//   obtenerTotal: function () {
//    // return carrito.productos[0].precio
//     let final="";
//     for (let i = 0; i < this.productos.length; i++) {
//       final = parseInt(final + this.productos[i].precio)
//     }
//     return final
//   },
// }

// console.log(carrito.agregarAlCarrito(mouse))

// console.log(carrito.obtenerTotal())
// //150




//FUNCIONES CON OBJETOS

//Ejercicio 1: Nombre completo
//Necesitamos obtener el nombre y apellido de una persona con la información de perfil en Gmail. Para ello vamos a definir una función obtenerNombreCompleto que reciba un objeto como argumento (con las mismas propiedades que el objeto que tenemos guardado en persona) y nos devuelva un string con el nombre completo (nombre + apellido)

// let persona = {
//   nombre: 'Grace',
//   apellido: 'Hopper',
//   email: 'grace.hopper@gmail.com',
//   plan: 'premium'
// };

// const obtenerNombreCompleto = (persona) => {
  
//   return `${persona.nombre} ${persona.apellido}`
    
// }

// console.log(obtenerNombreCompleto(persona))



//Ejercicio 2: Estado estudiantes
//Estamos diseñando un nuevo sistema para una facultad, y tenemos la información de las materias para cada estudiante en objetos donde cada propiedad es una materia que contiene un array con las notas de los resultados de los parciales. Por ejemplo:
// Nos pidieron generar un informe que muestre las materias aprobadas (promedio de notas >= 4) y desaprobadas (promedio de notas < 4);
// para implementar este reporte, tenemos que definir una función que tome un objeto con las materias y sus notas, y nos retorne un objeto con dos propiedades: aprobadas y desaprobadas;
// cada propiedad es un array que contiene el nombre de las materias que aprobaron o desaprobaron respectivamente.

// let materiasAda = {
//   matematica: [10, 6, 10, 8],
//   algoritmos: [10, 10, 9],
//   algebra: [7, 9]
// };

// let materiasGrace = {
//   matematica: [2, 9, 10, 7],
//   algoritmos: [7, 1, 9],
//   algebra: [2, 3]
// };

// const agruparMateriasPorEstado = (alumna) => {
  
//   let materiasFinal = {
//     aprobadas: [],
//     desaprobadas: []
//   };
//   const { aprobadas, desaprobadas } = materiasFinal

//   const materias = Object.keys((alumna))
    
//     for (prop of materias) {
        
//       const materia = alumna[prop]
//       let final = "";

//       for (let i = 0; i < materia.length; i++) {
//         final = parseInt(final + materia[i])     
//       }
//           let promedio = final / materia.length
        
//           if (promedio >= 4) {
//             aprobadas.push(prop)
//           } else {
//             desaprobadas.push(prop)
//         }
        
//     }
//         return materiasFinal

// }

// console.log(agruparMateriasPorEstado(materiasAda))
// //{ aprobadas: ['matematica', 'algoritmos', 'algebra'], desaprobadas: [] }

//  console.log(agruparMateriasPorEstado(materiasGrace))
// //{ aprobadas: ['matematica', 'algoritmos'], desaprobadas: ['algebra'] }


//Ejercicio 3: Validar contraseña
//Tenemos los datos de distintas personas que quieren crear un perfil dentro de Gmail guardados de la siguiente forma:
//Nos pidieron implementar una función, llamada validarPassword, que reciba un perfil y valide la contraseña.la función nos tiene que retornar un objeto con dos propiedades: verificada (un booleano) y mensaje (un string que contiene el mensaje de la validación que falló, o vacío si salió todo bien); de la contraseña tenemos que validar: 
//que la longitud sea mayor o igual a 6(si es menor, retornar el mensaje "Contraseña con menos de 6 caracteres"); 
//que la contraseña no sea una de: "123456", "password", "111111", "qwerty"(si coincide con alguna de esas contraseñas, retornar el mensaje "Contraseña muy insegura").
//Definí la función validarPassword y las funciones auxiliares necesarias para lograr el comportamiento que acabamos de describir.


// const validarPassword = (perfil) => {

//   let contraseniaChequeda = {
//     verificada: Boolean,
//     mensaje: String    
// }
//   //const { verificada, mensaje } = contraseniaChequeda
  
//   const contrasenia = perfil.password
//   const inseguras = ["123456", "password", "111111", "qwerty",]
//       if (contrasenia.length < 6) {
      
//         contraseniaChequeda.verificada = false,
//         contraseniaChequeda.mensaje = 'Contraseña con menos de 6 caracteres'

//       } else {
        
//           if (inseguras.includes(contrasenia)) {
            
//             contraseniaChequeda.verificada = false,
//             contraseniaChequeda.mensaje = 'Contraseña muy insegura'

//           } else {

//             contraseniaChequeda.verificada = true,
//             contraseniaChequeda.mensaje = ''
            
//           }
//   }
//   return contraseniaChequeda  
// }

// let perfil1 = {
//   nombre: 'Grace',
//   apellido: 'Hopper',
//   email: 'grace.hopper@gmail.com',
//   password: '123456'
// };

// let perfil2 = {
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   password: '**178!Ada--'
// };

// let perfil3 = {
//   nombre: 'Hedy',
//   apellido: 'Lamarr',
//   email: 'hlamarr@gmail.com',
//   password: '1234'
// };

// console.log(validarPassword(perfil1))
// //{ verificada: false, mensaje: 'Contraseña muy insegura' } 
// console.log(validarPassword(perfil2))
// //{ verificada: true, mensaje: '' }
// console.log(validarPassword(perfil3))
// //{ verificada: false, mensaje: 'Contraseña con menos de 6 caracteres' }
