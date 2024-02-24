import React from 'react'
import './movies.css'
import Movie_Controls from './Movie_Controls'

const Movie_Card = ({movie,type}) => {
  return (
    <div className='card'>
      <div className='overlay'></div>
         {movie.Poster ? (<img src={movie.Poster} alt={movie.Title}/>): (<div></div>)}
         <Movie_Controls  movie={movie} type={type}/>
    </div>
  )
}
export default Movie_Card