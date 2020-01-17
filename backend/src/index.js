const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const {setupWebsocket} = require('./websocket');

const routes = require ('./routes');


const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb://omnistack:omnistack@treino-shard-00-00-kcutq.mongodb.net:27017,treino-shard-00-01-kcutq.mongodb.net:27017,treino-shard-00-02-kcutq.mongodb.net:27017/week10?ssl=true&replicaSet=treino-shard-0&authSource=admin&retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(cors())
app.use(express.json());
app.use(routes);





server.listen(3333);