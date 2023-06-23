import Card from "../Card/Card"
import styles from './Favorites.modules.css'
//*         Uso redux
import { useDispatch, useSelector } from "react-redux"
import { removeFav, filterCards, orderCards } from "../../redux/actions"
// import { useState } from "react"


const Favorites=()=>{

    const dispatch = useDispatch()

//*         Para que renderice cambios en filtro ascedente
//   const [aux, setAux] = useState(false)

//? Al hacer DESTRUCTURING, ya no debo poner estado local para cambios del filtro
    const {myFavorites} = useSelector((state) => state)
    // const {myFavorites} = useSelector((state) => state)


    const onClose =(id)=>{
        dispatch(removeFav(id))
    }

    const handleFilter=(e)=>{
        const gender = e.target.value
        dispatch(filterCards(gender))
    }

    const handleOrder=(e)=>{
        const order = e.target.value
        dispatch(orderCards(order))
        // setAux(!aux)
    }
    
    return(
        <div className={styles.Fav}>
            <div>
                <select name="" id="" onChange={handleFilter}>
                {/* <option value="" selected disabled>Filter By</option> */}

                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                </select>
            </div>

            <div>
                <select name="" id="" onChange={handleOrder}>
                    <option value="" selected disabled>Order</option>

                    <option value="A">Ascending order</option>
                    <option value="k">Descending</option>
                </select>
            </div>
           
            {myFavorites.map( 
                ({id,name,status,species,gender,origin,image}) =>{
                    return(

                        <Card className={styles.DivCard}
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