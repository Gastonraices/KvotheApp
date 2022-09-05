import './itemDetail.css'
import { ImBubble, ImTruck } from "react-icons/im";
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({item}) => {

    return (
        <>
            <div className='item-detail'>
                <img className='item-img' src={item.img}/>
                <div className='item-detail-info'>
                    <h3>{item.nombre}</h3>
                    <h5>{item.category}</h5>
                    <h4>${item.precio}</h4>
                    <ItemCount className='item-Count' stock={item.stock} />
                    <button className='item-detail-button'>AGREGAR AL CARRITO</button>
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