import React, { useState } from 'react';

const Contacto = () => {
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const object = {};
    
    formData.forEach((value, key) => {
      object[key] = value;
    });
    
    const json = JSON.stringify(object);
    
    setResultMessage("Porfavor espere...");

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: json,
      });

      const jsonResponse = await response.json();

      if (response.status === 200) {
        setResultMessage(jsonResponse.message);
      } else {
        console.log(response);
        setResultMessage(jsonResponse.message);
      }
    } catch (error) {
      console.error(error);
      setResultMessage("¡Algo salió mal!");
    }

    setTimeout(() => {
      setResultMessage(""); 
    }, 5000);
  };

  return (
    <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contactanos</h1>
            <p className="text-gray-400 dark:text-gray-400">Complete el siguiente formulario para enviarnos un mensaje.</p>
          </div>
          <div className="m-7">
            <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>

              <input type="hidden" name="apikey" value="5ccc769f-6c8b-493a-b238-39ea929c9ed8" />
              <input type="hidden" name="subject" value="Consulta de la Web" />
              <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />

              <div className="mb-6">
                <label htmlFor="Nombre" className="block mb-2 text-sm text-white-600 dark:text-gray-400">Nombre Completo</label>
                <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>

              <div className="mb-6">
                <label htmlFor="Email" className="block mb-2 text-sm text-white-600 dark:text-gray-400">Email</label>
                <input type="email" name="email" id="email" placeholder="tu@compania.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>

              <div className="mb-6">
                <label htmlFor="Telefono" className="text-sm text-white-600 dark:text-gray-400">Número de Telefono</label>
                <input type="text" name="phone" id="phone" placeholder="+11 5567-4343" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>

              <div className="mb-6">
                <label htmlFor="Mensaje" className="block mb-2 text-sm text-white-600 dark:text-gray-400">Mensaje</label>
                <textarea rows="5" name="message" id="message" placeholder="Tu mensaje" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
              </div>

              <div className="mb-6">
                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Enviar</button>
              </div>
              <p className="text-base text-center text-gray-400">{resultMessage}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Contacto;
