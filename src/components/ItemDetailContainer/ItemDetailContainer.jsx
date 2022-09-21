import './itemDetailContainer.css'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from "../Spinner/Spinner";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const productoRef = doc(db, "productos", itemId)
        getDoc(productoRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className='itemDetailContainer'>
            {
                loading
                ? <Spinner />
                : <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer