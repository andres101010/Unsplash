const express = require('express');
const routes = require('../src/routes/index');
const cors = require('cors')
const fs = require('fs');
const app = express();
const createTable = require('../src/models/image')

const PORT = process.env.PORT || 4000;

createTable()
app.use(cors)
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', routes)

app.listen(PORT)
console.log('Puerto corriendo ', PORT)