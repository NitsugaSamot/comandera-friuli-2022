import '../styles/globals.css'
import {ComanderaProvider} from '../context/ComanderaProvider'

function MyApp({ Component, pageProps }) {

  return (
      <ComanderaProvider>
        <Component {...pageProps} />
    </ComanderaProvider>  
  )  
}

export default MyApp
