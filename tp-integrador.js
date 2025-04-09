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

//PUNTO DOS: Funciones de Gestión de Libros

//A) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = {
        id: id,
        titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero,
        disponible: true
    };
    libros.push(nuevoLibro);
    console.log(`El libro ${titulo} ha sido agregado al catálogo.`);
}

// Ejemplo de uso
agregarLibro(11, "El principito", "Antoine de Saint-Exupéry", 1943, "Ficción");
console.log(libros);

//B) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género
// utilizando el algoritmo de búsqueda lineal (recorre los elementos de una lista hasta encontrar lo que la condición).

function buscarLibro(criterio, valor) {
    const resultados = [];

    for (let i = 0; i < libros.length; i++) {
        const libro = libros[i];

        if (
            libro[criterio] &&
            libro[criterio].toLowerCase().includes(valor.toLowerCase())
        ) {
            resultados.push(libro);
        }
    }

    return resultados;
}

//C)Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año
// utilizando el algoritmo de ordenamiento burbuja (bubble sort) (for anidado para comparar y ordenar (Ver ejercicio 7 de la clase 10 - intercambio de valores)
// y luego muestre los libros ordenados en la consola.

function ordenarLibros(criterio) {
    for (let i = 0; i < libros.length - 1; i++) {
        for (let j = 0; j < libros.length - 1 - i; j++) {
            let actual = libros[j];
            let siguiente = libros[j + 1];

            if (
                (criterio === "titulo" && actual.titulo.toLowerCase() > siguiente.titulo.toLowerCase()) ||
                (criterio === "anio" && actual.anio > siguiente.anio)
            ) {
                let temp = libros[j];
                libros[j] = libros[j + 1];
                libros[j + 1] = temp;
            }
        }
    }

    console.log("Libros ordenados por", criterio);
    console.log(libros);
}

//D) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro

function borrarLibro(id) {
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === id) {
            libros.splice(i, 1);
            console.log(`Libro con ID ${id} eliminado del catálogo.`);
            return;
        }
    }

    console.log(`No se encontró ningún libro con el ID ${id}.`);
}