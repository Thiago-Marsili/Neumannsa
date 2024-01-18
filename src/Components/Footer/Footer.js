import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 p-8">
      <div className="flex flex-col items-center justify-center gap-y-6 text-center">
        <div className="flex gap-4 text-blue-gray-900">
          <Typography as="a" href="https://api.whatsapp.com/send?phone=5491140616957&text=Comunicate%20con%20Nosotros" className="opacity- transition-opacity hover:opacity-100 h-5 w-5">
            <FaWhatsapp className="text-2xl text-green-400 hover:text-green-600" />
          </Typography>
          <Typography as="a" href="https://www.instagram.com/empresa_neumann.sa/" className="opacity-100 transition-opacity hover:opacity-100 ">
            <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700" />
          </Typography>
        </div>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2024 Neumann S.A. hecho por <a className="text-blue-400" href="https://dtprogramming.store">DT Programming Store</a>
      </Typography>
    </footer>
  );
}
