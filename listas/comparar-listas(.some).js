const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2];

const res = array.some((valor) => valor < 0);

console.log(res);

const existe = array.some((valor) => valor === 90);

console.log(existe);

// Con listas de objetos
const listaObjetos = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucía", edad: 3 },
  { nombre: "Amaia", edad: 29 },
];

const existeJuan = listaObjetos.some((persona) => persona.nombre === "Juan");
console.log(existeJuan);

// Cómo obtener una lista a partir de un objeto iterable
const str = "Hola soy Miguel";
console.log(str[5]);

const arr_str = Array.from(str);
console.log(arr_str);

const set = new Set([2, 3, "hola", 4]);
const arr_set = Array.from(set);

console.log(arr_set);

// Es un objeto iterador { [Iterator] }
const keys = array.keys();
console.log(keys);

const arr_keys = Array.from(keys);
console.log(arr_keys);
