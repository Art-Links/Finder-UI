import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchSection from '../components/SearchSection';



import '../styles/Home.css'

const Home = () => {

    return (
        <div className='home-page'>
            
           <Navbar />
           <svgPhoto/>
           <SearchSection />
           <Footer />
           
        </div>

    )
}
export default Home;