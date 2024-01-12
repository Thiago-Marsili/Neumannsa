import React from 'react';

const Empresa = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-center">
        Nuestra empresa opera hace más de 70 años, Neumann S.A. Es líder en la fabricación y comercialización de productos de automatización y control, disponiendo de la mayor variedad de modelos del mercado.

        La planta industrial está ubicada en Villa Ballester, Provincia de Buenos Aires, dispone de instalaciones normalizadas, tecnología y maquinarias adecuadas para fabricar sus series de artículos con calidad y confiabilidad de nivel internacional.

        Se destaca también por su sistema de gestión para brindar una gran agilidad en la respuesta a sus clientes y asegurar los tiempos de entrega que le sean requeridos.

        Neumann S.A. dispone de una red de 210 distribuidores en todo el mercado nacional y latinoamericano, con lo cual asegura su presencia y liderazgo en el mercado eléctrico.
      </p>
      <img
        className="h-500 w-auto"
         src='/assets/foto-frenteplanta.jpg'
                  />
      <div className="max-w-2xl mx-auto">
        <div id="default-carousel" className="relative" data-carousel="static">
          {/* Carousel wrapper */}
          <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            {/* Item 1 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
              <img src="/assets/foto_instagram_bsd_cd_130.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
            {/* Item 2 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/assets/foto_instagram_control_de_nivel.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
            {/* Item 3 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/assets/foto_instagram_dpr2.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
            {/* Item 4 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/assets/foto_instagram_fkp7041.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
            {/* Item 5 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/assets/foto_instagram_hn610.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
          </div>
          {/* Slider indicators */}
          <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          </div>
          {/* Slider controls */}
          <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      </div>

    </div>
  );
};

export default Empresa;
