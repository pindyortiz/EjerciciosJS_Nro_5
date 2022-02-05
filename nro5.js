console.log("Ejercicio Nro 5");

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invierteTexto = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste la cadena")
    : console.log(cadena.split("").reverse().join(""));

invierteTexto("Hola mundo");
invierteTexto("");
invierteTexto("Yo me llamo Ramon Ortiz");
invierteTexto("Neuquen");
