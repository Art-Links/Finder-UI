import React from 'react'
import '../styles/Profile.css'

const Profile = () => {
  return (
    <div>
        
        <div className="p-3 mb-4 bottom-border">
                <div className="alert alert-info">My Profile</div>
                <div className='form-field mb-3'>
                    <label htmlFor='name' className='mb-2'><small>Name <sup>*</sup></small></label>
                    <input  type='text'   id="name" className='form-control' />
                </div>
                <div className='form-field mb-3'>
                    <label htmlFor='email' className='mb-2'><small>Email Address <sup>*</sup></small></label>
                    <input  type='email'  id="email" className='form-control' />
                </div>
                <div className='form-field mb-3'>
                    <label htmlFor='password' className='mb-2'><small>Password</small></label>
                    <input type='password'  id="password" className='form-control' />
                </div>
                <div className='form-field mb-3'>
                    <label htmlFor='new_password' className='mb-2'><small>New Password</small></label>
                    <input type='password'  id="new_password" className='form-control' />
                </div>
                <div className='form-field mb-3'>
                    <label htmlFor='password_confirmation' className='mb-2'><small>New Password Confirmation</small></label>
                    <input type='password' id="password_confirmation" className='form-control' />
                </div>
                <div className='form-field mb-3'>
                    <button  className="btn btn-primary">Update Profile</button>
                </div>
            </div>
            <div className="mb-4 p-3">
            <div className="alert alert-info">My Posts</div>
                <ul className="list-group">
                </ul>  
            </div>
    </div>
  )
}

export default Profile