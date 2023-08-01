const express = require('express');
const routes = require('../src/routes/index')
const app = express();

const PORT = process.env.PORT || 4000;

app.use('/', routes)

app.listen(PORT)
console.log('Puerto corriendo ', PORT)