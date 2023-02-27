import React, {useState, useEffect, useRef} from 'react'
import 'react-circular-carousel/dist/index.css'
import { shuffle } from '@/utilities'
import Image from 'next/image'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import mpic1 from "../assets/brands/clients/ayatana-bg.jpg"
import mpic2 from "../assets/brands/clients/bcp-bg.jpg"
import mpic3 from "../assets/brands/clients/bira-bg.jpg"
import mpic4 from "../assets/brands/clients/ceat-bg.jpg"
import mpic5 from "../assets/brands/clients/clear-trip-bg.jpg"
import mpic6 from "../assets/brands/clients/godrej-bg.jpg"
import mpic7 from "../assets/brands/clients/google-bg.jpg"
import mpic8 from "../assets/brands/clients/heineken-bg.jpg"
import mpic9 from "../assets/brands/clients/lll-bg.png"
import mpic10 from "../assets/brands/clients/oneplus-bg.jpg"

//logos
import lpic2 from "../assets/brands/clients/bcp-logo.png"
import lpic1 from "../assets/brands/clients/ayatana-logo.png"
import lpic3 from "../assets/brands/clients/bira-logo.png"
import lpic4 from "../assets/brands/clients/ceat-logo.png"
import lpic5 from "../assets/brands/clients/clear-trip-logo.png"
import lpic6 from "../assets/brands/clients/godrej-logo.png"
import lpic7 from "../assets/brands/clients/google-logo.png"
import lpic8 from "../assets/brands/clients/heineken-logo.png"
import lpic9 from "../assets/brands/clients/lll-logo.png"
import lpic10 from "../assets/brands/clients/oneplus-logo.png"

const ClientSlider = () => {
    return (
      <div className="clientslider">
          <iframe src="/test.html" frameborder="0"></iframe>
      </div>
    )
}

export default ClientSlider