import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BorderedButton } from '../Button'

const LinkText = ({text, second = false}) => {
  return (
  <motion.p
  initial={{x: 300, opacity: 0}}
  animate={{x: 0, opacity: 1}}
  transition={{duration: 1.5, delay: 1, bounce: 0.5, type: 'spring'}}
  className={`link-text ${second ? 'behind' : ''}`}>
    {text.split("").map((letter, i) => 
    <div
    className='letter'
    // initial={{x: 100}}
    // animate={{x: 0}}
    style={{opacity: second ? (i+1)%2 : i%2}}
    // transition={{duration: 1, delay: i*0.1, type: 'spring', bounce: 0.4}}
    key={`${i}-${letter}-${Math.random()}`}>{letter.trim() ? letter : <span>&nbsp;</span>}</div>)}
  </motion.p>
  )
}

const Logo = ({status}) => {
  return (
    <div className="navbar-logo-container">
      {!status ? <motion.img
      initial={{x: 100, rotate: 90, scale: 0, opacity: 0}}
      animate={{x: 0, scale: 1, rotate: 0, opacity: 1}}
      exit={{x: 100, opacity: 0}}
      transition={{duration: 1, type: 'spring', bounce: 0.3}}
      key="navbar-logo" className='navbar-logo-img' src="/logo.svg" /> 
      : <div className='navbar-logo-text'>
          <motion.div 
          initial={{x: 100, skew: -20, opacity: 0}}
          animate={{x: 0, skew: 0,opacity: 1}}
          exit={{x: 100, opacity: 0}}
          key={"navbar-logo-part-one"}
          transition={{duration: 1, type: 'spring', bounce: 0.3}}
          className='part-one'>okay</motion.div>
          <motion.div
          initial={{x: -100, skew: 20, opacity: 0}} 
          animate={{x: 0, skew: 0, opacity: 1}}
          exit={{x: -100, opacity: 0}}
          key={"navbar-logo-part-two"}
          transition={{duration: 1, type: 'spring', bounce: 0.6}}
          className='part-two'>done</motion.div>
        </div>}
    </div>
  )
}

const Navigation = ({theme = false}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [status, setStatus] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  const [activeLink, setActiveLink] = useState("")
  useEffect(() => {
    scrollPosition > 200 ? setStatus(false) : setStatus(true)
  },[scrollPosition])

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <AnimatePresence>
    <header className={`navbar ${status ? 'bghide' : ''}`}>
        <div className={`navbar-logo ${menuOpen || theme ? 'active' : ''}`}>
          {!theme && <Logo status={status} />}
        </div>
        <div className="navbar-menu">
          <BorderedButton invert={menuOpen || theme} text={"Get in touch"} />
          <div onClick={() => setMenuOpen(!menuOpen)} className={`navbar-menu-button ${menuOpen && 'active'}`}>
            <div className="navbar-menu-button-layers">
              <div className="navbar-menu-button-layers-layer" />
              <div className="navbar-menu-button-layers-layer" />
              <div className="navbar-menu-button-layers-layer" />
            </div>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
    </header>
    <section className={`menupage ${menuOpen ? 'active' : 'inactive'}`}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="menupage-contact">
            <h2>Get In Touch</h2>
            <a href="mailto:contact@okaydone.in" className="menupage-contact-link">contact@okaydone.in</a>
            <a href="tel:+91 98860 98992" className="menupage-contact-link">+91 98860 98992</a>
            <p className="menupage-contact-address">
            13th Cross Road, #17, 7th Main Rd, Indiranagar, Bengaluru, Karnataka 560038
            </p>
            </div>
          </div>
          <div className="col-8">
            <div className="navbar-menu-links">
              {menuOpen && <ul>
                <li
                key={'menu-link1'}
                onMouseEnter={() => setActiveLink("one")}
                onMouseLeave={() => setActiveLink("")}
                >
                  <Link href="/solutions" className='navbar-menu-links-link'>
                    <LinkText text={"What we do"}/>
                    {activeLink === "one" && <div
                    key="middle-line1"
                    className="middle-line one">
                      <div className="middle-line-teal" />
                      <div className="middle-line-purple" />
                    </div>}
                    <LinkText second={true} text={"What we do"}/>
                  </Link>
                </li>
                <li
                key={'menu-link2'}
                onMouseEnter={() => setActiveLink("two")}
                onMouseLeave={() => setActiveLink("")}
                >
                  <Link href="/work" className='navbar-menu-links-link'>
                    <LinkText text={"What we did"}/>
                    {activeLink === "two" && <div
                    key="middle-line1"
                    className="middle-line two">
                      <div className="middle-line-teal" />
                      <div className="middle-line-purple" />
                    </div>}
                    <LinkText second={true} text={"What we did"}/>
                  </Link>
                </li>
                <li
                key={'menu-link3'}
                onMouseEnter={() => setActiveLink("three")}
                onMouseLeave={() => setActiveLink("")}
                >
                  <Link href="/" className='navbar-menu-links-link'>
                    <LinkText text={"Wanna do it?"}/>
                    {activeLink === "three" && <div
                    key="middle-line1"
                    className="middle-line three">
                      <div className="middle-line-teal" />
                      <div className="middle-line-purple" />
                    </div>}
                    <LinkText second={true} text={"Wanna do it?"}/>
                  </Link>
                </li>
                <li
                key={'menu-link4'}
                onMouseEnter={() => setActiveLink("four")}
                onMouseLeave={() => setActiveLink("")}
                >
                  <Link href="/" className='navbar-menu-links-link'>
                    <LinkText text={"let us do it"}/>
                    {activeLink === "four" && <div
                    key="middle-line1"
                    className="middle-line four">
                      <div className="middle-line-teal" />
                      <div className="middle-line-purple" />
                    </div>}
                    <LinkText second={true} text={"let us do it"}/>
                  </Link>
                </li>
              </ul>}
            </div>
          </div>
        </div>
      </div>
    </section>
    </AnimatePresence>
  )
}

export default Navigation