// Cómo trabajar con listas (arrays, arreglos, vectores...)
let var1 = { id: false };
let array = [1, "Hola", false, { id: 5 }, null, undefined, var1];

console.log(array);

// Acceder a los valores de un Array a través de su posición
// array[indice] => 0, 1, 2, 3, 4, 5, ...
console.log(array[6]);

// Métodos para introducir nuevos valores en nuestros arrays

// .push() - .unshift() => Mutan el valor de nuestro array

// Valores al final -> push()
array.push("final", 45, 100, false);
console.log(array);

// Valores al principio -> unshift()
array.unshift("inicio", 87, 99);
console.log(array);

const array2 = [1, 3, "hola", false];
// Valores al final -> Pop
array2.pop();
console.log(array);

// Valores al principio -> Shift
array2.shift();
console.log(array2);

// Método para eliminar, modificar o añadir valores en nuestro array

// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6];

// Eliminar valores .splice(indice, numValoresAEliminar)
array3.slice(2, 1);
console.log(array3);

// Añadir valores .splice(indice, 0, valores)
array3.slice(2, 0, "Hola");
console.log(array3);

// Modificar valores .splice(indice, 1, valores)
array3.slice(2, 1, 3);
console.log(array3);
