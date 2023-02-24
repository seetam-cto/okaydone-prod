import React from 'react'
import ClientSlider from './ClientSlider'
import { BorderedButton } from '@/components/Button'

const Clients = () => {
  return (
    <section id="clients" className="clients">
        <div className="container">
            <div className="clients-header">
                <div className="clients-header-title">
                    OUR CLIENTS
                </div>
                <div className="clients-header-subtext">
                    It&apos;s not a gamble; no rolling the dice,<br />
                    We work with <span className='purple'>brands of all shapes and size(s)</span> <br />
                    <span className='yellow'>Luxury</span>, <span className='teal'>Tech</span> & <span className='orange'>Sports</span> stories we tell, 
                    <br />Take a look at our partnerships in this carousel
                </div>
            </div>
        </div>
        <ClientSlider />
        <div className="container">
            <div className="clients-cta">
                <BorderedButton link={"/work"} text={"Discover our work"} />
            </div>
        </div>
    </section>
  )
}

export default Clients