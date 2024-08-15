import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPrizeSlide, setCurrentPrizeSlide] = useState(0);
  
  const pomeloImages = [
    '/images/max1.jpg',
    '/images/max2.jpg',
    '/images/max3.jpg',
  ];

  const prizes = [
    { place: '1º Lugar', description: 'Mitsubishi Lancer Evolution', image: '/images/premio1.jpg', value: '$20,000' },
    { place: '2º Lugar', description: 'BMW M3', image: '/images/premio2.jpg', value: '$15,000' },
    { place: '3º Lugar', description: 'Premio 3', image: '/images/premio3.jpg', value: '$5,000' },
  ];

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % pomeloImages.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + pomeloImages.length) % pomeloImages.length);
  };

  const handlePrizeNext = () => {
    setCurrentPrizeSlide((currentPrizeSlide + 1) % prizes.length);
  };

  const handlePrizePrev = () => {
    setCurrentPrizeSlide((currentPrizeSlide - 1 + prizes.length) % prizes.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-green-200 p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-green-700">Rifa x MAX</h1>
        <div className="relative w-full mb-6">
          <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full">←</button>
          <Image src={pomeloImages[currentSlide]} alt="Pomelo" width={300} height={300} className="rounded-full mx-auto" />
          <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full">→</button>
        </div>
        <p className="text-lg text-center mb-6 text-gray-700">
          Nuestro querido amigo MAX ha sufrido una infección grave y ha pasado 40 días internado. Las operaciones y el tratamiento han generado gastos médicos significativos. Para ayudar a cubrir estos costos y asegurar su recuperación, hemos organizado una rifa.
        </p>
        <div className="flex justify-center mb-6">
          <Link href="/buy-ticket" className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 text-center">
            Comprar Nº x $10.000
          </Link>
        </div>
        <div className="text-center text-gray-700">
          <p className="text-lg font-semibold">Para más información:</p>
          <p className="mt-2 font-semibold">Max Garcés</p>
          <a href="https://wa.me/56990115839" className="text-green-500 hover:underline">+569 90115839</a>
          <p className="mt-1">
            <a href="mailto:maxa@xxxx.com" className="text-orange-500 hover:underline">max@xxxx.com</a>
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Premios a Sortear</h2>
          <div className="flex items-center justify-center">
            <button onClick={handlePrizePrev} className="p-2 bg-gray-300 rounded-full mr-2">←</button>
            <div className="w-64 h-64 bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-full h-full max-w-full max-h-full">
                <Image 
                  src={prizes[currentPrizeSlide].image} 
                  alt={prizes[currentPrizeSlide].description} 
                  layout="fill" 
                  objectFit="contain" 
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-orange-700 mt-2">{prizes[currentPrizeSlide].place}</h3>
              <p className="text-gray-700">{prizes[currentPrizeSlide].description}</p>
              <p className="text-gray-700 font-semibold mt-2">{prizes[currentPrizeSlide].value}</p>
            </div>
            <button onClick={handlePrizeNext} className="p-2 bg-gray-300 rounded-full ml-2">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
