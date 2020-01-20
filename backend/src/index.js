const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config({path: __dirname + '/.env'})

const app = express();
const mongoose_connect = process.env.MONGOOSE_CONNECT;

mongoose.connect(mongoose_connect,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(express.json());
app.use(routes);

app.listen(3333);