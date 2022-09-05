import './itemDetail.css'
const ItemDetail = ({item}) => {

    return (
        <>
            <div className='item-detail'>
                <img className='item-img' src={item.img}/>
                <div className='item-detail-info'>
                    <h3>{item.nombre}</h3>
                    <p>{item.category}</p>
                    <h4>{item.precio}</h4>
                </div>
            </div>
        </>
    )
}

export default ItemDetail