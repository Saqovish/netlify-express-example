const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());

router.get('/', (req, res) => {
    console.log("Hello, world");
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);