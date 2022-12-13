const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  // return false;
  throw new Error("El valor debe ser de tipo numero");
};
// const elDoble = console.log(miFuncion("ala"));

const numero = "10";

try {
  // Codigo que puede fallar
  console.log("Esta ejecutandose de manera correcta");
  const doble = miFuncion(numero);
  console.log(doble);
} catch (e) {
  // En caso de fallar, ejecutar esto
  console.log(`el valor de e es: ${e}`);
  console.log("ERROR 404");
} finally {
  console.log(
    "Esto se va a ejecutar tanto si se produce un error como si no existiera ninguno"
  );
}

// ERRORES MAS COMUNES PREDETERMINADOS

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
