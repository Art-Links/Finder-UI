import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import dayjs from 'dayjs'
import relativTime from 'dayjs/plugin/relativeTime'
import '../Category/SingelCategory/SingelCategory.css'



const SingelItem = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])
    const getItem = async () => {
        const Item = await fetch(`http://localhost:3000/items/singelItem/${id}`, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await Item.json()
        // window.alert(json.messages)
        if (json?.success) {
            setItem(json?.data)
        }
    }
    const Time = (date) => {
        dayjs.extend(relativTime)
        return dayjs(date).fromNow()
    }
    console.log(item)

    useEffect(() => {
        getItem()
    }, [])

console.log(item)
    return (
        <>
            <div className="">
                <div className="cards">
                    <div className="container">
                        <div className="card">
                            <img src={item?.img} className='card' />
                            <div key={item?.id}>
                                <div className="itemName mt-2">
                                    <h5 >{item?.name}</h5>
                                </div>
                                <div className="time">
                                    <p>{Time(item?.createdAt)}</p>
                                </div>
                                <p className="card-text">{item?.des}</p>
                                {item?.questions?.map(question => (
                                    <div key={question?.id}>
                                        <p>{question?.question}</p>
                                    </div>
                                ))}
                                <div id="button">
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default SingelItem