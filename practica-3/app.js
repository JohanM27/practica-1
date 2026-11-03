function crearSaludo(nombre) {
  return `Hola, ${nombre}!`;
}

function mostrarSaludo(nombre, salida, formateador) {
  const saludo = formateador(nombre);
  salida.log(saludo);
}

mostrarSaludo("Mundo", console, crearSaludo);
