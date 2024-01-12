import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import contacto from "./Pages/contacto"
import empresa from "./Pages/empresa"
import localizacion from "./Pages/localizacion"
import productos from "./Pages/productos"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Empresa/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/localizacion" element={<Localizacion>}/>
            <Route path="/contacto" element={<Contacto>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
