const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error: Unexpected token in JSON response

app.get('/data', (req, res) => {
  const data = {
    message: 'This is some JSON data',
    numbers: [1, 2, 3, 4, 5]
  };
  //Missing res.setHeader('Content-Type', 'application/json');
  res.send(data); //This will send data as plain text if Content-Type is not set
});