const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// API file for interacting with MongoDB
const api = require('./routes/api');

// Parsers
app.use(bodyParser.json());

// Angular WWW output folder
// app.use(express.static(path.join(__dirname, 'www')));
app.use(express.static('www'));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  //res.sendFile(path.join(__dirname, 'www/index.html'));
  res.sendFile('www/index.html');
});

//Set Port
const port = process.env.PORT || '8080';
app.set('port', port);

app.listen(port, () => console.log(`Running on localhost:${port}`));
