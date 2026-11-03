# Despues de la refactorizacion

El programa conserva el resultado `Hola, Mundo!`, pero ahora separa la
creacion del mensaje de su salida:

```js
function crearSaludo(nombre) {
  return `Hola, ${nombre}!`;
}

function mostrarSaludo(nombre, salida, formateador) {
  const saludo = formateador(nombre);
  salida.log(saludo);
}

mostrarSaludo("Mundo", console, crearSaludo);
```

## Mejoras realizadas

- `crearSaludo` se ocupa unicamente de construir el mensaje.
- `mostrarSaludo` coordina el proceso y no depende directamente de
  `console.log`.
- La salida se recibe como dependencia, por lo que puede reemplazarse en una
  prueba.
- El formateador tambien se recibe como dependencia, por lo que se pueden
  agregar formatos nuevos sin modificar `mostrarSaludo`.
