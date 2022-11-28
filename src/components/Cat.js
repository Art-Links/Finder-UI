import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"


const Cat = ({ category }) => {
    const { id } = useParams()
    const [categories, setCategories] = useState()
    const getCategories = async () => {
        const Items = await fetch(`http://localhost:3000/category/items/${id}`, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await Items.json()
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
            <div className="cat">
                <Link className="at" to={`/singel/${category?.id}`}>
                    <img src={category?.icon} id="img" />
                    <h5 id="names">{category?.name}</h5>
                </Link>
            </div>

        </>
    )
}

export default Cat