import './footer.css'
import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";


const Footer = () => {

    return (
            <div className="footer">
                <div className='icons-footer'>
                <AiFillInstagram className=''/>
                <AiFillFacebook className=''/>
                <AiFillTwitterSquare className=''/>
                </div>

                <h2 className='h2-footer'>Kvothe Guitars</h2>
            </div>
    )
}


export default Footer