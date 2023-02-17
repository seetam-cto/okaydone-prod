import '../styles/App.scss'
import '../styles/blobz.min.css'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion';
import Router from 'next/router';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <AnimatedCursor
      innerSize={8}
      outerSize={45}
      color='23, 241, 209'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
    <Script src="https://kit.fontawesome.com/cbd809fbae.js" crossOrigin='anonymous' />
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-2SVMGLKE6P" />
    <Script id="google-analytics"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2SVMGLKE6P', {page_path: window.location.pathname,});
      `}}
    />
    <AnimatePresence>
    <Component {...pageProps} />
    </AnimatePresence>
    </>
  )
}
