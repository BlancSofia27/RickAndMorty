import { ADD_FAV,REMOVE_FAV } from "./actions.types";


const inicialState ={
    myFavorites:[]
}

const reducer = (state = inicialState,{type,payload})=>{
    switch(type){
        case ADD_FAV:
        return{
            ...state,
            myFavorites:[...state.myFavorites,payload]
        }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !==payload)
            }

        default:
            return{...state}
    }
}

export default reducer;