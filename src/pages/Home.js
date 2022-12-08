// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

import Map from '../components/Map';



import '../styles/Home.css'
import { useEffect, useState } from 'react';
import { LoadScriptNext } from '@react-google-maps/api';


const Home = () => {
    const [coords, setCoords] = useState({
        lat: "",
        long: ""
    })
    useEffect (()=> {
        navigator.geolocation.getCurrentPosition((pos)=>{
            setCoords({
                lat : pos.coords.latitude, long: pos.coords.longitude
            }) 
        })
    },[])
    var loader = document.getElementById("preloader");
    window.addEventListener("load", function () {
        loader.style.display = "none"
    })

    return (
        <>
        {/* <div id='preloader'></div> */}
        <div className='home-page'>
            <Map lat={coords?.lat} long={coords?.long}/>
        </div>


        <script>
           
        </script>


        </>
    )
}
export default Home;