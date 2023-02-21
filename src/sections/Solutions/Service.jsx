import Link from 'next/link'
import React from 'react'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"

const Service = ({icon, backimg, color, title, subtitle, link, flexalign, logotop}) => {
  return (
    <div className="service">
        <div className="container">
            <div className="service-container" style={{"--align":flexalign}}>
                <div className={`service-icon ${logotop ? "closetop" : ""}`}>
                <MouseParallaxContainer resetOnLeave={true} globalFactorX={0.1} globalFactorY={0.1}>
                    <MouseParallaxChild factorX={0.3} factorY={0.5}>
                        <img src={icon} alt="" />
                    </MouseParallaxChild>
                </MouseParallaxContainer>
                </div>
                <div className="service-content">
                    <div className="service-content-backimg">
                        <MouseParallaxContainer className='service-content-backimg-box' globalFactorX={0.1} globalFactorY={0.1}>
                            <MouseParallaxChild className='service-content-backimg-img' factorX={-10} factorY={-3}>
                                <img src={backimg} alt="" />
                            </MouseParallaxChild>
                        </MouseParallaxContainer>
                    </div>
                    <h2 style={{color: color}}>{title}</h2>
                    <h5>{subtitle}</h5>
                    {/* <Link href={link} className='service-content-link' style={{"--color": color}}>Continue reading</Link> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service