import { Container } from "react-bootstrap";
import {BsArrow90DegLeft} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import React from "react";
import styles from '@/styles/Details.module.css'

export default function Details (){
    return(
        <>
        <Container fluid>
        <section className={styles.sect1}>
            <div className={styles.sect2}>
                <div className={styles.sect3}> 
                <div className={styles.sect4}>
                <BsArrow90DegLeft/> 
                <h1>Details</h1>
                <AiFillHeart/>
            </div>
            </div>
            </div>
            </section>
        </Container>

        <Container fluid>
        <section className={styles.sect1}>
            <div className={styles.sect2}>
                <div className={styles.sect3}> 
                <div className={styles.sect4}>
                
            </div>
            </div>
            </div>
            </section>
        </Container>


        </>
    )
}