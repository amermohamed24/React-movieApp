import React from 'react'
import './movies.css'
import { useMovieContext } from '../Context Api/ContextApi'
import * as actions from '../Context Api/ActionType'

const Movie_Controls = ({movie,type}) => {
  const movieContext=useMovieContext()
  return (
    <div className='control'>
        {type==='watchList' &&(
            <>
                <button className='ctr-btn' onClick={()=>{
              movieContext.dispatchMovie({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload:movie
              })
            }}>
                    <i className='fa-solid fa-eye'/>
                </button>
                <button className='ctr-btn-x' onClick={()=>{
              movieContext.dispatchMovie({
                type: actions.REMOVE_MOVIE_FROM_WATCH_LIST,
                payload:movie.imdbID
              })
            }} >
                    <i className='fa-fw fa fa-times'/>
                </button>
            </>
        )}
         {type==='watched' &&(
            <>
                <button className='ctr-btn' onClick={()=>{
              movieContext.dispatchMovie({
                type: actions.MOVE_MOVIE_TO_WATCHE_LIST,
                payload:movie
              })
            }}>
                    <i className='fa-solid fa-eye-slash'/>
                </button>
                <button className='ctr-btn-x' onClick={()=>{
              movieContext.dispatchMovie({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload:movie.imdbID
              })
            }} >
                    <i className='fa-fw fa fa-times'/>
                </button>
            </>
        )}
    </div>
  )
}

export default Movie_Controls