import { useContext, useState } from "react"
import { AuthContext } from '../../AuthContext/authContext'
import { useEffect } from "react"
import Item from "./Item"
import Footer from '../Footer'
import './Item.css'


const Items = () => {
    const [Items, setItems] = useState()
    useEffect(() => {
        const getItems = async () => {
            const Item = await fetch('http://localhost:3000/items', {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await Item.json()
            console.log(json)
            if (json?.success) {
                setItems(json?.data)
            }
        }
        getItems()
    }, [])
    return (
        <>
            <div id="all-posts">
                {Items?.length > 0 && (
                    <li>
                        {Items?.map((item, i) => (
                            <Item key={i} data={item} />
                        ))}
                    </li>
                )}
            </div>
        </>
    )
}

export default Items