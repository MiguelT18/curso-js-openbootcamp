// Trabajando con fechas

// new Date() -> syntax: Date(year, month, date, hours, minutes, seconds, ms)

// 1era manera de inicializar fechas

const fecha = new Date();
console.log(fecha);

// 2da manera de inicializar fechas

// Los meses se inicializan en 0 (0 - Enero, 11 - Diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192);

console.log(fecha2);

// 3era manera de inicializar fechas

const fecha3 = new Date(-10002299);
console.log(fecha3);

// 4era manera de inicializar fechas

const fecha4 = new Date("October, 13, 1979 12:15:15");
console.log(fecha4);

// COMPARAR FECHAS

console.log(fecha < fecha2);

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192);

console.log(fecha2 === 5); // ERROR: No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()); // OK: Esta es la forma de comparar igualdad entre fechas

// Como obtener el dia, el mes y el anio de una fecha

// .getDate() -> Obtener el dia
console.log(fecha2.getDate());

// getMonth() -> Obtener el mes (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1);

// get.fullYear() -> Obtener el anio
console.log(fecha2.getFullYear());

// COMO MOSTRAR UNA FECHA EN UN STRING

console.log(fecha2);

// .toLocaleDateString()
console.log(fecha2.toLocaleDateString("en-US"));
