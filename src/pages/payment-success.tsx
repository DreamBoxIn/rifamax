import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PaymentSuccess() {
  const router = useRouter();
  const { number } = router.query;

  useEffect(() => {
    let numberStr: string;
    if (Array.isArray(number)) {
      numberStr = number[0];
    } else if (typeof number === 'string') {
      numberStr = number;
    } else {
      numberStr = '';
    }

    if (numberStr) {
      fetch('/api/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: parseInt(numberStr, 10) }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log('Número de rifa comprado exitosamente.');
          } else {
            console.error('Error: Número no disponible.');
          }
        });
    }
  }, [number]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-green-200 p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-green-700">Pago Exitoso</h1>
        <p className="text-lg text-center mb-6 text-gray-700">
          Gracias por tu compra. Tu número de rifa ha sido registrado.
        </p>
      </div>
    </div>
  );
}
