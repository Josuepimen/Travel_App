import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { BsGithub } from "react-icons/bs";
import 'animate.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
//aqui se agregara la logica del formulario
    setSubmitted(true);
  };

  return (
    <div className="p-6 font-sans bg-gradient-to-r from-gray-900 to-slate-950 min-h-screen text-white animate__animated animate__fadeIn">
      <h1 className="text-3xl text-gray-100 mb-4 text-center animate__animated animate__fadeInDown">Contacto</h1>
      {submitted ? (
        <p className="text-center text-green-500 animate__animated animate__bounce">¡Gracias por tu mensaje!</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-100 mb-2" htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-zinc-900 p-2 rounded w-full bg-slate-800"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-100 mb-2" htmlFor="email">Email</label>
            <input 
              type="email"
              name="email"
              id="email"
              className="border border-zinc-900 p-2 rounded w-full bg-slate-800"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-100 mb-2" htmlFor="message">Mensaje</label>
            <textarea
              name="message"
              id="message"
              className="border border-zinc-900 p-2 rounded w-full bg-slate-800"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 animate__animated animate__pulse">
            Enviar
          </button>
        </form>
      )}

      <div className="flex flex-col items-center justify-center mt-6 bg-gray-900 rounded-lg shadow-md p-4 animate__animated animate__fadeInUp">
        <h2 className="text-2xl font-bold mb-4">Síguenos en Redes Sociales</h2>
        <div className="flex space-x-4">
          <a href="https://github.com/Josuepimen" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-transform transform hover:scale-110">
            <BsGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/josuepimen-pimentel-estrada-91697033a/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-sky-700 transition-transform transform hover:scale-110">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-transform transform hover:scale-110">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-110">
            <FaTwitter size={30} />
          </a>
          <a href="https://www .youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition-transform transform hover:scale-110">
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;