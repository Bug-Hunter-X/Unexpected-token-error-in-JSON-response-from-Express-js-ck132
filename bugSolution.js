const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/data', (req, res) => {
  const data = {
    message: 'This is some JSON data',
    numbers: [1, 2, 3, 4, 5]
  };
  res.setHeader('Content-Type', 'application/json');
  res.send(data); 
});