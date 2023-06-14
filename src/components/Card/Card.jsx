import React from "react"
import styles from "./Card.module.css"
import { useEffect } from "react";
import {Link} from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";


// export default function Card({id,name,species,gender,image,onClose}) 
function Card(props) {
      
//-----------------Aplico unos estilos----------------------
const [selected, setSelected] = React.useState(false);
const [bgColor, setBgColor] = React.useState("");

const handleClick = () => {
   setSelected(!selected);
   setBgColor(selected ? "rgb(10, 98, 139, 0.5)" : "black");
};

//-----------Estado local para botón FAV----------
const [isFav, setIsFav]= React.useState(false);


const handleFavorite=(event)=>{
   event.preventDefault();
   if (isFav) {
      setIsFav(false)
      props.removefavCard(props.id);
   } else {
      setIsFav(true);
      props.addfavCard(props);
   }
}
useEffect(() => {
   props.myFavoriteUwu.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [props.myFavoriteUwu]);

   return (
      <div>
      {
         isFav ? (
         <button className={styles.fav} onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={styles.fav} onClick={handleFavorite}>🤍</button>
            )
      }

      <div className={`${styles.DivCard} ${props.status ==="Dead" && styles.selected  }`}
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
</div>
   );
}


//*---------------Uso REDUX--> dispatch para agregar fav------------

// const dispatch=useDispatch();
// const characters=useSelector((state)=>state.characters);

export function mapDispatchToProps(dispatch){
   return{
         addfavCard: (char)=>{dispatch(addFav(char))},
         removefavCard: (id)=>{dispatch(removeFav(id))}
      }
}

//* Función para que se guarden mis favs
export function mapStateToProps(state){
   return {
      myFavoriteUwu: state.myFavorites
   }
}


//*      FIN USO DE REDUX

   export default connect(mapStateToProps ,mapDispatchToProps)(Card);