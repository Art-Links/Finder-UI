import React from 'react'
import '../styles/LostItem.css'
import logo2 from '../myimages/sonlogo.svg'



import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const LostItem = () => {

  const [isDisabled, setIsDisabled] = useState(false)

  const navigate = useNavigate()
  const nameRef = useRef()
  const blurImageRef = useRef()
  const latRef = useRef()
  const lngRef = useRef()
  const descriptionRef = useRef()

  const lostitme = async () => {
    setIsDisabled(true)
    const response = await fetch('http://localhost:3000/items', {
      method: 'post',
      body: JSON.stringify({
        name: nameRef.current.value,
        blurImage: blurImageRef.current.value,
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
        <div className=' mb-4'>
          <img id='logo2' src={logo2} alt='' />
        </div>
        <div>
          <h2>Add an Item</h2>
        </div>
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">Name</label>
          <input placeholder='Type The Name For Item' type="email" class="form-control" ref={nameRef} id="inputEmail4" />
        </div>
        <div class="col-md-12">
          <label for="inputPassword4" class="form-label">lat</label>
          <input type="text" ref={latRef} class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">lng</label>
          <input type="text" ref={lngRef} class="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div class="col-md-12">
          <label for="inputCity" class="form-label">description</label>
          <textarea type="text" ref={descriptionRef} class="form-control" id="inputCity" placeholder='Please Descrip How You Found It ?!'/>
        </div>
        {/* <div class="col-md-12">
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
        </div> */}
        <div className="col-md-12">
          <label for="input" class="form-label">Photo</label><br />
          <input ref={blurImageRef} type="file" id="myFile" name="filename"/>
        </div>
        <div className='col-12'>
          <Link className='btn btn-primary w-100' to='/signin' onClick={lostitme}>Submit</Link>
        </div>
      </form>
    </div>

  )
}

export default LostItem;