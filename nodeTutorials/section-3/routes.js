const fs = require('fs')

const requestHandler =(req, res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/' && method === 'GET'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">SEND</button></form></body>');
        res.write('</html>');
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
            console.log('MESSAGE', message )
            fs.writeFile('message.txt', message, (err)=>{
                console.log('++++', 1 )
                res.statusCode = 302; 
                res.setHeader('Location', '/');
                return res.end()
            });
        });
    }
    // res.setHeader('Content-Type', 'text/html'); 
    // res.write('<html>');
    // res.write('<head><title>My first page</title></head>');
    // res.write('<body><h1>Hello from the Node.js Server</h1></body>')
    // res.write('</html>');
    // res.end()
}



module.exports= requestHandler

