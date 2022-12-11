// Un nuevo set con los nombres de mi familia
const miFamilia = [
  "Diego",
  "Sofia",
  "Mario",
  "Griselda",
  "Santiago",
  "Valentina",
];
const miSet = new Set(miFamilia);
console.log(miSet);

// Modifica el Set original añadiendo tu nombre (duplicado) (deberia darte lo mismo)
miSet.add("Miguel");
console.log(miSet);
miSet.add("JavaScript");
console.log(miSet);
