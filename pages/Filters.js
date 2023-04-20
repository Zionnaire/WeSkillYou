import { Container } from "react-bootstrap";
import React from "react";
// import {HiOutlineArrowUturnDown} from 'react-icons/hi'
import {BsArrow90DegLeft} from 'react-icons/bs'
import styles from "@/styles/filters.module.css"
import Link from "next/link";


export default function Filters() {
    return(
        <>
        <Container fluid>
        <section className={styles.sect1}>
            <div className={styles.sect2}>
                <div className={styles.sect3}> 
               <div id={styles.left}><Link href="/topsearches"><BsArrow90DegLeft/></Link></div>
               <div className={styles.filt}>
               <h5>Sort by</h5>
               <div className={styles.filterInput}>
                <input type="checkbox" />
                <div className={styles.free}>Free classes</div>
               </div>
               <div className={styles.filterInput}>
                <input type="checkbox" />
                <div className={styles.free}>Premium classes</div>
               </div>
               <div className={styles.filterInput}>
                <input type="checkbox" />
                <div className={styles.free}>All</div>
               </div>
               </div>

               <div className={styles.filt}>
               <h5>Level</h5>
               <div className={styles.filterInput}>
                <input type="checkbox" />
                <div className={styles.free}>Beginner</div>
               </div>
               <div className={styles.filterInput}>
                <input type="checkbox" />
                <div className={styles.free}>Intermidiate</div>
               </div>
               <div className={styles.filterInput}>
                <input type="checkbox" />
                <div className={styles.free}>Advance</div>
               </div>
               </div>

               <div className={styles.filt}>
               <h5>Duration</h5>
               <div className={styles.filterInput}>
                <input type="checkbox" />
                <div className={styles.free}>0-1 Hour</div>
               </div>
               <div className={styles.filterInput}>
                <input type="checkbox" />
                <div className={styles.free}>1-3 Hour</div>
               </div>
               <div className={styles.filterInput}>
                <input type="checkbox" />
                <div className={styles.free}>3+ hour</div>
               </div>
               </div>
               <div className={styles.filterbtn}>
                <button id={styles.reset}>Reset</button>
                <button id={styles.apply}>Apply</button>
               </div>
                </div>
                </div>
                </section>

        </Container>
        </>
    );
}