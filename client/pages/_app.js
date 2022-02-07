import '../styles/globals.css'
import Nav from '../components/helpers/navbar'
import Footer from '../components/helpers/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav></Nav>
      <Component {...pageProps} />
      <Footer></Footer>

    </>
  )
}

export default MyApp
