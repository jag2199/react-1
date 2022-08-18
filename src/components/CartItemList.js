import CartItem from "./CartItem"
export default function CartItemList({ cart, clear }) {
    console.log(cart)
    return (
        <>
            <div>
                {cart.map((item) => {
                    return (
                        <CartItem key={item.id} item={item} />
                    )
                })}
            </div>
        </>
    )
}