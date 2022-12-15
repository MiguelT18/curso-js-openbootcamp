class Persona {
  // Private attributes -> #
  // Private -> Sólo se puede acceder desde dentro de la clase
  #nombre;
  #edad;

  // Protected -> _
  // Protected
  _isDeveloper = true;
  constructor(nom, edad) {
    this.#nombre = nom;
    this.#edad = edad;
  }

  saludo() {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`);
  }

  // Función getter -> Nos permite acceder (de forma controlada) a algún atributo protegido
  obtenNombre() {
    return this.#nombre;
  }

  #obtenEdad() {
    return this.#edad;
  }

  getEdad() {
    return this.#edad;
  }

  setEdad(nuevaedad) {
    this.#edad = nuevaedad;
  }
}

const persona = new Persona("Gorka", 70);
console.log(persona);
console.log(persona.nombre);
persona.saludo();
console.log(persona.obtenNombre());
// console.log(persona.#obtenEdad());
console.log(persona._isDeveloper);

// ==============================

// Getter - métodos que nos permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad();
console.log(edad);

// Setter -> métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona.setEdad(15);
console.log(persona.getEdad());
