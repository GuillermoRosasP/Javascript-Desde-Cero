





let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`"${titulo}" lista de libros.`);
}

function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Libros leídos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

// Entrada de Libros
agregarLibro("10 años exclavo");
agregarLibro("El caballero de la armadura oxidada");
mostrarLibrosLeidos();
