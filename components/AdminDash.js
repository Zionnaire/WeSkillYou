import { AiOutlineSearch } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import styles from "@/styles/admindash.module.css";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import { GiGraduateCap, GiOpenBook } from "react-icons/gi";
import { BsFillBoxFill } from "react-icons/bs";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import { Container } from 'react-bootstrap';

export default function Admindash() {
  const [value, onChange] = useState(new Date());
  return (
    <div id={styles.general}>
      <section className={styles.admin1}>
        <div className={styles.admin2}>
          <div className={styles.admin3}>
            {/* <div className={styles.input}> */}
            <Form className={`d-flex ${styles.dflex}`}>
              <Form.Control
                type="search"
                placeholder="Search"
                className={`"me-2" ${styles.input}`}
                aria-label="Search"
              />
              <div id={styles.flex_icon}>
                {" "}
                <AiOutlineSearch />
              </div>
            </Form>
            {/* </div> */}
            <div className={styles.routine}>
              <button className={styles.routineBtn}>
                <HiOutlineClipboardList /> Routine
              </button>
              <RiNotification2Line />
              <img id={styles.ladyImg} src="/lady.png" alt="lady" />
            </div>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.total1}>
            <div id={styles.subtotal}>
              <div className={styles.total1First}>
              <div className={styles.total41}>
                <div className={styles.total5}>
                  <span className={styles.tush1}>&#x2B22;</span>
                  <div className={styles.total_icon}>
                    <GiGraduateCap />
                  </div>
                </div>
                <h2>Total Students</h2>
                <h3>1430</h3>
              </div>
              <div className={styles.total42}>
                <div className={styles.total5}>
                  <span className={styles.tush2}>&#x2B22;</span>
                  <div className={styles.total_icon}>
                    {" "}
                    <MdPeopleAlt />
                  </div>
                </div>
                <h2>Total Teachers</h2>
                <h3>200</h3>
              </div>
              </div>
              <div className={styles.total1Second}>
              <div className={styles.total43}>
                <div className={styles.total5}>
                  <span className={styles.tush3}>&#x2B22;</span>
                  <div className={styles.total_icon}>
                    {" "}
                    <GiOpenBook />
                  </div>
                </div>
                <h2>Total Teachers</h2>
                <h3>200</h3>
              </div>

              <div className={styles.total44}>
                <div className={styles.total5}>
                  <span className={styles.tush4}>&#x2B22;</span>
                  <div className={styles.total_icon}>
                    {" "}
                    <BsFillBoxFill />
                  </div>
                </div>
                <h2>Total Teachers</h2>
                <h3>200</h3>
              </div>
              </div>
            </div>
          </div>

          <div id={styles.calendar}>
            <Calendar
              style={{ height: 400 }}
              onChange={onChange}
              value={value}
            />
          </div>
        </div>
      </section>
      <div id={styles.sec}>


      <section className={styles.genReg}>
        <div className={styles.genReg1}>
        <div className={styles.genReg2}>
       <div className={styles.mainReg}>
       <div className={styles.reg}>
          <h1>Registered Courses</h1>

            <div className={styles.link}>
              <div className={styles.subReg}>
                <div className={styles.subReg1}>
                  <img src="/business-man.png" alt="Sketching image" />
                  <h2>Basic Method to Start Sketching</h2>
                  <div className={styles.arrow}>
                    <AiOutlineArrowRight />
                  </div>
                </div>
                <div className={styles.subReg2}>
                  <h5>Students: 1055</h5>
                  <div className={styles.subReg3}>
                    <h4>Teacher: @tolu_tim</h4>
                    <div className={styles.rating}>
                      <div id={styles.star}>
                        <AiFillStar />
                      </div>
                      <h5>4.7 (753)</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.subReg}>
                <div className={styles.subReg1}>
                  <img src="/reg.png" alt="Sketching image" />
                  <h2>Welding and metal fabrication</h2>
                  <div className={styles.arrow1}>
                    <AiOutlineArrowRight />
                  </div>
                </div>
                <div className={styles.subReg2}>
                  <h5>Students: 3355</h5>
                  <div className={styles.subReg3}>
                    <h4>Teacher: @ademola_tim</h4>
                    <div className={styles.rating}>
                      <div id={styles.star}>
                        <AiFillStar />
                      </div>
                      <h5>4.7 (753)</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableReg}>
            <div className={styles.tableTop}>
              <h1>Database</h1>
              <div className={styles.teacher}>
                <h2>Teacher</h2>
                <h2>Student</h2>
              </div>
            </div>
            <div className={styles.studentName}>
              <div className={styles.studentName1}>
                <div className={styles.head1}>
                <h2>Student Name</h2>
                </div>
                <div className={styles.head2}>
                <h2>Score</h2>
                </div>
                <div className={styles.head3}>
                <h2>Submitted</h2>
                </div>
                <div className={styles.head4}>
                <h2>Grade</h2>
                </div>
                <div className={styles.head5}>
                <h2>Pass/Fail</h2>
                </div>
              </div>
              <div className={styles.studentName2}>
                <div className={styles.col1}>
                <img src="/business-man.png" alt="Student image"/>
                <h2>Akin David</h2>
                </div>
                <div className={styles.col2}>
                  <h2>90/100</h2>
                </div>
                <div className={styles.col3}>
                  <h2>10/8/10-20 PM</h2>
                </div>
                <div className={styles.col4}>
                  <h2>Excellent</h2>
                </div>
                <div className={styles.col5}>
                  <h2>Pass</h2>
                </div>
              </div>
              <div className={styles.studentName2}>
                <div className={styles.col1}>
                <img src="/business-man.png" alt="Student image"/>
                <h2>Ibukun Prince</h2>
                </div>
                <div className={styles.col2}>
                  <h2>80/100</h2>
                </div>
                <div className={styles.col3}>
                  <h2>10/8/10-20 PM</h2>
                </div>
                <div className={styles.col4}>
                  <h2>Average</h2>
                </div>
                <div className={styles.col5}>
                  <h2>Pass</h2>
                </div>
              </div>
              <div className={styles.studentName2}>
                <div className={styles.col1}>
                <img src="/business-man.png" alt="Student image"/>
                <h2>Kolapo Prince</h2>
                </div>
                <div className={styles.col2}>
                  <h2>45/100</h2>
                </div>
                <div className={styles.col3}>
                  <h2>10/8/10-20 PM</h2>
                </div>
                <div className={styles.col4}>
                  <h2>Poor</h2>
                </div>
                <div className={styles.col5}>
                  <h2>Fail</h2>
                </div>
              </div>
              <div className={styles.studentName2}>
                <div className={styles.col1}>
                <img src="/business-man.png" alt="Student image"/>
                <h2>Korede Bello</h2>
                </div>
                <div className={styles.col2}>
                  <h2>85/100</h2>
                </div>
                <div className={styles.col3}>
                  <h2>10/8/10-20 PM</h2>
                </div>
                <div className={styles.col4}>
                  <h2>Excellent</h2>
                </div>
                <div className={styles.col5}>
                  <h2>Pass</h2>
                </div>
                
              </div>
            </div>
            {/* <table className={styles.tableStudent}>
              <tr>
                <th colSpan={"2"}>Student Name</th>
                <th>Score</th>
                <th>Submitted</th>
                <th>Grade</th>
                <th>Pass/Fail</th>
              </tr>
              <tr>
                <td>
                <img src="/business-man.png" alt="Student image"/>
                  </td>
                  <td>
                  Akin David
                </td>
                <td>90/100</td>
                <td>10/8/10-20 PM</td>
                <td>Excellent</td>
                <td>
                  <div className={styles.Pass}>Pass</div>
                </td>
              </tr>
              <tr>
                <td>
                <img src="/business-man.png" alt="Student image"/>
                  </td>
                  <td>
                  Ibukun Prince
                </td>
                <td>80/100</td>
                <td>10/8/10-20 PM</td>
                <td>Average</td>
                <td>
                  <div className={styles.Pass}>Pass</div>
                </td>
              </tr>
              <tr>
                <td>
                <img src="/business-man.png" alt="Student image"/>
                  </td>
                  <td>
                  Kolapo Ayodele
                </td>
                <td>45/100</td>
                <td>10/8/10-20 PM</td>
                <td>Poor</td>
                <td><div className={styles.Fail}>Fail</div></td>
                
              </tr>
              <tr>
                <td>
                  <img src="/business-man.png" alt="Student image"/>
                  </td>
                  <td>
                  Korede Bello
                </td>
                <td>85/100</td>
                <td>10/8/10-20 PM</td>
                <td>Excellent</td>
                <td>
                  <div className={styles.Pass}>Pass</div>
                </td>
                
              </tr>
            </table> */}
          </div>
       </div>

            
         <div className={styles.bindall}>
         <div className={styles.whole}>
              <div className={styles.saved1}>
                <div id={styles.saved2}>
            <h1>Saved Courses</h1>
         <h5>Total 15 to view</h5>
                </div>
                <h4>See all</h4>
              </div>
             <div className={styles.realSub}>
              <div className={styles.realSub1}>
             <div className={styles.sub}>
                <div id={styles.blue}></div>
                <div className={styles.crypto}>
                  <h2>Crypto Trading Advance</h2>
                  <h6>90+ lesson’s in this.</h6>
                </div>
              </div>
              <div className={styles.sub}>
                <div id={styles.blue1}></div>
                <div className={styles.crypto}>
                  <h2>Crypto Trading Advance</h2>
                  <h6>90+ lesson’s in this.</h6>
                </div>
              </div>
              </div>
              <div className={styles.realSub2}>
              <div className={styles.sub}>
                <div id={styles.blue2}></div>
                <div className={styles.crypto}>
                  <h2>Crypto Trading Advance</h2>
                  <h6>90+ lesson’s in this.</h6>
                </div>
              </div>
              <div className={styles.sub}>
                <div id={styles.blue3}></div>
                <div className={styles.crypto}>
                  <h2>Crypto Trading Advance</h2>
                  <h6>90+ lesson’s in this.</h6>
                </div>
              </div>
              </div>
             </div>
            </div>
            <div className={styles.sideAll}>
                <div className={styles.online}>
                <div className={styles.onlineTop}>
                  <h1>Online Users</h1>
                  <h3>See all</h3>
                </div>
                <div className={styles.onlineUser}>
                <img src="/business-man.png" alt="Student image"/>
                <div className={styles.onlineUser2}>
                  <h1>Jibola Yomi</h1>
                  <h3>@j.boy</h3>
                </div>
                </div>
                <div className={styles.onlineUser}>
                <img src="/business-man.png" alt="Student image"/>
                <div className={styles.onlineUser2}>
                  <h1>Kolapo David</h1>
                  <h3>@kay_pee</h3>
                </div>
                </div>
              </div>
            </div>
         </div>
            


        </div>
        </div>
      </section>
      </div>
    </div>
  );
}
