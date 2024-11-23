import React, { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Autoplay, Navigation, A11y, Pagination, Grid } from 'swiper';


const ClientSlider = () => {
    return (
      <div data-cursor-text="DRAG" data-cursor-size="100px" data-cursor-color="#A374FF" className="clientslider">
        <div className="stage">
            <div className="conta">
            <div className="ring">
                <div className="img" style={{backgroundImage: 'url(./clients/gamyam-bg.jpg)'}}>
                    <Image width={300} height={300} quality={100} className="logo large" src="/clients/gamyam-logo.png" alt="" />
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/motilal-bg.jpg)'}}>
                    <Image width={300} height={300} quality={100} className="logo large" src="/clients/motilal-logo.png" alt="" />
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/heineken-bg.jpg)'}}>
                    <div className="glass"><Image width={300} height={300} quality={100} className="logo large" src="/clients/heineken-logo.png" alt="" /></div>
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/lll-bg.jpg)'}}>
                    <div className="glass"><Image width={300} height={300} quality={100} className="logo" src="/clients/lll-logo.png" alt="" /></div>
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/btp-bg.jpg)'}}>
                    <div className="glass"><Image width={300} height={300} quality={100} className="logo" src="/clients/btp-logo.png" alt="" /></div>
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/godrej-bg.jpg)'}}>
                    <div className="glass"><Image width={300} height={300} quality={100} className="logo dark" src="/clients/godrej-logo.png" alt="" /></div>
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/ceat-bg.jpg)'}}>
                    <div className="glass"><Image width={300} height={300} quality={100} className="logo dark" src="/clients/ceat-logo.png" alt="" /></div>
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/hcg-bg.jpg)'}}>
                    <Image width={300} height={300} quality={100} className="logo large" src="/clients/healthcare-global-logo.png" alt="" />
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/google-bg.jpg)'}}>
                    <div className="glass"><Image width={300} height={300} quality={100} className="logo dark" src="/clients/google-logo.png" alt="" /></div>
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/bcp-bg.jpg)'}}>
                    <div className="glass"><Image width={300} height={300} quality={100} className="logo dark" src="/clients/bcp-logo.png" alt="" /></div>
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/rcb-bg.jpg)'}}>
                    <div className="glass"><Image width={300} height={300} quality={100} className="logo" src="/clients/rcb-logo.png" alt="" /></div>
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/oneplus-bg.jpg)'}}>
                    <Image width={300} height={300} quality={100} className="logo large" src="/clients/oneplus-logo.png" alt="" />
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/ayatana-bg.jpg)'}}>
                    <div className="glass"><Image width={300} height={300} quality={100} className="logo light" src="/clients/ayatana-logo.png" alt="" /></div>
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/pernod-bg.jpg)'}}>
                    <div className="glass"><Image width={300} height={300} quality={100} className="logo large" src="/clients/pernod-logo.png" alt="" /></div>
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/nrai-bg.jpg)'}}>
                    <Image width={300} height={300} quality={100} className="logo" src="/clients/nrai-logo.png" alt="" />
                </div>
                <div className="img" style={{backgroundImage: 'url(/clients/clear-trip-bg.jpg)'}}>
                    <div className="glass"><Image width={300} height={300} quality={100} className="logo light large" src="/clients/clear-trip-logo.png" alt="" /></div>
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/itbt-bg.jpg)'}}>
                    <Image width={300} height={300} quality={100} className="logo dark" src="/clients/itbt-logo.png" alt="" />
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/stepinout-bg.jpg)'}}>
                    <Image width={300} height={300} quality={100} className="logo large" src="/clients/steppin-out-logo.png" alt="" />
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/jain-bg.jpg)'}}>
                    <Image width={300} height={300} quality={100} className="logo" src="/clients/jain-logo.png" alt="" />
                </div>
                <div className="img" style={{backgroundImage: 'url(./clients/startup-karnataka-bg.jpg)'}}>
                    <Image width={300} height={300} quality={100} className="logo large" src="/clients/startup-karnataka-logo.png" alt="" />
                </div>
            </div>
            </div>
        </div>
      </div>
    )
}

const CustoArrow = ({dir}) => (
    <div data-cursor-sticky={`#bw-${dir}`} data-cursor-text={dir == "next" ? "Next" : "Prev"} data-cursor-size="60px" data-cursor-color="#000000" className={`bw-client-slider-arrow bw-${dir}`}>
        {/* <i id={`bw-${dir}`} class='bx bx-left-arrow-alt'></i> */}
    </div>
)

export const BWClientSlider = ({data}) => {

    return (
        <div data-cursor-text="OUR CLIENTS" data-cursor-size="100px" data-cursor-color="#A374FF" className="bw-client-slider">
            <Swiper
            spaceBetween={50}
            slidesPerView={5}
            centeredSlides
            modules={[Navigation, A11y, Autoplay]}
            navigation={{
                prevEl: '.bw-prev',
                nextEl: '.bw-next'
            }}
            loop
            allowTouchMove={false}
            disableOnInteraction={false}
            autoplay={{
                delay: 0,
            }}
            speed={5000}
            breakpoints={{
                300: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 5,
                },
            }}
            >
                {/* <CustoArrow dir={'prev'} />
                <CustoArrow dir={'next'} /> */}
                {data?.clientDetails.slice(0, 12)?.map((item,index) => (
                        <SwiperSlide key={index}>
                            <div className="bw-client-slider-slide">
                                <Image className='md:h-[120px] h-[80px]' src={item?.clientLogo.url} alt={item.clientName} width={300} height={100} style={{objectFit: 'contain'}} />
                            </div>
                        </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
            spaceBetween={50}
            slidesPerView={5}
            centeredSlides
            modules={[Navigation, A11y, Autoplay]}
            navigation={{
                prevEl: '.bw-prev',
                nextEl: '.bw-next'
            }}
            loop
            allowTouchMove={false}
            disableOnInteraction={false}
            autoplay={{
                delay: 0,
                reverseDirection: true
            }}
            speed={5000}
            breakpoints={{
                300: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 5,
                },

            }}
            >
                {/* <CustoArrow dir={'prev'} />
                <CustoArrow dir={'next'} /> */}
                {data?.clientDetails.slice(12,24).map((item,index) => (
                        <SwiperSlide key={index}>
                            <div className="bw-client-slider-slide">
                                <Image className='md:h-[120px] h-[80px]' src={item?.clientLogo.url} alt={item.clientName} width={300} height={100} style={{objectFit: 'contain'}} />
                            </div>
                        </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ClientSlider