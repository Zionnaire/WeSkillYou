import React from "react"
// import Details from "@/pages/courses"
import PopularCourses from "@/components/popularcourses"
import { Container } from "react-bootstrap"
// import NavBar from "@/components/navbar"
import styles from "@/styles/dashboard.module.css"
import SideBar from "@/components/sidebar"

export default function Students(){
    return(
        <>
       {/* <div className={styles.navControl}> <NavBar/></div>  */}
       <Container>
        <div className={styles.divide}>
      <div className={styles.divide1}>
        <div className={styles.divide2}>
        <div className={styles.side}> <SideBar/></div>
      <div className={styles.popular}><PopularCourses/></div> 
        </div>
      </div>
       </div>
       </Container>
        </>
    )
}