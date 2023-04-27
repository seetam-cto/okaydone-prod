import '../styles/App.scss'
import '../styles/blobz.min.css'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-tooltip/dist/react-tooltip.css'
import 'react-toastify/dist/ReactToastify.css';
// const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
//   ssr: false
// });


export default function App({ Component, pageProps }) {
  const [ww, setWw] = useState(true)
  useEffect(() => {
    const media = window.innerWidth
    if(media > 768){
      setWw(true)
    }else{
      setWw(false)
    }
  },[])
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== 'undefined'){
      const loader = document.getElementById('globalLoader');
      const loaderbg = document.getElementById('loaderbg');
      if (loader){
        setTimeout(() => {
          loaderbg.style.opacity = "0"
          loader.style.transform = 'translateY(120%)'
          setTimeout(() => {
            loaderbg.style.display = "none"
            loader.style.display = 'none';
          }, 1000)
        }, 2000)
      }
    }
  },[router])
  return (
    <>
    {ww && <Cursor isGelly={true} cursorBackgrounColor="#17F1D150" sizeAnimationEase="ease" />}
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
    <Script src="https://kit.fontawesome.com/cbd809fbae.js" crossOrigin='anonymous' />
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-2SVMGLKE6P" />
    <script id="google-analytics"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2SVMGLKE6P', {page_path: window.location.pathname,});
      `}}
    ></script>
    <script type="application/ld+json" strategy={"afterInteractive"}
    dangerouslySetInnerHTML={{
      __html: `
      {
        "@context": "https://schema.org/", 
        "@type": "BreadcrumbList", 
        "itemListElement": [{
          "@type": "ListItem", 
          "position": 1, 
          "name": "What We Do - Solutions",
          "item": "https://www.okaydone.in/solutions"  
        },{
          "@type": "ListItem", 
          "position": 2, 
          "name": "What We Did - Our Work",
          "item": "https://www.okaydone.in/work"  
        },{
          "@type": "ListItem", 
          "position": 3, 
          "name": "Royal Challengers Bangalore - Empowering an epic fan moment through powerful social media showmanship",
          "item": "https://www.okaydone.in/work/royal-challengers-bangalore"  
        },{
          "@type": "ListItem", 
          "position": 4, 
          "name": "Contact Us",
          "item": "https://www.okaydone.in/contact-us"  
        }]
      }
      `
    }}
    >
    </script>
    <script type="application/ld+json" strategy={"afterInteractive"}
    dangerouslySetInnerHTML={{
      __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '552935527031747');
        fbq('track', 'PageView');
      `
    }}
    ></script>
    <Script id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
      __html: `
      gtag('event', 'conversion', {'send_to': 'AW-11060009434/B0CnCO3SypcYENqz6Zkp'});
      `}}
      />
    <AnimatePresence>
    <Component {...pageProps} />
    </AnimatePresence>
    <ToastContainer />
    </>
  )
}
