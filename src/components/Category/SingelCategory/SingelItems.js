import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"


const SingelItems = () => {
    const { id } = useParams()
    const [items, setItems] = useState()
    const getItems = async () => {
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
            setItems(json?.data)
        }
    }
    useEffect(() => {
        getItems()
    }, [])
    console.log("nnnnnnnn",items)
    return (
        <>
            <div className="">

                <div id="all-posts">
                    
                    
                            {items?.map((item, i) => (
                                item?.name
                            ))}
                        
                
                </div>
            </div>

        </>
    )
}

export default SingelItems