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
