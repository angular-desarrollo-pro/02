const listaSupermercado: string[] = ['Leche', 'pan', 'huevo', 'arroz']

const [producto1, producto2, , producto4] = listaSupermercado

console.log(producto1);
console.log(producto2);
console.log(producto4 || 'not found');

const [, , producto3, newProducto4, producto5 = 'Not found'] = listaSupermercado
console.log(producto3);
console.log(producto4);
console.log(producto5);

//rest operator
const [, , ...resto] = listaSupermercado
console.log(resto);

export { }