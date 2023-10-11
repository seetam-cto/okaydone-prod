import React from 'react'
import Link from 'next/link'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"
import backimg1 from "../assets/brands/ayatana/cover.jpg"
import backimg2 from "../assets/brands/rcb/slide1.jpg"
import Image from 'next/image'
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax'
import { BorderedButton } from '@/components/Button'

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
                <div className="col-6 col-sm-12">
                    <Link href={"/work/ayatana"} data-cursor-text="Read More" data-cursor-size="100px" data-cursor-color="#A374FF" className="featured-container tilt-left" style={{"--align": "flex-start"}}>
                        <div className="featured-content">
                            <ParallaxProvider>
                                <ParallaxBanner  className='featured-content-px'>
                                    <ParallaxBannerLayer className='featured-content-px-bg' easing={'easeInOut'} image={backimg1.src} speed={10} />
                                    <ParallaxBannerLayer className='featured-content-px-in tilt-right' speed={-2}>
                                        <h5>AYATANA</h5>
                                        <h2>Adopting new-age strategies to build India&apos;s most <span>popular luxury resort</span></h2>
                                        {/* <Link href={"/work/ayatana"} className='featured-content-link' style={{"--color": "teal"}}>Continue reading</Link> */}
                                    </ParallaxBannerLayer>
                                </ParallaxBanner>
                            </ParallaxProvider>
                            {/* <img src={backimg1.src} className="featured-content-bg" /> */}
                            {/* <div className="featured-content-backimg">
                                <MouseParallaxContainer className='featured-content-backimg-box' globalFactorX={0.1} globalFactorY={0.1}>
                                    <MouseParallaxChild className='featured-content-backimg-img' factorX={-10} factorY={-3}>
                                        <Image width={500} height={400} quality={100} src={backimg1.src} alt="" />
                                    </MouseParallaxChild>
                                </MouseParallaxContainer>
                            </div> */}
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-sm-12">
                    <Link href={"/work/royal-challengers-bangalore"} data-cursor-text="Read More" data-cursor-size="100px" data-cursor-color="#A374FF" className="featured-container tilt-right" style={{"--align": "flex-start"}}>
                        <div className="featured-content">
                            {/* <div className="featured-content-backimg">
                                <MouseParallaxContainer className='featured-content-backimg-box' globalFactorX={0.1} globalFactorY={0.1}>
                                    <MouseParallaxChild className='featured-content-backimg-img' factorX={-10} factorY={-3}>
                                        <Image width={500} height={400} quality={100} src={backimg2.src} alt="" />
                                    </MouseParallaxChild>
                                </MouseParallaxContainer>
                            </div> */}
                            <ParallaxProvider>
                                <ParallaxBanner  className='featured-content-px'>
                                    <ParallaxBannerLayer className='featured-content-px-bg' easing={'easeInOut'} image={backimg2.src} speed={3} />
                                    <ParallaxBannerLayer className='featured-content-px-in tilt-left' speed={-2}>
                                        <h5>ROYAL CHALLENGERS BENGALORE</h5>
                                        <h2>Empowering an <span>epic fan moment</span> through powerful social media showmanship</h2>
                                        {/* <Link href={"/work/royal-challengers-bangalore"} className='featured-content-link' style={{"--color": "teal"}}>Continue reading</Link> */}
                                    </ParallaxBannerLayer>
                                </ParallaxBanner>
                            </ParallaxProvider>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="container">
                <div className="clients-cta">
                    <BorderedButton link={"/work"} text={"Peek Behind the Curtains"} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured