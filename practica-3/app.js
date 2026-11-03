function crearSaludo(nombre) {
  return `Hola, ${nombre}!`;
}

function mostrarSaludo(nombre) {
  const saludo = crearSaludo(nombre);
  console.log(saludo);
}

mostrarSaludo("Mundo");
