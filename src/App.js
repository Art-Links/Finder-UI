import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { Route, Routes } from "react-router-dom"
import Subnavbar from './pages/Subnavbar';
import Category from './pages/Category';
import svgPhoto from './pages/svgPhoto';
import Profile from './pages/Profile';
import Map from '../src/components/Map'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/subnavbar" element={<Subnavbar />} />
        <Route path="/category" element={<Category />} />
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route path="/svgPhoto" element={<svgPhoto/>}/> */}
        <Route path="/Map" element={<Map />} />




      </Routes>

    </div>
  );
}

export default App;
