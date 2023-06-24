const express = require('express');
const router = require('./routes/index.js')
//      app
const server = express();
const PORT = 3001;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())
 server.use('/rickandmorty', router)


server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});










//*                 SERVIDOR con HTTP --- SIN EXPRESS
/*
const http = require('http');
const data = require ('./utils/data.js');
const getCharById = require('./controlers/getCharById.js');

const PORT = 3001;

http.createServer((req, res)=>{
//*          Segundo argumento como dispositivos con acceso a cambios
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const {url} = req
   if( url.includes('/rickandmorty/character') ){
    const id = url.split('/').at(-1);
    // const character = data.find( (char) => char.id === Number(id) )

    // if(!character){
    //     res.writeHead(404, {'Content-Type': 'text/plain'})
    //     return res.end('Rout NOT found')
    // }

    // res.writeHead(200, {'Content-Type': 'application/json'})
    // console.log(JSON.stringify(character))
    // return res.end(JSON.stringify(character))

    return getCharById(res, id)
   }

}).listen(3001, 'localhost', () => console.log(`Server listening in port ${PORT}`))
*/
