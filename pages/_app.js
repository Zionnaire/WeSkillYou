import '../styles/globals.css'
import '../styles/home.module.css'
import '../styles/head.module.css'
import '../styles/about.module.css'
import '../styles/admindash.module.css'
import '../styles/adminside.module.css'
import '../styles/carousel.module.css'
import '../styles/comment.module.css'
import '../styles/courses.module.css'
import '../styles/dashboard.module.css'
import '../styles/details.module.css'
import '../styles/favourite.module.css'
import '../styles/filters.module.css'
import '../styles/firstcarousel.module.css'
import '../styles/followers.module.css'
import '../styles/fourthcarousel.module.css'
import '../styles/help.module.css'
import '../styles/homepage.module.css'
import '../styles/lessons.module.css'
import '../styles/login.module.css'
import '../styles/newsidebar.module.css'
import '../styles/ollessons.module.css'
import '../styles/olover.module.css'
import '../styles/overview.module.css'
import '../styles/popularcourses.module.css'
import '../styles/profile.module.css'
import '../styles/profiletabs.module.css'
import '../styles/projects.module.css'
import '../styles/projectview.module.css'
import '../styles/register.module.css'
import '../styles/scourses.module.css'
import '../styles/search.module.css'
import '../styles/settings.module.css'
import '../styles/sidebar.module.css'
import '../styles/signin.module.css'
import '../styles/signup.module.css'
import '../styles/thirdcarousel.module.css'
import '../styles/topsearches.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Script from "next/script";
// import styles from "*.module.css";

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
   
  </>
  )
}
