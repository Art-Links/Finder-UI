import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import dayjs from 'dayjs'
import relativTime from 'dayjs/plugin/relativeTime'
import './SingelCategory.css'



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
    const Time = (date) => {
        dayjs.extend(relativTime)
        return dayjs(date).fromNow()
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
                                <div className="cards">
                                    <div className="container">
                                        <div className="card">
                                            <img src={item?.img} className='card' />
                                            <div key={i}>
                                                <div className="itemName mt-2">
                                                    <h5 >{item?.name}</h5>
                                                </div>
                                                <div className="time">
                                                    <p>{Time(item?.createdAt)}</p>
                                                </div>
                                                <p className="card-text">{item?.des}</p>
                                                <div id="button">
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div >

        </>
    )
}

export default SingelCategory