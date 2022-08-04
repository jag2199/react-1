import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail"
import getItem from "./mockIDC"
import ItemCount from "../ItemCount"
import { useParams } from "react-router-dom"

export default function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const { idProd } = useParams()

    useEffect(() => {
        setTimeout(() => {
            getItem(idProd)
                .then(product => setItem(product))
        }, 2000)

    }, [idProd])

    const onAdd = (cant) => {
        console.log(`${cant} producto/s agregado/s al carrito`)
    }

    return (
        <div>
            <ItemDetail item={item} />
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        </div >
    )
}
