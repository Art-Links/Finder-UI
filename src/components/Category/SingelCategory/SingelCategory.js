import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"



const SingelCategory = () => {
    const { id } = useParams()
    const [items, setItems] = useState([])
    console.log("inside single category")
    const getItems = async () => {
        const Items = await fetch(`http://localhost:3000/category/items/${id}`, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await Items.json()
        console.log("json items", items)
        // window.alert(json.messages)
        if (json?.success) {
            setItems(json?.data)
        }
    }
    useEffect(() => {
        getItems()
    }, [id])
    console.log(items)
    return (
        <>
            <div className="">

                <div id="all-posts">


                    {/* {items?.map((item, i) => (
                        item?.img
                    ))} */}
                    <ul>
                        {items?.map((item, i) => {
                            return (
                                <div key={i}>
                                    <div>{item?.name}</div>
                                    <img src={item?.img} />
                                </div>
                            )
                        })}
                    </ul>

                </div>
            </div>

        </>
    )
}

export default SingelCategory