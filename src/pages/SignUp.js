import React from 'react'
import '../styles/Signup.css'
import logo2 from '../myimages/logo2.png'
import photo from '../myimages/photo.svg'


import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const SignUp = () => {
    // const [isDisabled, setIsDisabled] = useState(false)

    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const usernameRef = useRef()
    // const signUp = async () => {
    //     setIsDisabled(true)
    //     const response = await fetch('http://ferasjobeir.com/api/users/register', {
    //         method: 'post',
    //         body: JSON.stringify({
    //             email: emailRef.current.value,
    //             password: passwordRef.current.value,
    //             password_confirmation: passwordConfirmationRef.current.value,
    //             name: usernameRef.current.value,
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const json = await response.json()
    //     setIsDisabled(false)

    //     window.alert(json.messages)
    //     if (json.success) {
    //         // go to sign in
    //         navigate('/login')
    //     }
    // }
    // const login = () => {
    //     navigate('/login')
    // }
    return (
        <div id='boss'>
            <div id='main-div'>
                <img id='personal' src={photo} alt='' />
            </div>
            <div id='main-div1'>
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex">
                        <div id='form-div' className='my p'>
                            <div className=' mb-4'>
                                <img id='logo2' src={logo2} alt='' />
                            </div>
                            <h1 className='mb'>Create Account</h1>
                            <div className='form-field mb-2'>
                                <label htmlFor='name' className='mb-'>Name</label>
                                <input placeholder='Type Yor Name' type='text' id="name" className='form-control' />
                            </div>
                            <div className='form-field mb-3 w-1'>
                                <label htmlFor='email' className='mb-2'>Email Address</label>
                                <input placeholder='Email Address' type='email' ref={emailRef} id="email" className='form-control' />
                            </div>
                            <div className='form-field mb-3'>
                                <label htmlFor='Password' className='mb-2'>Password</label>
                                <input placeholder='Yor Password' type='password' ref={passwordRef} id="password" className='form-control' />
                            </div>
                            
                            <div className='form-field mb-3'>
                        <label htmlFor='password_confirmation' className='mb-2'>Password Confirmation</label>
                        <input placeholder='Password Confirmation' type='password' ref={passwordConfirmationRef} id="password_confirmation" className='form-control' />
                    </div>
                            <div className='row mt-5'>
                                <div className='col-6'>
                                    <Link className='btn btn-dark w-100' to='/login'>Go To Login</Link>
                                </div>
                                <div className='col-6'>
                                    <button
                                        className='btn btn-primary w-100'>Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default SignUp