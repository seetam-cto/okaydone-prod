import LayeredButton, { ArrowButton } from '@/components/Button';
import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const TextLine = ({text, middle}) => {
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

const HomeContact = () => {
  return (
    <section className="hero">
      <h1 className="hero-header">
        <span className='hero-header-context'></span><br />
        <TextLine text={"disruptive"} />
        <TextLine text={"data-driven"} middle={true} />
        <TextLine text={"and... done"} />
      </h1>
      <div className="hero-cta hcontact">
        <LayeredButton text={"Get in touch"} />
      </div>
    </section>
  )
}

export default HomeContact