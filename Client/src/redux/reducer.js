import { ADD_FAV, REMOVE_FAV , FILTER, ORDER } from "./actions";

const initialState={
    myFavorites: [],
    allCharacters: []
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        
        case ADD_FAV:
            return{
                ...state, 
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }

        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharacters.filter((char)=>{return char.id!==parseInt(action.payload)})],
                allCharacters: [...state.allCharacters.filter((char)=>{return char.id!==parseInt(action.payload)})]
                }
        
        case FILTER:
            return{
                ...state,
                myFavorites: (state.payload === 'All') ? state.allCharacters : state.allCharacters.filter(char => char.gender === action.payload)
            }

        case ORDER:
            return{
                ...state,
                myFavorites: state.allCharacters.sort((a,b)=>{
                        if (a.id < b.id) {
                          return action.payload === 'A' ? -1 : 1;
                        }
                        else{
                          return action.payload === 'A' ? 1 : -1;
                        }
                })
            }    

        default:
            return{...state};
    }
}

export default rootReducer;