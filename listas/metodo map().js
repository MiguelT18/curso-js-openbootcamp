var arr = [2, 5, 6, 3, 8, 9];

// Create a new array named newArr
var newArr = arr.map(function (val, index) {
  return { key: index, value: val * val };
});
console.log(newArr);

// Concatenate character "-" with every character of name
var myName = "Miguel";

var newName = Array.prototype.map.call(myName, function (item) {
  return item + "manzana";
});

console.log(newName);
console.log(myName);

// Multiply the following array numbers by 3:

// for...loop method
multiply = [3, 4, 5, 6];
for (let i = 0; i < multiply.length; i++) {
  multiply[i] = multiply[i] * 3;
}
console.log(multiply);

// map() function method
let numbers1 = [3, 4, 5, 6];

let modifiedNumbers = numbers1.map(function (element) {
  return element * 3;
});

console.log(modifiedNumbers);

// ================
// Iterating arrays of objects
// ================
let users = [
  { firstName: "Gaborolo", lastName: "Vargarolo" },
  { firstName: "Chamorolo", lastName: "Teton" },
  { firstName: "Nicolas", lastName: "Karrasko" },
  { firstName: "Mikicho", lastName: "Teran" },
  { firstName: "Claros", lastName: "Maleante" },
];

let userFullNames = users.map(function (element) {
  return `${element.firstName} ${element.lastName}`;
});

console.log(userFullNames);
