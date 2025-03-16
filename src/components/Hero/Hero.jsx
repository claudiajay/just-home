import React from 'react'
import './Hero.css'
import search from '../../assets/search.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">

        <button className="home-guide">LET US GUIDE YOUR HOME</button>

        <h1>Discover a place you'll love to live</h1>

        <ul className='sale-rent'>
          <li>Sale</li>
          <li> Rent</li>
        </ul>

        <form >
          <div className='search-div'>
          <input type='search' placeholder='Enter Name, Keywords...'/>
          {/* <button className='search-btn'>
            <img src={search} className='search'/>
            </button>     */}
          </div>

        </form>
        
      </div>
    </div>
  )
}

export default Hero