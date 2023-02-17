import React from 'react'
import { motion } from 'framer-motion'

const LayeredButton = ({action = null, text}) => {
  return (
    <motion.div
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{duration: 1, type: 'spring', bounce: 0.4}}
    whileHover={{scale: 0.95}}
    key={`text-button-${Math.random()}`}
    onClick={() => action()} className="button-box">
        <div className="button-box-background">
            <div className="button-box-background-layers">
                <div className="button-box-background-layer" />
                <div className="button-box-background-layer" />
                <div className="button-box-background-layer" />
            </div>
        </div>
        <div className="button-box-texts">
            <span className="button-box-texts-top">{text}</span>
            <span className="button-box-texts-bottom">{text}</span>
        </div>
    </motion.div>
  )
}

export const BorderedButton = ({action = null, text, invert=false}) => {
  return (
    <div onClick={() => action()} className="button-box bordered">
      <div className={`button-box-texts ${invert ? 'invert' : ''}`}>
          <span className="button-box-texts-top">{text}</span>
          <span className="button-box-texts-bottom">{text}</span>
      </div>
    </div>
  )
}

export const ArrowButton = ({action = null, direction = 'down', theme = 'dark'}) => {
  return (
    <div onClick={() => action()} className="button-arrow">
      <div className={`button-arrow-container ${theme}`}>
        <i className={`bx bx-${direction}-arrow-alt static`}></i>
        <i className={`bx bx-${direction}-arrow-alt hover`}></i>
      </div>
    </div>
  )
}

export default LayeredButton