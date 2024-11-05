const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from it is i kevin!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`BFF running on port ${PORT}`));


