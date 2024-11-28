import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-900 to-slate-950 min-h-screen text-white">
      <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">Bienvenido a nuestra App de Viajes</h1>
      <p className="text-lg text-center mb-6 animate__animated animate__fadeIn animate__delay-1s">
        Explora los mejores destinos de viaje, encuentra inspiración y planifica tu próxima aventura con nosotros.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link to="/destination" className="bg-white text-blue-500 py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
          Explorar Destinos
        </Link>
        <Link to="/contact" className="bg-white text-green-500 py-3 px-6 rounded-lg shadow-lg hover:bg-green-500 hover:text-white transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
          Contáctanos
        </Link>
      </div>
      <div className="mt-8 max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-2 animate__animated animate__fadeIn animate__delay-3s">¿Qué Ofrecemos?</h2>
        <ul className="list-disc list-inside space-y-2 text-left animate__animated animate__fadeIn animate__delay-4s">
          <li className="hover:text-blue-300 transition duration-300">Guías de viaje para los mejores destinos.</li>
          <li className="hover:text-blue-300 transition duration-300">Consejos útiles para tus viajes.</li>
          <li className="hover:text-blue-300 transition duration-300">Imágenes inspiradoras de diferentes lugares.</li>
          <li className="hover:text-blue-300 transition duration-300">Conexiones a redes sociales para seguir nuestras actualizaciones.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;