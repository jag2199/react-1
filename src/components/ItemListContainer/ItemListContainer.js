import { useEffect, useState } from "react"
import ItemCount from "../ItemCount"
import ItemList from "../ItemList"
import mock from "./mockILC"

const products = [{ id: 1, title: "Remera ERREA 2022 Titular", description: "Belgrano", price: 2000, pictureURL: "sdoaihdoias" }]

function ItemListContainer(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setTimeout(() => {
            // fetch("https:/jsonplaceholder.typicode.com/users")
            mock()
                .then(items => setItems(items))
        }, 2000)

    })

    const onAdd = (cant) => {
        console.log(`${cant} producto/s agregado/s al carrito`)
    }

    return (<div>
        {props.greeting}
        {<ItemCount stock={10} initial={1} onAdd={onAdd} />}
        <ItemList items={items} />
    </div >)
}


export default ItemListContainer