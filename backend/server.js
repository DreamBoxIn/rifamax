const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let numbers = {
  available: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  unavailable: [11, 12, 13, 14, 15]
};

app.get('/api/numbers', (req, res) => {
  res.json(numbers);
});

app.post('/api/purchase', (req, res) => {
  const { number } = req.body;
  if (numbers.available.includes(number)) {
    numbers.available = numbers.available.filter(num => num !== number);
    numbers.unavailable.push(number);
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
