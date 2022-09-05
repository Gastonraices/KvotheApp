import './itemDetailContainer.css'
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const {itemId} = useParams()

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)))
            })
            .catch( (error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer