import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap -mx-4 items-center justify-start">
          {/* Primera fila con el icono de la empresa */}
          <div className="w-full md:w-1/3 px-4 mb-8 flex items-start">
            <img
              src="/assets/logo_sf.png"
              alt="Imagotipo Fondo Negro"
              className="w-40 h-auto"
            />
          </div>

          {/* Segunda fila con la dirección, teléfono y correo */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="text-sm">
              <p className="mb-2">
                Dirección: Buenos Aires 6043 - C.P 1653
                <br />
                Villa Ballester - Buenos Aires - Argentina
              </p>
              <p className="mb-2">
                <a href="mailto:info@neumannsa.com">info@neumannsa.com</a>
              </p>
              <p>
                <a href="tel:(54-11) 7731-8725">(54-11) 7731-8725</a>
              </p>
            </div>
          </div>

          {/* Tercera fila con los enlaces a otras páginas */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <ul className="flex flex-col space-y-2 items-center">
              <li>
                <a href="./" className="hover:text-gray-300">
                  Empresa
                </a>
              </li>
              <li>
                <a href="./Catalogo2024.pdf" className="hover:text-gray-300">
                  Productos
                </a>
              </li>
              <li>
                <a href="./localizacion" className="hover:text-gray-300">
                  Localizacion
                </a>
              </li>
              <li>
                <a href="./contacto" className="hover:text-gray-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea que separa el copyright del resto del contenido */}
        <div className="border-t border-gray-600 mt-8 mb-8"></div>

        <div className="text-center text-sm mt-8">
          <p>
            Copyright 2024 NeumannSa · Diseño{' '}
            <a href="https://dtprogramming.store/" className="text-red-500">
             DtProgrammingStore
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
