import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";
import styles from "./Detail.module.css"

export default function Detail(){

const [character, setCharacter]=useState({});

const {id}=useParams()

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return( <>
    {character?.name ?  (
        <div className={styles.info}>
            <div>
            <h1>{character.name}</h1>
            <h2>Status: {character.status}</h2>
            <h2>Species: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Origin: {character.origin.name}</h2>
            </div>
            <img className={styles.img1} src={character.image} alt={character.name} />
        </div>)
        :
        <div>LOADING</div>
    }
        <NavLink to={"/home"} className={styles.flashback}>
            <button className={styles.agrego}>Back</button>
        </NavLink>
    </>
    );
}