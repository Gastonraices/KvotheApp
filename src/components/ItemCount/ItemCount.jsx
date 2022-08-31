import React, { useState } from 'react'


const ItemCount = ({ stock }) => {

const [counter, setCounter] = useState(1)


const counterHandler = (incrementar) => {

    (incrementar) ? setCounter(counter + 1 ) : setCounter(counter - 1)

}


return (
    <>
    <button disabled={ counter >= stock } onClick={() => counterHandler(true) }>+1</button>
    <p> { counter } </p>
    <button disabled={ counter <= 1 } onClick={() => counterHandler(false) }>-1</button>
    </>
)
}

export default ItemCount