const http = require('http');
const fs = require('fs');

var usersList = ['user1', 'user2', 'user3', 'user4'];
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');
    if (url === '/' && method === 'GET') {
        res.write("<html>");
        res.write('<h2>Welcome Guest</h2>');
        res.write('<form action="/create-user" method = "POST">user name :<input type="text" name="UserName"> <br> <input type="submit"></form>')
        res.write("</html>");

    } else if (url === '/users' && method === 'GET') {
        res.write("<html><ul>");
        usersList.forEach((user) => {
            res.write('<li>' + user + '</li>');
        })
        res.write("</ul></html>");
    } else if (url === '/create-user' && method == 'POST') {
        const name = [];
        req.on('data', (chunk) => {
            name.push(chunk);
        });
        req.on('end', () => {
            var buff = Buffer.concat(name).toString();
            console.log(buff.split('=')[1]);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end()
            // console.log(name);
        });
        req.on('error', (err) => {
            console.log(err);
        })
    } else {
        res.statusCode = 404;
        res.end();
    }
    console.log('a', method, 'request to ', url);

})

server.listen(3000, () => {
    console.log('server listening to port', 3000);

});