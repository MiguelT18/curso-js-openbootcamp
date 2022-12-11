// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
  nombre: "Miguel",
  apellido: "Teran",
  edad: 21,
  altura: 180,
  isDeveloper: true,
};

// Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = datosPersonales.edad;
console.log(miEdad);

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const friendsList = [
  datosPersonales,
  {
    nombre: "Nicolas",
    apellido: "Carrasco",
    edad: 22,
    altura: 190,
    isDeveloper: false,
  },
  {
    nombre: "Gabriel",
    apellido: "Vega",
    edad: 22,
    altura: 169,
    isDeveloper: false,
  },
];

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
friendsList.sort((a, b) => b.edad - a.edad);
console.log(friendsList);
