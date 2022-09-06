import carritoImg from "./carrito.png"
import { useCart } from "../CartContext"
import { Link } from "react-router-dom"

export default function CartWidget() {
    const { cantInCart } = useCart()
    console.log("Articulos:", cantInCart())
    return (
        cantInCart()
            ?
            <div className="flex-row text-white">
                <Link to="/cart"><img className="logoEdit" src={carritoImg} alt="carrito" /></Link>
                {cantInCart()}
            </div>
            :
            <></>
    )
}