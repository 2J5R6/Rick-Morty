import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";
export default function Cards({characters}) {
   // const { characters } = props;
   return (
   <div className={styles.DivCards}>
      {characters.map(propi=>{
         return(
            <Card
          key={propi.id}
          name={propi.name}
          status={propi.status}
          species={propi.species}
          gender={propi.gender}
          origin={propi.origin?.name}
          image={propi.image}
          onClose={() => window.alert(`Emulamos que se cierra la card: ${propi.id}`)}
            />
         )
      })}
   </div>);
}
