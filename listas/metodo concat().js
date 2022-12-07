// Concatenates two arrays
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);

console.log(alphaNumeric);

// Concatenate three arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const concatNumbers = num1.concat(num2, num3);

console.log(concatNumbers);

// string.concat()
const nombre = "Miguel";
const apellido = "Teran";

const completo = nombre.concat(" ", apellido, " Jimenez");
console.log(completo);

// array.concat()
const vocales = ["a", "e", "i"];
const numeros = [1, 2, 3];
const consonantes = ["n", "m"];
const vectores = [[1], [2]];

const union = vocales.concat(vectores);
vectores[0].push(3);
console.log(union);
