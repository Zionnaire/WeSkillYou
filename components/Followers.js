import React from "react";
import { Container } from "react-bootstrap";
import styles from "@/styles/followers.module.css";

export default function Followers() {
  return (
    <>
      <Container>
        <section className={styles.cont1}>
          <div className={styles.cont2}>
            <div className={styles.cont3}>
              <div className={styles.courses}>
                    <div className={styles.names}>
                    <div className={styles.namesImg}>
                        <img src="/unsplash_X6Uj51n5CE8.png" />
                    </div>
                    <div className={styles.ImgTxt}>
                        <h4>Toluade Tim</h4>
                        <div className={styles.lowerTxt}>
                        <p>@tolu_tim</p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.following}>
                    <button>Follow</button>
                    </div>
              </div>
              <div className={styles.courses}>
                    <div className={styles.names}>
                    <div className={styles.namesImg}>
                        <img src="/unsplash_5aGUyCW_PJw.png" />
                    </div>
                    <div className={styles.ImgTxt}>
                        <h4>Olayinka Ayanwale</h4>
                        <div className={styles.lowerTxt}>
                        <p>@yinkus</p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.following}>
                    <button>Follow</button>
                    </div>
              </div>
              <div className={styles.courses}>
                    <div className={styles.names}>
                    <div className={styles.namesImg}>
                        <img src="/unsplash_cdksyTqEXzo.png" />
                    </div>
                    <div className={styles.ImgTxt}>
                        <h4>Ademola Timothy</h4>
                        <div className={styles.lowerTxt}>
                        <p>@ade_tim</p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.following}>
                    <button>Follow</button>
                    </div>
              </div>
              <div className={styles.courses}>
                    <div className={styles.names}>
                    <div className={styles.namesImg}>
                        <img src="/unsplash_B4TjXnI0Y2c.png" />
                    </div>
                    <div className={styles.ImgTxt}>
                        <h4>Olu Emmanuel</h4>
                        <div className={styles.lowerTxt}>
                        <p>@emma</p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.following}>
                    <button>Follow</button>
                    </div>
              </div>
              <div className={styles.courses}>
                    <div className={styles.names}>
                    <div className={styles.namesImg}>
                        <img src="/unsplash_HD8KlyWRYYM.png" />
                    </div>
                    <div className={styles.ImgTxt}>
                        <h4>David Ibunkun</h4>
                        <div className={styles.lowerTxt}>
                        <p>@dave</p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.following}>
                    <button>Follow</button>
                    </div>
              </div>
              <div className={styles.courses}>
                    <div className={styles.names}>
                    <div className={styles.namesImg}>
                        <img src="/unsplash_0fN7Fxv1eWA.png" />
                    </div>
                    <div className={styles.ImgTxt}>
                        <h4>Akin Praise</h4>
                        <div className={styles.lowerTxt}>
                        <p>@praise</p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.following}>
                    <button>Follow</button>
                    </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
