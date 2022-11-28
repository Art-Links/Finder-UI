import { Link, useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import dayjs from 'dayjs'
import relativTime from 'dayjs/plugin/relativeTime'
import '../Category/SingelCategory/SingelCategory.css'
import { useContext } from 'react';
import { AuthContext } from "../../AuthContext/authContext"
import { useNavigate } from "react-router-dom"


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



    const [answers, setAnswers] = useState([{id: 0, answer:''},{id: 0, answers:''}])
    const { token } = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(answers)
    const Answer = async () => {
        
        const answer = await fetch(`http://localhost:3000/forms`, {
            method: 'post',
            body: JSON.stringify({
                answers,
            }),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        const json = await answer.json()
        window.alert(json.messages.join(', '))
        if (json.success) {
            navigate('/')
        }
    }

    return (
        <>
            <div className="">
                <div id="all-posts">
                    <div className="cards mb-5">
                        <div className="container">
                            <div className="card">
                                <img src={item?.img} className='carde' />
                                <div key={item?.id}>
                                    <div className="itemName mt-3">
                                        <h3 >{item?.name}</h3>
                                    </div>
                                    <div className="time">
                                        <p>{Time(item?.createdAt)}</p>
                                    </div>
                                    <p className="card-text">{item?.des}</p>
                                    {item?.questions?.map((question, index) => (
                                        <div key={question?.id}>
                                            <h4 className="question mt-5">{question?.question}</h4>
                                            <input placeholder='Type Your Answer' type='text' id="answer" className='form-control'
                                                onChange={(e) => {
                                                    const newAnswers = [...answers]
                                                    newAnswers[index] = {
                                                        id: question?.id,
                                                        answers: e.target.value
                                                    }
                                                    setAnswers([...newAnswers])
                                                }} />
                                        </div>
                                    ))}
                                    <div id="button">
                                        <a href="#" onClick={Answer} className="btn btn-primary mt-4 mb-3 Submit">Submit</a>
                                    </div>
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