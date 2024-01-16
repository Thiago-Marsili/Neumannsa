import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Contacto from "./Pages/contacto"
import Empresa from "./Pages/empresa"
import Localizacion from "./Pages/localizacion"
import Productos from "./Pages/productos"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App dark:bg-gray-900'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Empresa/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/localizacion" element={<Localizacion/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;