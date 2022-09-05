import './itemCount.css'
import React, { useState } from 'react'




const ItemCount = ({ stock }) => {

const [counter, setCounter] = useState(1)


const counterHandler = (incrementar) => {

    (incrementar) ? setCounter(counter + 1 ) : setCounter(counter - 1)

}


return (
    <div className='item-Count'>
        <button className='item-Count-button' disabled={ counter <= 1 } onClick={() => counterHandler(false) }>-</button>
        <p className='item-Count-num'> { counter } </p>
        <button className='item-Count-button' disabled={ counter >= stock } onClick={() => counterHandler(true) }>+</button>
    </div>
)
}

export default ItemCount