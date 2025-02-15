import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', function (req, res) {
    res.send('Hello Express!');
});

app.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`);
});