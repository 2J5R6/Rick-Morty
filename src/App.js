//Styles
import './App.css'
//Commons imports
import axios from "axios"
import { useState, useEffect} from 'react'
//Router-DOM
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
//Componentes
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'

function App () {
  const [characters, setCharacters]=useState([]);

  const location=useLocation();
  const navigate=useNavigate();

  const [access, setAccess] = useState(false);
  //---------------FAKE CREDENTIAL------
  const f_email="asd@qwe.com"
  const f_passw="!1234As"
  //------------------------------------

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

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const login=({email, password})=>{
    if(f_email===email && f_passw===password){
      setAccess(true);
      navigate("/home");
    }else{
      alert("Credenciales inválidas")
    }
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
  {//----uso propiedad pathname de useLocation, podría usar destructuring al definir-------
      location.pathname !== "/" &&
      <Nav onSearch={onSearch}/>
  }
        
      <Routes>
          <Route path='/' element={<Form login={login} />} />

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
