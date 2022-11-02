// function usersNames() {
//   const arrs = new Array();
//   const mssge1 = arrs.push("Eduardo", "Gabriel", "Nicolas", "Miguel");

//   console.log(mssge1);
// }

// usersNames();

// var name = "Miguel";
// var age = 21;
// var developer = true;
// var born = new Date("02 / 04 / 2001");
// var favourBook = {
//   title: "El Arte de la Guerra",
//   author: "Sun Tzu",
//   description:
//     "Un libro bastante interesante que te muestra guías sobre cómo aumentar tus posibilidades de obtener ventajas sobre tus enemigos",
// };

// ESTRUCTURAS DE CONTROL

// Bifuraciones if ... else
// let saldo = 50;
// let efectivo = 100;

// if (efectivo < saldo) {
//   console.log("Puedes sacar dinero");
// }
// if (efectivo < saldo) {
//   console.log("Puedes sacar dinero");
// } else {
//   console.log("Saldo insuficiente");
// }

// If else + If else
// let nota = 5;

// if (nota === 5) {
//   console.log("Enhorabuena, has obtenido un sobresaliente");
// } else if (nota === 4) {
//   console.log("Buen trabajo, pero podrías haberlo hecho mejor");
// } else if (nota === 3) {
//   console.log("Buen trabajo, pero podrías haberlo hecho mejor :)");
// } else if (nota === 2) {
//   console.log("No has aprobado por poco, no te rindas");
// } else if (nota === 1) {
//   console.log("No has obtenido suficiente");
// } else if (nota === 0) {
//   console.log("No estudiaste nada, suerte para la próxima");
// } else {
//   console.log("Error, introduce una nota entre el 1 y el 5");
// }

// Sentencias Switch
// let nota = 5;

// switch (nota) {
//   case 5:
//     console.log("Enhorabuena, has obtenido un sobresaliente");
//     break;
//   case 4:
//     console.log("Buen trabajo, pero podrías haberlo hecho mejor");
//     break;
//   case 3:
//     console.log("Buen trabajo, pero podrías haberlo hecho mejor :)");
//     break;
//   case 2:
//     console.log("No has aprobado por poco, no te rindas");
//   case 1:
//     console.log("No estudiaste nada, suerte para la próxima");
//     break;
//   default:
//     console.log("Error, introduce un número menor a 5");
//     break;
// }

// Bucles Do...While

// While
// let i = 0;
// let max = 10;
// while (i < max) {
//   console.log(i);
//   i++;
// }

// Do..While
// let i = 15;
// let max = 20;
// do {
//   i++;
// } while (i < max);

// Casos muy especificos - break, continue
// let lista = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < lista.length; i++) {
//   if ((lista[i] = 3)) {
//     continue;
//   }

//   console.log(lista[i]);

//   if (lista[i] > 5) {
//     break;
//   }
//   console.log(lista[i]);
// }

// break and continue

// labels

// let unidades = 0;
// let decenas = 0;

// while (true) {
//   console.log(`El numero actual es: ${decenas} ${unidades}`);
//   while (true) {
//     unidades++;
//     if (unidades === 10) {
//       unidades = 0;
//       break;
//     }
//   }
//   decenas++;
//   if (decenas === 2) {
//     break;
//   }
// }

// STRINGS

// Métodos más utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string
// let string = "Hola soy un string";
// console.log(string.length);

// Obtener partes de cadenas de caracteres
// slice() - substring() - substr()
// let slice_string = string.slice(5, 10);
// console.log(slice_string);

// let substring_string = string.substring(5, 10);
// console.log(substring_string);

// let substr_str = string.substring(5, 10);
// console.log(substr_str);

// Reemplazar parte del contenido de una cadena de texto
// let cadena = "Hola mi nombre es Miguel";
// console.log(cadena);

// .replace()
// console.log(cadena.replace("Miguel", "Gorka"));

// let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los árboles y odia comer plátanos. El prefiere pasear por el bosque.";

// console.log(texto_largo.replace("los", "cinco"));

// console.log(texto_largo.replace(/los/g, "cinco"));
