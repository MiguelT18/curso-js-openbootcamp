// Trabajando con objetos
const obj = {
  id: 4,
  nombre: "Juan",
  apellido: "Gonzales",
  isDeveloper: true,
  libros_favoritos: ["El metodo", "El codigo de la manifestacion"],
  "4-juegos": [1, 2, 3, 4],
};

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Julian";

console.log(obj.nombre);
console.log(obj2.nombre);

let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);

// Copiar y duplicar un objeto dentro de otro

const obj3 = { ...obj };
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Miguel";

console.log(obj.nombre);
console.log(obj3.nombre);

// Como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
  { titulo: "Lo que el viento se llevo", anio: "1939" },
  { titulo: "Titanic", anio: "1997" },
  { titulo: "Moana", anio: "2016" },
  { titulo: "El efecto mariposa", anio: "2004" },
  { titulo: "TED", anio: "2012" },
];

console.log(listaPeliculas);

// Ordenar de mas antigua a mas nueva

// sort() -> Muta el valor del array o lista original

listaPeliculas.sort((a, b) => a.anio - b.anio);
console.log(listaPeliculas);
