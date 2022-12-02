let myName = "Miguel";
let myLastName = "Terán";
let estudiante = `Estudiante ${myName} ${myLastName}`;

// Mostrar en consola la cadena estudiante
console.log(estudiante);

// Mostrar en consola la cadena estudiante convertida en mayúsculas
let estudianteMayus = estudiante.toUpperCase();

console.log(estudianteMayus);

// Mostrar en consola la cadena estudiante convertida en minúsculas
let estudianteMinus = estudiante.toLowerCase();

console.log(estudianteMinus);

// Mostrar en consola la cantidad de caracteres que tiene la variable estudiante
let cantidadDeCaracteres = estudiante.length;

console.log(cantidadDeCaracteres);

// Mostrar en consola una variable que contenga la primera letra de myName
let firstLetter = myName.charAt();

console.log(firstLetter);

// Mostrar en consola una variable que contenga la última letra de myLastName
let lastLetter = myLastName.slice(-1);

console.log(lastLetter);

// Mostrar en consola una cadena de texto que elimine los espacios de la variable estudiante
let sinEspacios = estudiante.replace(/ /g, "");
console.log(sinEspacios);

// Una variable booleana que diga si el myName está contenido en la variable estudiante
let myNameIs = estudiante.includes(myName);
console.log(myNameIs);
