/*
Integrantes del grupo:
Nazarena Contreras
Michelle Berenice De la Vega
 */

//PUNTO UNO: Estructura de datos

//A) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:

let libros = [
    {
        id: 0,
        titulo: "Bajo la misma estrella",
        autor: "John Green",
        anio: 2014,
        genero: "Romance",
        disponible: true,
    },
    {
        id: 1,
        titulo: "El psicoanalista",
        autor: "John Katzenbach",
        anio: 2002,
        genero: "Suspenso",
        disponible: true,
    },
    {
        id: 2,
        titulo: "Los juegos del hambre",
        autor: "Suzanne Collins",
        anio: 2008,
        genero: "Ciencia ficción",
        disponible: true,
    },
    {
        id: 3,
        titulo: "Game of thrones",
        autor: "George R. R. Martin",
        anio: 1996,
        genero: "Literatura fantastica",
        disponible: true,
    },
    {
        id: 4,
        titulo: "Harry Potter",
        autor: "J. K. Rowling",
        anio: 2007,
        genero: "Fantasia",
        disponible: true,
    },
    {
        id: 5,
        titulo: "Asesinato en familia",
        autor: "Janet Dawson",
        anio: 1991,
        genero: "Ficción",
        disponible: true,
    },
    {
        id: 6,
        titulo: "Dónde los árboles cantan",
        autor: "Laura Gallegos",
        anio: 2011,
        genero: "Fantástico medieval",
        disponible: true,
    },
    {
        id: 7,
        titulo: "El elfo oscuro: La morada",
        autor: "R. A. Salvatore",
        anio: 1990,
        genero: "Literatura fantastica",
        disponible: true,
    },
    {
        id: 8,
        titulo: "El señor de los anillos",
        autor: "J. R. R. Tolkien",
        anio: 1954,
        genero: "Literatura fantastica",
        disponible: true,
    },
    {
        id: 9,
        titulo: "Firelight",
        autor: "Sophie Jordan",
        anio: 2010,
        genero: "Literatura fantastica",
        disponible: true,
    },
];

//B) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:

let usuarios = [
    {
        id: 100,
        nombre: "Berenice De la Vega",
        email: "bere@gmail.com",
        librosPrestados: [0, 2, 6],
    },
    {
        id: 101,
        nombre: "Nazarena Contreras",
        email: "nachi@gmail.com",
        librosPrestados: [1, 4],
    },
    {
        id: 102,
        nombre: "Agustina Tejeda",
        email: "agus@gmail.com",
        librosPrestados: [3, 7, 8],
    },
    {
        id: 103,
        nombre: "Evelyn Salome",
        email: "eve@gmail.com",
        librosPrestados: [5],
    },
    {
        id: 104,
        nombre: "Lorenzo Salome",
        email: "lolito@gmail.com",
        librosPrestados: [9],
    },
];

//PUNTO DOS: Funciones de gestión de libros

//A) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
//No agregamos como parametro id porque suponemos que eso tendría que hacerse cargo el sistema y no la persona que lo registra.
function agregarLibro(titulo, autor, anio, genero) {
    const nuevoLibro = {
        id: libros.length++,
        titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero,
        disponible: true,
    };
    libros.push(nuevoLibro);
    console.log(`El libro ${titulo} ha sido agregado al catálogo.`);
    console.table(libros);
}

//B) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género
// utilizando el algoritmo de búsqueda lineal (recorre los elementos de una lista hasta encontrar lo que la condición).

function buscarLibro(criterio, valor) {
    let encontrados = [];
    for (let i = 0; i < libros.length; i++) {
        if (libros[i][criterio].toLowerCase() === valor.toLowerCase()) {
            encontrados.push(libros[i]);
        }
    }
    return encontrados.length > 0 ? encontrados : "No se encontró el libro";
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
                (criterio === "titulo" &&
                    actual.titulo.toLowerCase() > siguiente.titulo.toLowerCase()) ||
                (criterio === "anio" && actual.anio > siguiente.anio)
            ) {
                let temp = libros[j];
                libros[j] = libros[j + 1];
                libros[j + 1] = temp;
            }
        }
    }

    console.log("Libros ordenados por", criterio);
    console.table(libros);
}

//D) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro

function borrarLibro(id) {
    const cantidadOriginal = libros.length;
    libros = libros.filter((libro) => libro.id !== id);

    if (libros.length < cantidadOriginal) {
        console.log(`El libro con el ID ${id} ha sido eliminado de la biblioteca.`);
    } else {
        console.log(`No se encontró ningún libro con el ID ${id}.`);
    }
}

//PUNTO 3: Gestión de usuarios

//A)Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

function registrarUsuario(nombre, email) {
    let maxId = 0;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id > maxId) {
            maxId = usuarios[i].id;
        }
    }

    const nuevoUsuario = {
        id: maxId++,
        nombre: nombre,
        email: email,
        librosPrestados: [],
    };

    usuarios.push(nuevoUsuario);
    console.log(
        `✅ Usuario "${nombre}" registrado exitosamente con ID ${nuevoUsuario.id}.`
    );
}

//B) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

function mostrarTodosLosUsuarios() {
    console.log("Lista de todos los usuarios:");
    usuarios.forEach((usuario) => {
        console.log(
            `ID: ${usuario.id} | Nombre: ${usuario.nombre} | Email: ${
                usuario.email
            } | Libros prestados: ${usuario.librosPrestados.join(", ")}`
        );
    });
}

//C) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

function buscarUsuario(email) {
    const emailBuscado = email.toLowerCase();

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email.toLowerCase() === emailBuscado) {
            return usuarios[i];
        }
    }

    console.log(`No se encontró ningún usuario con el email "${email}".`);
    return null;
}

//D) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

function borrarUsuario(nombre, email) {
    const nombreBuscado = nombre.toLowerCase();
    const emailBuscado = email.toLowerCase();

    for (let i = 0; i < usuarios.length; i++) {
        if (
            usuarios[i].nombre.toLowerCase() === nombreBuscado &&
            usuarios[i].email.toLowerCase() === emailBuscado
        ) {
            usuarios.splice(i, 1);
            console.log(
                `🗑️ Usuario "${nombre}" con email "${email}" ha sido eliminado.`
            );
            return;
        }
    }

    console.log(
        `No se encontró ningún usuario con el nombre "${nombre}" y el email "${email}".`
    );
}

// PUNTO CUATRO: Sistema de préstamos

// A) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario. Luego mostrar que libro se prestó y a que usuario.

function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find((l) => l.id === idLibro);
    const usuario = usuarios.find((u) => u.id === idUsuario);

    if (!libro) {
        console.log(`No se encontró ningún libro con ID ${idLibro}.`);
        return;
    }

    if (!libro.disponible) {
        console.log(`El libro "${libro.titulo}" no está disponible actualmente.`);
        return;
    }

    if (!usuario) {
        console.log(`No se encontró ningún usuario con ID ${idUsuario}.`);
        return;
    }

    libro.disponible = false;
    usuario.librosPrestados.push(idLibro);

    console.log(
        `El libro "${libro.titulo}" ha sido prestado a ${usuario.nombre}.`
    );
}

// B) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.

function devolverLibro(idLibro, idUsuario) {
    // Busca el libro y el usuario
    const libro = libros.find((l) => l.id === idLibro);
    const usuario = usuarios.find((u) => u.id === idUsuario);

    // Verifica que ambos existan
    if (!libro) {
        console.log(`No se encontró ningún libro con ID ${idLibro}.`);
        return;
    }
    if (!usuario) {
        console.log(`No se encontró ningún usuario con ID ${idUsuario}.`);
        return;
    }

    // Verifica que el usuario tenga el libro prestado
    const indexLibro = usuario.librosPrestados.indexOf(idLibro);
    if (indexLibro === -1) {
        console.log(
            `El usuario "${usuario.nombre}" no tiene el libro "${libro.titulo}" prestado.`
        );
        return;
    }

    // Marca como disponible y eliminar de la lista del usuario
    libro.disponible = true;
    usuario.librosPrestados.splice(indexLibro, 1);

    console.log(
        `El libro "${libro.titulo}" ha sido devuelto por ${usuario.nombre}.`
    );
}

// PUNTO CINCO: Reportes

// A) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
// Cantidad total de libros.
// Cantidad de libros prestados.
// Cantidad de libros por género.
// Libro más antiguo y más nuevo

function generarReporteLibros() {
    const totalLibros = libros.length + 1;

    const librosPrestados = libros.filter((libro) => !libro.disponible).length;

    const cantidadPorGenero = libros.reduce((acumulador, libro) => {
        const genero = libro.genero;
        if (acumulador[genero]) {
            acumulador[genero]++;
        } else {
            acumulador[genero] = 1;
        }
        return acumulador;
    }, {});

    const libroMasAntiguo = libros.reduce((anterior, actual) => {
        return actual.anio < anterior.anio ? actual : anterior;
    });

    const libroMasNuevo = libros.reduce((anterior, actual) => {
        return actual.anio > anterior.anio ? actual : anterior;
    });

    console.log("REPORTE DE LIBROS");
    console.log(`Total de libros: ${totalLibros}`);
    console.log(`Libros prestados: ${librosPrestados}`);
    console.log("Cantidad de libros por género:");
    for (let genero in cantidadPorGenero) {
        console.log(`   - ${genero}: ${cantidadPorGenero[genero]}`);
    }
    console.log(
        `Libro más antiguo: "${libroMasAntiguo.titulo}" (${libroMasAntiguo.anio})`
    );
    console.log(
        `Libro más nuevo: "${libroMasNuevo.titulo}" (${libroMasNuevo.anio})`
    );
}

// PUNTO SEIS: Identificación avanzada de libros

// A) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre los títulos de los libros que contienen más de una palabra.
// Además la función debe excluir aquellos títulos que contengan números y/o caracteres especiales.
// Por último mostrar en la consola el array resultante.

function librosConPalabrasEnTitulo() {
    const resultado = libros
        .filter((libro) => {
            const titulo = libro.titulo;

            // Verificar que tenga más de una palabra
            const cantidadPalabras = titulo.trim().split(/\s+/).length;
            if (cantidadPalabras <= 1) return false;

            // Verificar que NO tenga números ni caracteres especiales (solo letras y espacios)
            const regexValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
            return regexValido.test(titulo);
        })
        .map((libro) => libro.titulo);

    console.log(
        "Títulos con más de una palabra y sin números/caracteres especiales:"
    );
    return resultado;
}

// PUNTO SIETE: Cálculos estadísticos

// A)Desarrollar una función calcularEstadisticas() que obtenga información sobre los años de publicación de los libros:
// Obtener un array con los años de publicación de todos los libros.
// Calcular el promedio de los años de publicación.
// Encontrar el año de publicación más frecuente.
// Calcular la diferencia en años entre el libro más antiguo y el más nuevo. Para este punto es recomendable usar el objeto Math()

function calcularEstadisticas() {
    //Array de años
    const anios = libros.map((libro) => libro.anio);

    // Promedio de años
    const suma = anios.reduce((acc, anio) => acc + anio, 0);
    const promedio = suma / anios.length;

    // Año más frecuente
    const frecuencias = {};
    anios.forEach((anio) => {
        frecuencias[anio] = (frecuencias[anio] || 0) + 1;
    });

    let anioMasFrecuente = anios[0];
    let maxFrecuencia = 0;
    for (let anio in frecuencias) {
        if (frecuencias[anio] > maxFrecuencia) {
            maxFrecuencia = frecuencias[anio];
            anioMasFrecuente = anio;
        }
    }

    // Diferencia entre libro más nuevo y más antiguo
    const anioMin = Math.min(...anios);
    const anioMax = Math.max(...anios);
    const diferencia = anioMax - anioMin;

    // Mostrar resultados
    console.log("ESTADÍSTICAS DE AÑOS DE PUBLICACIÓN");
    console.log("Años de publicación:", anios);
    console.log("Promedio de años:", promedio.toFixed(2));
    console.log(
        `Año más frecuente: ${anioMasFrecuente} (ocurre ${maxFrecuencia} veces)`
    );
    console.log(
        `Diferencia entre el más antiguo (${anioMin}) y el más nuevo (${anioMax}): ${diferencia} años`
    );
}

// PUNTO OCHO: Manejo de cadenas

// A) Crear una función normalizarDatos() que utilice métodos de strings para:
// Convertir todos los títulos a mayúsculas.
// Eliminar espacios en blanco al inicio y final de los nombres de autores.
// Formatear los emails de los usuarios a minúsculas.

function normalizarDatos() {
    // Convertir títulos a mayúsculas y eliminar espacios
    libros.forEach((libro) => {
        libro.titulo = libro.titulo.toUpperCase();
        libro.autor = libro.autor.trim();
    });

    // Formatear los emails de los usuarios a minúsculas.
    usuarios.forEach((usuario) => {
        usuario.email = usuario.email.toLowerCase();
    });

    console.log("Datos normalizados correctamente.");
}

// PUNTO NUEVE: Interfaz de usuario por consola

// A)Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
// B) El menú debe incluir opciones para todas las funcionalidades implementadas en el proyecto
// y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.

function menuPrincipal() {
    let opcion;

    do {
        opcion = prompt(
            "SISTEMA DE GESTIÓN DE LIBROS\n\n" +
            "Seleccioná una opción:\n" +
            "1 Ver todos los libros\n" +
            "2 Buscar libros por título, autor o género\n" +
            "3 Ordenar libros (por título o año)\n" +
            "4 Agregar nuevo libro\n" +
            "5 Borrar un libro\n" +
            "6 Ver todos los usuarios\n" +
            "7 Buscar usuario por email\n" +
            "8 Registrar nuevo usuario\n" +
            "9 Borrar usuario\n" +
            "10 Prestar libro\n" +
            "11 Devolver libro\n" +
            "12 Generar reporte de libros\n" +
            "13 Calcular estadísticas de publicación\n" +
            "14 Libros con títulos válidos\n" +
            "15 Normalizar datos\n" +
            "0 Salir"
        );

        switch (opcion) {
            case "1":
                console.log("Lista de libros:");
                console.table(libros);
                break;
            case "2":
                const criterio = prompt("¿Buscar por 'titulo', 'autor' o 'genero'?");
                const valor = prompt(`Ingrese el valor para buscar por ${criterio}:`);
                const resultados = buscarLibro(criterio, valor);
                console.log("Resultados de la búsqueda:");
                console.table(resultados);
                break;
            case "3":
                const criterioOrden = prompt("¿Ordenar por 'titulo' o 'anio'?");
                ordenarLibros(criterioOrden);
                break;
            case "4":
                const titulo = prompt("Título del libro:");
                const autor = prompt("Autor:");
                const anio = parseInt(prompt("Año de publicación:"));
                const genero = prompt("Género:");
                agregarLibro(titulo, autor, anio, genero);
                break;
            case "5":
                const idBorrar = parseInt(prompt("ID del libro a borrar:"));
                borrarLibro(idBorrar);
                break;
            case "6":
                mostrarTodosLosUsuarios();
                break;
            case "7":
                const emailBusqueda = prompt("Ingrese el email del usuario:");
                const usuarioEncontrado = buscarUsuario(emailBusqueda);
                if (usuarioEncontrado) {
                    console.log("Usuario encontrado:", usuarioEncontrado);
                }
                break;
            case "8":
                const nuevoNombre = prompt("Nombre del nuevo usuario:");
                const nuevoEmail = prompt("Email del nuevo usuario:");
                registrarUsuario(nuevoNombre, nuevoEmail);
                break;
            case "9":
                const nombreEliminar = prompt("Nombre del usuario a eliminar:");
                const emailEliminar = prompt("Email del usuario a eliminar:");
                borrarUsuario(nombreEliminar, emailEliminar);
                break;
            case "10":
                const idLibroPrestar = parseInt(prompt("ID del libro a prestar:"));
                const idUsuarioPrestar = parseInt(prompt("ID del usuario:"));
                prestarLibro(idLibroPrestar, idUsuarioPrestar);
                break;
            case "11":
                const idLibroDevolver = parseInt(prompt("ID del libro a devolver:"));
                const idUsuarioDevolver = parseInt(prompt("ID del usuario:"));
                devolverLibro(idLibroDevolver, idUsuarioDevolver);
                break;
            case "12":
                generarReporteLibros();
                break;
            case "13":
                calcularEstadisticas();
                break;
            case "14":
                const librosValidos = librosConPalabrasEnTitulo();
                console.log("Libros con títulos válidos:");
                console.table(librosValidos);
                break;
            case "15":
                normalizarDatos();
                break;
            case "0":
                alert("¡Gracias por usar nuestra biblioteca!");
                opcion = "16";
                break;
            default:
                alert(
                    "La opción seleccionada no es válida, por favor, intente nuevamente."
                );
                break;
        }
    } while (opcion !== "16");
}