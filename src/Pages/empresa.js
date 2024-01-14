import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Empresa = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-center p-6 text">
        Nuestra empresa opera hace más de 70 años, Neumann S.A. Es líder en la fabricación y comercialización de productos de automatización y control, disponiendo de la mayor variedad de modelos del mercado.

        La planta industrial está ubicada en Villa Ballester, Provincia de Buenos Aires, dispone de instalaciones normalizadas, tecnología y maquinarias adecuadas para fabricar sus series de artículos con calidad y confiabilidad de nivel internacional.

        Se destaca también por su sistema de gestión para brindar una gran agilidad en la respuesta a sus clientes y asegurar los tiempos de entrega que le sean requeridos.

        Neumann S.A. dispone de una red de 210 distribuidores en todo el mercado nacional y latinoamericano, con lo cual asegura su presencia y liderazgo en el mercado eléctrico.
      </p>
      <img className="h-500 w-auto p-6" src='/assets/foto-frenteplanta.jpg' alt='Foto Frente Planta NeumannSA'/>
        <Carousel renderThumbs={() => {}}>
              <div>
                  <img src="/assets/foto_instagram_bsd_cd_130.jpg" className='h-96' alt='foto 1'/>
            </div>
            <div>
                <img src="/assets/foto_instagram_control_de_nivel.jpg" className='h-96' alt='foto 2'/>
            </div>
            <div>
                <img src="/assets/foto_instagram_dpr2.jpg" alt='foto 3' className='h-96'/>
            </div>
            <div>
                <img src="/assets/foto_instagram_fkp7041.jpg" alt='foto 3' className='h-96'/>
            </div>
            <div>
                <img src="/assets/foto_instagram_hn610.jpg" alt='foto 3' className='h-96'/>
            </div>
          </Carousel>
    </div>
  );
};

export default Empresa;
