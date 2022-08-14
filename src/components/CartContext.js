import { createContext, useContext, useState } from "react";

export const CartContext = createContext({})

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(cart.push({ ...item, quantity }))
            console.log(quantity, item.title, "agregado/s correctamente")
            console.log(cart)
        } else {
            console.log("Este producto ya se encuentra en el carrito")
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId))
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        const itemInCart = cart.find(item => item.id === id)
        return itemInCart ? true : false
    }

    return (<CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
        {children}
    </CartContext.Provider>)

}

export const useCart = () => useContext(CartContext)