// Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listaCompras = ["huevo", "pollo", "agua", "banana", "Frutilla"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"

listaCompras.push("Aceite de Oliva");
console.log(listaCompras);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

listaCompras.pop();
console.log(listaCompras);

// Una lista de tus 3 películas favoritas (objetos con propiedades: títulos, director, fecha)

const peliculasFavoritas = [
  {
    titulo: "Mr. Robot",
    director: "Deborah Chow",
    fecha: 2015,
  },
  {
    titulo: "Interstellar",
    director: "Christopher Nolan",
    fecha: 2014,
  },
  {
    titulo: "Warcraft",
    director: "Duncan Jones",
    fecha: 2016,
  },
  {
    titulo: "Gabo en las tinieblas",
    director: "La Fabrica",
    fecha: 1998,
  },
];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const peliculasNuevas = peliculasFavoritas.filter(
  (nuevas) => nuevas.fecha > 2010
);
const resultado = peliculasNuevas;
console.log(resultado);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directoresLista = peliculasFavoritas.map(function (e) {
  return `${e.director}`;
});
console.log(directoresLista);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

let directoresTitulos = peliculasFavoritas.concat(
  peliculasFavoritas.titulo,
  peliculasFavoritas.director
);
console.log(directoresTitulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) - Spread Operator

const propDirectoresTitulos = peliculasFavoritas.concat(
  peliculasFavoritas.titulo,
  peliculasFavoritas.director
);
console.log(...propDirectoresTitulos);
