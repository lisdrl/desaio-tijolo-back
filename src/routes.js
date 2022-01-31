const express = require('express');
const { transcrever } = require('./controllers/transcricao');

const routes = express();

routes.post('/transcricao', transcrever);

module.exports = routes;
