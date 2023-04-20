import Admindash from "@/components/admindash";
import Adminside from "@/components/adminside";
import React from "react";
import styles from '@/styles/admindash.module.css'
import NavBar from "@/components/head";
// import NewNavbar from "@/components/newsidebar";

export default function Admin() {
    return(
        <>
       <section className={styles.ad1}>
        <div className={styles.ad2}>
            <div className={styles.ad3}>
                <NavBar/>
            <div id={styles.ad4}><Adminside /></div>
            {/* <NewNavbar/> */}
           <div id={styles.ad5}> <Admindash/></div>
            </div>
        </div>
       </section>
        </>
    )
}