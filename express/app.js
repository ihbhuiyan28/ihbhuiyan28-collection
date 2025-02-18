import express from 'express';

const app = express();

const PORT = process.env.PORT;

app.get('/', function (_req, res) {
    res.send('Hello Express!');
});

app.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`);
});