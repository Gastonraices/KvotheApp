import './cart.css'
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import CartEmpty from '../CartEmpty/CartEmpty'


const Cart = () => {

    const { cart, cartTotal, clearCart, removeItem } = useCartContext()

    return (
        <div className="cart">
            <div className='cart-h1'>
                <h1>TU CARRITO</h1>
            </div>

            {
            cart[0]
            ? <div>
                {cart.map((item) => (
                    <div key={item.id} className='cart-item'>
                        <h3 className='cart-nombre'>{item.nombre}</h3>
                        <h4 className='cart-precio'>Precio: ${item.precio}</h4>
                        <p className='cart-cantidad'>cantidad: {item.cantidad}</p>
                        <button onClick={() => removeItem(item.id)} className='cart-eliminar'>Eliminar</button>
                    </div>
                ))}

                <div>
                    <h2 className='cart-total'>Total: ${cartTotal()}</h2>
                </div>

                <div className='cart-botones'>
                    <Link to="/" className='cart-seguircomprando'>SEGUIR COMPRANDO</Link> 
                    <button  onClick={clearCart} className='cart-vaciar'>Vaciar Carrito</button>
                    <Link to="/Checkout" className='cart-pagar'>Pagar</Link>
                </div>
            </div> 
            :<CartEmpty/>
            }
        </div> 
    )
}

export default Cart