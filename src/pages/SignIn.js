import React from 'react'
import '../styles/Signin.css'
import logo2 from '../myimages/logo2.png'
import photo1 from '../myimages/photo1.svg'


import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { Link } from 'react-router-dom'


const SignIn = () => {

    const [isDisabled, setIsDisabled] = useState(false)

    const navigate = useNavigate()
    const passwordRef = useRef()
    const accountRef = useRef()
    const signIn = async () => {
        setIsDisabled(true)
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'post',
            body: JSON.stringify({
                account: accountRef.current.value,
                password: passwordRef.current.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        setIsDisabled(false)

        window.alert(json.messages)
        if (json.success) {
            // go to sign in
            navigate('/')
        }
    }
    


    return (
        <div class='wrapper'>
            
            <div class='bg-image'>
                <img id='personal' src={photo1} alt='' />
            </div>
            <div class='registration-form'>
                <div id='form-div' className='w-100'>
                    <div className=' mb-4'>
                        <img id='logo2' src={logo2} alt='' />
                    </div>
                    <h1 className='mb-2'>Create Account</h1>
                    <div className='form-field mb-3 d-flex flex-column align-items-start'>
                        <label htmlFor='name' className='mb-2'>Name Or Email</label>
                        <input placeholder='Type UserName Or Email' type='text' id="name" ref={accountRef} className='form-control' />
                    </div>
                    
                    <div className='form-field mb-3  d-flex flex-column align-items-start'>
                        <label htmlFor='Password' className='mb-2'>Password</label>
                        <input placeholder='Yor Password' type='password' ref={passwordRef} id="password" className='form-control' />
                    </div>

                   
                    <div className='row'>
                        <div className='col-6'>
                            <Link className='btn btn-primary w-100' onClick={signIn} to='/'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn