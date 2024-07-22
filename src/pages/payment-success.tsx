import { useState } from 'react';

export default function PaymentSuccess() {
  // Números disponibles y no disponibles
  const availableNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
  ];
  const unavailableNumbers = []; // Ejemplo de números no disponibles

  const handleWhatsAppRedirect = () => {
    const walinkURL = `https://walink.co/3988b5`;
    window.location.href = walinkURL;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-green-200 p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-green-700">Pago Exitoso</h1>
        <p className="text-lg text-center mb-6 text-gray-700">
          Gracias por tu compra. A continuación se muestran los números de rifa disponibles. Por favor, envía tu comprobante de pago y el número de rifa que deseas.
        </p>
        <div className="flex justify-center mb-6">
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Enviar Comprobante por WhatsApp
          </button>
        </div>
        <div className="grid grid-cols-5 gap-2 mb-6">
          {availableNumbers.map((number) => (
            <div
              key={number}
              className="p-2 bg-green-200 text-green-700 rounded text-center flex flex-col items-center justify-center"
            >
              <span className="font-bold">{number}</span>
              <span className="text-xs text-green-600">Disponible</span>
            </div>
          ))}
          {unavailableNumbers.map((number) => (
            <div
              key={number}
              className="p-2 bg-gray-200 text-gray-700 rounded text-center flex flex-col items-center justify-center"
            >
              <span className="font-bold">{number}</span>
              <span className="text-xs text-gray-600">No disponible</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
