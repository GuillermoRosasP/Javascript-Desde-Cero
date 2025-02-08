

let teorico = true;
let practico = true;
let vista = true;

if (teorico === true && practico === true && vista === true) {
    alert('Felicidades tienes tu licencia de conducir');
} else if (practico === false) {
    alert('Fallaste el examen práctico, repítelo');
} else if (vista === false) {
    alert('Consideramos que no obtener la licencia por temas de la vista');
} else if (teorico === false) {
    alert('Fallaste el teórico, ponte a repasar');
} else {
    alert('Contacta al administrador');
}



// App para validar entrada al parque temático

// 1. Edad y altura, tener 12 años y medir más de 140cm

// 2. Pago o pase, debe haber hecho el pago de $20 o tener un pase VIP

// 3. Condición de salud, No debe tener restricciones médicas

// 4. Acompañante, si el visitante es menor de 16 años debe estar acompañado por un adulto.


let edad = Number(prompt('Ingresa tu edad'));

let altura = Number(prompt('Ingresa tu altura en CM'));

let pago = prompt('Hiciste el pago de la entrada? si - no').toLocaleLowerCase();

let pase = prompt('Tienes un pase VIP? si - no').toLocaleLowerCase();

let salud = prompt('Tienes alguna condición médica? si - no').toLocaleLowerCase();

let acompañante = prompt('Te acompaña un adulto? si - no').toLocaleLowerCase();

if(edad>= 12 && altura >= 140){
    
}






