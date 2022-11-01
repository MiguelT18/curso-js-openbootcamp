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
