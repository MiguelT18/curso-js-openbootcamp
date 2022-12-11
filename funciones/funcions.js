// Que son las funciones, como se declaran y como se utilizan

const nombre = "Miguel";

// saludar("Miguel");
saludar(nombre);

function saludar(nombre) {
  console.log(nombre);
  console.log(`Hola ${nombre}`);
}

let nombre2 = "Juan";

despedir(nombre2);

function despedir(nombre) {
  nombre = "Diego";
  console.log(`Adios ${nombre}`);
}

let persona = { nombre: "Juancho", apellido: "Teran" };

console.log(persona);

saludarPersona(persona);

function saludarPersona(objeto) {
  objeto.apellido = "Villar";
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

saludar();

// Parametros por defecto
function imprimeNumero(numero = 7) {
  console.log(numero);
}

imprimeNumero();

function imprimir(...parametros) {
  console.log(parametros);
}

imprimir(1, 3, 9, 2, "Hola", { id: 3 });

function suma(...nums) {
  return nums.reduce((a, b) => a + b);
}

const s = suma(1, 2, 3, 4, 9, 15, 16);

console.log(s);

// Ambitos de una funcion

let variable = "Hola";

function multiplicar(a = 0, b = 0) {
  console.log(variable);
  // let variableInterna = "Adios";
  return a * b;
}

// console.log(variableInterna);

console.log(multiplicar(4, 9));
