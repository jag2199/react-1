import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList"
import mock from "./mockILC"

// const products = [{ id: 1, title: "Remera ERREA 2022 Titular", description: "Belgrano", price: 2000, pictureURL: "sdoaihdoias" }]
// fetch("https:/jsonplaceholder.typicode.com/users")

function ItemListContainer(props) {
    const [items, setItems] = useState([])
    const { idCat } = useParams()
    useEffect(() => {
        setTimeout(() => {
            mock(idCat)
                .then(items => setItems(items))
        }, 2000)

    }, [idCat])

    return (<div>
        {props.greeting}
        <ItemList items={items} />
    </div >)
}


export default ItemListContainer