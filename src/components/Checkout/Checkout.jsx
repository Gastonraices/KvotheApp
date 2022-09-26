import './checkout.css'
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"


const Checkout = () => {

    const { cart, cartTotal, comprar } = useCartContext()

    const [ values, setValues ] = useState({
        nombre: '',
        tel: '',
        email: '',
        direccion: '',
        provincia: '',
        codigoPostal: '',
    })


    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador : values,
            items: cart,
            total: cartTotal(),
            data : Date()
        }
        

        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) { 
            alert("Email incorrecto")
            return 
        }

        const ordenesRef = collection(db, 'ordenes')

        addDoc(ordenesRef, orden)
            .then((doc) =>{
                console.log(doc.id)
                comprar(doc.id)
            })
    }


    if (cart.length === 0) {
        return <Navigate to="/"/>
    }


    return(
        <div className="Checkout">
            <h2 className='Checkout-titulo'>Checkout</h2>
            <hr />
            <form onSubmit={handleSubmit} className="Checkout-form">
                <h4>Nombre</h4>
                <input 
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    type= {"text"} 
                    className='Checkout-input'
                    required
                    />
                    <h4>Telefono</h4>
                <input 
                    name="tel"
                    onChange={handleInputChange}
                    value={values.tel}
                    type= {"number"} 
                    className='Checkout-input'
                    required
                    />
                    <h4>Correo electronico</h4>
                <input 
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    type= {"email"} 
                    className='Checkout-input'
                    required
                    />
                    <h4>Direccion</h4>
                <input 
                    name="direccion"
                    onChange={handleInputChange}
                    value={values.direccion}
                    type= {"text"} 
                    className='Checkout-input'
                    required
                    />
                    <h4>Provincia</h4>
                    <input 
                    name="provincia"
                    onChange={handleInputChange}
                    value={values.provincia}
                    type= {"text"} 
                    className='Checkout-input'
                    required
                    />
                    <h4>Codigo Postal</h4>
                    <input 
                    name="codigoPostal"
                    onChange={handleInputChange}
                    value={values.codigoPostal}
                    type= {"number"} 
                    className='Checkout-input'
                    required
                    />

                    <div className='Checkout-botones'>
                        <Link to="/cart" className='Checkout-botoncancelar'>Cancelar</Link>
                        <button type="submit"  className='Checkout-botonEnviar'>Enviar</button>
                    </div>
            </form>
        </div>
    )
}


export default Checkout