const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const singRouter = require('./src/routes/sing-route');
app.use('/sing', singRouter); 

app.listen(8888, () => console.log('listening on port 8888'));

