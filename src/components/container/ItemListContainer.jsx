import './container.css'
import { IoIosCard } from "react-icons/io";

export const ItemListContainer = ( {cuotas = " 3 y 6 cuotas sin interes"} ) => {
    return(
        <div className='container'>
            <IoIosCard className='icon-card'/>
            <h2> {cuotas} </h2>
        </div>
    )
}