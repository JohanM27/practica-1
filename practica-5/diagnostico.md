# Práctica 5: Clínica de código

## Objetivo y reglas del cálculo

La función procesa una lista de productos con precio y cantidad. Calcula el
subtotal, aplica un descuento del 10 % únicamente a clientes `premium` cuando
el subtotal es de al menos 1,000, y luego calcula un impuesto del 15 % sobre
el subtotal después del descuento. Los importes se expresan con dos decimales.
Precios y cantidades deben ser números válidos; la cantidad debe ser un entero
positivo.

## Diagnóstico de `enfermo.js`

- No valida la lista ni sus elementos; una lista vacía o datos mal formados
  producen resultados engañosos o errores difíciles de entender.
- Usa `producto.cantidad || 1`, que sustituye datos inválidos por una unidad y
  oculta el problema de entrada.
- Aplica el descuento a cualquier cliente y usa un umbral incorrecto de 100.
- Calcula el impuesto sobre el subtotal completo, aunque haya descuento.
- No redondea los importes a centavos, por lo que puede exponer imprecisiones
  de coma flotante.
- Recibe `cliente` pero no lo utiliza: el resultado no respeta la categoría del
  cliente.

## Cambios en `sano.js`

- Extrae tasas y umbral a constantes con nombres que explican su propósito.
- Valida explícitamente la lista, los precios y las cantidades, con mensajes
  que identifican el dato inválido.
- Separa validación, redondeo y cálculo para que cada parte tenga una función
  clara.
- Calcula el descuento sólo para clientes premium que cumplen el umbral y usa
  el importe descontado como base del impuesto.
- Devuelve un objeto consistente con subtotal, descuento, impuesto y total.

## Pruebas

`tests/clinica.test.js` cubre el caso premium en el umbral, cliente regular,
redondeo de centavos, entradas inválidas y una comparación que demuestra que la
versión enferma no satisface el caso de referencia. Ejecutar desde esta carpeta
con `npm test` (requiere Node.js con `node:test`).
