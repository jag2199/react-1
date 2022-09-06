import { Link } from "react-router-dom"
import Item from "./Item"
export default function ItemList({ items }) {
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
                {items.map((item) => {
                    return (
                        <Link className="col-4 text-decoration-none" to={`/item/${item.id}`} style={{ display: 'inline-block' }} key={item.id}>
                            <Item key={item.id} item={item} />
                        </Link>
                    )
                })}
            </div>
        </div >
    )
}