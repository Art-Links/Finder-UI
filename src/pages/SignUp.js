import React from 'react'
import '../styles/Signup.css'
import logo2 from '../myimages/sonlogo.svg'
import photo from '../myimages/photo.svg'


import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { Link } from 'react-router-dom'


const SignUp = () => {

    const [isDisabled, setIsDisabled] = useState(false)

    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const userNameRef = useRef()
    const signUp = async () => {
        setIsDisabled(true)
        const response = await fetch('http://localhost:3000/users', {
            method: 'post',
            body: JSON.stringify({
                userName: userNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                passwordConfirmation: passwordConfirmationRef.current.value,
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
                <img id='personal' src={photo} alt='' />
            </div>
            <div class='registration-form'>
                <div id='form-div' className='w-100'>
                    <div className=' mb-4'>
                        <img id='logo2' src={logo2} alt='' />
                    </div>
                    <h1 className='mb-2'>Create Account</h1>
                    <div className='form-field mb-3 d-flex flex-column align-items-start'>
                        <label htmlFor='name' className='mb-2'>Name</label>
                        <input placeholder='Type Yor Name' type='text' id="name" ref={userNameRef} className='form-control' />
                    </div>
                    <div className='form-field mb-3  d-flex flex-column align-items-start'>
                        <label htmlFor='email' className='mb-2'>Email Address</label>
                        <input placeholder='Email Address' type='email' ref={emailRef} id="email" className='form-control' />
                    </div>
                    <div className='form-field mb-3  d-flex flex-column align-items-start'>
                        <label htmlFor='Password' className='mb-2'>Password</label>
                        <input placeholder='Yor Password' type='password' ref={passwordRef} id="password" className='form-control' />
                    </div>

                    <div className='form-field mb-5  d-flex flex-column align-items-start'>
                        <label htmlFor='password_confirmation' className='mb-2'>Password Confirmation</label>
                        <input placeholder='Password Confirmation' type='password' ref={passwordConfirmationRef} id="password_confirmation" className='form-control' />
                    </div>
                    <div className='row'>
                        <div className='col-5'>
                            <Link className='btn btn-dark w-100' to='/signin'>Go To Login</Link>
                        </div>
                        <div className='col-6'>

                            <div className='col-10'>
                               <Link className='btn btn-primary w-100' to='/signin'  onClick={signUp}>Register</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp