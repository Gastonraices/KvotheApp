import { useCartContext } from "../../Context/CartContext"


const Card = ({ id, nombre, precio, cantidad, img }) => {

    const { removeItem } = useCartContext()

    return(
        <div className='cart-item'>
                    <img src={img} className="cart-img"></img>
                        <div>
                            <h3 className='cart-nombre'>{nombre}</h3>
                            <h4 className='cart-precio'>Precio: ${precio}</h4>
                            <h4 className='cart-cantidad'>cantidad: {cantidad}</h4>
                            <h4 className='cart-subtotal'>Subtotal: ${precio*cantidad}</h4>
                            <button onClick={() => removeItem(id)} className='cart-eliminar'>Eliminar</button>
                        </div>
        </div>
    )}


    export default Card