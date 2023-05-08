import React from "react"
import styles from "./Card.module.css";
// export default function Card({id,name,species,gender,image,onClose}) {
export default function Card(props) {
   const [selected, setSelected] = React.useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };
   
   return (
      <div className={`${styles.DivCard} ${selected ? styles.selected : ""}`}
      key={props.id}
      onClick={handleClick}>
         <button className={styles.Button} 
            href="#" 
            data-back="C-137" 
            data-front="To another dimention" 
            onClick={(event)=>{
               console.log("Working")
               event.stopPropagation(); //Prevents event from going to the parent (div)
               props.onClose(props.id, event);}}
         />
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img className={styles.Image} src={props.image} alt="character" />
      </div>
   );
}
