import './itemCount.css'


const ItemCount = ({ stock, counter, setCounter, handleAgregar }) => {




const counterHandler = (incrementar) => {

    (incrementar) ? setCounter(counter + 1 ) : setCounter(counter - 1)

}


return (
    <div className='item-Count'>
        <div className='item-Counter'>
            <button className='item-Count-button' disabled={ counter <= 1 } onClick={() => counterHandler(false) }>-</button>
            <p className='item-Count-num'> { counter } </p>
            <button className='item-Count-button' disabled={ counter >= stock } onClick={() => counterHandler(true) }>+</button>
        </div>
            <button onClick={handleAgregar} className='item-count-button'>AGREGAR AL CARRITO</button>
    </div>
)
}

export default ItemCount