const http = require('http');
const PORT = 8080;

http.createServer((request, response) => {
if (request.method === 'GET') {
    switch (request.url) {
       case '/':
           response.end(JSON.stringify({
               message: 'todolist server'
           }))
    }
}
}).listen(PORT);
