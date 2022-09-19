import './cartEmpty.css'
import React from 'react'
import { Link } from 'react-router-dom'


const CartEmpty = () => {
    return (
        <div>
            <div className='cart-vacio'>
                <h2>TU CARRITO DE COMPRAS ESTA VACIO</h2>
            </div>
            <div className='cartEmpty-volver'>
                <Link to='/'><button className='cart-volver'>VOLVER A LA TIENDA</button></Link>
            </div>
        </div>
    )
}
export default CartEmpty