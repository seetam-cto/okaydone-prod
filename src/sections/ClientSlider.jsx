import React, {useState, useEffect, useRef} from 'react'

// import mpic1 from "../assets/brands/clients/ayatana-bg.jpg"
// import mpic2 from "../assets/brands/clients/bcp-bg.jpg"
// import mpic3 from "../assets/brands/clients/bira-bg.jpg"
// import mpic4 from "../assets/brands/clients/ceat-bg.jpg"
// import mpic5 from "../assets/brands/clients/clear-trip-bg.jpg"
// import mpic6 from "../assets/brands/clients/godrej-bg.jpg"
// import mpic7 from "../assets/brands/clients/google-bg.jpg"
// import mpic8 from "../assets/brands/clients/heineken-bg.jpg"
// import mpic9 from "../assets/brands/clients/lll-bg.png"
import mpic10 from "../assets/brands/clients/oneplus-bg.jpg"

// //logos
// import lpic2 from "../assets/brands/clients/bcp-logo.png"
// import lpic1 from "../assets/brands/clients/ayatana-logo.png"
// import lpic3 from "../assets/brands/clients/bira-logo.png"
// import lpic4 from "../assets/brands/clients/ceat-logo.png"
// import lpic5 from "../assets/brands/clients/clear-trip-logo.png"
// import lpic6 from "../assets/brands/clients/godrej-logo.png"
// import lpic7 from "../assets/brands/clients/google-logo.png"
// import lpic8 from "../assets/brands/clients/heineken-logo.png"
// import lpic9 from "../assets/brands/clients/lll-logo.png"
// import lpic10 from "../assets/brands/clients/oneplus-logo.png"

const ClientSlider = () => {
    return (
      <div data-cursor-text="DRAG" data-cursor-size="100px" data-cursor-color="#A374FF" className="clientslider">
        {/* <iframe src="/test.html" frameBorder="0"></iframe> */}
        <div className="stage">
        <div className="conta">
          <div className="ring">
            <div className="img" style={{backgroundImage: 'url(./clients/gamyam-bg.jpg)'}}>
                <img className="logo large" src="./clients/gamyam-logo.png" alt="" />
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/motilal-bg.jpg)'}}>
                <img className="logo large" src="./clients/motilal-logo.png" alt="" />
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/heineken-bg.jpg)'}}>
                <div className="glass"><img className="logo large" src="./clients/heineken-logo.png" alt="" /></div>
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/lll-bg.jpg)'}}>
                <div className="glass"><img className="logo" src="./clients/lll-logo.png" alt="" /></div>
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/btp-bg.jpg)'}}>
                <div className="glass"><img className="logo" src="./clients/btp-logo.png" alt="" /></div>
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/godrej-bg.jpg)'}}>
                <div className="glass"><img className="logo dark" src="./clients/godrej-logo.png" alt="" /></div>
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/ceat-bg.jpg)'}}>
                <div className="glass"><img className="logo dark" src="./clients/ceat-logo.png" alt="" /></div>
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/hcg-bg.jpg)'}}>
                <img className="logo large" src="./clients/healthcare-global-logo.png" alt="" />
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/google-bg.jpg)'}}>
                <div className="glass"><img className="logo dark" src="./clients/google-logo.png" alt="" /></div>
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/bcp-bg.jpg)'}}>
                <div className="glass"><img className="logo dark" src="./clients/bcp-logo.png" alt="" /></div>
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/rcb-bg.jpg)'}}>
                <div className="glass"><img className="logo" src="./clients/rcb-logo.png" alt="" /></div>
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/oneplus-bg.jpg)'}}>
                <img className="logo large" src="./clients/oneplus-logo.png" alt="" />
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/ayatana-bg.jpg)'}}>
                <div className="glass"><img className="logo light" src="./clients/ayatana-logo.png" alt="" /></div>
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/pernod-bg.jpg)'}}>
                <div className="glass"><img className="logo large" src="./clients/pernod-logo.png" alt="" /></div>
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/nrai-bg.jpg)'}}>
                <img className="logo" src="./clients/nrai-logo.png" alt="" />
            </div>
            <div className="img" style={{backgroundImage: 'url(/clients/clear-trip-bg.jpg)'}}>
                <div className="glass"><img className="logo light large" src="./clients/clear-trip-logo.png" alt="" /></div>
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/itbt-bg.jpg)'}}>
                <img className="logo dark" src="./clients/itbt-logo.png" alt="" />
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/stepinout-bg.jpg)'}}>
                <img className="logo large" src="./clients/steppin-out-logo.png" alt="" />
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/jain-bg.jpg)'}}>
                <img className="logo" src="./clients/jain-logo.png" alt="" />
            </div>
            <div className="img" style={{backgroundImage: 'url(./clients/startup-karnataka-bg.jpg)'}}>
                <img className="logo large" src="./clients/startup-karnataka-logo.png" alt="" />
            </div>
          </div>
        </div>
    </div>
      </div>
    )
}

export default ClientSlider