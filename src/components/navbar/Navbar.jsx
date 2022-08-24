import './navbar.css'
import { IoCart, IoPersonSharp } from "react-icons/io5";


export const Navbar = () => {

    return (
        <header className="header">
            <div className="header-container">

                <h1 className="header-title">KVOTHE</h1>

                <nav className="header-navbar">
                    <a href='' className="header-navlink">SHOP</a>
                    <a href='' className="header-navlink">OUTLET</a>
                    <a href='' className="header-navlink">CONTACTO</a>
                </nav>
                <IoPersonSharp className='person-cart'/>
                <IoCart className='icon-cart'/>
            </div>
        </header>
    )
}