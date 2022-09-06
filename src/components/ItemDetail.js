import { useState } from "react"
import Item from "./Item"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"

export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)
    const { addItem } = useCart()
    const onAdd = (cant) => {
        console.log(`${cant} producto/s agregado/s al carrito`)
        addItem(item, cant)
        setCount(cant)
    }

    return (
        count
            ? <div className="row justify-content-center align-items-center flex-row">
                <div className="col-6">
                    <Item item={item} />
                </div>
                <div className="col-6">
                    <Link to="/cart"><button>Finalizar compra</button></Link>
                </div>
            </div>
            : (
                <div className="row justify-content-center align-items-center flex-row">
                    <div className="col-6">
                        <Item item={item} />
                    </div>
                    <div className="col-6">
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            )
    )
}