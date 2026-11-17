const TASA_IMPUESTO = 0.15;
const TASA_DESCUENTO_PREMIUM = 0.1;
const UMBRAL_DESCUENTO = 1000;

function validarProductos(productos) {
  if (!Array.isArray(productos) || productos.length === 0) {
    throw new TypeError("productos debe ser una lista no vacía");
  }

  productos.forEach((producto, indice) => {
    if (!producto || typeof producto !== "object") {
      throw new TypeError(`El producto ${indice + 1} no es válido`);
    }
    if (!Number.isFinite(producto.precio) || producto.precio < 0) {
      throw new TypeError(`El precio del producto ${indice + 1} debe ser un número no negativo`);
    }
    if (!Number.isInteger(producto.cantidad) || producto.cantidad <= 0) {
      throw new TypeError(`La cantidad del producto ${indice + 1} debe ser un entero positivo`);
    }
  });
}

function redondearDinero(monto) {
  return Math.round((monto + Number.EPSILON) * 100) / 100;
}

function calcularCompra(productos, cliente) {
  validarProductos(productos);

  const subtotalSinRedondear = productos.reduce(
    (acumulado, producto) => acumulado + producto.precio * producto.cantidad,
    0
  );
  const subtotal = redondearDinero(subtotalSinRedondear);
  const tieneDescuento = cliente === "premium" && subtotal >= UMBRAL_DESCUENTO;
  const descuento = redondearDinero(
    tieneDescuento ? subtotal * TASA_DESCUENTO_PREMIUM : 0
  );
  const baseImponible = subtotal - descuento;
  const impuesto = redondearDinero(baseImponible * TASA_IMPUESTO);
  const total = redondearDinero(baseImponible + impuesto);

  return { subtotal, descuento, impuesto, total };
}

module.exports = { calcularCompra };
