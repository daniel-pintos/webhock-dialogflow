'use strict';
var express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  config = require('./config'),
  server = express(),
  mongoose = require('mongoose'),
  TeamInfo = require('./Models/TeamInfo'), //created model loading here
  GameSchedule = require('./Models/GameSchedule');

const port = normalizePort(process.env.PORT || '3000');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
var routes = require('./Routes/Routes'); //importing route
routes(server); //register the route
server.listen((port), function () {
  console.log("Server is up and listening on port: [" + port + "]");
});

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
