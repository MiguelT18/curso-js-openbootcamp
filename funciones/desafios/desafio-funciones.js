// Una función sin parámetros que devuelva siempre "true"
function miFuncion() {
  return true;
}

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function async() {
  setTimeout(() => {
    console.log("Hola soy una promesa");
  }, 5000);
}

// Una función generadora de índices pares automáticos
function* generatePairs() {
  let i = 0;
  while (true) {
    yield (i += 2);
  }
}

const pairs = generatePairs();
console.log(pairs.next().value);
console.log(pairs.next().value);
console.log(pairs.next().value);
console.log(pairs.next().value);
console.log(pairs.next().value);
