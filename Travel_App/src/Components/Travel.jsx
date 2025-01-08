import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css';

const Travel = ({ isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const UNSPLASH_ACCESS_KEY = 'zokPLsGgy9b7EiNvaEITMTw-7xrv2q6qua6mubkqjZY';

  const predefinedDestinations = [
    { name: 'París', info: 'La ciudad del amor.', description: 'París es la capital de Francia y es conocida por su arte, moda, gastronomía y cultura. La ciudad es famosa por sus cafés y restaurantes, así como por sus monumentos icónicos como la Torre Eiffel, el Louvre y la Catedral de Notre-Dame.', curiosities: 'París tiene más de 2.000 monumentos y 170 museos.' },
    { name: 'Nueva York', info: 'La gran manzana.', description: 'Nueva York es una de las ciudades más grandes y vibrantes del mundo. Es conocida por sus rascacielos, teatros de Broadway y Central Park. La ciudad es un importante centro de cultura, arte, moda y finanzas.', curiosities: 'La Estatua de la Libertad fue un regalo de Francia a los Estados Unidos en 1886.' },
    { name: 'Tokio', info: 'La capital de Japón.', description: 'Tokio es la capital de Japón y una de las ciudades más pobladas del mundo. Es conocida por su mezcla de modernidad y tradición, con rascacielos futuristas y templos antiguos. La ciudad es un centro de tecnología, moda y gastronomía.', curiosities: 'Tokio tiene más estrellas Michelin que cualquier otra ciudad del mundo.' },
    { name: 'Londres', info: 'La capital de Inglaterra.', description: 'Londres es la capital de Inglaterra y una de las ciudades más importantes del mundo. Es conocida por su historia, cultura y arquitectura. La ciudad alberga el Palacio de Buckingham, el Big Ben y el Museo Británico.', curiosities: 'Londres tiene más de 170 museos y galerías de arte.' },
    { name: 'Sídney', info: 'Famosa por su ópera.', description: 'Sídney es la ciudad más grande de Australia y es conocida por su icónica Ópera de Sídney y el Puente del Puerto de Sídney. La ciudad tiene hermosas playas, parques nacionales y una vibrante escena cultural.', curiosities: 'La Ópera de Sídney tiene más de 1 millón de azulejos en su techo.' },
    { name: 'Caracas', info: 'La Ciudad del Libertador', description: 'Caracas es la capital de Venezuela y es conocida por su vibrante vida urbana y su rica historia. La ciudad está rodeada de montañas y tiene una mezcla de arquitectura moderna y colonial.', curiosities: 'Caracas es el lugar de nacimiento de Simón Bolívar, el libertador de América del Sur.' },
    { name: 'Merida', info: 'Es conocida por su arquitectura colonial española', description: 'Mérida es una ciudad en los Andes venezolanos, conocida por su arquitectura colonial y su clima fresco. La ciudad es un centro de cultura y educación, con una gran cantidad de universidades y museos.', curiosities: 'Mérida tiene el teleférico más largo y alto del mundo.' },
    { name: 'Nueva Esparta', info: 'Conocido por su alto nivel de Turismo', description: 'Nueva Esparta es un estado insular de Venezuela, conocido por sus hermosas playas y su vibrante industria turística. La región incluye la famosa Isla de Margarita.', curiosities: 'La Isla de Margarita es conocida como la "Perla del Caribe".' },
    { name: 'San Cristobal', info: 'San Cristóbal es una ciudad venezolana', description: 'San Cristóbal es una ciudad en el oeste de Venezuela, conocida por su clima agradable y su rica historia. La ciudad es un importante centro comercial y cultural en la región andina.', curiosities: 'San Cristóbal es conocida por su producción de café y cacao.' },
    { name: 'Barcelona', info: 'Barcelona ​​es una ciudad ubicada en el noreste de Venezuela', description: 'Barcelona es una ciudad en el noreste de Venezuela, conocida por su arquitectura colonial y su vibrante vida cultural. La ciudad es un importante centro comercial y turístico en la región.', curiosities: 'Barcelona es famosa por sus festivales y celebraciones culturales.' },
    { name: 'Maracay', info: 'Conocida por sus parques y jardines', description: 'Maracay es una ciudad en el centro de Venezuela, conocida por sus hermosos parques y jardines. La ciudad es un importante centro industrial y comercial en la región.', curiosities: 'Maracay es conocida como la "Ciudad Jardín" de Venezuela.' },
    { name: 'Barquisimeto', info: 'La ciudad musical de Venezuela', description: 'Barquisimeto es una ciudad en el oeste de Venezuela, conocida por su rica tradición musical y cultural. La ciudad es un importante centro de producción de música y arte en la región.', curiosities: 'Barquisimeto es conocida por su famosa feria anual, la Feria Internacional de Barquisimeto.' },
    { name: 'Miranda', info: 'Famosa por sus playas y montañas', description: 'Miranda es un estado en el norte de Venezuela, conocido por sus hermosas playas y montañas. La región es un importante centro turístico y cultural en el país.', curiosities: 'Miranda es el hogar del Parque Nacional El Ávila, una de las áreas naturales más importantes de Venezuela.' },
    { name: 'Apure', info: 'Conocida por sus llanos y fauna', description: 'Apure es un estado en el suroeste de Venezuela, conocido por sus vastas llanuras y su rica fauna. La región es un importante centro de producción agrícola y ganadera en el país.', curiosities: 'Apure es conocido por sus espectaculares atardeceres en los llanos.' },
    { name: 'Washinton D.C', info: 'Capital de EE.UU', description: 'Washington D.C. es la capital de los Estados Unidos y es conocida por sus monumentos históricos y su vibrante vida política. La ciudad alberga la Casa Blanca, el Capitolio y el Monumento a Lincoln.', curiosities: 'Washington D.C. no es parte de ningún estado y es una entidad independiente.' },
    { name: 'Hong Kong', info: 'Conocida por su skyline y puerto', description: 'Hong Kong es una región administrativa especial de China, conocida por su impresionante skyline y su bullicioso puerto. La ciudad es un importante centro financiero y cultural en Asia.', curiosities: 'Hong Kong tiene más rascacielos que cualquier otra ciudad del mundo.' },
    { name: 'Hiroshima', info: 'Famosa por su historia y paz', description: 'Hiroshima es una ciudad en Japón, conocida por su trágica historia y su compromiso con la paz. La ciudad alberga el Parque Memorial de la Paz y el Museo de la Paz de Hiroshima.', curiosities: 'Hiroshima fue la primera ciudad en ser atacada con una bomba atómica en 1945.' },
    { name: 'Egipto', info: 'Conocido por sus pirámides y faraones', description: 'Egipto es un país en el noreste de África, conocido por sus antiguas civilizaciones y sus monumentos históricos. El país alberga las famosas pirámides de Giza y el Valle de los Reyes.', curiosities: 'Egipto es el hogar de una de las civilizaciones más antiguas del mundo.' },
    { name: 'Turquia', info: 'Famosa por su cultura y gastronomía', description: 'Turquía es un país transcontinental, conocido por su rica cultura y su deliciosa gastronomía. El país alberga la ciudad de Estambul, que es famosa por su historia y su arquitectura.', curiosities: 'Turquía es el hogar de dos de las Siete Maravillas del Mundo Antiguo.' },
    { name: 'Berlin', info: 'Capital de Alemania, conocida por su historia', description: 'Berlín es la capital de Alemania y es conocida por su rica historia y su vibrante vida cultural. La ciudad alberga el Muro de Berlín, la Puerta de Brandeburgo y el Museo de Pérgamo.', curiosities: 'Berlín tiene más puentes que Venecia.' },
    { name: 'Afganistan', info: 'Conocido por su historia y paisajes', description: 'Afganistán es un país en el sur de Asia, conocido por su rica historia y sus impresionantes paisajes. El país alberga antiguas ciudades y monumentos históricos.', curiosities: 'Afganistán es el hogar de la antigua ciudad de Bactria, una de las civilizaciones más antiguas del mundo.' },
    { name: 'Russia', info: 'El país más grande del mundo', description: 'Rusia es el país más grande del mundo y es conocido por su rica historia y su diversidad cultural. El país alberga la famosa Plaza Roja, el Kremlin y el Museo del Hermitage.', curiosities: 'Rusia abarca 11 zonas horarias diferentes.' },
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
    <div className={`p-6 font-sans min-h-screen animate__animated animate__fadeIn ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-3xl mb-4 text-center animate__animated animate__fadeInDown">Destinos de Viaje</h1>
      <input
        type="text"
        placeholder="Buscar destino..."
        className={`border p-2 rounded mb-4 w-full ${isDarkMode ? 'border-gray-500 bg-gray-800 text-white' : 'border-gray-500 bg-gray-200 text-black'}`}
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
          <div className={`p-6 rounded-lg shadow-lg max-w-lg w-full md:max-w-2xl lg:max-w-4xl animate__animated animate__zoomIn ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <h2 className="text-2xl font-bold mb-4">{selectedDestination.name}</h2>
            <p className="mb-4">{selectedDestination.info}</p>
            <p className="mb-4">{selectedDestination.description}</p>
            <p className="mb-4"><strong>Curiosidades:</strong> {selectedDestination.curiosities}</p>
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