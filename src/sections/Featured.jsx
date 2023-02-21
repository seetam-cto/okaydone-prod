import React from 'react'
import Link from 'next/link'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"
import backimg1 from "../assets/brands/ayatana/cover.jpg"
import backimg2 from "../assets/brands/rcb/slide1.jpg"

const Featured = () => {
  return (
    <section className="featured">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>featured insights</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5 col-sm-12">
                    <div className="featured-container" style={{"--align": "flex-start"}}>
                        <div className="featured-content">
                            <div className="featured-content-backimg">
                                <MouseParallaxContainer className='featured-content-backimg-box' globalFactorX={0.1} globalFactorY={0.1}>
                                    <MouseParallaxChild className='featured-content-backimg-img' factorX={-10} factorY={-3}>
                                        <img src={backimg1.src} alt="" />
                                    </MouseParallaxChild>
                                </MouseParallaxContainer>
                            </div>
                            <h5>AYATANA</h5>
                            <h2>Adopting new-age strategies to build India&apos;s most <span>popular luxury resort</span></h2>
                            <Link href={"/work/ayatana"} className='featured-content-link' style={{"--color": "teal"}}>Continue reading</Link>
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
                            <h5>ROYAL CHALLENGERS BENGALORE</h5>
                            <h2>Empowering an <span>epic fan moment</span> through powerful social media showmanship</h2>
                            <Link href={"/work/royal-challengers-bengalore"} className='featured-content-link' style={{"--color": "teal"}}>Continue reading</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured