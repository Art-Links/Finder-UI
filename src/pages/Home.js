// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

import Map from '../components/Map';



import '../styles/Home.css'
import { useEffect, useState } from 'react';


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

    return (
        <div className='home-page'>
            <Map lat={coords?.lat} long={coords?.long}/>
        </div>
    )
}
export default Home;