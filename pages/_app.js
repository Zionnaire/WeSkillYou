import '@/styles/globals.css'
import '@/styles/Home.module.css'
import '@/styles/NavBar.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Script from "next/script";
import {
 Router,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from '.';
import TopSearches from '@/pages/topsearches';

export default function App({ Component, pageProps }) {
  return (
  
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossOrigin="anonymous"
    />
 <Component {...pageProps} />
{/* <Router>
      <Routes>
      <Route path="/" component={Homepage} />
      <Route path="/topsearch" component={TopSearches} /> 
      </Routes>
    </Router> */}
   
  </>
  )
}
