const http = require('http');
const data = require ('./utils/data.js')

const PORT = 3001;
http.createServer((req, res)=>{
//*          Segundo argumento como dispositivos con acceso a cambios
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const {url} = req
   if( url.includes('/rickandmorty/character') ){
    const id = url.split('/').at(-1);
    const character = data.find( (char) => char.id === Number(id) )

    if(!character){
        res.writeHead(404, {'Content-Type': 'text/plain'})
        return res.end('Rout NOT found')
    }

    res.writeHead(200, {'Content-Type': 'application/json'})
    console.log(JSON.stringify(character))
    return res.end(JSON.stringify(character))
   }

}).listen(3001, 'localhost', () => console.log(`Server listening in port ${PORT}`))

