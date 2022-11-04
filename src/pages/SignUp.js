import React from 'react'
import '../styles/Signup.css'
import logo2 from '../myimages/logo2.png'
import photo from '../myimages/photo.svg'


import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const SignUp = () => {

    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const usernameRef = useRef()
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
                        <input placeholder='Type Yor Name' type='text' id="name" className='form-control' />
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
    )
}

export default SignUp