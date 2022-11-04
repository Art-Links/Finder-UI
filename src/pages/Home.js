import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchSection from '../components/SearchSection';
// import { useNavigate } from 'react-router-dom';



import '../styles/Home.css'

const Home = () => {

    return (
        <div className='home-page'>
           <Navbar />
           <SearchSection />
           <Footer />
        </div>

    )
}


export default Home;