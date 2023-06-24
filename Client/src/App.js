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
import Favorites from './components/Favorites/Favorites'

function App () {
  const [characters, setCharacters]=useState([]);

  const location=useLocation();
  const navigate=useNavigate();

  const [access, setAccess] = useState(true);
  //---------------FAKE CREDENTIAL------
  const f_email="julianrosassan@gmail.com"
  const f_passw="!12345K"
//*---------------OLD LOGIN--------------
  // const login=({email, password})=>{
  //   if(f_email===email && f_passw===password){
  //     setAccess(true);
  //     navigate("/home");
  //   }else{
  //     alert("Credenciales inválidas")
  //   }
  // }
//*---------------NEW LOGIN----------------

function login(userData) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
     const { access } = data;
     setAccess(data);
     access && navigate('/home');
  });
}


//*      Traigo a personajes
  function onSearch(id){ 
  if(!characters.some((char)=> char.id === Number(id)) ){
   axios(`http://localhost:3001/rickandmorty/character/${id}`)
   .then(({ data }) => {
  
      if (data.id ){
      setCharacters((oldChars) => [...oldChars, data]);
      } 
    })
    
    .catch((error) => {
     alert('¡No hay personajes con este ID!');

   })
  } else { window.alert('¡Ya lo tienes!');
  };
}


  function onClose(id){ 
   const byecharacter= characters.filter(char=>char.id!==id);
   setCharacters(byecharacter)
  };

  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);



  return (
    <div className='App' style={{ padding: '25px' }}>
  {//----uso propiedad pathname de useLocation, podría usar destructuring al definir-------
      location.pathname !== "/" &&
      (<Nav onSearch={onSearch} />)
  }
        
      <Routes>
          <Route path='/' element={<Form login={login} />} />

          <Route path="/home" element={
            <Cards characters={characters} onClose={onClose} />
            }>
          </Route>
        
          <Route path="/about" element={<About/>} />
          <Route path="/detail/:id/" element={<Detail/>}/>

          <Route path='/fav' element={<Favorites/>} />

      </Routes>

    </div>
  );
}

export default App;
