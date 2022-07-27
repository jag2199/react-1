import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const products = [{ id: 1, title: "Remera ERREA 2022 Titular", description: "Belgrano", price: 2000, pictureURL: "sdoaihdoias" }]

function ItemListContainer(props) {
    const [items, setItems] = useState([])

    const mock = () => {
        const algo = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })
        return algo
    }

    useEffect(() => {
        setTimeout(() => {
            // fetch("https:/jsonplaceholder.typicode.com/users")
            mock()
                .then(items => setItems(items))
        }, 2000)

    })

    return (<div>
        {props.greeting}
        {/* <ItemCount stock={10} initial={1} /> */}
        <ItemList items={items} />
    </div >)
}


export default ItemListContainer