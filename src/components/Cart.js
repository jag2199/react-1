import { Link } from 'react-router-dom'
import { useCart } from "./CartContext"
import CartItemList from './CartItemList'

export default function Cart() {
    const { cart, cantInCart, totalCart, clear } = useCart()
    console.log("Articulos:", cantInCart, "Cart Length:", cart.length)
    return (
        cart.length
            ?
            <>
                <h1>Carrito</h1>
                <CartItemList cart={cart} clear={clear} />
                <h2>Total: {totalCart}</h2>
                <div>
                    <button>Comprar</button>
                    <button onClick={() => clear}>Vaciar carrito</button>
                </div>
            </>
            :
            <>
                <h1>Carrito</h1>
                <h2>No hay nada que ver... por ahora</h2>
                <Link to="/"><button>Ir a comprar</button></Link>
            </>

    )
}

