const app = require('./server');


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Local app listening on port 4000!`));