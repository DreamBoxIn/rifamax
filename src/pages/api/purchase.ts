import { NextApiRequest, NextApiResponse } from 'next';

let availableNumbers = Array.from({ length: 100 }, (_, i) => i + 1); // Números del 1 al 100

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { number } = req.body;
    if (availableNumbers.includes(number)) {
      availableNumbers = availableNumbers.filter(num => num !== number);
      res.status(200).json({ success: true, paymentLink: `https://mpago.la/2gsf4Zk?number=${number}` });
    } else {
      res.status(400).json({ success: false, message: 'Número no disponible' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
