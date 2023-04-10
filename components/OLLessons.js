import React from "react";
import styles from "@/styles/ollessons.module.css";
// import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function OLLessons() {
  return (
    <>
      {/* <Container> */}
      <section className={styles.sect1}>
        <div className={styles.sect2}>
          <div className={styles.sect3}>
            <div className={styles.over}>
              <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className={`"mb-3" ${styles.mb - 3}`}
                justify
              >
                <Tab>
                  <h1>Lessons</h1>
                </Tab>
              </Tabs>
            </div>
            <div id={styles.line}>
              <hr />
              <hr />
            </div>
          </div>
        </div>
      </section>
      {/* </Container> */}
    </>
  );
}
