import React from 'react'
import '../styles/LostItem.css'


import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const LostItem = () => {

  const [isDisabled, setIsDisabled] = useState(false)

  const navigate = useNavigate()
  const nameRef = useRef()
  // const blurImageRef = useRef()
  const latRef = useRef()
  const lngRef = useRef()
  const descriptionRef = useRef()

  const lostitme = async () => {
    setIsDisabled(true)
    const response = await fetch('http://localhost:3000/users', {
      method: 'post',
      body: JSON.stringify({
        name: nameRef.current.value,
        // blurImage: blurImageRef.current.value,
        lat: latRef.current.value,
        lng: lngRef.current.value,
        description: descriptionRef.current.value
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
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">Name</label>
          <input placeholder='Type The Name For Item' type="email" class="form-control" ref={nameRef} id="inputEmail4" />
        </div>
        <div class="col-md-12">
<<<<<<< HEAD
=======
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" ref={emailRef} id="inputEmail4" />
        </div>
        <div class="col-md-12">
>>>>>>> ce294f5d5e5e59725d55df6a01f5c53244a430cc
          <label for="inputPassword4" class="form-label">lat</label>
          <input type="password" ref={latRef} class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">lng</label>
          <input type="text" ref={lngRef} class="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
<<<<<<< HEAD
        <div class="col-12">
          <label for="inputAddress2" class="form-label">City</label>
          <input type="text" ref={cityRef} class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div class="col-md-12">
          <label for="inputCity" class="form-label">State</label>
          <input type="text" ref={stateRef} class="form-control" id="inputCity" />
        </div>
        <div class="col-md-12">
          <label for="inputCity" class="form-label">street</label>
          <input type="text" ref={streetRef} class="form-control" id="inputCity" />
        </div>
        <div class="col-md-12">
          <label for="inputCity" class="form-label">Description</label>
          <textarea type="text" ref={descriptionRef} class="form-control" id="Description" />
=======
        <div class="col-md-12">
          <label for="inputCity" class="form-label">description</label>
          <input type="text" ref={descriptionRef} class="form-control" id="inputCity" />
>>>>>>> ce294f5d5e5e59725d55df6a01f5c53244a430cc
        </div>
        <div class="col-md-12">
          <label for="inputState" class="form-label">State</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Ankara</option>
            <option>Istanbul</option>
            <option>Adana</option>
            <option>Adalar</option>
            <option>Bolo</option>
            <option>Karabuk</option>
            <option>Yalova</option>
            <option>Bursa</option>
            <option>Sabanga</option>
            <option>Antalya</option>
            <option>Kastamono</option>
            <option>Kars</option>
            <option>Trabzon</option>
            <option>Rize</option>

          </select>
        </div>
        <div className="col-md-12">
          <input  type="file" id="myFile" name="filename" />
        </div>
        <div className='col-12'>
          <Link className='btn btn-primary w-100' to='/signin' onClick={lostitme}>Submit</Link>
        </div>
      </form>
    </div>
    
  )
}

export default LostItem;