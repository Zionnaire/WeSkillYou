import Admindash from "../components/dashadmin";
import Adminside from "../components/sideadmin";
import React from "react";
import styles from '../styles/admindashpage.module.css'
import NavBar from "../components/head";
import TutorUploads from "@/components/tutorupload";
// import NewNavbar from "@/components/newsidebar";

export default function Mytutorpage() {
    return(
        <>
       <section className={styles.ad1}>
        <div className={styles.ad2}>
            <div className={styles.ad3}>
                <NavBar/>
            <div id={styles.ad4}><Adminside /></div>
            {/* <NewNavbar/> */}
           <div id={styles.ad5}> <TutorUploads/></div>
            </div>
        </div>
       </section>
        </>
    )
}