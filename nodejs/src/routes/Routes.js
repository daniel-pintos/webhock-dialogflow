// 'use strict';
//
// const express = require('express');
// const router = express.Router();
//
// router.get('/',(req, res, next) => {
//   res.status(200).send({
//     title: "Node Store Api",
//     version: "0.0.2"
//   });
// });
//
// module.exports = router;

'use strict';
var express = require('express');
module.exports = function(app) {
  var gameDataController = require('../Controllers/GameDataController');
var apiRoutes =  express.Router();
app.get('/',function(req,res){
    res.send('We are happy to see you using Chat Bot Webhook');
  });
// registerUser Route
  app.route('/')
    .post(gameDataController.processRequest);
};
