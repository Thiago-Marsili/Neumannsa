import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<div>Home</div>}/>
            <Route path="/empresa" element={<div>About</div>}/>
            <Route path="/productos" element={<div>Contact</div>}/>
            <Route path="/localizacion" element={<div>Contact</div>}/>
            <Route path="/contacto" element={<div>Contact</div>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
