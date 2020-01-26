function handleRequest(req,res){
    const {url, method} = req
    // const url = req.url
    // const method = req.method
    if(url === '/' && method === 'GET'){
        res.write('<html>')
        res.write('<head><title>Hello World</title></head>')
        res.write('<body><h1>Hello World.</h1>')
        res.write('<form action="/create-user" method="POST"><input type="text" placeholder="username" name="username" /><button type="sumbit">SEND</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/users' && method === 'GET'){
        res.write('<html>')
        res.write('<head><title>User List</title></head>')
        res.write('<body><ul><li>Jonathan</li><li>Jessica</li></ul></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/create-user' && method === 'POST'){
        const body = []
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
            console.log('MESSAGE', message )
        });
            res.statusCode = 302; 
            res.setHeader('Location', '/');
            return res.end()
    }
}

module.exports = {
    handleRequest
};