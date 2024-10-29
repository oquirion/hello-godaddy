const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'index.html');
  res.send(filePath);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
