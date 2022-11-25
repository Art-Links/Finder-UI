import React from 'react'
import '../styles/LostItem.css'
import logo2 from '../myimages/sonlogo.svg'
import photo from '../myimages/Uplode.svg'
import Navbar from '../components/Navbar'
import { Map } from '../components/Map';
import { PlacesAutocomplete } from '../components/Map';

import { AuthContext } from '../AuthContext/authContext'

import { useRef, useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Category from '../components/Category/Category'
import Menue from '../components/Menue'

const LostItem = () => {

  const [categories, setCategories] = useState()
  const { token } = useContext(AuthContext)
  const [isDisabled, setIsDisabled] = useState(false)
  const [selected, setSelected] = useState({ lat: 41.015137, lng: 28.979530 });
  const { loading } = useLoadScript
  const navigate = useNavigate()
  const nameRef = useRef()
  const blurImageRef = useRef()
  // const latRef = useRef()
  // const lngRef = useRef()
  const descriptionRef = useRef()
  const questionsRef = useRef()
  // const placeIdRef = useRef()
  const categoryIdRef = useRef()

  const lostitme = async () => {
    setIsDisabled(true)
    const getCategories = async () => {
      const Category = await fetch('http://localhost:3000/category', {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const json = await Category.json()
      console.log(json)
      // window.alert(json.messages)
      if (json?.success) {
        setCategories(json?.data)
      }
    }
    // useEffect(() => {
    //   getCategories()
    // }, [])



    const response = await fetch('http://localhost:3000/items', {
      method: 'post',
      body: JSON.stringify({
        name: nameRef.current.value,
        blurImage: blurImageRef.current.files[0],
        lat: 46576,
        lng: 687627,
        description: descriptionRef.current.value,
        questions: questionsRef.current.value,
        // placeId: placeIdRef.current.value,
        categoryId: categoryIdRef.current.value,


      }),
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      }
    })
    const json = await response.json()
    setIsDisabled(false)

    window.alert(json.messages)

    if (json.success) {
      // go to sign in
      navigate('/items')
    }
  }
  return (

    <div>
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
            <div className="col-md-12 mb-3">
              <label for="input" className="form-label d-flex flex-column align-items-start">Photo</label>
              <input ref={blurImageRef} type="file" id="myFile" name="filename" />
            </div>
            <div className="col-md-12 MP">
              {/* <label for="inputPassword4" className="form-label d-flex flex-column align-items-start">lat</label> */}
              <label for="inputAddress" className="form-label d-flex flex-column align-items-start">Place</label>
              <PlacesAutocomplete setSelected={setSelected} selected={selected} />
              <Map className="mP" selected={selected} />
            </div>
            <div className="col-md-12">
              <label for="inputCity" className="form-label d-flex flex-column align-items-start">description</label>
              <textarea type="text" ref={descriptionRef} className="form-control" id="inputCity" placeholder='Please Descrip How You Found It ?!' />
            </div>
            <div className='d-flex'>
              <div className="col-3 men">
                <label for="inputAddress" className="form-label d-flex flex-column align-items-start">categories</label>
                <div>
                </div>
              </div>
              {/* <div className="col-8 nas">
                <label for="inputAddress" className="form-label d-flex flex-column align-items-start">placeId</label>
                <input type="text" ref={placeIdRef} className="form-control" id="inputAddress" placeholder="placeId" />
              </div> */}
            </div>
            <Menue />
            <div className="col-12">
              <label for="inputAddress" className="form-label d-flex flex-column align-items-start">Questions 1</label>
              <input type="text" ref={questionsRef} className="form-control" id="inputAddress" placeholder="Ask Your Question" />
            </div>
            <div className="col-12 mb-2">
              <label for="inputAddress" className="form-label d-flex flex-column align-items-start">Questions 2</label>
              <input type="text" ref={questionsRef} className="form-control" id="inputAddress" placeholder="Ask Your Question" />
            </div>
            {/* <dr />
            <dr /> */}
            <div className='col-12 mb-3'>
              <button className='btn btn-primary w-100' onClick={lostitme}>Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>

  )
}

export default LostItem;