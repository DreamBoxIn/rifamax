import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PaymentSuccess() {
  const router = useRouter();
  const { number } = router.query;

  useEffect(() => {
    if (number) {
      fetch('https://rifapomelo.vercel.app/api/confirm-purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: parseInt(number, 10) }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert('Compra confirmada. Número bloqueado.');
          } else {
            alert('Error: Número no encontrado en los vendidos.');
          }
        });
    }
  }, [number]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-orange-200 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-orange-700">¡Gracias por tu compra!</h1>
      <p className="text-lg text-center mb-6 text-gray-700">
        Tu número de rifa ha sido comprado exitosamente.
      </p>
    </div>
  );
}
