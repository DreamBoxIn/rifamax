import { NextApiRequest, NextApiResponse } from 'next';

let availableNumbers = Array.from({ length: 100 }, (_, i) => i + 1); // Números del 1 al 100

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(availableNumbers);
  } else if (req.method === 'POST') {
    const { number } = req.body;
    availableNumbers = availableNumbers.filter(num => num !== number);
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
