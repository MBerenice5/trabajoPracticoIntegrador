/*
Integrantes del grupo:
Nazarena Contreras
Michelle Berenice De la Vega
 */

//PUNTO UNO: Estructura de Datos

//A) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:

let libros = [
    {id: 1, titulo: "Bajo la misma estrella", autor:"John Green", anio: 2014, genero:"Romance", disponible: true},
    {id: 2, titulo: "El psicoanalista", autor:"John Katzenbach", anio: 2002, genero:"Suspenso", disponible: true},
    {id: 3, titulo: "Los juegos del hambre", autor:"Suzanne Collins", anio: 2008, genero:"Ciencia ficción", disponible: true},
    {id: 4, titulo: "Game of thrones", autor:"George R. R. Martin", anio: 1996, genero:"Literatura fantastica", disponible: true},
    {id: 5, titulo: "Harry Potter", autor:"J. K. Rowling", anio: 2007, genero:"Fantasia", disponible: true},
    {id: 6, titulo: "Asesinato en familia", autor:"Janet Dawson", anio: 1991, genero:"Ficción", disponible: true},
    {id: 7, titulo: "Dónde los árboles cantan", autor:"Laura Gallegos", anio: 2011, genero:"Fantástico medieval", disponible: true},
    {id: 8, titulo: "El elfo oscuro: La morada", autor:"R. A. Salvatore", anio: 1990, genero:"Literatura fantastica", disponible: true},
    {id: 9, titulo: "El señor de los anillos", autor:"J. R. R. Tolkien", anio: 1954, genero:"Literatura fantastica", disponible: true},
    {id: 10, titulo: "Firelight", autor:"Sophie Jordan", anio: 2010, genero:"Literatura fantastica", disponible: true},
]

//B) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:

let usuarios = [
    {id: 123, nombre: "Berenice De la Vega", email: "bere@gmail.com", librosPrestados: [1, 3, 7] },
    {id: 234, nombre: "Nazarena Contreras", email: "nachi@gmail.com", librosPrestados: [2, 5] },
    {id: 345, nombre: "Agustina Tejeda", email: "agus@gmail.com", librosPrestados: [4, 8, 9] },
    {id: 456, nombre: "Evelyn Salome", email: "eve@gmail.com", librosPrestados: [6] },
    {id: 567, nombre: "Lorenzo Salome", email: "lolito@gmail.com", librosPrestados: [10] }
]
console.log(usuarios)