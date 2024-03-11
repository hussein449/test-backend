const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Define a POST endpoint for your API
app.post('/api/data', (req, res) => {
  const receivedData = req.body; // Access data from the request body
  console.log('Received data:', receivedData);

  // Perform actions with the data (e.g., save to a database)

  // Respond with a success message
  res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

