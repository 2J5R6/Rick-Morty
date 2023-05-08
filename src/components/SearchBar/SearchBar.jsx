import './SearchBar.module.css';
import { useState } from 'react';
export default function SearchBar({onSearch}) {
   const [id, setId]=useState("");

   const handleChange=(event)=>{
      setId(event.target.value);
   }
   return (
      <div className="search-container">
         <input 
         type='search' 
         placeholder='Search'
         onChange={handleChange}
         value={id}
         />
         <span className="focus-border">
            <i></i>
         </span>
      <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
