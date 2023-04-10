import React from "react";
import { Container } from "react-bootstrap";
import styles from "@/styles/scourses.module.css";
import { AiOutlineStar } from "react-icons/ai";

export default function SCourses() {
  return (
    <>
      <Container>
        <section className={styles.cont1}>
          <div className={styles.cont2}>
            <div className={styles.cont3}>
              <div className={styles.courses}>
                <div className={styles.names}>
                  <div className={styles.namesImg}>
                    <img src="/unsplash_MU3SIgq5Gpw.png" />
                  </div>
                  <div className={styles.ImgTxt}>
                    <h4>Acrylic painting on canvas</h4>
                    <div className={styles.lowerTxt}>
                      <p>Toluade Tim</p>
                      <div className={styles.txtFlex}>
                        <img src="/user 1.png" />
                        <p>2k student</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rating}>
                  <p>4.7</p>
                  <AiOutlineStar />
                </div>
              </div>
              <div className={styles.courses}>
                <div className={styles.names}>
                  <div className={styles.namesImg}>
                    <img src="/unsplash_Gl3OR9uhD3Q.png" />
                  </div>
                  <div className={styles.ImgTxt}>
                    <h4>Learn how to draw eyes step by step</h4>
                    <div className={styles.lowerTxt}>
                      <p>Toluade Tim</p>
                      <div className={styles.txtFlex}>
                        <img src="/user 1.png" />
                        <p>2k student</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rating}>
                  <p>4.7</p>
                  <AiOutlineStar />
                </div>
              </div>
              <div className={styles.courses}>
                <div className={styles.names}>
                  <div className={styles.namesImg}>
                    <img src="/unsplash_WtolM5hsj14.png" />
                  </div>
                  <div className={styles.ImgTxt}>
                    <h4>Learn how to draw cartoon face in easy way!</h4>
                    <div className={styles.lowerTxt}>
                      <p>Toluade Tim</p>
                      <div className={styles.txtFlex}>
                        <img src="/user 1.png" />
                        <p>2k student</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rating}>
                  <p>4.7</p>
                  <AiOutlineStar />
                </div>
              </div>
              <div className={styles.courses}>
                <div className={styles.names}>
                  <div className={styles.namesImg}>
                    <img src="/unsplash_C1MJ8IYUSmU.png" />
                  </div>
                  <div className={styles.ImgTxt}>
                    <h4>Sketch book essential for everyone!</h4>
                      <p>Toluade Tim</p>
                      <div className={styles.txtFlex}>
                        <img src="/user 1.png" />
                        <p>2k student</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rating}>
                  <p>4.7</p>
                  <AiOutlineStar />
                </div>
              </div>
            </div>
         
        </section>
      </Container>
    </>
  );
}
