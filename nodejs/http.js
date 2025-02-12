import http from 'node:http';

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
        status: 200,
        data: 'Hello Node.js!'
    }));
});

server.listen(4000, () => {
    console.log(`Listening on http://localhost:${4000}`);
});