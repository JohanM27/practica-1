function crearSaludo(nombre) {
  return `Hola, ${nombre}!`;
}

function mostrarSaludo(nombre, salida) {
  const saludo = crearSaludo(nombre);
  salida.log(saludo);
}

mostrarSaludo("Mundo", console);
