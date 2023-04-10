import {AiOutlineSearch} from 'react-icons/ai'
import Form from 'react-bootstrap/Form';
import styles from '@/styles/AdminDash.module.css'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {RiNotification2Line} from 'react-icons/ri'
import {MdPeopleAlt} from 'react-icons/md'
import {GiGraduateCap} from 'react-icons/gi'

export default function AdminDash(){
    return(
        <>
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
                 <div id={styles.flex_icon}> <AiOutlineSearch/></div>
                  </Form>
                    {/* </div> */}
                    <div className={styles.routine}>
                        <button className={styles.routineBtn}><HiOutlineClipboardList/> Routine</button>
                        <RiNotification2Line/>
                        <img id={styles.ladyImg} src='/lady.png' alt='lady'/>
                    </div>
                </div>
            </div>

        </section>

        <section className={styles.total1}>
            <div className={styles.total2}>
            <div className={styles.total3}>
               <div id={styles.subtotal}>
               <div className={styles.total4}>
                    <div className={styles.total5}>
                        <GiGraduateCap/>
                    </div>
                    <h2>Total Students</h2>
                    <h3>1430</h3>
                </div>
                <div className={styles.total4}>
                    <div className={styles.total5}>
                        <MdPeopleAlt/>
                    </div>
                    <h2>Total Teachers</h2>
                    <h3>200</h3>
                </div>
               </div>
                </div>
            </div>

        </section>
      </div>
        </>
    )
}