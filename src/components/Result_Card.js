import React from 'react'
import './result-card.css'
import {useMovieContext} from '../Context Api/ContextApi'
import * as actions from '../Context Api/ActionType'

const Result_Card = ({movie}) => {
  const movieContext=useMovieContext()
  const storedMovieInWatchList=movieContext.watchList.find((film)=>film.imdbID === movie.imdbID)
  const storedMovieInWatched=movieContext.watched.find((film)=>film.imdbID === movie.imdbID)
  const disabeldWatchList=storedMovieInWatchList? true : storedMovieInWatched? true:false;
  const disabeldWatched=storedMovieInWatched?true:false
  return (
    <div className='result-card'>
        <div className='poster'>
            {movie.Poster ? (<img src={movie.Poster} alt=''/>): (<div></div>)}
        </div>
        <div className='heading'>
            <h3>{movie.Title}</h3>
            {movie.Year? (<h4>{movie.Year}</h4>):"-"}
            <div className='btn-list'>
            <button  onClick={()=>{
              movieContext.dispatchMovie({
                type: actions.ADD_MOVIE_TO_WATCH_LIST,
                payload:movie
              })
            }} className='btn' disabled={disabeldWatchList} >Add To Watch List</button>
            <button onClick={()=>{movieContext.dispatchMovie({type: actions.ADD_MOVIE_TO_WATCHED,payload:movie})}} className='btn' disabled={disabeldWatched} >Add To Watched</button>
        </div>
        </div>
        
    </div>
  )
}

export default Result_Card