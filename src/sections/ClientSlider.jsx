import React, {useState, useEffect, useRef} from 'react'
import 'react-circular-carousel/dist/index.css'
import { shuffle } from '@/utilities'


const ClientSlider = ({slides}) => {
    return (
        <div className="clientslider">
            <div className="container">
                <div className="clientslider-grid">
                    {slides.map((slides, i) => (
                        <div key={i} className="clientslider-grid-item">
                            <img src={slides.clientLogo.url} />
                        </div>
                    ))}
                </div>
                <div className="clientslider-grid-shape1" />
                <div className="clientslider-grid-shape2" />
            </div>
        </div>
    )
}

export default ClientSlider