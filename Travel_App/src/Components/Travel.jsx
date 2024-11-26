import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Travel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [destinations, setDestinations] = useState([]);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(false);

  const UNSPLASH_ACCESS_KEY = 'zokPLsGgy9b7EiNvaEITMTw-7xrv2q6qua6mubkqjZY'; 

  const predefinedDestinations = [
    { name: 'París', info: 'La ciudad del amor.' },
    { name: 'Nueva York', info: 'La gran manzana.' },
    { name: 'Tokio', info: 'La capital de Japón.' },
    { name: 'Londres', info: 'La capital de Inglaterra.' },
    { name: 'Sídney', info: 'Famosa por su ópera.' },
  ];

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const newImages = {};
      try {
        for (const destination of predefinedDestinations) {
          const res = await axios.get(`https://api.unsplash.com/search/photos?query=${destination.name}&client_id=${UNSPLASH_ACCESS_KEY}`);
          newImages[destination.name] = res.data.results[2]?.urls?.small; 
        }
        setImages(newImages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredDestinations = predefinedDestinations.filter(destination =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl text-gray-800 mb-4 text-center">Destinos de Viaje</h1>
      <input
        type="text"
        placeholder="Buscar destinos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-3 w-full border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <div>
          <h2 className="text-2xl text-gray-700 mb-2 text-center mt-6 p-10">Destinos Predeterminados</h2>
          {filteredDestinations.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredDestinations.map((destination, index) => (
                <li key={index} className="transition-transform transform hover:scale-105 mb-4 border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl cursor-pointer">
                  <div className="relative">
                    {images[destination.name] && (
                      <img src={images[destination.name]} alt={destination.name} className="w-full h-48 object-cover cursor-pointer" />
                    )}
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                      {destination.name}
                    </div>
                  </div>
                  <h4 className="text-lg text-gray-600 mt-2 p-4">Descripción: {destination.info || 'Sin descripción'}</h4>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-red-500 text-center">No se encontraron destinos que coincidan con tu búsqueda.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Travel;