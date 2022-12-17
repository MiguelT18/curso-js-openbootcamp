// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

function fibonacci(num) {
  let listaFibonacci = [];
  let a = 1;
  let b = 0;
  let temp;
  for (let i = 0; i < num; i++) {
    temp = a;
    a = a + b;
    b = temp;
    listaFibonacci.push(b);
    // listaFibonacci = [...listaFibonacci, b];
  }
  return listaFibonacci;
}

console.log(fibonacci(8));
