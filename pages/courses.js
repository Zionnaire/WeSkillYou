import React from "react";
import Lessons from "@/components/lessons";
import Overview from "@/components/overview";
import Details from "@/components/details";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import { Container } from "react-bootstrap";
import SideBar from "@/components/sidebar";
import styles from '@/styles/courses.module.css'

export default function Courses() {
  return (
    <>
     <div className={styles.courses}>
      <div className={styles.course1}>
        <div className={styles.course2}>
          <div className={styles.course3}>
            <SideBar/>
          </div>
     
          <div className={styles.course4}>

          <Details />

<Tabs
  defaultActiveKey="profile"
  transition={true}
  id="uncontrolled-tab-example"
  className="mb-3"
  fill
>
  <Tab eventKey="home" title="Overview">
    <Overview />
  </Tab>
  <Tab eventKey="profile" title="Lessons">
    <Lessons />
  </Tab>
</Tabs>
          </div>
        </div>
        </div>
        </div>
     
    </>
  );
}
