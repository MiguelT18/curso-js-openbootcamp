// import { suma, potencia, nombre } from "./modulos/matematicas.js";
import * as moduloMatematicas from "./modulos/matematicas.js";
import getAutor, { libro } from "./modulos/literatura.js";

const sum = moduloMatematicas.suma(4, 12);
console.log(sum);

const eleva = moduloMatematicas.potencia(2, 21);
console.log(eleva);

console.log(moduloMatematicas.nombre);

console.log(getAutor());
console.log(libro);
