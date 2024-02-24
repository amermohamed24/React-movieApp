import React from 'react'
import { useMovieContext } from '../Context Api/ContextApi'
import Movie_Card from './Movie_Card'
import './movies.css'

const Watch_List = () => {
  const movieContext=useMovieContext()
  return (
    <div className='watch-list'>
      <div className='container'>
        <div className='Heading'>
          <div className='head-watchlist'><span>My</span> WatchList</div>
          <div className='span-watchList'> {movieContext.watchList.length} {movieContext.watchList.length===1 ? "Movie" :"Movies"}</div>
        </div> 
        {movieContext.watchList.length >0 ? (
          <div className='movie-grid'>
            {movieContext.watchList.map((movie)=>(
              <Movie_Card key={movie.imdbID} movie={movie} type="watchList"/>
            ))}
          </div>
        ): (<h2>No movies in Your WatchList</h2>)}
      </div>
    </div>
  )
}

export default Watch_List