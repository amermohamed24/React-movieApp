import { useContext, useEffect } from "react";
import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";



export const initialState={
    watched:localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")): [],
    watchList:localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")): []
}

export const GlobalContext=createContext(initialState)

const ContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    useEffect(()=>{
        localStorage.setItem("watched",JSON.stringify(state.watched))
        localStorage.setItem("watchList",JSON.stringify(state.watchList))
    },[state])
    return <GlobalContext.Provider value={{watched:state.watched,watchList:state.watchList,dispatchMovie:dispatch}}>{children}</GlobalContext.Provider>
}

export default ContextProvider;

export const useMovieContext=()=>{
    return useContext(GlobalContext)
}