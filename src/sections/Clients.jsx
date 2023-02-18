import React from 'react'
import ClientSlider from './ClientSlider'
import { BorderedButton } from '@/components/Button'

const Clients = ({clients}) => {
  return (
    <section id="clients" className="clients">
        <div className="container">
            <div className="clients-header">
                <div className="clients-header-title">
                    OUR CLIENTS
                </div>
                <div className="clients-header-subtext">
                    It&apos;s not a gamble, no rolling the dice <br />
                    We work with <span className='purple'>brands of all shapes and size</span><br />
                    Stories of <span className='teal'>tech</span>, <span className='yellow'>luxury</span> to sports we tell <br />
                    Take a look at our partnerships
                </div>
            </div>
        </div>
        <ClientSlider slides={clients} />
        <div className="container">
            <div className="clients-cta">
                <BorderedButton link={"/work"} text={"Discover our work"} />
            </div>
        </div>
    </section>
  )
}

export default Clients