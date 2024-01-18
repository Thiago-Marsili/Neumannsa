import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <img
              src="https://doppautomation.com/wp-content/uploads/2021/10/Imagotipo-Fondo-Negro.png"
              alt="Imagotipo Fondo Negro"
              className="w-full h-auto mb-4"
            />
            <div className="text-sm">
              <a href="https://goo.gl/maps/jMuQ6ZVtYdbowtaH9" className="block mb-2">
                Victorino de la Plaza 572<br />Villa Lynch, Bs. As.
              </a>
              <a href="mailto:info@doppautomation.com" className="block mb-2">
                info@doppautomation.com
              </a>
              <a href="tel:+541147138631" className="block">
                (54) 011 4713-8631
              </a>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            {/* Otras secciones aquí */}
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            {/* Otras secciones aquí */}
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            {/* Otras secciones aquí */}
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-wrap -mx-4">
          <div className="w-full md:w-3/4 px-4 mb-8 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a href="https://doppautomation.com/" className="hover:text-gray-300">Inicio</a>
              </li>
              <li>
                <a href="https://doppautomation.com/productos/" className="hover:text-gray-300">Productos</a>
              </li>
              <li>
                <a href="https://doppautomation.com/servicios/" className="hover:text-gray-300">Servicios</a>
              </li>
              <li>
                <a href="https://doppautomation.com/contacto/" className="hover:text-gray-300">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4">
            <ul className="flex space-x-4 justify-end">
              {/* Agrega tus iconos de redes sociales aquí */}
              <li>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm mt-8">
          <p>Copyright 2021 DOPP AUTOMACION S.R.L. · Diseño <a href="https://www.pastafro.la" className="text-red-500">Pastafro.la</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
