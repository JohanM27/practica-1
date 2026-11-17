const test = require("node:test");
const assert = require("node:assert/strict");
const enfermo = require("../enfermo");
const sano = require("../sano");

const compraPremium = [
  { nombre: "Teclado", precio: 600, cantidad: 1 },
  { nombre: "Mouse", precio: 400, cantidad: 1 },
];

test("el caso premium aplica descuento antes del impuesto", () => {
  assert.deepEqual(sano.calcularCompra(compraPremium, "premium"), {
    subtotal: 1000,
    descuento: 100,
    impuesto: 135,
    total: 1035,
  });
});

test("un cliente regular no recibe descuento", () => {
  assert.deepEqual(
    sano.calcularCompra([{ nombre: "Libro", precio: 120, cantidad: 1 }], "regular"),
    { subtotal: 120, descuento: 0, impuesto: 18, total: 138 }
  );
});

test("redondea los importes a dos decimales", () => {
  assert.deepEqual(
    sano.calcularCompra([{ nombre: "Artículo", precio: 0.1, cantidad: 3 }], "regular"),
    { subtotal: 0.3, descuento: 0, impuesto: 0.05, total: 0.35 }
  );
});

test("rechaza listas vacías y datos de producto inválidos", () => {
  assert.throws(() => sano.calcularCompra([], "regular"), /lista no vacía/);
  assert.throws(
    () => sano.calcularCompra([{ nombre: "Libro", precio: -1, cantidad: 1 }], "regular"),
    /precio.*número no negativo/
  );
  assert.throws(
    () => sano.calcularCompra([{ nombre: "Libro", precio: 10, cantidad: "2" }], "regular"),
    /cantidad.*entero positivo/
  );
});

test("la versión enferma falla el caso de referencia", () => {
  const resultado = enfermo.calcularCompra(compraPremium, "premium");
  assert.notDeepEqual(resultado, sano.calcularCompra(compraPremium, "premium"));
});
