import React, {useState, useEffect } from 'react'

const Background = () => {
    const [mousePos, setMousePos] = useState({});
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener(
              'mousemove',
              handleMouseMove
            );
        };
    },[])
    return (
        <div className="background">
            <div style={{
                transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`
            }} id="blob"></div>
            <div className="background-overlay"></div>
        </div>
    )
}

export default Background