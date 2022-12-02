// Mi altura en cm y m
let altura_cm = 180;
let altura_m = 1.8;

// altura en m redondeada hacia arriba
let altura_red = Math.ceil(altura_m);
console.log(altura_red);

// Mi peso en kg
let peso = 63.5;

// peso en kg redondeado hacia abajo
let peso_red = Math.floor(peso);
console.log(peso_red);

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let max_valor_JS = Number.MAX_VALUE + 1;
console.log(max_valor_JS === Number.MAX_VALUE);
