import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PaymentPending() {
  const router = useRouter();
  const { number } = router.query;

  useEffect(() => {
    if (number) {
      // Realizar alguna lógica si es necesario con el número de rifa
    }
  }, [number]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-orange-200 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-orange-700">Pago Pendiente</h1>
      <p className="text-lg text-center mb-6 text-gray-700">
        Tu pago está pendiente. Te notificaremos una vez que se confirme.
      </p>
    </div>
  );
}
