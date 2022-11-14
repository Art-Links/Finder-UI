import React from 'react'
import '../styles/LostItem.css'
import logo2 from '../myimages/sonlogo.svg'
import photo from '../myimages/Uplode.svg'
import Navbar from '../components/Navbar'



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

    <div>
        <Navbar />
      <div className='wrapper'>
        <div class='bg-images'>
          <img id='personal' src={photo} alt='' />
        </div>
        <div id='main-div' className='registration-forms'>
          <form id='form' class="row g-2 w-100 d-flex">
            <div className=' mb-4'>
              <img id='logos2' src={logo2} alt='' />
            </div>
            <div>
              <h3>Add an Item</h3>
            </div>
            <div class="col-md-12">
              <label for="inputEmail4" className="form-label d-flex flex-column align-items-start">Name</label>
              <input placeholder='Type The Name For Item' type="email" className="form-control" ref={nameRef} id="inputEmail4" />
            </div>
            <div className="col-md-12">
              <label for="inputPassword4" className="form-label d-flex flex-column align-items-start">lat</label>
              <input type="text" ref={latRef} className="form-control" id="inputPassword4" placeholder='Latitude' />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label d-flex flex-column align-items-start">lng</label>
              <input type="text" ref={lngRef} className="form-control" id="inputAddress" placeholder="Longitude" />
            </div>
            <div className="col-md-12">
              <label for="inputCity" className="form-label d-flex flex-column align-items-start">description</label>
              <textarea type="text" ref={descriptionRef} className="form-control" id="inputCity" placeholder='Please Descrip How You Found It ?!' />
            </div>
            {/* <div className="col-md-12">
          <label for="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select">
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
              <label for="input" className="form-label d-flex flex-column align-items-start">Photo</label>
              <input ref={blurImageRef} type="file" id="myFile" name="filename" />
            </div>
            <dr />
            <dr />
            <div className='col-12'>
              <button className='btn btn-primary w-100' disabled={isDisabled} onClick={lostitme}>Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>

  )
}

export default LostItem;