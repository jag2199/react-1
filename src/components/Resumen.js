export default function Resumen({ cart, total }) {
    return (
        <p className="bg-light">
            {cart.map((item) => {
                return (
                    <div>
                        {item.title} x {item.quantity} --------- ${item.price * item.quantity}
                        <br></br>
                    </div>
                )
            })}
            Total: ${total}
        </p>
    )
}