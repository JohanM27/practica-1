# Antes de la refactorizacion

El punto de partida era el siguiente codigo:

```js
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Mundo"));
```

## Problemas encontrados

- La funcion de saludo mezcla la creacion del mensaje con el formato concreto.
- La salida esta acoplada directamente a `console.log`.
- No se puede cambiar el formato o la salida sin modificar la logica principal.
- La funcion no tiene una dependencia reemplazable para hacer pruebas.
