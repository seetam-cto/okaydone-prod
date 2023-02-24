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
import mpic3 from "../assets/brands/clients/bira-bg.jpeg"
import mpic4 from "../assets/brands/clients/ceat-bg.jpeg"
import mpic5 from "../assets/brands/clients/clear-trip-bg.jpg"
import mpic6 from "../assets/brands/clients/godrej-bg.jpeg"
import mpic7 from "../assets/brands/clients/google-bg.jpeg"
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
  useEffect(() => {
    (function() {
      "use strict";
    
      var carousel = document.getElementsByClassName('carousel')[0],
          slider = carousel.getElementsByClassName('carousel__slider')[0],
          items = carousel.getElementsByClassName('carousel__slider__item'),
          prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
          nextBtn = carousel.getElementsByClassName('carousel__next')[0];
      
      var width, height, totalWidth, margin = 20,
          currIndex = 0,
          interval, intervalTime = 4000;
      
      function init() {
          resize();
          move(Math.floor(items.length / 2));
          bindEvents();
        
          timer();
      }
      
      function resize() {
          width = Math.max(window.innerWidth * .25, 275),
          height = window.innerHeight * .5,
          totalWidth = width * items.length;
        
          slider.style.width = totalWidth + "px";
        
          for(var i = 0; i < items.length; i++) {
              let item = items[i];
              item.style.width = (width - (margin * 2)) + "px";
              item.style.height = height + "px";
          }
      }
      
      function move(index) {
        
          if(index < 1) index = items.length;
          if(index > items.length) index = 1;
          currIndex = index;
        
          for(var i = 0; i < items.length; i++) {
              let item = items[i],
                  box = item.getElementsByClassName('item__3d-frame')[0];
              if(i == (index - 1)) {
                  item.classList.add('carousel__slider__item--active');
                  box.style.transform = "perspective(1200px)"; 
              } else {
                item.classList.remove('carousel__slider__item--active');
                  box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
              }
          }
        
          slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
      }
      
      function timer() {
          clearInterval(interval);    
          interval = setInterval(() => {
            move(++currIndex);
          }, intervalTime);    
      }
      
      function prev() {
        move(--currIndex);
        timer();
      }
      
      function next() {
        move(++currIndex);    
        timer();
      }    
      
      function bindEvents() {
          window.onresize = resize;
          prevBtn.addEventListener('click', () => { prev(); });
          nextBtn.addEventListener('click', () => { next(); });    
      }

      init();
    })();
  },[])
    return (
        <div className="clientslider">
          <div class="carousel">
            <div class="carousel__body">
              <div class="carousel__prev"><i class="fa fa-angle-left"></i></div>
              <div class="carousel__next"><i class="fa fa-angle-right"></i></div>
              <div class="carousel__slider">
                <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                    <div class="item__3d-frame__box item__3d-frame__box--front bright" style={{backgroundImage: `url(${mpic1.src})`}}>
                      <Image width={250} height={250} quality={100} src={lpic1.src} />
                    </div>
                    <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                    <div class="item__3d-frame__box item__3d-frame__box--right">             </div>
                  </div>
                </div>
                <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                    <div class="item__3d-frame__box item__3d-frame__box--front" style={{backgroundImage: `url(${mpic2.src})`}}>
                      <Image width={250} height={250} quality={100} src={lpic2.src} />
                    </div>
                    <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                    <div class="item__3d-frame__box item__3d-frame__box--right">             </div>
                  </div>
                </div>
                <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                    <div class="item__3d-frame__box item__3d-frame__box--front" style={{backgroundImage: `url(${mpic3.src})`}}>
                      <Image width={250} height={250} quality={100} src={lpic3.src} />
                    </div>
                    <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                    <div class="item__3d-frame__box item__3d-frame__box--right">             </div>
                  </div>
                </div>
                <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                    <div class="item__3d-frame__box item__3d-frame__box--front" style={{backgroundImage: `url(${mpic4.src})`}}>
                      <Image width={250} height={250} quality={100} src={lpic4.src} />
                    </div>
                    <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                    <div class="item__3d-frame__box item__3d-frame__box--right">             </div>
                  </div>
                </div>
                <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                    <div class="item__3d-frame__box item__3d-frame__box--front" style={{backgroundImage: `url(${mpic5.src})`}}>
                      <Image width={250} height={250} quality={100} src={lpic5.src} />
                    </div>
                    <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                    <div class="item__3d-frame__box item__3d-frame__box--right">             </div>
                  </div>
                </div>
                <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                    <div class="item__3d-frame__box item__3d-frame__box--front" style={{backgroundImage: `url(${mpic6.src})`}}>
                      <Image width={250} height={250} quality={100} src={lpic6.src} />
                    </div>
                    <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                    <div class="item__3d-frame__box item__3d-frame__box--right">             </div>
                  </div>
                </div>
                <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                    <div class="item__3d-frame__box item__3d-frame__box--front" style={{backgroundImage: `url(${mpic7.src})`}}>
                      <Image width={250} height={250} quality={100} src={lpic7.src} />
                    </div>
                    <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                    <div class="item__3d-frame__box item__3d-frame__box--right">             </div>
                  </div>
                </div>
                <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                    <div class="item__3d-frame__box item__3d-frame__box--front" style={{backgroundImage: `url(${mpic8.src})`}}>
                      <Image width={250} height={250} quality={100} src={lpic8.src} />
                    </div>
                    <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                    <div class="item__3d-frame__box item__3d-frame__box--right">             </div>
                  </div>
                </div>
                <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                    <div class="item__3d-frame__box item__3d-frame__box--front" style={{backgroundImage: `url(${mpic9.src})`}}>
                      <Image width={250} height={250} quality={100} src={lpic9.src} />
                    </div>
                    <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                    <div class="item__3d-frame__box item__3d-frame__box--right">             </div>
                  </div>
                </div>
                <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                    <div class="item__3d-frame__box item__3d-frame__box--front" style={{backgroundImage: `url(${mpic10.src})`}}>
                      <Image width={250} height={250} quality={100} src={lpic10.src} />
                    </div>
                    <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                    <div class="item__3d-frame__box item__3d-frame__box--right">             </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            {/* <Swiper
                  spaceBetween={50}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.5,
                      spaceBetween: 20
                    },
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 30
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 20
                    },
                  }}
                  modules={[Autoplay, Pagination]}
                  loop={true}
                  centeredSlides={true}
                  loopedSlides={3}
                  direction={"horizontal"}
                  autoplay={{
                    delay: 100000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true}}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide className="clientslider-slider-slide">
                    <div className="box">
                      <img src={mpic1.src} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="clientslider-slider-slide">
                    <div className="box">
                      <img src={mpic2.src} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="clientslider-slider-slide">
                    <div className="box">
                      <img src={mpic3.src} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="clientslider-slider-slide">
                    <div className="box">
                      <img src={mpic4.src} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="clientslider-slider-slide">
                    <div className="box">
                      <img src={mpic5.src} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="clientslider-slider-slide">
                    <div className="box">
                      <img src={mpic6.src} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="clientslider-slider-slide">
                    <div className="box">
                      <img src={mpic7.src} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="clientslider-slider-slide">
                    <div className="box">
                      <img src={mpic8.src} alt="" />
                    </div>
                  </SwiperSlide>
            </Swiper> */}
        </div>
    )
}

export default ClientSlider