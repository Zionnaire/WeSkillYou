import AdminDash from "@/components/AdminDash";
import AdminSide from "@/components/AdminSide";
import React from "react";
import styles from '@/styles/AdminDash.module.css'
import NewNavbar from "@/components/NewSidebar";

export default function Admin() {
    return(
        <>
       <section className={styles.ad1}>
        <div className={styles.ad2}>
            <div className={styles.ad3}>
            {/* <div id={styles.ad4}><AdminSide /></div> */}
            {/* <NewNavbar/> */}
           <div id={styles.ad5}> <AdminDash/></div>
            </div>
        </div>
       </section>
        </>
    )
}