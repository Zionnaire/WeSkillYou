import React from "react";
import { Container } from "react-bootstrap";
import styles from "@/styles/lessons.module.css";
import OLLessons from "./ollessons";
import {AiOutlineCloudDownload} from 'react-icons/ai'

export default function Lessons() {
  return (
    <>
      <OLLessons />
      <Container >
        <section className={styles.sect1}>
          <div className={styles.sect2}>
            <div className={styles.sect3}>
              <div className={styles.com4}>
                <img src="/Rectangle 24.png" alt="painting materials" />
                <div className={styles.comCont}>
                  <h4>Introduction to painting materials and skills</h4>
                  <h5>Lesson 1</h5>
                </div>
              </div>
              <h6>
              This absstract painting sit amet, consectetur adipiscing elit.
               Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
               Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
               Curabitur tempus urna at turpis condimentum lobortis. 
               Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
              </h6>
            </div>
          </div>
        </section>

        <section className={styles.sect1}>
          <div className={styles.sect2}>
            <div className={styles.sect3}>
              <div className={styles.com4}>
                <img src="/Rectangle 23.png" alt="painting materials" />
                <div className={styles.comCont}>
                  <h4>Colour Theory and Mixing</h4>
                  <h5>Lesson 2</h5>
                </div>
              </div>
              <h6>
              This absstract painting sit amet, consectetur adipiscing elit.
               Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
               Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
               Curabitur tempus urna at turpis condimentum lobortis. 
               Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
              </h6>
            </div>
          </div>
        </section>

        <section className={styles.sect1}>
          <div className={styles.sect2}>
            <div className={styles.sect3}>
              <div className={styles.com4}>
                <img src="/Rectangle 22.png" alt="painting materials" />
                <div className={styles.comCont}>
                  <h4>Basic Brushwork Techniques</h4>
                  <h5>Lesson 3</h5>
                </div>
              </div>
              <h6>
              This absstract painting sit amet, consectetur adipiscing elit.
               Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
               Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
               Curabitur tempus urna at turpis condimentum lobortis. 
               Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
              </h6>
            </div>
          </div>
        </section>

        <section className={styles.sect1}>
          <div className={styles.sect2}>
            <div className={styles.sect3}>
              <div className={styles.com4}>
                <img src="/Rectangle 21.png" alt="painting materials" />
                <div className={styles.comCont}>
                  <h4>Working with Layers and Glazing</h4>
                  <h5>Lesson 4</h5>
                </div>
              </div>
              <h6>
              This absstract painting sit amet, consectetur adipiscing elit.
               Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
               Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
               Curabitur tempus urna at turpis condimentum lobortis. 
               Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
              </h6>
            </div>
          </div>
        </section>

        <section className={styles.sect1}>
          <div className={styles.sect2}>
            <div className={styles.sect3}>
              <div className={styles.com4}>
                <img src="/Rectangle 20.png" alt="painting materials" />
                <div className={styles.comCont}>
                  <h4>Painting Composition and Design</h4>
                  <h5>Lesson 5</h5>
                </div>
              </div>
              <h6>
              This absstract painting sit amet, consectetur adipiscing elit.
               Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
               Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
               Curabitur tempus urna at turpis condimentum lobortis. 
               Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
              </h6>
            </div>
          </div>
        </section>

        <section className={styles.sect1}>
          <div className={styles.sect2}>
            <div className={styles.sect3}>
              <div className={styles.com4}>
                <img src="/Rectangle 24.png" alt="painting materials" />
                <div className={styles.comCont}>
                  <h4>Still Life Painting</h4>
                  <h5>Lesson 6</h5>
                </div>
              </div>
              <h6>
              This absstract painting sit amet, consectetur adipiscing elit.
               Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
               Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
               Curabitur tempus urna at turpis condimentum lobortis. 
               Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
              </h6>
            </div>
          </div>
        </section>
    <section className={styles.down}>
        <div className={styles.down1}>
            <div className={styles.down2}>
                <h1>Resources for download</h1>
                <div className={styles.down3}>
                    <div className={styles.blue}>
                    <img src="/Practice.png" alt="painting materials" />
                    </div>
                    <div className={styles.down4}>
                        <div className={styles.down5}>
                        <h3>practice class sketches</h3>
                        <h6>.img      4Mb</h6>
                        </div>
                        <AiOutlineCloudDownload/>
                    </div>

                </div>

               <div className={styles.down3}>
                    <div className={styles.red}>
                    <img src="/HomeSheet.png" alt="painting materials" />
                    </div>
                    <div className={styles.down4}>
                        <div className={styles.down5}>
                        <h3>practice class sketches</h3>
                        <h6>.img      4Mb</h6>
                        </div>
                        <AiOutlineCloudDownload/>
                    </div>

                </div>


                <div className={styles.down3}>
                    <div className={styles.blue}>
                    <img src="/HomeWork.png" alt="painting materials" />
                    </div>
                    <div className={styles.down4}>
                        <div className={styles.down5}>
                        <h3>practice class sketches</h3>
                        <h6>.img      4Mb</h6>
                        </div>
                        <AiOutlineCloudDownload/>
                    </div>

                </div>
            </div>
        </div>
    </section>

      </Container>
    </>
  );
}
