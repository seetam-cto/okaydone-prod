import React from 'react'
import { Carousel } from 'react-carousel3'
  
const ReactTDC = ({slides}) => {
  return (
    <div className="tdcarousel">
        <Carousel height={460} width={1000} yOrigin={42} yRadius={60} autoPlay={true}>
            {slides.map((slide, i) => 
                <div key={i} className="tdcarousel-slide">
                    <img className='tdcarousel-slide-image' src={slide.clientLogo.url} alt={slide.clientName}/>
                </div>
            )}
        </Carousel>
    </div>
  )
}

export default ReactTDC