import axios from 'axios'
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = 'FILTER'
export const ORDER = 'ORDER' 
// export const CHAR_DETAIL = 'CHAR_DETAIL'
// export const getCharDetail = (id) =>{
//     return function(dispatch){
//         type: CHAR_DETAIL
//     }
// }


//*------------OLD ADDFAV
// export const addFav=(char)=>{
//     return{
//         type: ADD_FAV,
//         payload:char
//     }
// }
//*------------NEW ADDFAV
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };
 
//*------------OLD REMOVEFAV
// export const removeFav=(id)=>{
//     return{
//         type: REMOVE_FAV,
//         payload: id
//     }
// }
//*------------NEW REMOVEFAV
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };


export const filterCards=(gender)=>{
    return{
        type: FILTER,
        payload: gender

    }
}

export const orderCards=(id)=>{
    return{
        type: ORDER,
        payload: id
    }
}

//*     Asyncronic Action --> retorna función
