import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { Route, Routes } from "react-router-dom"
import Subnavbar from './pages/Subnavbar';
import Profile from './pages/Profile';
import Map from '../src/components/Map';
import LostItem from './pages/LostItem';
import Categories from './components/Category/Categories'
import Items from './components/Items/Items';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/subnavbar" element={<Subnavbar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lostitem" element={<LostItem />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/items" element={<Items />} />
        <Route path="/Map" element={<Map />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
