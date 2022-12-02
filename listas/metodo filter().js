// Mostrar en consola una cantidad míinima de caracteres

var fruits = ["Banana", "Frutisha", "Manzana", "Papasha", "Uva", "Cereza"];
var result = fruits.filter((word) => word.length >= 3);

console.log(result);

// Mostrar en consola los precios menores a 100$us

var prices = [100, 200, 300, 123, 49, 52, 89, 99, 192, 102];
var lowPrices = prices.filter((value) => value <= 100);

console.log(lowPrices);

// Mostrar en consola todos los usuarios mayores a 18 años

var users = [
  { username: "wafflez", age: 21 },
  { username: "nicocs", age: 22 },
  { username: "bebexito", age: 18 },
  { username: "gaborolo", age: 16 },
  { username: "conejitaMala", age: 17 },
];

var userPassed = users.filter((user) => user.age >= 18);
console.log(userPassed);
