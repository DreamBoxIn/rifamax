import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Ayuda a Pomelo</h1>
      <Image src="/images/pomelo.jpg" alt="Pomelo" width={300} height={300} className="rounded-full mb-8" />
      <p className="text-lg text-center mb-8">Pomelo sufrió una fractura en su pierna y necesita nuestra ayuda para su operación. Participa en la rifa y contribuye a su recuperación.</p>
      <Link href="/buy-ticket" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg">
        Comprar Ticket de Rifa
      </Link>
      <p className="text-lg text-center mt-8">Para más información, contáctanos:</p>
      <p className="text-center">Javiera - Tel: 123-456-7890 - Email: javiera@example.com</p>
    </div>
  );
}
