import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../AuthContext/authContext'
import '../styles/MyItem.css'

const MyItem = () => {
    const [myitems, setMyitems] = useState()
    const { token } = useContext(AuthContext)
    useEffect(() => {
        const getMyItems = async () => {
            const MyItem = await fetch('http://localhost:3000/items/myItems', {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            const json = await MyItem.json()
            // console.log(json)
            // window.alert(json.messages)
            if (json?.success) {
                setMyitems(json?.data)
            }
        }
        getMyItems()
    }, [])
    console.log(myitems)
    return (
        <>
            <div>
                {myitems?.length > 0 && (
                    <li>
                        {myitems?.map((item, i) => (
                            <div key={i} className='container'>
                                <div className='cardee'>
                                    <img className='catimg' src={item?.img} />
                                    <div>{item?.name}</div>
                                    {item?.questions?.map(question => (
                                        <div key={question?.id}>
                                            <p>{question?.question}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </li>
                )}
            </div>
        </>
    )
}

export default MyItem;