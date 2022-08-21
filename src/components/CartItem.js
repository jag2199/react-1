import Card from 'react-bootstrap/Card'
import { useCart } from "./CartContext"

const categorias = ["Remera", "Short", "Otros"]

export default function Item({ item }) {
    const { removeItem } = useCart()
    return (
        <>
            <tr>
                <td>1</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.quantity * item.price}</td>
                <td><button onClick={() => removeItem(item.id)}>X</button></td>
            </tr>
        </>
        // <Card style={{ width: '18rem' }}>
        //     <Card.Img variant="top" src={item.url} />
        //     <Card.Body>
        //         <Card.Title>{item.title}</Card.Title>
        //         <Card.Text>
        //             {item.description}

        //             Categoría: {categorias[item.category - 1]}
        //         </Card.Text>
        //         <Card.Footer>
        //             {item.quantity}x{item.price}={item.price * item.quantity}
        //         </Card.Footer>
        //         <button onClick={() => removeItem(item.id)}>Eliminar</button>
        //     </Card.Body>
        // </Card>
    )
}