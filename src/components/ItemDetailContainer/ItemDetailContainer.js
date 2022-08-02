import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail"
import getItem from "./mockIDC"

function ItemDetailContainer() {
    const [items, setItems] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getItem()
                .then(item => setItems(item))
        }, 2000)

    })

    return (
        <div>
            {
                items.map((item) => (<ItemDetail key={item.id} item={item} />))
            }
        </div >
    )
}


export default ItemDetailContainer