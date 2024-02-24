import {React,useEffect,useState} from 'react'
import axios from 'axios'
import "./Add.css"
import Result_Card from '../Result_Card'

const Add_Movie = () => {
  const [value,setvalue]=useState("")
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?s=${value}&apikey=b70e5ade`).then((response)=>{
        if(response.data.Search){
            setMovies(response.data.Search)
            console.log(response.data)
        }
    })
    .catch((erorr)=>{console.log(erorr)})
  },[value])
  return (
    <div className='add-page'>
        <div className='container'>
            <div className='add-content'>
                <div className='input-container'>
                    <input type='text' placeholder='search for a movie' value={value} onChange={(e)=>{setvalue(e.target.value)}}/>
                </div>
                {movies.length>0 &&(
                    <ul className='results'>
                        {movies.map((movie)=>(<li key={movie.imdbID}><Result_Card movie={movie}/></li>))}
                    </ul>
                )}
            </div>
        </div>
    </div>
  )
}

export default Add_Movie