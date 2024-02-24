import React from 'react'
import { useMovieContext } from '../Context Api/ContextApi'
import './movies.css'
import Movie_Card from './Movie_Card'
const Watched = () => {
  const movieContext=useMovieContext()
  return (
    <div className='watch-list'>
      <div className='container'>
        <div className='Heading'>
          <div className='head-watchlist'><span>My</span> Watched</div>
          <div className='span-watchList'> {movieContext.watched.length} {movieContext.watched.length===1 ? "Movie" :"Movies"}</div>
        </div> 
        {movieContext.watched.length >0 ? (
          <div className='movie-grid'>
            {movieContext.watched.map((movie)=>(
              <Movie_Card key={movie.imdbID} movie={movie} type="watched"/>
            ))}
          </div>
        ): (<h2>No movies in Your Watched Movies</h2>)}
      </div>
    </div>
  )
}

export default Watched