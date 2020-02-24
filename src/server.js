const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect("mongodb+srv://tindev:cHhZlwzRQjAeTrP5@cluster0-x9u4c.gcp.mongodb.net/tindev?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(routes);

server.listen(3333);