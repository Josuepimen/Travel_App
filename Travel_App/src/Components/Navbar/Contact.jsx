import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, } from 'react-icons/fa';
import { BsGithub } from "react-icons/bs";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Síguenos en Redes Sociales</h2>
      <div className="flex space-x-4">
        <a href="https://github.com/Josuepimen" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-zinc-900">
          <BsGithub  size={30} />
        </a>
        <a href="https://www.linkedin.com/in/josuepimen-pimentel-estrada-91697033a/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-sky-700">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
          <FaInstagram size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
          <FaYoutube size={30} />
        </a>
      </div>
    </div>
  );
}

export default Contact;