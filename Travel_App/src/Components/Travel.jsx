import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css';

const Travel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const UNSPLASH_ACCESS_KEY = 'zokPLsGgy9b7EiNvaEITMTw-7xrv2q6qua6mubkqjZY';

  const predefinedDestinations = [
    { name: 'París', info: 'La ciudad del amor.' },
    { name: 'Nueva York', info: 'La gran manzana.' },
    { name: 'Tokio', info: 'La capital de Japón.' },
    { name: 'Londres', info: 'La capital de Inglaterra.' },
    { name: 'Sídney', info: 'Famosa por su ópera.' },
    { name: 'Caracas', info: 'La Ciudad del Libertador' },
    { name: 'Merida', info: 'Es conocida por su arquitectura colonial española' },
    { name: 'Nueva Esparta', info: 'Conocido por su alto nivel de Turismo' },
    { name: 'San Cristobal', info: 'San Cristóbal es una ciudad venezolana' },
    { name: 'Barcelona', info: 'Barcelona ​​es una ciudad ubicada en el noreste de Venezuela' },
    { name: 'Maracay', info: 'Conocida por sus parques y jardines' },
    { name: 'Barquisimeto', info: 'La ciudad musical de Venezuela' },
    { name: 'Miranda', info: 'Famosa por sus playas y montañas' },
    { name: 'Apure', info: 'Conocida por sus llanos y fauna' },
    { name: 'Washinton D.C', info: 'Capital de EE.UU' },
    { name: 'Hong Kong', info: 'Conocida por su skyline y puerto' },
    { name: 'Hiroshima', info: 'Famosa por su historia y paz' },
    { name: 'Egipto', info: 'Conocido por sus pirámides y faraones' },
    { name: 'Turquia', info: 'Famosa por su cultura y gastronomía' },
    { name: 'Berlin', info: 'Capital de Alemania, conocida por su historia' },
    { name: 'Afganistan', info: 'Conocido por su historia y paisajes' },
    { name: 'Russia', info: 'El país más grande del mundo' },
  ];

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const newImages = {};
      try {
        for (const destination of predefinedDestinations) {
          const res = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
              query: destination.name,
              client_id: UNSPLASH_ACCESS_KEY,
            },
          });
          newImages[destination.name] = res.data.results[0]?.urls?.small;
        }
        setImages(newImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const fetchAdditionalImages = async (destinationName) => {
    try {
      const res = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: destinationName,
          client_id: UNSPLASH_ACCESS_KEY,
        },
      });
      setAdditionalImages(res.data.results.slice(1, 4).map(img => img.urls.small));
    } catch (error) {
      console.error('Error fetching additional images:', error);
    }
  };

  const handleImageClick = (destination) => {
    fetchAdditionalImages(destination.name);
    setSelectedDestination(destination);
  };

  const handleCloseModal = () => {
    setSelectedDestination(null);
    setAdditionalImages([]);
  };

  const filteredDestinations = predefinedDestinations.filter(destination =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 font-sans min-h-screen animate__animated animate__fadeIn">
      <h1 className="text-3xl mb-4 text-center animate__animated animate__fadeInDown">Destinos de Viaje</h1>
      <input
        type="text"
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
            <div key={destination.name} className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
              <img
                src={images[destination.name]}
                alt={destination.name}
                onClick={() => handleImageClick(destination)}
                className="w-full h-48 object-cover cursor-pointer rounded-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{destination.name}</h2>
                <p>{destination.info}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedDestination && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center animate__animated animate__fadeIn">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full md:max-w-2xl lg:max-w-4xl animate__animated animate__zoomIn">
            <h2 className="text-2xl font-bold mb-4">{selectedDestination.name}</h2>
            <p className="mb-4">{selectedDestination.info}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src={images[selectedDestination.name]} alt={selectedDestination.name} className="w-full h-48 object-cover rounded-lg" />
              {additionalImages.map((img, index) => (
                <img key={index} src={img} alt={`${selectedDestination.name} ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
              ))}
            </div>
            <button onClick={handleCloseModal} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Travel;