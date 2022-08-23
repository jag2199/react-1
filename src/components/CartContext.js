import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addItem = (product, quantity) => {
        // if (!isInCart(item.id)) {
        //     const newCart = cart.push({ ...item, quantity })
        //     setCart(newCart)
        //     console.log(quantity, item.title, "agregado/s correctamente")
        //     console.log(cart)
        // } else {
        //     console.log("Este producto ya se encuentra en el carrito")
        // }
        if (isInCart(product.id)) {
            const index = cart.findIndex((element) => element.id === product.id)
            cart[index].quantity = cart[index].quantity + quantity
            setCart([...cart])
        } else {
            setCart([...cart, { ...product, quantity }])
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId))
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.length ? cart.some((item) => item.id === id) : false
    }

    function cantInCart() { return cart.length ? cart.reduce((total, item) => total += item.quantity, 0) : 0 }

    function totalCart() { return cart.length ? cart.reduce((total, item) => total += (item.quantity * item.price), 0) : 0 }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, cantInCart, totalCart }}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext)