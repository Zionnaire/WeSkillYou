import React from "react";
import { Container } from "react-bootstrap";
import styles from "@/styles/projectview.module.css";
import { BsArrow90DegLeft, BsFillShareFill } from "react-icons/bs";
import {FaRegThumbsUp} from "react-icons/fa"
import {CiMenuKebab} from "react-icons/ci"
import {GrView} from "react-icons/gr"

export default function View() {
  return (
    <>
      <Container fluid>
        <div class={`"row" ${styles.icon}`}>
          <div class="col-sm-4" id={styles.left}>
        
              {" "}
              <BsArrow90DegLeft />{" "}
          </div>
          <div class="col-sm-4" id={styles.share}>
           
              <BsFillShareFill />
        
          </div>
        </div>
        <div className={`"row" ${styles.poster}`}>
          <h1>Halloween poster</h1>
        </div>

        <div className={` "row" ${styles.com4}`}>
        <div className={`"col-sm-3" ${styles.comCont}`}>
          <img src="/lady.png" alt="@Moun" />
          <div className={`"col-sm-1" "w-100" ${styles.comCont2}`}>
            <h4>@mouni</h4>
            <div className={`"row" ${styles.poster}`}>
            <div className={`"col-sm-4" ${styles.student}`}>
            <h5>11 mins ago Student</h5>
            <CiMenuKebab/>
            </div>
            </div>
            </div>
          </div>
          <p className={styles.conts}>
            Project associated with: </p>
            <h1 className={styles.canvas}>Acrylic painting on canvas</h1>
            <div className={styles.paint}>
            <img src="/image1.png" alt="paintings"/>
            </div>
            <p className={styles.conts}>
            Adipiscing proin a consectetur id tris tique sed adipiscing 
            lorem non ut proin et amet aliqu am nunc aenean tellus id at mi, 
            quis ut hdrerit pus aliquam scelerisque mauris, id volutpat viver lacus
            </p>

            <p className={styles.conts}>
            Tincidunt nulla enim volutpat nunc, 
            habitant of neque non netus sodales id tortor lacus, 
            alam integer lobortis proin quam integer pretium
            </p>
            <hr/>
            
        <div id={styles.thumps}>
        <div className={`"col-sm-3" ${styles.thump}`}>
                <FaRegThumbsUp/>
                <h6>21</h6>
            </div>
            <div className={`"col-sm-3" ${styles.thump}`}>
                <GrView/>
                <h6>150</h6>
            </div>
        </div>
        </div>
        
      </Container>
    </>
  );
}

