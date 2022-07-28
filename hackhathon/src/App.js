import './App.css';
import { Routes, Route } from "react-router-dom";
import SIGNIN from './pages/SIGNIN/SIGNIN';
import SIGNUP from './pages/SIGNUP/SIGNUP';
import Video from './pages/MainPage/Video';

function App() {
  return (
    <div className="App">
      
         <Routes>
           <Route path='/' element={<SIGNUP />}/>
           <Route path='/signin' element={<SIGNIN />}/>
           <Route path = "/video" element = {<Video/>}/>
         </Routes>
    </div>
  );
}

export default App;
