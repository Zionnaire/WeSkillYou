import React from "react";
import { Container } from "react-bootstrap";
import styles from "@/styles/profile.module.css";
import Profiletabs from "@/components/profiletabs";
import SideBar from "@/components/sidebar";

export default function Profile(){
    return(
        <>
        <SideBar/>
        <Container>
            <section className={styles.top1}>
                <div className={styles.top2}>
                    <div className={styles.top3}>
                        <div className={styles.profile}>
                            <img src="/Rectangle 1016.png" className={styles.img} />
                            <h4>@davidyomi</h4>
                            <p>Just a simple guy who loves to do something new and fun. </p>
                        </div>
                        <div className={styles.socialContacts}>
                            <img src="/Layer 2.png"/>
                            <img src="/Layer 2 (1).png"/>
                            <img src="/Layer 2 (2).png"/>
                        </div>
                        <div className={styles.Projects}>
                           <Profiletabs/>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
        </>
    )
}