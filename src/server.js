const express = require('express');
const routes = require('./routes');

const cookieParser = require('cookie-parser');
const cors = require('cors');
const port = process.env. PORT || 3000;

require('./database');
require('dotenv').config();

const app = express()
const auth = require('./services/auth');

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})