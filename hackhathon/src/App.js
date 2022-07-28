import './App.css';
import { Routes, Route } from "react-router-dom";
import SIGNIN from './pages/SIGNIN/SIGNIN';
import SIGNUP from './pages/SIGNUP/SIGNUP';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
         <Routes>
           <Route path='/signin' element={<SIGNIN />}/>
           <Route path='/signup' element={<SIGNUP />}/>
         </Routes>
    </div>
  );
}

export default App;
