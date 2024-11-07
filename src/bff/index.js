const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from it is i kevin!' });
});

app.listen(5000, () => {
  console.log('BFF service running on port 5000');
});
