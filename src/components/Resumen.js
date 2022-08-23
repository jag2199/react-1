export default function Resumen({ cart, total }) {
    return (
        <p>
            {cart.map((item) => {
                return (
                    <>
                        {item.title} x {item.quantity} --------- ${item.price * item.quantity}
                        <br></br>
                    </>
                )
            })}
            Total: {total}
        </p>
    )
}