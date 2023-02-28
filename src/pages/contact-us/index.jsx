import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ScrollContainer from '@/components/ScrollContainer'
import HomeContact from '@/sections/Contact'
import Head from 'next/head'
import {motion } from 'framer-motion'
import Link from 'next/link'
import React, {use, useState} from "react"
import LayeredButton from '@/components/Button'
import { LoaderScreen } from '@/utilities'

export default function ContactUs() {
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  return (
    <>
      <Head>
        <title>OkayDone | Contact Us</title>
        <meta name="description" content="Generated by create next app" />
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
                        <img src="" alt="" />
                    </div>
                    <div className="col-6 col-sm-12">
                        <p>
                            Together we&apos;ll make your organization thrive through premium, personalized & immersive experiences.
                        </p>
                        <p>Curious about how we can help with your projects?</p>
                        <p>Reach out and we&apos;ll be happy to discuss your plans!</p>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="row">
                        <div className="col-6 col-sm-12">
                            <div className="contact-form-group">
                                <input value={userData.name}
                                placeholder={"Your name"}
                                onChange={(e) => setUserData({...userData, name: e.target.value})}
                                type="text" className="contact-form-input" required/>
                            </div>
                            <div className="contact-form-group">
                                <input value={userData.phone}
                                placeholder={"Your phone number"}
                                onChange={(e) => setUserData({...userData, phone: e.target.value})}
                                type="tel" className="contact-form-input" required/>
                            </div>
                            <div className="contact-form-group">
                                <input value={userData.email}
                                placeholder={"Your email"}
                                onChange={(e) => setUserData({...userData, email: e.target.value})}
                                type="email" className="contact-form-input" required/>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <textarea placeholder='Your Message' value={userData.message} onChange={(e) => setUserData({...userData, message: e.target.value})} cols="30" rows="10"></textarea>
                        </div>
                        <div className="col-12 contact-form-center">
                            <p>&nbsp;</p>
                            <LayeredButton text={"Submit"} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </ScrollContainer>
      </main>
    </>
  )
}