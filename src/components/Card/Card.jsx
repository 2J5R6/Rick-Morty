import React from "react"
import styles from "./Card.module.css"
import {Link} from "react-router-dom"

// export default function Card({id,name,species,gender,image,onClose}) {
export default function Card(props) {
   console.log("Card component:", props.id);
   const [selected, setSelected] = React.useState(false);

   const [bgColor, setBgColor] = React.useState("rgb(10, 98, 139, 0.5)");
  
   const handleClick = () => {
   setSelected(!selected);
   setBgColor(selected ? "rgb(10, 98, 139, 0.5)" : "black");
   };
   
   return (
      <div className={`${styles.DivCard} ${props.status ==="Dead" ? styles.selected : ""}`}
      key={props.id}
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}>
         
         <button className={styles.Button} 
            onClick={()=>props.onClose(props.id)}
            data-front="To another dimention" 
            data-back="Going to C-137" 
         >Delete</button>

         <Link to={`/detail/${props.id}`}>
         <h2 className={styles.cardh2}>{props.name}</h2>
         </Link>
         
         <h2 className={styles.cardh2}>{props.status}</h2>
         <h2 className={styles.cardh2}>{props.species}</h2>
         <h2 className={styles.cardh2}>{props.gender}</h2>
         <h2 className={styles.cardh2}>{props.origin}</h2>
         <img className={styles.Image} src={props.image} alt={props.name} />
      </div>
   );
}
