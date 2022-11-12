import React from 'react'
import '../styles/LostItem.css'


import { useRef } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LostItem = () => {

  // const [isDisabled, setIsDisabled] = useState(false)

  const navigate = useNavigate()
  const nameRef = useRef()
  const emailRef = useRef()
  const blurImageRef = useRef()
  // const latX = useRef()
  const latX = useRef()
  const latY = useRef()
  const state = useRef()
  const street = useRef()
  const discrption = useRef()
  const categoryId = useRef()
  const lostitme = async () => {
    setIsDisabled(true)
    const response = await fetch('http://localhost:3000/users', { 
      method: 'post',
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        blurImage: blurImageRef.current.value,
        latX: latXRef.current.value,
        latY: latYRef.current.value,
        state: stateRef.current.value,
        street: streetRef.current.value,
        description: descriptionRef.current.value,
        categoryId: categoryIdRef.current.value
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
    
    <div id='main-div' className='registration-form'>
      <form id='form' class="row g-2 w-100 d-flex">
        <div>
          <h2>Add an Item</h2>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Name</label>
          <input type="email" class="form-control" ref={nameRef} id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" ref={emailRef} id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">latX</label>
          <input type="password" class="form-control" ref={latXRef} id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">latY</label>
          <input type="text" class="form-control" ref={latYRef} id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">State</label>
          <input type="text" class="form-control"  id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Description</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <select id="inputState" ref={stateRef} class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
      
        <div class="col-12">
          {/* <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div> */}
        </div>
        <div className='col-10'>
          <Link className='btn btn-primary w-100' to='/signin' onClick={lostitme}>Register</Link>
        </div>
      </form>
    </div>
    
  )
}

export default LostItem;