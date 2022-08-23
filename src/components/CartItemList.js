import Table from 'react-bootstrap/Table'
import CartItem from "./CartItem"
export default function CartItemList({ cart, clear }) {
    console.log(cart)
    return (
        // <div>
        //     {cart.map((item) => {
        //         return (
        //             <CartItem key={item.id} item={item} />
        //         )
        //     })}
        // </div>

        <Table striped bordered hover align='center'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item) => {
                    return (
                        <CartItem key={item.id} item={item} />
                    )
                })}
            </tbody>
        </Table>
    )
}