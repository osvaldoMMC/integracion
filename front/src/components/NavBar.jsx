import React from 'react'
import SearchBar from './SearchBar'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar({onSearch}) {
  return (
    <div className='nav'>
        <Link to="/about">
          <button className='botonLink'>About</button>
        </Link>
        <Link to="/home">
          <button className='botonLink'>Home</button>
        </Link>
        <Link to="/favorites">
          <button className='botonLink'>Favorites</button>
        </Link>
        <SearchBar onSearch={onSearch} />
    </div>
  )
}
