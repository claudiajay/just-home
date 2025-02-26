import React from 'react'
import './Homes.css'
import kitchen from '../../assets/kitchen.png'
import outside from '../../assets/outside.png'
import seating from '../../assets/seating.png'
import location from '../../assets/location.png'
import bed from '../../assets/bed.png'
import bath from '../../assets/bath.png'
import sqft from '../../assets/sqft.png'

const Homes = () => {
  return (
    <div className='homes container'>
      <div className="home">
        <h2>Homes For You</h2>
        <p>Based on your view history</p>

        <div className="cards">

        <div className='card'>
        <img src={kitchen} className='card-img'/>
          <div className='description'>
          <div className='property'>
            <h4 >Skyper Pool Apartment</h4>
            <div className='location'>
              <img src={location} className='vector'/>
              <p>1020 Bloomingdale Ave</p>
            </div>
          </div>
          <div className="price">
            $280,000
          </div>

          </div>

          <div className='details'>
            <div className='attribute'>
              <img src={bed} className='vector'/>
              <p>4 Beds</p>
            </div>
            <div className='attribute'>
              <img src={bath} className='vector'/>
              <p>2 Baths</p>
            </div>
            <div className='attribute'>
              <img src={sqft} className='vector'/>
              <p>450 sqft</p>
            </div>
          </div>  
        </div>


        <div className='card'>
        <img src={outside} className='card-img'/>
          <div className='description'>
          <div className='property'>
            <h4>North Dillard Street</h4>
            <div className='location'>
              <img src={location} className='vector'/>
              <p>4330 Bell Shoals Rd</p>
            </div>
          </div>
          <div className="price">
            $250<span>/month</span>
          </div>

          </div>

          <div className='details'>
            <div className='attribute'>
              <img src={bed} className='vector'/>
              <p>4 Beds</p>
            </div>
            <div className='attribute'>
              <img src={bath} className='vector'/>
              <p>2 Baths</p>
            </div>
            <div className='attribute'>
              <img src={sqft} className='vector'/>
              <p>400 sqft</p>
            </div>
          </div>  
        </div>


        <div className='card'>
        <img src={seating} className='card-img'/>
          <div className='description'>
          <div className='property'>
            <h4>Eaton Garth Penthouse</h4>
            <div className='location'>
              <img src={location} className='vector'/>
              <p>7722 18th Ave, Brooklyn</p>
            </div>
          </div>
          <div className="price">
            $180,000
          </div>

          </div>

          <div className='details'>
            <div className='attribute'>
              <img src={bed} className='vector'/>
              <p>4 Beds</p>
            </div>
            <div className='attribute'>
              <img src={bath} className='vector'/>
              <p>2 Baths</p>
            </div>
            <div className='attribute'>
              <img src={sqft} className='vector'/>
              <p>450 sqft</p>
            </div>
          </div>  
        </div>
        


        </div>
        
      </div>

    </div>
  )
}

export default Homes