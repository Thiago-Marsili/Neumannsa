import React from 'react';
import { AiOutlineWhatsApp, AiFillInstagram } from 'react-icons/ai';
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-blue-950 text-center md:justify-between">
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center h-10">
          <Typography as="a" href="https://api.whatsapp.com/send?phone=5491140616957&text=Comunicate%20con%20Nosotros" className="opacity- transition-opacity hover:opacity-100 h-5 w-5">
            <AiOutlineWhatsApp className="text-2xl" />
          </Typography>
          <Typography as="a" href="https://www.instagram.com/empresa_neumann.sa/" className="opacity-0 transition-opacity hover:opacity-100 ">
            <AiFillInstagram className="text-2xl" />
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
