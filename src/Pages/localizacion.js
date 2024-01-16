import React from 'react';

const Localizacion = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-gray-900 text-white"
      style={{
        backgroundImage: 'url("/assets/tu-imagen-de-fondo.jpg")', 
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Nuestra Localización</h1>
        <p className="text-lg mb-6">
          Estimado cliente, le mostramos la localización de nuestra empresa en el siguiente mapa.
        </p>

        <a
          className="flex justify-center mb-8"
          href="https://www.google.com/maps/place/NEUMAN+SA/@-34.5382535,-58.5649698,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcba0f0b0039cf:0x9949a3b65a95135a!8m2!3d-34.5382579!4d-58.5623949!16s%2Fg%2F11cp5jbq5x?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-96 w-auto rounded-lg shadow-xl"
            src="/assets/mapa.jpg"
            alt="Foto Ubicacion"
          />
        </a>

        <p className="text-sm">
          Para obtener indicaciones detalladas, haga clic en el mapa o visite nuestro perfil en{' '}
          <a
            className="underline"
            href="https://www.google.com/maps/place/NEUMAN+SA/@-34.5382535,-58.5649698,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcba0f0b0039cf:0x9949a3b65a95135a!8m2!3d-34.5382579!4d-58.5623949!16s%2Fg%2F11cp5jbq5x?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Localizacion;
