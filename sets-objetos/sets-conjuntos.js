// Sets o conjuntos
const array = [1, 2, 3, 4, 5, 6, 2, 5, "Hola", { id: 5 }, [2, 3], "Hola"];

const miSet = new Set(array);

console.log(array);
console.log(miSet);

// .add -> Añadir valores
miSet.add(9);
console.log(miSet);
miSet.add(10);
console.log(miSet);

// .delete() -> Eliminar valores
miSet.delete("Hola");
console.log(miSet);

// .clear() -> Eliminar todos los valores dentro de un set
// miSet.clear();
// console.log(miSet);

// .has() -> Averiguar si un set contiene cierto elemento
// console.log(array.includes(1));
console.log(miSet.has(1));

// .size -> Saber la cantidad de valores dentro de un Set
console.log(miSet.size);

// Hacer una iteracion sobre el Set
miSet.forEach((valor) => {
  console.log(valor);
});

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [...miSet];
console.log(ar_miSet);
