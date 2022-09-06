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
        <div className="w-75 justify-content-center align-items-center">
            <table class="table table-dark table-striped">
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
            </table>
        </div>
    )
}