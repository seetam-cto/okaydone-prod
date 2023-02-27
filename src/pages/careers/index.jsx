import Background from '@/components/Background'
import LayeredButton from '@/components/Button'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ScrollContainer from '@/components/ScrollContainer'
import Head from 'next/head'
import Link from 'next/link'

export default function Careers() {
  return (
    <>
      <Head>
        <title>OkayDone | Careers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"main"}>
        <Background />
        <Navigation />
        <ScrollContainer>
            <div className='container'>
                <div className='careers-heading'>
                    <h1>join the</h1>
                    <h1>team</h1>
                </div>
                <div className="row bm-5 flex-top">
                    <div className="col-6 col-sm-12 flex-right">
                        <LayeredButton action={() => window.scrollBy(0,800)} text={"Discover our vacancies"} />
                    </div>
                    <div className="col-6 col-sm-12">
                        <p className='careers-subhead'>
                        Come work with amazing people creating great things, in a culture that puts its people first. Ready to bring your experience and perspective to our team? Join us and let&apos;s build the best immersive experiences we can dream up together.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container vacancies" id='vacancies'>
                <div className="job">
                    <h1 className="title">Manipulator / <br/>Graphic Designer</h1>
                    <div className="description">
                        <h2>(3-5 yrs Experience)</h2>
                        <p>We are looking for visualisers who can bring life to social media creatives. Apply Now if you are a Graphic Designer, Photo Manipulator / Illustrator who is up to creating a buzz in the digital space.</p>
                    </div>
                    <div className="apply">
                    <Link href="#" className='apply-link' style={{"--color": "teal"}}>Apply Now</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </ScrollContainer>
      </main>
    </>
  )
}
