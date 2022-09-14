import './cartWidget.css'
import { IoCart } from "react-icons/io5";
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'



const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <Link to="/cart" className='icon-carts'>
            <IoCart className='icon-cart'/>
            <span>{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget