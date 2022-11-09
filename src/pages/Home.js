import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import Map from '../components/Map';



import '../styles/Home.css'


const Home = () => {

    return (
        <div className='home-page'>
            <Navbar />
            <Map />
            <Footer />
        </div>

    )
}
export default Home;