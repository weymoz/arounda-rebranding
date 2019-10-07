const express = require('express');
const path = require('path');

const app = express();

app.use(express.json({ extended: false }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || 9091;
app.listen(port, '165.22.77.170');

console.log('App is listening on port ' + port);
