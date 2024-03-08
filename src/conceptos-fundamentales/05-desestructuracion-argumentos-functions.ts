interface Product {
  description: string;
  price: number
}

const shirt: Product = {
  description: "lorem20",
  price: 50,
}

const jeans: Product = {
  description: "lorem10",
  price: 20
}

const shoppingCart: Product[] = [shirt, jeans]

interface DiscountProducts {
  discount: number;
  products: Product[]
}

function discountCalculator(options: DiscountProducts): [number, number] {

  const { discount, products } = options

  let total: number = 0

  products.forEach((product) => {
    const { price } = product
    if (price) {
      total += price
    }
  })


  return [total, (total - total * discount)]
}

const cart: DiscountProducts = {
  discount: 0.10,
  products: shoppingCart
}

const total = discountCalculator(cart)
console.log(total);

export { }