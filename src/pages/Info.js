import React from 'react'
import '../styles/Info.css'
import Photo from '../myimages/breacelet.jpg'
import { Link } from 'react-router-dom'
import RequstedAnswers from '../components/RequstedAnswers/RequstedAnswers'

const Info = () => {
    return (
        <>
            <div className='container emad'>
                <h2 className='h2'>User Profile Card</h2>
                <div classname="cardss">
                    <div className='personal'>
                        <img id='bg' src={Photo} />
                        <div>
                            <img id="avatar" src={Photo} />
                            <Link to={'/profile'}><span id="edit-avatar" className="material-symbols-outlined">edit</span></Link>
                        </div>
                    </div>
                    <div id="information">
                        <h1>Emad & Abdulmalek</h1>
                        <p classname="title">CEO & Founder, Example</p>
                        <p>Harvard University</p>
                    </div>
                    <div classnameName='por'>
                        <h5 className='a' href="#">Hello We Are The Finder<i classname="fa fa-dribbble"></i></h5 >
                        <h5 className='a' href="#">We<i classname="fa fa-twitter"></i></h5 >
                        <h5 className='a' href="#">Are<i classname="fa fa-linkedin"></i></h5 >
                        <h5 className='a' href="#">The Finder<i classname="fa fa-facebook"></i></h5 >
                    </div>
                    <div>
                        <RequstedAnswers />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info