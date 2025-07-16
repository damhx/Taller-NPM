const randomWords = require("random-words");
const readlineSync = require("readline-sync");

function mostrarMenu() {
    console.log("=== Generador de Palabras Aleatorias ====");
    console.log("1. Generar una palabra aleatoria");
    console.log("2. Generar varias palabras aleatorias");
    console.log("3. Generar una frase aleatoria");
    console.log("4. Salir");
}

function opcion1() {
    const palabra = randomWords();
    console.log(`Palabra generada: ${palabra}`);
}

function opcion2() {
    const cantidad = readlineSync.questionInt("¿Cuántas palabras quieres generar? ");
    const palabras = randomWords({ exactly: cantidad });
    console.log(`Palabras generadas:\n${palabras.join(", ")}`);
}

function opcion3() {
    const longitud = readlineSync.questionInt("¿Cuántas palabras quieres en la frase? ");
    const frase = randomWords({ exactly: longitud, join: ' ' });
    console.log(`Frase generada:\n"${frase}"`);
}

let salir = false;
while (!salir) {
    mostrarMenu();
    const opcion = readlineSync.questionInt("Selecciona una opción: ");

    switch (opcion) {
        case 1:
            opcion1();
            break;
        case 2:
            opcion2();
            break;
        case 3:
            opcion3();
            break;
        case 4:
            console.log("¡Gracias por usar el generador!");
            salir = true;
            break;
        default:
            console.log("Opción no válida.");
    }
}