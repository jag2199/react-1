import { useState } from "react"
import Item from "./Item"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)

    const onAdd = (cant) => {
        console.log(`${cant} producto/s agregado/s al carrito`)
        setCount(1)
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