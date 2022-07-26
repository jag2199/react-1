import { useState } from "react"

function ItemCount({ stock, initial }) {
    const [cantidad, setCantidad] = useState(initial)

    const onAdd = () => {
        setCantidad(cantidad + 1)
    }

    return (
        <div>
            {cantidad < stock
                ? (<div>
                    <p>{cantidad}</p>
                    <button onClick={onAdd()} >+</button></div>)
                :
                (<div>
                    <p>{cantidad}</p>
                    <button onClick={alert("No hay stock!")} >+</button>
                </div>)}
        </div>)
}
export default ItemCount