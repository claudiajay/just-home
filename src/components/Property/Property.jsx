import React from 'react'
import './Property.css'
import link1 from '../../assets/Link.png'
import link2 from '../../assets/Link-2.png'
import link3 from '../../assets/Link-3.png'
import link4 from '../../assets/Link-4.png'
import link5 from '../../assets/Link-5.png'
import link6 from '../../assets/Link-6.png'

const Property = () => {
  return (
    <div className='property container'>
      <div className='props'>
        <h2>Find Properties in These Cities</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='image-grid'>
          <img src={link1} className='item'/>
          <img src={link2} className='item'/>
          <img src={link3} className='item'/>
          <img src={link4} className='item'/>
          <img src={link5} className='item'/>
          <img src={link6} className='item'/>
        </div>
      </div>
      
    </div>
  )
}

export default Property