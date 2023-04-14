import './App.css';
import Cards from '../../components/Cards.jsx';
import Nav from '../../components/nav/Nav';
import About from '../../components/About';
import Detail from '../../components/Detail';
import Form from '../../components/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes,Route,useLocation,useNavigate} from 'react-router-dom'


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'b13caf90d779.8b5382af1cf87dc42a65'
const email = 'sofi@gmail.com';
const password = '123abc';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters,setCharacters] = useState([]);
   const [access,setAccess] = useState(false);

   const login = (userData)=>{
      if (userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() =>{
      !access && navigate('/')
   },[access,navigate])

   

   const onSearch = (id) => {
      console.log(id)
   axios(`${URL_BASE}/${id}?key=${API_KEY}`)
   .then(Response => Response.data)// paso extra para pasar data opcional
   .then((data) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
        // window.alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = (id) =>{
   const charactersFiltered = characters.filter(character => character.id !== Number(id))
   setCharacters(charactersFiltered)
}   

   return (
      <div className='App'>
         {
            location.pathname !== '/'
             ? <Nav onSearch={onSearch}/>
             : null
         }
         <Nav onSearch= {onSearch} />
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
         
      </div>
   );
}

export default App;
