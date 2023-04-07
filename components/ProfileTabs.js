import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "@/styles/ProfileTabs.module.css";
import Followers from "./Followers";
import SCourses from "./SCourses";
import Projects from "./Projects";

export default function ProfileTabs() {
  return (
    <>
      <div className={styles.c0}>
        <div className={styles.c1}>
          <div className={styles.c2}>
            {/* <div className={styles.c4}> */}
              <Tabs
                defaultActiveKey="profile"
                transition={true}
                id="uncontrolled-tab-example"
                className="mb-3"
                fill
              >
           
           <Tab eventKey="projects" title="05 Projects">
                  <Projects />
                </Tab>
                <Tab eventKey="courses" title="02 Courses">
                  <SCourses />
                </Tab>
                <Tab eventKey="followers" title="40 Followers">
                  <Followers />
                </Tab>
       
              </Tabs>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
