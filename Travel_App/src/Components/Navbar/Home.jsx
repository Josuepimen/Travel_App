import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMap, FaLightbulb, FaImage, FaShareAlt } from 'react-icons/fa'; 
import mapaExplorar from '../../Images/mapaExplorar.jpg'; 
import accesorios from '../../Images/accesorios.jpg';
import mapa from '../../Images/mapa.jpg';
import montañas from '../../Images/montañas.jpg';
import ventanaAvion from '../../Images/ventana-avion.jpg';

const images = [
  { src: mapaExplorar, alt: "explorar" },
  { src: accesorios, alt: "accesorios" },
  { src: mapa, alt: "mapa" },
  { src: montañas, alt: "montañas" },
  { src: ventanaAvion, alt: "ventana de avion" },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 300);
  };

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(true);
    }, 300);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-900 to-slate-950 min-h-screen text-white">
      <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
        Bienvenido a nuestra App de Viajes
      </h1>
      <p className="text-lg text-center mb-6 animate__animated animate__fadeIn animate__delay-1s">
        Explora los mejores destinos de viaje, encuentra inspiración y planifica
        tu próxima aventura con nosotros.
      </p>

      {/* Sección de imágenes como slider */}
      <div className="relative w-full max-w-lg mb-8">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className={`rounded-lg shadow-lg w-full h-64 object-cover transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
        />
        <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          &#10094; 
        </button>
        <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          &#10095; 
        </button>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link
          to="/destination"
          className="bg-blue-600 text-zinc-100 py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 hover:text-white transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-2s"
        >
          Explorar Destinos
        </Link>
        <Link
          to="/contact"
          className="bg-green-600 text-zinc-100 py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 hover:text-white transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-2s"
        >
          Contáctanos
        </Link>
      </div>
      
      <div className="mt-8 max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-3s">
          ¿Qué Ofrecemos?
        </h2>
        <ul className="space-y-4 ">
          <li className="flex items-center justify-center text-lg animate__animated animate__fadeIn animate__delay-4s">
            <FaMap className="text-blue-500 text-2xl mr-2 animate__animated animate__bounceIn" />
            Guías de viaje para los mejores destinos.
          </li>
          <li className="flex items-center justify-center text-lg animate__animated animate__fadeIn animate__delay-5s">
            <FaLightbulb className="text-yellow-500 text-2xl mr-2 animate__animated animate__bounceIn" />
            Consejos útiles para tus viajes.
          </li>
          <li className="flex items-center justify-center text-lg animate__animated animate__fadeIn animate__delay-7s">
            <FaImage className="text-green-500 text-2xl mr-2 animate__animated animate__bounceIn" />
            Imágenes inspiradoras de diferentes lugares.
          </li>
          <li className="flex items-center justify-center text-lg animate__animated animate__fadeIn animate__delay-8s">
            <FaShareAlt className="text-red-500 text-2xl mr-2 animate__animated animate__bounceIn" />
            Conexiones a redes sociales para seguir nuestras actualizaciones.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;