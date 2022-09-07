import carritoImg from "./carrito.png"
import { useCart } from "../CartContext"
import { Link } from "react-router-dom"

export default function CartWidget() {
    const { cantInCart } = useCart()
    console.log("Articulos:", cantInCart())
    return (
        cantInCart()
            ?
            <div className="d-flex flex-row text-white text-center me-3 mt-3 justify-content-center align-items-center">
                <Link to="/cart"><img className="carritoEdit" src={carritoImg} alt="carrito" /></Link>
                <p>{cantInCart()}</p>
            </div>
            :
            <></>
    )
}