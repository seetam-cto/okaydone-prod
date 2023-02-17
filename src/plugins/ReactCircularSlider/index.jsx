import React, { useState, useEffect } from 'react'

const ReactCircularSlider = ({slides}) => {
    const [rotateTurn, setRotateTurn] = useState(1)
    useEffect(() => {
        setTimeout(() => {
            if(rotateTurn === 2){
                setRotateTurn(0.25)
            }else{
                setRotateTurn(rotateTurn + 0.1)
            }
        },5000)
    },[rotateTurn])
    return (
        <div className="circular-slider">
            <div className="circle" style={{"--total": [...slides, ...slides].filter((slide) => slide.priority === 1).length}}>
                {[...slides, ...slides].filter((slide) => slide.priority === 1).map((slide, i) => 
                    <div style={{
                        "--i": i+1,
                        "--r-offset": `-${rotateTurn}turn`,
                        "--timeround" : '30s',
                    }} className='stat'>
                        <div className="stat-container" style={{backgroundColor: slide.background?.hex ?? '#FFF',}}>
                            <img src={slide.clientLogo.url} alt={slide.clientName}/>
                        </div>
                    </div>
                )}
            </div>
            <div className="circle second" style={{"--total": slides.filter((slide) => slide.priority === 1).length}}>
                {slides.filter((slide) => slide.priority === 1).map((slide, i) => 
                    <div style={{
                        "--i": i+1,
                        "--r-offset": `-${rotateTurn}turn`,
                        "--timeround" : '25s',
                    }} className='stat'>
                        <div className="stat-container" style={{backgroundColor: slide.background?.hex ?? '#FFF',}}>
                            <img src={slide.clientLogo.url} alt={slide.clientName}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ReactCircularSlider