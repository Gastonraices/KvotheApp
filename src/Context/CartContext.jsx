import { createContext, useContext, useState, useEffect } from "react";
import Swal from 'sweetalert2'



export const CartContext = createContext()
const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {


    const [cart, setCart] = useState(init)

    const addToCart = (item) => {
    setCart([...cart, item])
    }


    const isInCart = (id) => {
    return cart.some((item) => item.id === id)
}

const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
}

const removeItem = (id) => {
    setCart( cart.filter((item) => item.id !== id) )
}

const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0 )
}

const clearCart = () => {
    Swal.fire({
        title: 'estas seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Vaciar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            setCart([])
        }
    })
}

const comprar = (id) => {
    Swal.fire({
        title: 'Compra exitosa!',
        text: `Tu número de orden es: ${id}`,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Genial!'
    })
    setCart([])
}

useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart))
}, [cart])



return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        isInCart,
        cartQuantity,
        cartTotal,
        clearCart,
        removeItem,
        comprar,
    }}>
        {children}
    </CartContext.Provider>
)
}

export const useCartContext = () => {
return useContext(CartContext)
}



