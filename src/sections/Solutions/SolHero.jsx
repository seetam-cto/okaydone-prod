import React from 'react'
import image1 from "../../assets/b5.jpg"
import image2 from "../../assets/w14.jpg"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const SolHero = () => {
    
    return (
        <div className="solutions-hero">
            <div className="solutions-hero-images">
                <MouseParallaxContainer className="solutions-hero-images-container" globalFactorX={0.1} globalFactorY={0.1}>
                    <MouseParallaxChild className="solutions-hero-images-1"  factorX={-0.3} factorY={-0.5}><img src={image1.src} alt="" /></MouseParallaxChild>
                    <MouseParallaxChild className="solutions-hero-images-2" factorX={-0.7} factorY={-0.8}><img src={image2.src} alt="" /></MouseParallaxChild>
                    <MouseParallaxChild className="solutions-hero-images-3" factorX={-0.5} factorY={-0.6}><img src={image1.src} alt="" /></MouseParallaxChild>
                    <MouseParallaxChild className="solutions-hero-images-4" factorX={-0.6} factorY={-0.4}><img src={image2.src} alt="" /></MouseParallaxChild>
                </MouseParallaxContainer>
            </div>
            <div className="container solutions-hero-head">
                <h1>what we do</h1>
                <h3>We craft <span className='yellow'>immersive digital experience</span> for <span className="teal">forward-thinking companies</span></h3>
            </div>
        </div>
    )
}

export default SolHero