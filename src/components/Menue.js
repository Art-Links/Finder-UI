import React from 'react'
import '../styles/Menue.css'
import { useEffect, useState } from 'react'
import Cat from './Cat'

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

                <div className="dropdown-menu">
                    <div id="all-posts">
                        {categories?.length > 0 && (
                            <ul>
                                {categories?.map((category, i) => (
                                    <Cat key={i} category={category} />
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}


export default Menue;