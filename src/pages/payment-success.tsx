import TicketNumbers from '../components/TicketNumbers';
import { useRouter } from 'next/router';

export default function PaymentSuccess() {
  const router = useRouter();

  const handleWhatsAppRedirect = () => {
    const walinkURL = `https://walink.co/3988b5`;
    window.location.href = walinkURL;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-green-200 p-6">
      <div className="relative max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <button
          onClick={() => router.push('/')}
          className="absolute top-2 left-2 text-gray-700 hover:text-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-4xl font-extrabold text-center mb-4 text-green-700">Gracias por tu compra</h1>
        <p className="text-lg text-center mb-6 text-gray-700">
          A continuación se muestran los números de rifa disponibles. Por favor, envía tu comprobante de pago y los números que deseas.
        </p>
        <div className="flex justify-center mb-6">
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Enviar Comprobante por WhatsApp
          </button>
        </div>
        <TicketNumbers />
        <div className="flex justify-center mt-6">
          <button
            onClick={() => router.push('/')}
            className="bg-gray-500 text-white px-4 py-2 rounded-full text-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Regresar al Inicio
          </button>
        </div>
      </div>
    </div>
  );
}
