import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/signup" element={<SignUp/>}/>
      
      </Routes>

    </div>
  );
}

export default App;
