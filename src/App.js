import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Contacto from "./Pages/contacto"
import Empresa from "./Pages/empresa"
import Localizacion from "./Pages/localizacion"
import Productos from "./Pages/productos"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Navbar/>
          <Sidebar/>
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
