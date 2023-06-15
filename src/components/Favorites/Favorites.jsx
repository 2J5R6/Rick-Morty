import Card from "../Card/Card"
import styles from './Favorites.modules.css'
//*         Uso redux
import { removeFav } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const Favorites=()=>{
    const dispatch = useDispatch()

    const myFavorites = useSelector((state) => state.myFavorites)
    // const {myFavorites} = useSelector((state) => state)

    const onClose =(id)=>{
        dispatch(removeFav(id))
    }

    return(
        <div className={styles.fav}>
            {myFavorites.map( 
                ({id,name,status,species,gender,origin,image}) =>{
                    return(
                        <Card 
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin.name}
                            image={image}
                            onClose={onClose}
                        />
                    )
                }
            )
            }
        </div>
    )
}

export default Favorites;