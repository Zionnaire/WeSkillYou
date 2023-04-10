import { Container } from "react-bootstrap";
import React from "react";
import styles from '@/styles/projects.module.css'

export default function Projects(){
    return(
        <>
        <Container>
            <section className={styles.cont1}>
                <div className={styles.cont2}>
                    <div className={styles.cont3}>
                            <img src="/unsplash_woC7_1c_kZQ.png"/>
                            <img src="/unsplash_GfQEdpIkkuw.png"/>
                            <img src="/unsplash_PlBOsAmxqek.png"/>
                      
                    </div>                                              
                </div>
            </section>
        </Container>
        </>
    )
}