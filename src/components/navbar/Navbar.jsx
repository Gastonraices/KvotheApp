import './navbar.css'
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import  CartWidget  from '../CartWidget/CartWidget';


export const Navbar = () => {

    return (
        <header className="header">
            <div className="header-container">

                
                <Link to='/' className='header-title-link'><h1 className="header-title">KVOTHE</h1></Link>
                <nav className="header-navbar">
                    <Link to='/' className="header-navlink-index">SHOP</Link>
                    <Link to='/productos/Electrica' className="header-navlink">ELECTRICA</Link>
                    <Link to='/productos/Acustica' className="header-navlink">ACUSTICA</Link>
                    <Link to='/productos/Electroacustica' className="header-navlink">ELECTROACUSTICA</Link>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}