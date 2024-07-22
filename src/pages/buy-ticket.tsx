import { useRouter } from 'next/router';

export default function BuyTicket() {
  const router = useRouter();

  const handlePurchase = () => {
    window.location.href = 'https://mpago.la/2gsf4Zk';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-orange-200 p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-orange-700">Comprar Ticket de Rifa</h1>
        <p className="text-lg text-center mb-6 text-gray-700">
          Para participar en la rifa, por favor procede al pago haciendo clic en el botón a continuación.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handlePurchase}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Proceder al Pago
          </button>
        </div>
        <p className="text-lg text-center mt-6 text-gray-700">
          Una vez realizado el pago, serás redirigido para seleccionar tu número de rifa disponible.
        </p>
      </div>
    </div>
  );
}
