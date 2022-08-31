import './item.css'

const Item = ( {producto} ) => {

    return (
        <div className='item'>
            <img src={producto.img}/>
            <h4>{producto.nombre}</h4>
            <h3>Precio: {producto.precio}</h3>
            <h3>Stock disponible: {producto.stock}</h3>
            <a href=''>Ver más</a>
            
        </div>
    )
}

export default Item