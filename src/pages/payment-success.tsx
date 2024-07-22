// src/pages/payment-success.tsx
import TicketNumbers from '../components/TicketNumbers';

export default function PaymentSuccess() {
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
        <TicketNumbers />
      </div>
    </div>
  );
}
