import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function BuyTicket() {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [availableNumbers, setAvailableNumbers] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/numbers')
      .then(response => response.json())
      .then(data => setAvailableNumbers(data));
  }, []);

  const handleSelectNumber = (number: number) => {
    setSelectedNumber(number);
  };

  const handlePurchase = () => {
    fetch('/api/purchase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ number: selectedNumber }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          window.location.href = `https://mpago.la/2gsf4Zk?number=${selectedNumber}`;
        } else {
          alert('Error: Número no disponible.');
        }
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-orange-200 p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-orange-700">Comprar Ticket de Rifa</h1>
        <p className="text-lg text-center mb-6 text-gray-700">
          Selecciona un número de rifa y procede al pago.
        </p>
        <div className="grid grid-cols-5 gap-2 mb-6">
          {availableNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handleSelectNumber(number)}
              className={`p-2 rounded ${selectedNumber === number ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {number}
            </button>
          ))}
        </div>
        {selectedNumber && (
          <button
            onClick={handlePurchase}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Comprar Número {selectedNumber}
          </button>
        )}
      </div>
    </div>
  );
}
