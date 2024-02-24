import React from 'react'
import './Header.css'
import { Link,NavLink } from 'react-router-dom'
const Header = () => {
  return(
    <div className='header'>
        <div className='container'>
            <div className='logo'>
                <Link to='/'><span>M</span>ovies</Link>
            </div>
            <div className='nav'>
                <ul>
                    <li><NavLink to='/watch_list'>Watch List</NavLink></li>
                    <li><NavLink to="/watched">Watched</NavLink></li>
                    <li><NavLink to="/" className="btn">Add a Movie</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header