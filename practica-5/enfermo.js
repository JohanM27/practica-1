// Versión inicial con errores intencionales para la clínica de código.
function calcularCompra(productos, cliente) {
  let subtotal = 0;

  for (const producto of productos) {
    // Convierte textos numéricos sin avisar y puede producir NaN con datos inválidos.
    subtotal += producto.precio * (producto.cantidad || 1);
  }

  // El descuento se aplica a cualquier cliente y antes de revisar el umbral.
  const descuento = subtotal > 100 ? subtotal * 0.1 : 0;
  const impuesto = subtotal * 0.15;
  const total = subtotal - descuento + impuesto;

  // El argumento cliente no influye en el cálculo.
  return { subtotal, descuento, impuesto, total };
}

module.exports = { calcularCompra };
