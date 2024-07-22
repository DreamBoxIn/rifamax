import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prizes = [
    { place: '1º Lugar', description: 'Premio 1', image: '/images/premio1.jpg' },
    { place: '2º Lugar', description: 'Premio 2', image: '/images/premio2.jpg' },
    { place: '3º Lugar', description: 'Premio 3', image: '/images/premio3.jpg' },
  ];

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % prizes.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + prizes.length) % prizes.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-orange-200 p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-orange-700">Ayuda a Pomelo</h1>
        <Image src="/images/pomelo.jpg" alt="Pomelo" width={300} height={300} className="rounded-full mx-auto mb-6" />
        <p className="text-lg text-center mb-6 text-gray-700">
          Pomelo sufrió una fractura en su pierna y necesita nuestra ayuda para su operación. Participa en la rifa y contribuye a su recuperación.
        </p>
        <div className="flex justify-center mb-6">
          <Link href="/buy-ticket" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            Comprar Ticket de Rifa
          </Link>
        </div>
        <div className="text-center text-gray-700">
          <p className="text-lg font-semibold">Para más información, contáctanos:</p>
          <p className="mt-2">Javiera - Tel: 123-456-7890</p>
          <p className="mt-1">
            Email: <a href="mailto:javiera@example.com" className="text-orange-500 hover:underline">javiera@example.com</a>
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center text-orange-700 mb-4">Premios a Sortear</h2>
          <div className="flex items-center justify-center">
            <button onClick={handlePrev} className="p-2 bg-gray-300 rounded-full mr-2">←</button>
            <div className="w-64 h-64 bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
              <Image src={prizes[currentSlide].image} alt={prizes[currentSlide].description} width={200} height={200} className="mb-2" />
              <h3 className="text-xl font-bold text-orange-700">{prizes[currentSlide].place}</h3>
              <p className="text-gray-700">{prizes[currentSlide].description}</p>
            </div>
            <button onClick={handleNext} className="p-2 bg-gray-300 rounded-full ml-2">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
