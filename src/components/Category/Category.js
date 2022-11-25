import { Link, useParams } from "react-router-dom"
import './Category.css'
import { useState, useEffect } from "react"



const Category = ({ data }) => {
const {id} = useParams()
    const [categories, setCategories] = useState()
        const getCategories = async () => {
            const Category = await fetch(`http://localhost:3000/category/items/${id}`, {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await Category.json()
            console.log(json)
            // window.alert(json.messages)
            if (json?.success) {
                setCategories(json?.data)
            }
        }
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <>
        {categories?.map((category,i) =>(
            <div className="cat">
                <Link  key={i} className="at" to={`/items/${category?.id}`}>
                    <img src={data?.icon} id="img" />
                    <h5 id="names">{data?.name}</h5>
                </Link>
            </div>
            ))}
        </>
    )
}

export default Category