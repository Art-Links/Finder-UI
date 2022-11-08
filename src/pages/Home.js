import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchSection from '../components/SearchSection';
// import svgPhoto from './svgPhoto';
// import Subnavbar from './Subnavbar';
import Category from '../pages/Category';
// import { useNavigate } from 'react-router-dom';



import '../styles/Home.css'

const Home = () => {

    return (
        <div className='home-page'>
            
           <Navbar />
           <svgPhoto/>
           <SearchSection />
           <Footer />
           {/* <Category/> */}
           
        </div>

    )
}
export default Home;