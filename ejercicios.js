const productos = [
  { nombre: "Laptop", precio: 1200, enStock: true },
  { nombre: "Mouse", precio: 25, enStock: false },
  { nombre: "Teclado", precio: 80, enStock: true }
];

const saberPrecio = productos.find (item => item.nombre == "Laptop")
console.log(saberPrecio.precio)