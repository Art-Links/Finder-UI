import React from 'react'
import '../styles/Menue.css'
import { useEffect, useState } from 'react'
import Category from './Category/Category'

const Menue = () => {
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
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Category
                </button>
                <div className="dropdown-menu" id='show' aria-labelledby="dropdownMenuButton">
                    <div id="all-posts">
                        {categories?.length > 0 && (
                            <ul>
                                {categories?.map((category, i) => (
                                    <Category key={i} data={category} />
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menue;