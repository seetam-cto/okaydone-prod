import LayeredButton, { ArrowButton, ArrowButtonAction } from '@/components/Button';
import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export const TextLine = ({text, middle}) => {
  return (
    <div className="hero-header-lines">
      {text.split("").map((letter, i) => 
        <motion.div
        initial={{x: 150, opacity: 0}}
        animate={{x: 0, opacity:1}}
        transition={{duration: 1, delay: 0.5+0.05*i, type: 'spring', bounce: 0.6}}
        className='hero-header-lines-line'
        key={`hero-header-line-letter-i${Math.random()}`}>
          {letter}
        </motion.div>
      )}
      {middle && <div className='hero-header-lines-middle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
    </div>
  )
}

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{duration: 1.5, delay: 1, type: 'spring', bounce: 0.4}}
      className="hero-video">
        <Tilt
        style={{
          width: '100vw', 
          height: '100vh', 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center'}}
        transitionSpeed={700}
        transitionEasing={"ease"}
        perspective={1000}
        trackOnWindow={false}>
        <video
        autoPlay={true}
        controls={false}
        loop={true}
        muted={true}
        src={'/hero-video.mp4'} />
        <div className="hero-video-overlay" />
        </Tilt>
      </motion.div>
      <h1 className="hero-header">
        <div className='hero-header-context'>content that is</div>
        <TextLine text={"recent"} />
        <TextLine text={"relevant"} middle={true} />
        <TextLine text={"relatable"} />
      </h1>
      <div className="hero-cta">
        <LayeredButton link={"/solutions"} text={"Discover what we do"} />
      </div>
      <div className="hero-down">
        <ArrowButtonAction action={() => window.scrollBy(0,1000)} direction='down' theme='dark' />
      </div>
    </section>
  )
}

export default Hero