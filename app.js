const express = require('express');
const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

const bodyParser = require('body-parser');
const validator = require('express-validator');

// Get the config
const config = require('./config');

// Get the router
const router = require('./routes');

// Connect to MongoDB
mongoose.connect(config.MONGODB_URL, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true,useFindAndModify:false});

// Listen to connection event
mongoose.connection.on('connected', function mongoListener(err) {
  console.log('Mongodb connected successfully');
});

// Handle error event
mongoose.connection.on('error', function mongoErrorListener(err) {
  console.log('Connecting to MongoDB failed!');

  // Try to reconnect
  mongoose.connect(config.MONGODB_URL, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true});
});

// Initialize app
const app = express();

// Set Middleware
app.use(bodyParser.json());

// Set Middleware
app.use(validator());

// Set response headers
app.use((req, res, next) => {
  // Control access to clients
  res.header('Access-Control-Allow-Origin', '*');

  // Control allowed headers
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if(req.method == 'OPTIONS') {
    // Set allowed HTTP methods
    req.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(200).json({})
  }

  next();
});

// Set Routes
router(app);

// Listen to HTTP Port
app.listen(config.HTTP_PORT, function httpListener(){
  console.log('API Server running on PORT %s', config.HTTP_PORT);
});

module.exports = app;