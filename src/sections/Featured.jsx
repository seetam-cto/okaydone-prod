import React from 'react'
import Link from 'next/link'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"
import backimg1 from "../assets/b5.jpg"
import backimg2 from "../assets/w14.jpg"

const Featured = () => {
  return (
    <section className="featured">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Featured Insights</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-sm-12">
                    <div className="featured-container" style={{"--align": "flex-start"}}>
                        <div className="featured-content">
                            <div className="featured-content-backimg">
                                <MouseParallaxContainer className='featured-content-backimg-box' globalFactorX={0.1} globalFactorY={0.1}>
                                    <MouseParallaxChild className='featured-content-backimg-img' factorX={-10} factorY={-3}>
                                        <img src={backimg1.src} alt="" />
                                    </MouseParallaxChild>
                                </MouseParallaxContainer>
                            </div>
                            <h5>Product Photography</h5>
                            <h2>Product Photography for a splendid craft beer brewery retailing across Bengaluru</h2>
                            <Link href={"#"} className='featured-content-link' style={{"--color": "teal"}}>Continue reading</Link>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-12">
                    <div className="featured-container" style={{"--align": "flex-start"}}>
                        <div className="featured-content">
                            <div className="featured-content-backimg">
                                <MouseParallaxContainer className='featured-content-backimg-box' globalFactorX={0.1} globalFactorY={0.1}>
                                    <MouseParallaxChild className='featured-content-backimg-img' factorX={-10} factorY={-3}>
                                        <img src={backimg2.src} alt="" />
                                    </MouseParallaxChild>
                                </MouseParallaxContainer>
                            </div>
                            <h5>Wedding Photography</h5>
                            <h2>Destination Wedding Photo Story for India&apos;s first Miss Earth (2010), Nicole Faria Pawar</h2>
                            <Link href={"#"} className='featured-content-link' style={{"--color": "teal"}}>Continue reading</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured