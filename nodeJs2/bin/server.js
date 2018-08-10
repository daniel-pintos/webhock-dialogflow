const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const path = require('path');
var server = require('http').createServer(app);
const io = require('socket.io')(server);

app.post('/webhock', function(req, res) {
  console.log("Recebendo uma requisição via POST");
  if (!req.body) {
    return res.sendStatus(400);
  }
  res.setHeader('Content-Type', 'application/json');
  console.log('Requisição para o dialogflow');

  console.log(req.body);
  console.log('Eu obtive a cidade como parametro do dialogflow' + req.body.queryResult.parameters['geo-city']);
  let city = req.body.queryResult.parameters['geo-city'];
  let w = getWeather(city);
  let response = "";

  let responseObj = {
    "fulfillmentText": response,
    "fulfillmentMessage":[{
      "text": [w]
    }],
    "source": ""
  };

  console.log("A resposta da API");
  return res.json(responseObj);
});

var apiKey = "chave-da-api";
var result;

function cb(err, response, body){
  if (err) {
    console.log('Error: ' + err);
  }
  var weather = JSON.parse(body);
  if (weather.message === 'city not found') {
    result="Unable to get weather" + weather.message;
  }else{
    result="Right now its" + weather.main.tempo + " degrees with" + weather.weather[0].description;
  }
}

function getWeather(city){
  result = undefined;
  var url = "http://api.openweathermap.org/data/2.5/weather?g=${city}&units=imperial&appid=${apiKey}";
  console.log(url);
  var req = request(url, cb);
  while (result === undefined) {
    require('deasync').runLoopOnce();
  }
  return result;
}
