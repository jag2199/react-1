import { Link } from 'react-router-dom'
import { useCart } from "./CartContext"
import CartItemList from './CartItemList'

export default function Cart() {
    const { cart, cantInCart, totalCart, clear } = useCart()

    console.log("Articulos:", cantInCart(), "Cart Length:", cart.length)

    return (
        cart.length
            ?
            <>
                <div className='container-fluid'>
                    <h1>Carrito</h1>
                    <div className='row justify-content-center align-items-center m-5'>
                        <CartItemList cart={cart} clear={clear} />
                        <h2>Total: ${totalCart()}</h2>
                    </div>
                    <div className='row justify-content-center align-items-center flex-row m-5'>
                        <div className='col-6'>
                            <Link to="/buy"><button>Comprar</button></Link>
                        </div>
                        <div className='col-6'>
                            <button onClick={() => clear()}>Vaciar carrito</button>
                        </div>
                    </div>
                </div>
            </>
            :
            <div className='container-fluid'>
                <h1>Carrito vacío</h1>
                <img className="carritoVacio" src={"https://firebasestorage.googleapis.com/v0/b/react-1-a3a46.appspot.com/o/carritoVacio.png?alt=media&token=92d9670a-b5af-4b8c-bdb2-b26b36900a10"} alt="carrito vacio" />
                <div className='m-2'>
                    <Link to="/"><button>Ir a comprar</button></Link>
                </div>
            </div>

    )
}

