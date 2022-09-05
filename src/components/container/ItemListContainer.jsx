import './container.css'
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])



    const { categoryId } = useParams()

    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.category === categoryId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
    }, [categoryId])



    return (
        <div className='container'>
            <ItemList productos={productos}/>
        </div>
    )
}