import './section.css'
import { IoIosCard } from "react-icons/io";


export const Section = ({ cuotas = " 3 y 6 cuotas sin interes" }) => {

    return (
            <div className="section">
            <IoIosCard className='icon-card' />
            <h2> {cuotas} </h2>
            </div>
    )
}