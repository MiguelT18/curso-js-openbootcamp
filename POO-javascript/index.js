const persona = {
  nombre: "Miguel",
  edad: 21,
  isDeveloper: true,
  saludo: function () {
    console.log("Hi I'm Miguel");
  },
};

// console.log(persona);
persona.saludo();

const otra_persona = {
  nombre: "Andres",
  edad: 15,
  isDeveloper: false,
  saludo: function () {
    console.log("Hey there! My name is Andres");
  },
};

otra_persona.saludo();

// Factory Function
const creaPersona = (nombre, edad, isDeveloper) => {
  return {
    nombre, // nombre: nombre
    edad,
    isDeveloper,
    saludo: function () {
      console.log("Hello");
    },
  };
};

const nueva_persona = creaPersona("Juan", 23, true);
console.log(nueva_persona);

const nueva_persona2 = creaPersona("Maria", 44, false);
console.log(nueva_persona2);
