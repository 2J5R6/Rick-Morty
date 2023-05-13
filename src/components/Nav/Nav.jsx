import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom";

export default function Nav({onSearch}){

    return (
        <div>
            <SearchBar onSearch={onSearch}/>

            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
        
        </div>
    );
}