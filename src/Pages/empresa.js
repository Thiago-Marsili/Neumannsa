import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Empresa = () => {
  const windowHeight = window.innerHeight;

  return (
    <div className="max-w-3xl mx-auto dark:bg-gray-900 overflow-hidden px-8 py-4">
      {/* Carousel */}
      <div className="relative">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={500}
          emulateTouch
          style={{ height: windowHeight - 100, maxWidth: '100%', borderRadius: '8px', overflow: 'hidden' }}
        >
          <div>
            <img src="/assets/foto-frenteplanta.jpg" style={{ objectFit: 'contain', width: '100%', height: '100%' }} alt='foto 1' />
          </div>
          <div>
            <img src="/assets/foto_instagram_FK_1070_1080.jpg" style={{ objectFit: 'contain', width: '100%', height: '100%' }} alt='foto 1' />
          </div>
          <div>
            <img src="/assets/foto_instagram_dpr2.jpg" style={{ objectFit: 'contain', width: '100%', height: '100%' }} alt='foto 1' />
          </div>
          <div>
            <img src="/assets/foto_instagram_fkp7041.jpg" style={{ objectFit: 'contain', width: '100%', height: '100%' }} alt='foto 1' />
          </div>
          <div>
            <img src="/assets/foto_instagram_hn610.jpg" style={{ objectFit: 'contain', width: '100%', height: '100%' }} alt='foto 1' />
          </div>
          <div>
            <img src="/assets/foto_instagram_control_de_nivel.jpg" style={{ objectFit: 'contain', width: '100%', height: '100%' }} alt='foto 1' />
          </div>
          {/* ... (resto de tus imágenes) */}
        </Carousel>
      </div>

      {/* Nueva sección sin fondo */}
      <div className="flex items-center bg-gray-900 p-8 rounded-lg shadow-lg mt-8">
        <div className="w-1/2 text-white">
          <h2 className="text-4xl font-semibold mb-4">Nosotros</h2>
          <p className="text-lg mb-6">
            {/* ... (tu contenido) */}
          </p>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-2xl mr-2" />
            <p>Buenos Aires 6043 - C.P 1653, Villa Ballester - Buenos Aires - Argentina</p>
          </div>
        </div>
        <div className="w-1/2 pl-8">
          <img src="/assets/automated_manufacturing_robots.jpg" alt="Imagen Vertical" style={{ height: '600px', width: '100%', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
        </div>
      </div>
    </div>
  );
};

export default Empresa;

