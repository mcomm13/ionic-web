const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;

// API file for interacting with MongoDB
// const api = require('./server/routes/api');

// Connect to Mongo
const url =
  'mongodb+srv://mcomm:7qytNSjbwoTIqFdn@mcomm1-m715q.azure.mongodb.net/personal?retryWrites=true';

const connection = closure => {
  return MongoClient.connect(
    url,
    { useNewUrlParser: true },
    (err, client) => {
      if (err) {
        return console.error(err);
      }
      console.log('Connected successfully to server');
      const db = client.db();
      closure(db);
    }
  );
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: ''
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err === 'object' ? err.message : err;
  res.send(501).json(response);
};

// Parsers
app.use(bodyParser.json());

// Angular WWW output folder
app.use(express.static(path.join(__dirname, 'www')));

// APIs
// app.use('/api', api);
// Get blogs
app.get('/api/blogs', (req, res) => {
  connection(db => {
    db.collection('blog')
      .find()
      .toArray()
      .then(blogs => {
        response.data = blogs;
        res.json(response);
      })
      .catch(err => {
        sendError(err, res);
      });
  });
});

// Get songs
app.get('/api/music', (req, res) => {
  connection(db => {
    db.collection('music')
      .find()
      .toArray()
      .then(music => {
        response.data = music;
        res.json(response);
      })
      .catch(err => {
        sendError(err, res);
      });
  });
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});

//Set Port
const port = process.env.PORT || '8080';
app.set('port', port);

app.listen(port, () => console.log(`Running on localhost:${port}`));
