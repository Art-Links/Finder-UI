import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { Route, Routes } from "react-router-dom"
import Subnavbar from './pages/Subnavbar';
import Profile from './pages/Profile';
import Map from '../src/components/Map';
import LostItem from './pages/LostItem';
import Items from './components/Items/Items';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingelCategory from './components/Category/SingelCategory/SingelCategory';
import SingelItem from './components/Items/SingelItem';
import { AuthContext } from './AuthContext/authContext';
import { useContext } from 'react';



function App() {

  const { loggedIn } = useContext(AuthContext)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/subnavbar" element={<Subnavbar />} /> */}
        {loggedIn && <Route path="/profile" element={<Profile />} />}
        {loggedIn && <Route path="/lostitem" element={<LostItem />} />}
        {/* <Route path="/category" element={<Categories />} /> */}
        <Route path="/items" element={<Items />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/singel/:id" element={<SingelCategory />} />
        <Route path="/item/:id" element={<SingelItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
