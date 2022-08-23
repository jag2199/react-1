import carritoImg from "./carrito.png"
import { useCart } from "../CartContext"
import { Link } from "react-router-dom"

export default function CartWidget() {
    const { cantInCart } = useCart()
    console.log("Articulos:", cantInCart())
    return (
        cantInCart()
            ?
            <>
                <Link to="/cart"><img src={carritoImg} alt="carrito" /></Link>
                {cantInCart()}
            </>
            :
            <></>
    )
}