import React from 'react'
import '../styles/LostItem.css'
import logo2 from '../myimages/sonlogo.svg'
import photo from '../myimages/Uplode.svg'
import Navbar from '../components/Navbar'
import Places, { PlacesAutocomplete } from '../components/Map';
import { MarkerF } from '@react-google-maps/api'


import { AuthContext } from '../AuthContext/authContext'

import { useRef, useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

const LostItem = () => {

  // const [categories, setCategories] = useState()
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
  const questions1Ref = useRef()
  const questions2Ref = useRef()

  // const placeIdRef = useRef()
  const [place, setPlace] = useState("")





  const categoryIdRef = useRef()
  const [cord, setCord] = useState({
    lat: 0,
    lng: 0
  })


  function Map({ center, zoom, setCord, setPlace }) {
    const mapRef = useRef(null)
    const [map, setMap] = useState()
    console.log(center)
    useEffect(() => {
      setMap(new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      }));
    }, []);
    useEffect(() => {
      if (map) {
        map.addListener("click", (mapsMouseEvent) => {
          setPlace(mapsMouseEvent?.placeId)
          const coordinates = mapsMouseEvent.latLng.toJSON()
          setCord({
            lat: coordinates.lat,
            lng: coordinates.lng,
          })
        });
      }
      console.log(cord)
    }, [map])
    return ( 
    <div ref={mapRef} style={{ height: '400px' }} />
    )
  }



  const [categories, setCategories] = useState()
  const getCategories = async () => {
    const Category = await fetch(`http://localhost:3000/category`, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const json = await Category.json()
    if (json?.success) {
      setCategories(json?.data)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  const lostitme = async () => {
    setIsDisabled(true)
    const form = new FormData()
    form.append("name", nameRef.current.value)
    form.append('blurImage', blurImageRef.current.files[0])
    form.append('lat', cord.lat)
    form.append('lng', cord.lng)
    form.append('description', descriptionRef.current.value)
    form.append('questions', [questions1Ref.current.value])
    form.append('questions', [questions2Ref.current.value])
    form.append('placeId', place)
    form.append('categoryId', categoryIdRef.current.value)
    console.log(form)


    const response = await fetch('http://localhost:3000/items', {
      method: 'post',
      body: form,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
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
              <input placeholder='Type The Name For Item' type="email" className="form-control" name="email" ref={nameRef} id="inputEmail4" />
            </div>
            <div className="col-md-12 mb-3">
              <label for="input" className="form-label d-flex flex-column align-items-start">Photo</label>
              <input ref={blurImageRef} type="file" id="myFile" name="blurImage" />
            </div>
            <div className="col-md-12 MP">
              {/* <label for="inputPassword4" className="form-label d-flex flex-column align-items-start">lat</label> */}
              <label for="inputAddress" className="form-label d-flex flex-column align-items-start">Place</label>
              <PlacesAutocomplete setSelected={setSelected} selected={selected} />
              <Wrapper apiKey='AIzaSyCYOS72gqy9Hubh0rz6MU6lLg6Zjo7DSEw'>
                <Map className="mP" setCord={setCord} center={selected} zoom={9} setPlace={setPlace} />
              </Wrapper>
            </div>
            <div className="col-md-12">
              <label for="inputCity" className="form-label d-flex flex-column align-items-start">description</label>
              <textarea name='placeId' type="text" ref={descriptionRef} className="form-control" id="inputCity" placeholder='Please Descrip How You Found It ?!' />
            </div>
            <div className='d-flex'>
              <div className="col-3 men">
                <label for="inputAddress" className="form-label d-flex flex-column align-items-start">categories</label>
                <select className='select' ref={categoryIdRef}>
                  {
                    categories?.length > 0 && categories?.map(category => (
                      <option key={category?.id} value={category?.id}>{category?.name}</option>
                    ))
                  }
                </select>
              </div>
              {/* <div className="col-8 nas">
                <label for="inputAddress" className="form-label d-flex flex-column align-items-start">placeId</label>
                <input type="text" ref={placeIdRef} className="form-control" id="inputAddress" placeholder="placeId" />
              </div> */}
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label d-flex flex-column align-items-start">Questions 1</label>
              <input type="text" ref={questions1Ref} className="form-control" id="inputAddress" placeholder="Ask Your Question" />
            </div>
            <div className="col-12 mb-2">
              <label for="inputAddress" className="form-label d-flex flex-column align-items-start">Questions 2</label>
              <input type="text" ref={questions2Ref} className="form-control" id="inputAddress" placeholder="Ask Your Question" />
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