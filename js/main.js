//////////////////////////////////////////////////////////////////////////////////
//PRACTICA 1
//Escribe una función llamada sumEveryOther que pueda recibir cualquier 
//cantidad de números y devuelva la suma de todos los argumentos.

const arrayNumeros = [6, 8, 2, 3, 1,57]

function sumEveryOther(...nums){
    console.log(arrayNumeros);
    return arrayNumeros.reduce((acum, num) => acum + num, 0);
}

console.log(sumEveryOther(...arrayNumeros))

//////////////////////////////////////////////////////////////////////////////////
//PRACTICA 2
//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de 
//argumentos (incluyendo números y strings) y retorne la suma solo de los números.

const arrayRemix = [2, "cachivache", 4, 92, "txiribiton",74]

function addOnlyNums(...elemento) {
    let sumatorio = 0;
    elemento.forEach(el => {
        if(typeof el === "number"){
            sumatorio += el;
        }
    });
    return sumatorio;
};

console.log(addOnlyNums(...arrayRemix));

//////////////////////////////////////////////////////////////////////////////////
//PRACTICA 3
//Escribe una función llamada countTheArgs que pueda recibir cualquier número de 
//argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const arrayArgs = ["coche", "perro", "perro", "chiringuito","motosierra"]

function countTheArgs(...argumento) {
    return argumento.length
};

console.log(countTheArgs(...arrayArgs));

//////////////////////////////////////////////////////////////////////////////////
//PRACTICA 4
//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos 
//y devuelva solo un array que combine los dos (usando spread operator).

const arrayCombinado1 = [1,2,3,];
const arrayCombinado2 = [arrayCombinado1,4,5,6];
const arrayCombinado3 = [7,8,9]

function combineTwoArrays(...arrays){
    return arrays.flat();
}

console.log(arrayCombinado2);
console.log(combineTwoArrays(...arrayCombinado1,...arrayCombinado3))


//////////////////////////////////////////////////////////////////////////////////
//PRACTICA 5
//Escriba una función llamada onlyUniques que acepte cualquier número de argumentos 
//y devuelva un array de elementos únicos, sin repetidos.

const arrayUnico = ["cachivache", "perro", "cachivache", "txantxangorri","perro"];

function onlyUniques(...argumento){
    let argumentoUnico = [];
    argumento.forEach((arg => {
        if(!argumentoUnico.includes(arg)){
            argumentoUnico.push(arg);
            }
        }));
        return argumentoUnico;
    };

console.log(onlyUniques(...arrayUnico));

//////////////////////////////////////////////////////////////////////////////////
//PRACTICA 6
//Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad 
//de arrays como argumentos y los combine todos en un solo array.

const array1 =[[3, 6, 7, 8], [2, 7, 3, 1],[2, 44, 22, 7, 3, 1]];

function combineAllArrays(...array){
    let arrayCombinado = [];
    array.forEach(arr => {
        arrayCombinado.push(...arr)        
    });
    return arrayCombinado
}

console.log(combineAllArrays(...array1));

//////////////////////////////////////////////////////////////////////////////////
//PRACTICA 7
//Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos,
//los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const arrayCuadrado = [1,2,3,4];

function sumAndSquare(...numeros){
    let square = 0;
    numeros.forEach((num=>{
        square = square + (num*num);
    }));
    return square
};

console.log(sumAndSquare(...arrayCuadrado));
