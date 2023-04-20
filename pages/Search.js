import React from "react"
import { Container, Form} from "react-bootstrap"
import {BsSearch} from 'react-icons/bs'
import {GoSettings} from 'react-icons/go'
import styles from "@/styles/search.module.css"


export default function Search () {
    return(
        <>
       <Container fluid>
        <section className={styles.sect1}>
            <div className={styles.sect2}>
                <div className={styles.sect3}>
                <Form className={`'d-flex' ${styles.dflex}`}>
                  <Form.Control
                    type="search"
                    placeholder="Search Course"
                    className={`"me-2" ${styles.input}`}
                    aria-label="Search"
                  />
                    <div id={styles.Bicon}><BsSearch/></div>
                </Form>
                <div className={styles.topSearch}>
                    <h5>Top Search</h5>
                   <div> <GoSettings/></div>
                </div>
                <div className={styles.searchbtn}>
                   <div className={styles.svbtn2}>
                   <button className={styles.sbtn}>photography</button>
                    <button className={styles.sbtn}>automobile repair</button>
                   </div>
                   <div className={styles.svbtn2}>
                    <button className={styles.sbtn}>plumbing</button>
                    <button className={styles.sbtn}>aluminium fabrication</button>
                    </div>
                    <div className={styles.svbtn2}>
                    <button className={styles.sbtn}>hairstyling</button>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className={styles.sect21}>
            <div className={styles.sect22}>
                <div className={styles.sect23}>
                    <h5>Courses</h5>
                    <div className={styles.courseImg}>
                       <div className={styles.allCourse}>
                       <div className={styles.eachImg}>
                        <img src="/img.png" alt="Aluminium" />
                        <h4>Aluminium fabrication</h4>
                        </div>
                        <div className={styles.eachImg}>
                        <img src="/img (1).png" alt="Aluminium" />
                        <h4>Automobile Repair</h4>
                        </div>
                        <div className={styles.eachImg}>
                        <img src="/photography.png" alt="Aluminium" />
                        <h4>Photography</h4>
                        </div>
                        <div className={styles.eachImg}>
                        <img src="/hair styling 1.png" alt="Aluminium" />
                        <h4>Hair styling & Wig making</h4>
                        </div>
                       </div>
                       <div className={styles.allCourse}>
                        <div className={styles.eachImg}>
                        <img src="/plumbing 1.png" alt="Aluminium" />
                        <h4>Plumbing</h4>
                        </div>
                        <div className={styles.eachImg}>
                        <img src="/interior.png" alt="Aluminium" />
                        <h4>Interior design & decoration</h4>
                        </div>
                        <div className={styles.eachImg}>
                        <img src="/welding.png" alt="Aluminium" />
                        <h4>Welding & metal fabrication</h4>
                        </div>
                        <div className={styles.eachImg}>
                        <img src="/painting.png" alt="Aluminium" />
                        <h4>Painting</h4>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </Container>
        </>
    )
}