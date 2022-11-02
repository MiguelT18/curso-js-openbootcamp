// Métodos de cadenas de texto
// let input = "AcUaRiO";
// let db = "acuario";

// toLowerCase() - toUpperCase()
// console.log(input.toLowerCase());
// console.log(input.toUpperCase());
// console.log(input.toLocaleUpperCase()); //En casos muy específicos
// console.log(input.toLowerCase() === db.toLowerCase());

// Formas de concatenar dos cadenas de caracteres
// let str_1 = "Hola soy la primera cadena";
// let str_2 = "y yo soy la seegunda cadena";

// console.log(str_1.concat(" ", str_2, " y más cosas"));
// console.log(str_1 + " " + str_2);
// console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final
// let str_3 = "    Hola soy un string con espacios al final.    ";
// console.log(str_3.length);
// trim()
// console.log(str_3.trim().length);
// console.log(str_3.trimStart().length);
// console.log(str_3.trimEnd().length);

// Devolver el caracter que hay en cierta posición
// let str_4 = "Hola soy el string número 4"; // ["H", "o", "l", "a" ...]

// console.log(str_4.charAt(5));
// console.log(str_4[5]);

// Devolver la posición de una palabra dentro de una cadena de caracteres
// let str_5 =
//   "Hola soy Miguel y me gusta programar. Mi nombre es Miguel y mi apellido es Villar";

// console.log(str_5.indexOf("Miguel")); // Si la palabra no existe devolverá -1
// console.log(str_5.charAt(9));
// console.log(str_5.lastIndexOf("Miguel")); // Devuelve la última instancia de un caracter

// Métodos de cadenas de texto (parte 3)
// https://regexr.com

// let texto_largo =
//   "Tito no es un mono cualquiera. A tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

// console.log(texto_largo.match(/no/g));

// // Extiste la palabra dentro del texto?
// console.log(texto_largo.includes("terremoto"));

// // Saber si un texto empieza con una palabra
// console.log(texto_largo.startsWith("Tito no es un..."));

// // Saber si un texto termina con otra palabra
// console.log(texto_largo.endsWith("."));
