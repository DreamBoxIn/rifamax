const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let availableNumbers = [...Array(100).keys()].map(i => i + 1);
let soldNumbers = [];

app.get('/api/numbers', (req, res) => {
  res.json(availableNumbers);
});

app.post('/api/purchase', (req, res) => {
  const { number } = req.body;
  if (availableNumbers.includes(number)) {
    availableNumbers = availableNumbers.filter(n => n !== number);
    soldNumbers.push(number);
    res.json({ success: true, paymentLink: `https://mpago.la/2gsf4Zk?number=${number}` });
  } else {
    res.json({ success: false, message: 'Número no disponible' });
  }
});

app.get('/api/payment-success', (req, res) => {
  const { number } = req.query;
  if (number && soldNumbers.includes(parseInt(number, 10))) {
    soldNumbers = soldNumbers.filter(n => n !== parseInt(number, 10));
    res.redirect(`https://rifapomelo.vercel.app/payment-success?number=${number}`);
  } else {
    res.redirect('https://rifapomelo.vercel.app/payment-failure');
  }
});

app.get('/api/payment-pending', (req, res) => {
  const { number } = req.query;
  res.redirect(`https://rifapomelo.vercel.app/payment-pending?number=${number}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
