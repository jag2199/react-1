import carritoImg from "./carrito.png"
import { useCart } from "../CartContext"

export default function CartWidget() {
    const { cantInCart } = useCart()
    console.log("Articulos:", cantInCart())
    return (
        cantInCart()
            ?
            <>
                <img src={carritoImg} alt="carrito" />
                {cantInCart()}
            </>
            :
            <></>
    )
}