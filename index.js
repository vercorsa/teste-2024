const express = require('express');
const app = express();
const port = 10000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log("Listen on port 10000");
});