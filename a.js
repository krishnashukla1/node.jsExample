// app.js

const express = require('express');
const app = express();

// Define a route for GET requests to the root ("/")
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define the port
const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
