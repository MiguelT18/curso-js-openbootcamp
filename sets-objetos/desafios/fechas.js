// La fecha de hoy
const fechaHoy = new Date();
console.log(fechaHoy);

// La fecha de tu nacimiento
const fechaNacimiento = new Date("Feb 04 2001");
console.log(fechaNacimiento);

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const validarNacimiento = fechaHoy > fechaNacimiento;
console.log(validarNacimiento);

// Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento);
