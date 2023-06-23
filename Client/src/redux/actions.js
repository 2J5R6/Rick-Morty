export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = 'FILTER'
export const ORDER = 'ORDER' 
// export const CHAR_DETAIL = 'CHAR_DETAIL'

export const addFav=(char)=>{
    return{
        type: ADD_FAV,
        payload:char
    }
}

export const removeFav=(id)=>{
    return{
        type: REMOVE_FAV,
        payload: id
    }
}

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

// export const getCharDetail = (id) =>{
//     return function(dispatch){
//         type: CHAR_DETAIL
//     }
// }