import './App.css'
import axios from "axios"
import { useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'

function App () {
  const [characters, setCharacters]=useState([]);
  // const [allCharac, setAllCharac]= useState([]);

  function onSearch(id){ // id del nuevo character
    // setCharacters([...characters, newCharacter])
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    console.log(data)
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
        //  setAllCharac((oldChars) => [...oldChars, data]);
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

  // useEffect(() => {
  //   console.log(characters);
  // }, [characters]);

  return (
    <div className='App' style={{ padding: '25px' }}>
    <Nav onSearch={onSearch}/>
      
    <Routes>

        <Route path="/home" element={
          <Cards characters={characters} onClose={onClose} >
            {/* <button onClick={()=> setCharacters(allCharac)}>Reset</button> */}
          </Cards>
          }>
        </Route>
      
        <Route path="/about" element={<About/>} />
        
        <Route path="/detail/:id/" element={<Detail/>}/>

    </Routes>

    </div>
  );
}

export default App;
