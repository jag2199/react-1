import { useContext, useState } from "react"
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
            ? <>
                <Item item={item} />
                <Link to="/cart"><button>Finalizar compra</button></Link>
            </>
            : (<>
                <Item item={item} />
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </>)

    )
}