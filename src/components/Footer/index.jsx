import Link from 'next/link'
import React, {useEffect, useState} from 'react'

const Footer = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [pageHeight, setPageHeight] = useState(0)
    const [fHeight, setFHeight] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(() => {
        if(((scrollPosition/pageHeight)*100) > 70){
            setFHeight(10 - ((scrollPosition/pageHeight)*10))
        }
    },[scrollPosition])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        setPageHeight(document.body.scrollHeight)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <footer className="footer" style={{"--curveheight": `${fHeight}vh`}}>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h2 className="footer-title-small">
                            GET OUR NEWS
                        </h2>
                        <h3 className='footer-title'>
                            get our<br />newsletter
                        </h3>
                        <div className="footer-newsletter">
                            <input type="email" className="footer-newsletter-input" />
                            <button className="footer-newsletter-button">

                            </button>
                        </div>
                    </div>
                    <div className="col-2">
                        <img src="/logo.png" />
                    </div>
                    <div className="col-5">
                        <h2 className="footer-title-small">
                            GET IN TOUCH
                        </h2>
                        <a href="mailto:contact@okaydone.in">contact@okaydone.in</a>
                        <a href="tel:+91 98860 98992">+91 98860 98992</a>
                    </div>
                </div>
                <div className="footer-divider" />
                <div className="row footer-bottom">
                    <div className="col-6">
                        <ul className="footer-bottom-links">
                            <li><Link href={"/priavacy-policy"}>Privacy Policy</Link></li>
                            <li><Link href={"/disclaimer"}>Disclaimer</Link></li>
                            <li><Link href={"/terms-conditions"}>Terms & Conditions</Link></li>
                            <li>© 2023 | OkayDone</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <li>SEE WHAT WE'RE UP TO</li>
                        <li>
                            <ul className="footer-socials">
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer