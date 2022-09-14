import './cart.css'
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, cartTotal, clearCart, removeItem } = useCartContext()

    return (
        <div className="cart">
            <h2>TU CARRITO</h2>
            { cart.map((item) => (
                <div key={item.id} className='cart-item'>
                    <h3 className='cart-nombre'>{item.nombre}</h3>
                    <h4 className='cart-precio'>Precio: ${item.precio}</h4>
                    <p className='cart-cantidad'>cantidad: {item.cantidad}</p>
                    <button onClick={() => removeItem(item.id)} className='cart-eliminar'>Eliminar</button>
                </div>
            ))}

            <div>
                <h2>Total: ${cartTotal()}</h2>
            </div>

            <div className='cart-botones'>
                <Link to="/" className='cart-seguircomprando'>SEGUIR COMPRANDO</Link> 
                <button onClick={clearCart} className='cart-vaciar'>Vaciar Carrito</button>
                <button className='cart-pagar'>Pagar</button>
            </div>
        </div> 
    )
}

export default Cart