// 'use strict';
//
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const router = express.Router();
//
// // load routes
// const indexRoute = require('./routes/index');
//
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}));
//
// // IDEA: Recursos
// app.use('/',indexRoute);
//
// module.exports = app;

'use strict';
var express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  config = require('./config'),
  server = express(),
  mongoose = require('mongoose'),
  TeamInfo = require('./Models/TeamInfo'), // criado modelo carregando aqui
  GameSchedule = require('./Models/TeamInfo');

// conexão da instância do mongoose conexão do url
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl);
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());
var routes = require('./routes/index'); // importando
routes(server); // registra a rota
server.listen((process.env.PORT || 8000), function() {
  console.log("O servidor está ativo e atendendo na porta" + process.env.PORT);
});
