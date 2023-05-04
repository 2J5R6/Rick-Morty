import styles from "./Card.module.css";
// export default function Card({id,name,species,gender,image,onClose}) {
export default function Card(props) {
   
   return (
      <div className={styles.DivCard} key={props.id}>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <img className={styles.Image} src={props.image} alt="character" />
      </div>
   );
}
