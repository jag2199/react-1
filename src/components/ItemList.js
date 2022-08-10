import { Link } from "react-router-dom"
import Item from "./Item"
export default function ItemList({ items }) {
    return (
        <div>
            {items.map((item) => {
                return (<Link to={`/item/${item.id}`} key={item.id}>
                    <Item key={item.id} item={item} />
                </Link>)
            })}
        </div>
    )
}