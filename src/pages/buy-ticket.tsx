import { useState, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import TicketNumbers from '../components/TicketNumbers';

export default function BuyTicket() {
  const [showBankTransferModal, setShowBankTransferModal] = useState(false);
  const router = useRouter();

  const handlePurchase = () => {
    window.location.href = 'https://mpago.la/2gsf4Zk';
  };

  const handleBankTransfer = () => {
    setShowBankTransferModal(true);
  };

  const handleCloseModal = () => {
    setShowBankTransferModal(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).id === 'bank-transfer-modal') {
      handleCloseModal();
    }
  };

  const handleWhatsAppRedirect = () => {
    const walinkURL = `https://wa.me/56994798310`;
    window.location.href = walinkURL;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-orange-200 p-6">
      <div className="relative max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <button
          onClick={() => router.push('/')}
          className="absolute top-2 left-2 text-gray-700 hover:text-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-4xl font-extrabold text-center mb-4 text-orange-700">Comprar Ticket de Rifa</h1>
        <p className="text-lg text-center mb-6 text-gray-700">
          Para participar en la rifa, por favor selecciona un método de pago.
        </p>
        <div className="flex flex-col sm:flex-row justify-center mb-4">
          <button
            onClick={handlePurchase}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 mb-2 sm:mb-0 sm:mr-2"
          >
            Pagar con Tarjeta<br />(Crédito/Débito)
          </button>
          <button
            onClick={handleBankTransfer}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 sm:ml-2"
          >
            Transferencia Bancaria
          </button>
        </div>
        <p className="text-lg text-center mt-6 text-gray-700">
          Una vez realizado el pago, debes seguir las instrucciones para compartir el comprobante y el número que quieres por WhatsApp.
        </p>
      </div>

      {showBankTransferModal && (
        <div
          id="bank-transfer-modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={handleOutsideClick}
        >
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-full overflow-auto relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Detalles de Transferencia Bancaria</h2>
            <p className="text-gray-700 mb-4">Banco: Banco Ejemplo</p>
            <p className="text-gray-700 mb-4">Cuenta: 123456789</p>
            <p className="text-gray-700 mb-4">Titular: Nombre del Titular</p>
            <p className="text-gray-700 mb-4">RUT: 12.345.678-9</p>
            <p className="text-gray-700 mb-6">Correo: ejemplo@banco.cl</p>
            <button
              onClick={handleWhatsAppRedirect}
              className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 mb-6"
            >
              Enviar Comprobante por WhatsApp
            </button>
            <TicketNumbers />
            <div className="flex justify-center mt-6">
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-full text-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
