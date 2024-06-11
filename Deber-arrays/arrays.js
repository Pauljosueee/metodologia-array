'use strict'


//1.Escribir una función que reciba un array de strings y muestre cada elemento con su posición.

function mostrarElementosConPosicion(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i + ": " + arr[i]);
    }
}

const frutas = ["manzana", "banana", "cereza"];
mostrarElementosConPosicion(frutas);

//2.Escribir una función que reciba un array de números y devuelva la suma de todos sus elementos

function sumarElementos(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

const lista1 = [1, 2, 3, 4, 5];
const resultado = sumarElementos(lista1);
console.log(`La suma de los elementos de ${lista1} es ${resultado}`);

//3.Escribir una función que reciba un array de números y muestre casa uno de sus elementos multiplicado por 3.
function multiplicarPorTres(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * 3);
    }
}

const lista = [1, 2, 3, 4, 5];
multiplicarPorTres(lista);


