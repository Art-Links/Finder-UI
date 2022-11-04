import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/signup" element={<SignUp/>}/>
      <Route  path="/signin" element={<SignIn/>}/>

      
      </Routes>

    </div>
  );
}

export default App;
