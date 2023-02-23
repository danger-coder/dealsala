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
import Btn_nav from '../components/mbl_component/Btn_nav'

export default function App({ Component, pageProps }: AppProps) {


  const router = useRouter();

  if (router.pathname === '/realstate') {
    return <> <Component {...pageProps} />
      <RealstateNav />
    </>;
  }
  if (router.pathname === '/realstate/search') {
    return <> <Component {...pageProps} />
      <RealstateNav />
    </>;
  }
  if (router.pathname === '/ecommerce') {
    return <> <Component {...pageProps} />
      <RealstateNav />
    </>;
  }
  if (router.pathname === '/ecommerce/search') {
    return <> <Component {...pageProps} />
      {/* <RealstateNav /> */}
    </>;
  }
  if (router.pathname === '/realstate/detail') {
    return <> <Component {...pageProps} />
      {/* <RealstateNav /> */}
      <Btn_nav />
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
