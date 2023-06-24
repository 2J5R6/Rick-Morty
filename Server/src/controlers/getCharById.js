const axios = require('axios')

// ''http://localhost:3001/rickandmorty/character/
const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById =(req, res)=>{

    const {id} = req.params

//*         UN CONTROLADOR    
    axios.get(URL+id)
        
        .then( (response)=>{
            const {data} = response
            const character ={
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            }

       //     console.log(character)
       //     res.writeHead(200, {'Content-Type': 'application/json'})
       //     return res.end(JSON.stringify(character))
          res.status(200).json(character)
        })

        .catch( (error) =>{
    //         console.log(error.message)
    //         res.writeHead(500, {'Content-Type': 'text/plain'})
    //         return res.end(error.message)
            if(error.status=== 404){
                res.status(404).send('Not found')
            }else{
                res.status(500).json({message: error.message})
            }
        })

}


module.exports = getCharById;