import './item.css'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {

    return (
        <div className='item'>
            <img src={producto.img}/>
            <h3>{producto.nombre}</h3>
            <h3>Precio: ${producto.precio}</h3>
            <h3>Stock disponible: {producto.stock}</h3>
            <Link to={`/item/${producto.id}`}>Ver más</Link>
            
        </div>
    )
}

export default Item