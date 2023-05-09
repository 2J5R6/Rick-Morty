import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
// import characters /*, { Rick }*/ from './data.js'
import Nav from './components/Nav/Nav'
import axios from "axios"

function App () {
  const [characters, setCharacters]=useState([]);
  const [allCharac, setAllCharac]= useState([]);

  function onSearch(id){ // id del nuevo character
    // setCharacters([...characters, newCharacter])
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    console.log(data)
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
         setAllCharac((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
   })
   .catch((error) => {
    alert('¡No hay personajes con este ID! => ' + error.message);
  });
  };

  function onClose(id){ // id del nuevo character
   const byecharacter= characters.filter(char=>char.id!==id);
   setCharacters(byecharacter)
  };

  return (
    <div className='App' style={{ padding: '25px' }}>
        <Nav onSearch={onSearch}/>
        <Cards characters={characters} onClose={onClose}/>
        <button onClick={()=> setCharacters(allCharac)}>Reset</button>

    </div>
  )
}

export default App
