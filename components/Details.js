import { Container } from "react-bootstrap";
import {BsArrow90DegLeft, BsPerson} from 'react-icons/bs'
import {AiFillHeart, AiOutlineClockCircle, AiOutlineStar} from 'react-icons/ai'
import React from "react";
import styles from '@/styles/details.module.css'
import {FiVideo} from 'react-icons/fi'

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
                <div className={styles.sect41}>
                <img className={styles.image3} src="/image3.png" alt=""/>
                <button className={styles.hot}>HOT</button>
            </div>
            <div className={styles.cont1}>
                <img className={styles.image6} src="/image6.png" alt=""/>
                <h3>Toluade Tim</h3>
            </div>
            <h2>Acrylic painting on canvas</h2>
            <div className={styles.cont2}>
                <div className={styles.subCont}>
                <AiOutlineClockCircle/>
                <h6>1.hour 45 min</h6>
                </div>
                <div className={styles.subCont}>
                <FiVideo/>
                <h6>12 Lessons</h6>
                </div>
            </div>
            <div className={styles.cont2}>
                <div className={styles.subCont}>
                <AiOutlineStar/>
                <h6>4.7  (753)</h6>
                </div>
                <div className={styles.subCont}>
                <BsPerson/>
                <h6>2K  students</h6>
                </div>
            </div>
            <h4>
                This abstract painting will adorn any modern interior and transform a home style! 
                The artwork is a perfect choice for living room, dining room or hallway. 
                Each painting you create is one of a kind and it will be made special to YOU.
                </h4>
            </div>
            </div>
            </section>
        </Container>
        </>
    )
}