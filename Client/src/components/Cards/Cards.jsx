import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";


export default function Cards({characters, onClose}) {
   // const { characters } = props;
   // function onClose(id){ // id del nuevo character
   //    const byecharacter= characters.filter(char=>char.id!==id);
   //    setCharacters(byecharacter)
   //   };

   return (
   <div className={styles.DivCards}>
      {characters.map(propi=>{
         console.log(propi)
         return(
            <Card
          key={propi.id}
          id={propi.id}
          name={propi.name}
          status={propi.status}
          species={propi.species}
          gender={propi.gender}
          origin={propi.origin?.name}
          image={propi.image}
          onClose={()=>onClose(propi.id)}
            />
         )
      })}
   </div>);
}
