import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ScrollContainer from '@/components/ScrollContainer'
import Head from 'next/head'
import React, {useRef, useState} from "react"
import {FormButton} from '@/components/Button'
import { LoaderScreen } from '@/utilities'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const form = useRef();

  const sendEmail = () => {

    if(userData.name && userData.phone && userData.email && userData.message){
        emailjs.sendForm('service_6gt14gh', 'template_uq5v8cn', form.current, 'QEvGf7dAJI0DRwLdU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        toast.success("We'll get back to you shortly 😁")
        setUserData({
            name: '',
            phone: '',
            email: '',
            message: ''
          })
    }else{
        toast.error("Please fill out all the fields ⚠️")
    }
  };
  return (
    <>
      <Head>
        <title>OkayDone | Contact Us</title>
        <meta name="description" content="Okay Done is one bangalore's top agencies, that focuses on millennial marketing methods to help brands and organizations reach their optimum potential in the digital space." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoaderScreen />
      <main className={"main"}>
        <Background />
        <Navigation />
        <ScrollContainer>
            <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-12">
                        <div className="contact-header">
                            <h1>get in</h1>
                            <h1>touch</h1>
                        </div>
                    </div>
                    <div className="col-6 col-sm-12">
                        <p>
                            Together we&apos;ll make your organization thrive through premium, personalized & immersive experiences.
                        </p>
                        <p>Curious about how we can help with your projects?</p>
                        <p>Reach out and we&apos;ll be happy to discuss your plans!</p>
                    </div>
                </div>
                <form ref={form} className="contact-form">
                    <div className="row">
                        <div className="col-6 col-sm-12">
                            <div className="contact-form-group">
                                <input value={userData.name}
                                name="user_name"
                                placeholder={"Your name"}
                                onChange={(e) => setUserData({...userData, name: e.target.value})}
                                type="text" className="contact-form-input" required/>
                            </div>
                            <div className="contact-form-group">
                                <input value={userData.phone}
                                name="user_phone"
                                placeholder={"Your phone number"}
                                onChange={(e) => setUserData({...userData, phone: e.target.value})}
                                type="tel" className="contact-form-input" required/>
                            </div>
                            <div className="contact-form-group">
                                <input value={userData.email}
                                placeholder={"Your email"}
                                name="user_email"
                                onChange={(e) => setUserData({...userData, email: e.target.value})}
                                type="email" className="contact-form-input" required/>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <textarea name="message" placeholder='Your Message' value={userData.message} onChange={(e) => setUserData({...userData, message: e.target.value})} cols="30" rows="10"></textarea>
                        </div>
                        <div className="col-12 contact-form-center">
                            <p>&nbsp;</p>
                            <FormButton key={"contact-form-button"} action={() => sendEmail()} text={"Submit"} />
                        </div>
                    </div>
                </form>
            </div>
            </div>
            <Footer />
        </ScrollContainer>
      </main>
    </>
  )
}