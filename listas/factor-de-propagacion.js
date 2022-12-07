let greet = ["Hello", "World"];
console.log(greet);
console.log(...greet);

// Convertir un String en una lista de personajes
let greetings = "hello";
let chars = [...greetings];
console.log(chars);

// Lista de Subscriptores
let blog1Subs = ["[email protected]", "[email protected]"];
let blog2Subs = ["[email protected]", "[email protected]", "[email protected]"];

let subs = [...blog1Subs, ...blog2Subs];

console.log(subs);

// empujar el contenido de un Array a otro
let arr1 = ["john", "Sofia", "Bob"];
let arr2 = ["Julia", "Sean", "Anthony"];

arr1.push(...arr2);
console.log(arr1);

// Spread Operator ...

const suma = (a, b) => {
  return (c = a + b);
};

let arr = [4, 2];
console.log(suma.apply(null, arr));
console.log(suma(...arr));

const dias1 = ["lunes", "martes", "miercoles"];
const dias2 = [...dias1, "jueves", "viernes"];

console.log(dias2);

const obj1 = {
  modelo: "Iphone 13 PRO MAX",
};

const obj2 = {
  marca: "Apple",
};

const obj3 = {
  ...obj1,
  ...obj2,
};

console.log(obj3);
