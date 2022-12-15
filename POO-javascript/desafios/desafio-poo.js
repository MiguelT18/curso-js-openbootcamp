// CREA UN NUEVO FICHERO JS QUE CONTENGA LAS SIGUIENTES LÍNEAS:
// =============================================================

// Una clase llamada "Estudiante" que tenga:
// 1. Una variable llamada nombre
// 2. Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// 3. Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
// 4. Crea una nueva instancia de "Estudiante"
// 5. Haz la llamada al método obtenDatos

class Estudiante {
  constructor(nombre, asignaturas) {
    this.nombre = nombre;
    this.asignaturas = asignaturas;
  }

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const estudiante = new Estudiante("Miguel", ["Javascript", "HTML", "CSS"]);

console.log(estudiante.nombre);
console.log(estudiante.obtenDatos());
