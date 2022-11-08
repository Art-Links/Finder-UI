import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchSection from '../components/SearchSection';
<<<<<<< HEAD
// import svgPhoto from './svgPhoto';
// import Subnavbar from './Subnavbar';
import Category from '../pages/Category';
// import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';
=======
>>>>>>> 4e7719f036937678ff3f642dff989df4b64c6eaa



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