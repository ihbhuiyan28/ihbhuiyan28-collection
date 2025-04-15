import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (_req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Hello Express!'
    });
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});