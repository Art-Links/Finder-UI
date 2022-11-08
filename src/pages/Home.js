import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchSection from '../components/SearchSection';
import Map from '../components/Map'


import '../styles/Home.css'

const Home = () => {

    return (
        <div className='home-page'>
            <Navbar />
            <svgPhoto />
            <SearchSection />
            <Map />
            <Footer />
            {/* <Category/> */}

        </div>

    )
}
export default Home;