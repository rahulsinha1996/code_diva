import './App.css';
import { Routes, Route } from "react-router-dom";
import SIGNIN from './pages/SIGNIN/SIGNIN';
import SIGNUP from './pages/SIGNUP/SIGNUP';
import Navbar from './pages/Navbar';
import Video from './pages/MainPage/Video';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
         <Routes>
           <Route path='/' element={<SIGNUP />}/>
           <Route path='/signin' element={<SIGNIN />}/>
           <Route path = "/video" element = {<Video/>}/>
         </Routes>
    </div>
  );
}

export default App;
