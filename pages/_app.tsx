import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import FooterInfo from '../components/FooterInfo'
import Newsletter from '../components/Newsletter'
import RelatedSearch from '../components/RelatedSearch'
import Nav from '../components/mbl_component/Nav'
import { useRouter } from 'next/router'
import RealstateNav from '../components/mbl_component/RealstateNav'

export default function App({ Component, pageProps }: AppProps) {


  const router = useRouter();

  if (router.pathname === '/realState') {
    return <> <Component {...pageProps} />
  <RealstateNav/>
    </>;
  }
  return (
    <>
      {/* <TopBar /> */}
      <Component {...pageProps} />
      {/* <RelatedSearch/> */}
      <Newsletter />
      <FooterInfo />
      <Footer />
      <Nav />

    </>
  )

}
