//Styles
import './App.css'
//Commons imports
import axios from "axios"
import { useState} from 'react'
//Router-DOM
import { Routes, Route, useLocation } from 'react-router-dom'
//Componentes
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'

function App () {
  const [characters, setCharacters]=useState([]);

  const location=useLocation()

  function onSearch(id){ // id del nuevo character
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    console.log(data)
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
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
    {
      location.pathname !== "/" &&
      <Nav onSearch={onSearch}/>
    }
        
      <Routes>
          <Route path='/' element={<Form/>} />

          <Route path="/home" element={
            <Cards characters={characters} onClose={onClose} />
            }>
          </Route>
        
          <Route path="/about" element={<About/>} />
          <Route path="/detail/:id/" element={<Detail/>}/>

      </Routes>

    </div>
  );
}

export default App;
