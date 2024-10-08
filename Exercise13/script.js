// Object carrito
const carrito = [
    {name: "raton", price: 30},
    {name: "tele", price: 55},
    {name: "pc", price: 40},
    {name: "mesa", price: 50},
    {name: "raton", price: 40},
]

const calculateAdditionPrice = (carrito) => {
    return carrito.reduce((accum, add) => accum + add.price, 0)
}

console.log(calculateAdditionPrice(carrito))
