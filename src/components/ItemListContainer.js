import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import getItems from "../mocks/mockProducts"

// const products = [{ id: 1, title: "Remera ERREA 2022 Titular", description: "Belgrano", price: 2000, pictureURL: "sdoaihdoias" }]
// fetch("https:/jsonplaceholder.typicode.com/users")

function ItemListContainer(props) {
    const [items, setItems] = useState([])
    const { idCat } = useParams()

    useEffect(() => {
        getItems()
            .then((products) => {
                console.log(products)
                if (idCat) {
                    setItems(products.filter(item => item.category === parseInt(idCat)))
                } else {
                    setItems(products)
                }
            })
    }, [idCat])

    return (
        items.length !== 0
            ? (
                <div>
                    {props.greeting}
                    <ItemList items={items} />
                </div >
            )
            :
            (
                <h2>Cargando productos...</h2>
            )
    )
}


export default ItemListContainer