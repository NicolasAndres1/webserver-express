const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let out = {
        name: 'Nicolas',
        age: 21,
        url: req.url
    }

    res.write(JSON.stringify(out));
    res.end();
})
.listen(8080);

console.log('Listening to port 8080');
