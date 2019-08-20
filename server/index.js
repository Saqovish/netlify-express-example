const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());

router.get('/', (req, res) => {
    const clientPath = path.resolve('./build');
    res.status(200).sendFile('index.html', { root: clientPath });
});

router.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

app.use('/.netlify/functions/index', router);

module.exports = app;
module.exports.handler = serverless(app);