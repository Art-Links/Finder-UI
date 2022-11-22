import { useContext, useState } from "react"
import { AuthContext } from '../../AuthContext/authContext'
import { useEffect } from "react"
import Category from "./Category"


const Categories = () => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        const getCategories = async () => {
            const Category = await fetch('http://localhost:3000/category', {
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
        getCategories()
    }, [])
    return (
        <>
            <div id="all-posts">
                {categories?.length > 0 && (
                    <ul>
                        {categories?.map((category, i) => (
                            <Category key={i} data={category} />
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default Categories