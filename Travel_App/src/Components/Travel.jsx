import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css';

const Travel = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
    <div className="p-6 font-sans bg-gradient-to-r from-gray-900 to-slate-950 min-h-screen text-white animate__animated animate__fadeIn">
      <h1 className="text-3xl mb-4 text-center animate__animated animate__fadeInDown">Destinos de Viaje</h1>
      <input
        type=" text"
        placeholder="Buscar destino..."
        className="border border-gray-500 p-2 rounded mb-4 w-full bg-gray-900"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <p className="text-center animate__animated animate__flash">Cargando imágenes...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDestinations.map((destination) => (
            <div key={destination.name} className="border rounded-lg overflow-hidden shadow-lg animate__animated animate__zoomIn">
              <img src={images[destination.name]} alt={destination.name} className="w-full h-48 object-cover cursor-pointer" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{destination.name}</h2>
                <p className="text-gray-300">{destination.info}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Travel;