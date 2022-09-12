import './itemDetail.css'
import { ImBubble, ImTruck } from "react-icons/im";
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import React, { useState } from 'react'
import { useCartContext } from "../../Context/CartContext"



const ItemDetail = ({item}) => {


    const { cart, addToCart, isInCart } = useCartContext()
    console.log(cart)


    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad
        }
        
        addToCart(itemToCart)
    }

    return (
        <>
            <div className='item-detail'>
                <img className='item-img' src={item.img}/>
                <div className='item-detail-info'>
                    <h3>{item.nombre}</h3>
                    <h5>{item.category}</h5>
                    <h4>${item.precio}</h4>

                    {
                isInCart(item.id)
                ?   <Link to="/cart" className='item-detail-comprar'>COMPRAR</Link> 
                : 
                    <ItemCount className='item-Count' 
                    stock={item.stock} 
                    counter={cantidad}
                    setCounter={setCantidad}
                    handleAgregar={handleAgregar}
                    />
                }

                    <div className='item-detail-ayuda'> 
                        <p><ImTruck className='item-icon'/>Hacemos envíos a todo el país.</p>
                        <p><ImBubble className='item-icon'/>¿Alguna pregunta? Estamos para ayudarte!</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ItemDetail