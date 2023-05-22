
import React from "react";
import styles from '../styles/admindashpage.module.css'
import TutorUploads from "@/components/tutorupload";
import SideBar from "@/components/sidebarpage";
// import NewNavbar from "@/components/newsidebar";

export default function Mytutorpage() {
    return(
        <>
       <section className={styles.ad1}>
        <div className={styles.ad2}>
            <div className={styles.ad3}>
               {/* <div id="na"><NavBar/></div>  */}
            <div id={styles.ad4}><SideBar /></div>
            {/* <NewNavbar/> */}
           <div id={styles.ad5}> <TutorUploads/></div>
            </div>
        </div>
       </section>
        </>
    )
}