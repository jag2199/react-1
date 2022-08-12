import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import getItems from "../mocks/mockProducts"
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom"

export default function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const { idProd } = useParams()

    useEffect(() => {
        getItems()
            .then((items) => setItem(items.find((item) => item.id === parseInt(idProd))))
    }, [idProd])

    return (
        item ?
            <div>
                <ItemDetail item={item} />
            </div >
            :
            <h2>Cargando producto...</h2>
    )
}
