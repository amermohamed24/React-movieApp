import * as actions from './ActionType'
import {initialState} from './ContextApi'


export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actions.ADD_MOVIE_TO_WATCH_LIST:
            return{
                ...state,
                watchList:[action.payload, ...state.watchList]
            };
        case actions.REMOVE_MOVIE_FROM_WATCH_LIST:
            return{
                ...state,
                watchList:state.watchList.filter((movie=>movie.imdbID !== action.payload))
            };
        case actions.MOVE_MOVIE_TO_WATCHE_LIST:
            return{
                ...state,
                watched:state.watched.filter((movie=>movie.imdbID !== action.payload.imdbID)),
                watchList:[action.payload,...state.watchList]
            };
        case actions.ADD_MOVIE_TO_WATCHED:
            return{
                ...state,
                watchList:state.watchList.filter((movie=>movie.imdbID !== action.payload.imdbID)),
                watched:[action.payload, ...state.watched]
            };
        case actions.REMOVE_MOVIE_FROM_WATCHED:
            return{
                ...state,
                watched:state.watched.filter((movie=>movie.imdbID !== action.payload))
            };
        default:
            return state;

    }
}