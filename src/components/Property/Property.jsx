import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards'
import 'swiper/css/pagination';
import { Pagination, Scrollbar } from 'swiper/modules';
import chicago from '../../assets/chicago.png';
import losAngeles from '../../assets/losangeles.png';
import miami from '../../assets/miami.png';
import flordia from '../../assets/florida.png';
import newYork from '../../assets/nyc.png';
import './Property.css';


const properties = [
  {city: 'Chicago', count:2, img: chicago },
  {city: 'Los Angeles', count:1, img: losAngeles},
  {city: 'Miami', count: 2, img: miami },
  {city: 'Flordia', count: 3, img: flordia},
  {city: 'New York', count: 8, img: newYork}
]
const Property = () => {
  return (
    <div className="property container">
      <h2 className='title'>Find Properties in These Cities</h2>
      <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Swiper
      slidesPerview={4}
      spaceBetween={6}
      pagination={{clickable: true}}
      modules={[Pagination]}
      className="swiper"
      breakpoints={{
        640: {slidesPerview: 1},
        768: {slidesPerview: 2},
        1024: {slidesPerview: 3} 
      }}
      >
       {properties.map((props, index) => (
        <SwiperSlide key={index} >
          <div className="slide">
            <img src={props.img} alt={props.city} className='city-image'/>
            <div className="overlay">
              <h3>{props.city}</h3>
              <p>{props.count} Properties</p>
            </div>

          </div>

        </SwiperSlide>
       ))}

      </Swiper>
    </div>
  )
}

export default Property;