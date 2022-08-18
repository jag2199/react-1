import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import getItems from "../mocks/mockProducts"

function ItemListContainer(props) {
    const [items, setItems] = useState([])
    const { idCat } = useParams()

    useEffect(() => {
        getItems()
            .then((products) => {
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