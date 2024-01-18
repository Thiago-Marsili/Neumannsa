import React from 'react';

const Sidebar = () => {
  const imageSize = 'w-16 h-16'; 

  return (
    <div className="fixed top-2/4 inset-x-6 flex items-center justify-between">
      <img
        src="/assets/Flag_of_Argentina.svg.png"
        alt=""
        className={`object-cover rounded-full mb-2 ${imageSize}`}
      />

      <a href="https://api.whatsapp.com/send?phone=5491140616957&text=Comunicate%20con%20Nosotros" target="_blank" rel="noopener noreferrer">
        <img
          src="/assets/5ae21cc526c97415d3213554.png"
          alt=""
          className={`object-cover rounded-full mb-2 ${imageSize}`}
        />
      </a>
    </div>
  );
};

export default Sidebar;
