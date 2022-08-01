import { useState } from "react"

export default function ItemCount({ stock, initial, onAdd }) {
    const [cantidad, setCantidad] = useState(initial)
    // const [stockActual, setStock] = useState(stock)

    const add = () => {
        cantidad < stock
            ? setCantidad(cantidad + 1)
            : console.log("No hay stock!")
    }

    const substract = () => {
        cantidad > initial
            ? setCantidad(cantidad - 1)
            : console.log("El valor mínimo es 1")
    }

    const agregarCarrito = () => {
        if (initial < cantidad < stock) {
            onAdd(cantidad)
            // setStock(stockActual - cantidad)
        } else {
            console.log("No se pudo agregar al carrito")
        }
    }
    return (
        <>
            <div>
                <button onClick={substract} >-</button>
                <p>{cantidad}</p>
                <button onClick={add} >+</button>
            </div>
            <button onClick={agregarCarrito}>Agregar al carrito</button>
        </>
    )
}