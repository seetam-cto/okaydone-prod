import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ScrollContainer from '@/components/ScrollContainer'
import Clients from '@/sections/Clients'
import HomeContact from '@/sections/Contact'
import Featured from '@/sections/Featured'
import Hero from '@/sections/Hero'
import { LoaderScreen } from '@/utilities'
import Head from 'next/head'
import axios from 'axios'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Best Digital Marketing Agency In Bengaluru: Okay Done</title>
        <meta name="description" content="Okay Done is one of India's top agencies, that focuses on millennial marketing methods to help brands and organizations reach their optimum potential in the digital space." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://okaydone.in/" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js" crossOrigin='anonymous' defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js" crossOrigin='anonymous' defer></script>
        <script type='text/javascript' src="/scripts/script.js" defer></script>
      </Head>
      <LoaderScreen />
      <main className={"main"}>
        <Background />
        <Navigation />
        <ScrollContainer>
        <Hero />
        <Clients clients={data} />
        <Featured />
        <HomeContact />
        <Footer />
        </ScrollContainer>
      </main>
    </>
  )
}

export async function getServerSideProps() {

  let finalData = null

  let query = JSON.stringify({
    query: `query MyQuery {
      clients {
        clientDetails(first: 30){
          clientName
          clientLogo {
            url
          }
        }
      }
    }`,
    variables: {}
  });

  // Fetch data from external API
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-ap-south-1.hygraph.com/v2/clk27gdle0jgc01t80koo6myr/master',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : query
  };

  await axios.request(config)
  .then((response) => {
    finalData = response.data
    return { props: { data: finalData.data.clients[0] } }
  })
  .catch((error) => {
    console.log(error)
    return { props: { data: null } }
  });

  return { props: { data: finalData?.data?.clients[0] } }
}
