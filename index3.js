

let index = 1;


/*while (index <= 10) {
    console.log('Iteración', index);
    index++;
}

for (let index = 1; index <= 10; index++) {
    console.log('Iteración', index);
    
    if (index == 3) {
        console.log('Tercer iteración');
    }
}



const emojis = ['🌙', '🌜', '🌛', '👀', '🌞'];

// console.log(emojis.length);

for (let index = 0; index < emojis.length; index++) {
    console.log('Iteración', index);
    console.log(emojis[index]);
}






// FizzBuzz

// FizzBuzz es un ejercicio clásico en programación que ayuda a mejorar el pensamiento lógico y la estructura de los bucles condicionales. 
// Tu tarea es escribir un programa en JavaScript que recorra los números del 1 al 100 y siga estas reglas:

// Si un número es múltiplo de 3, imprime "Fizz".
// Si un número es múltiplo de 5, imprime "Buzz".
// Si un número es múltiplo de 3 y de 5, imprime "FizzBuzz".
// Si un número no es múltiplo de 3 ni de 5, simplemente imprime el número.*/




// Declarar un arreglo llamado "frutas" con varios tipos de frutas
const frutas = [
    "manzana",
    "banana",
    "naranja",
    "manzana",
    "pera",
    "banana",
    "uva",
    "manzana",
    "naranja",
    "uva",
    "pera",
    "mango",
    "mango"
  ];
  
  // Crear un objeto para almacenar la cantidad de cada tipo de fruta
  const contadorFrutas = {};
  
  // Usar un ciclo "for" para recorrer el arreglo y contar las frutas
  for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (contadorFrutas[fruta]) {
      contadorFrutas[fruta]++;
    } else {
      contadorFrutas[fruta] = 1;
    }
  }
  
  // Imprimir en la consola la cantidad de cada tipo de fruta
  console.log("Cantidad de cada tipo de fruta:");
  for (let tipo in contadorFrutas) {
    console.log(`${tipo}: ${contadorFrutas[tipo]}`);
  }
  




