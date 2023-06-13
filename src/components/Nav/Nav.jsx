import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({ onSearch}) {

  function RandomOnSearch(){
    const idr = Math.floor(Math.random()*826)+1;
    onSearch(idr);
  }

 return (
   <nav>
     <div className={styles.navContainer}>
       <div className={styles.navLinks}>
         <NavLink to="/home" className={styles.navLink}>
           <button className={styles.agrego}>Home</button>
         </NavLink>

         <NavLink to="/about" className={styles.navLink}>
           <button className={styles.agrego}>About</button>
         </NavLink>
       </div>
       <SearchBar onSearch={onSearch} />

       <button className={styles.agrego} onClick={()=>RandomOnSearch()}>Random</button>
     </div>
   </nav>
 );
}


