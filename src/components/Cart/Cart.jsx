import './cart.css'
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import CartEmpty from '../CartEmpty/CartEmpty'
import Card from './card'


const Cart = () => {

    const { cart, cartTotal, clearCart, } = useCartContext()

    return (
        <div className="cart">
            <div className='cart-h1'>
                <h1>TU CARRITO</h1>
        </div>

            {
            cart[0]
            ? <div>
                {cart.map((item) => (
                    <Card  key={item.id} 
                    id={item.id}
                    nombre={item.nombre} 
                    precio={item.precio} 
                    cantidad={item.cantidad}
                    img={item.img}
                    />
                ))
                
                }

                <div>
                    <h2 className='cart-total'>TOTAL: ${cartTotal()}</h2>
                </div>

                <div className='cart-botones'>
                    <Link to="/" className='cart-seguircomprando'>SEGUIR COMPRANDO</Link> 
                    <button  onClick={clearCart} className='cart-vaciar'>VACIAR CARRITO</button>
                    <Link to="/Checkout" className='cart-pagar'>PAGAR</Link>
                </div>
            </div> 
            :<CartEmpty/>
            }
        </div> 
    )
    
}

export default Cart