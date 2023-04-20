import React from 'react';
import {AiTwotoneSetting, AiFillHome, AiOutlineHeart} from 'react-icons/ai'
import {SlLogout} from 'react-icons/sl'
import {RxDashboard} from 'react-icons/rx'
import {MdAddAlert, MdOutlineLiveHelp, MdOutlineDashboardCustomize, MdOutlineNotificationsNone} from 'react-icons/md'
import styles from '@/styles/adminside.module.css'
import Link from 'next/link';


export default function Adminside(){
    return(
      <>
      <section className={styles.section1}>
      <div className={styles.section2}>
        <div className={styles.section3}>
     
        <nav role="navigation">
  <div id={styles.menuToggle}>
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id={styles.menu}>
    <div className={styles.menuClient}>
      <img className={styles.clientimg} src='/lady.png' alt=""/>
    <MdAddAlert/>
      </div>
          <div className={styles.brandy}>
          <img src='/Vector (1).png' alt='' className={styles.brandimg}/>
    <h1 id={styles.skill}>WeSkillYou</h1>
          </div>
          <div className={styles.dash}>
         <Link href="/"> <h5 id={styles.dashbtn}><AiFillHome/>Home</h5></Link>
         <h5><MdOutlineDashboardCustomize/> Dashboard</h5>
           <Link href="/topsearches"><h5 id={styles.dashbtn}> <RxDashboard/>Courses</h5></Link>
           <h5><Link href="/favourite"><AiOutlineHeart/> Favourite</Link></h5>
           <h5><MdOutlineNotificationsNone/>Notifications</h5>
            <h6><Link href="/settings"><AiTwotoneSetting/> Settings</Link></h6>
            <div className={styles.premium}>
               <h1>Go Premium</h1>
               <h3>Explore 500+ Courses With Lifetime Membership</h3>
               <button id={styles.upgradeBtn}>Upgrade Now</button>
            </div>
            <div id={styles.set}>
            <h6><MdOutlineLiveHelp/><Link href="/help">Help</Link></h6>
            <h6><SlLogout/> Log out</h6>
            </div>
          </div>
    </ul>
  </div>
</nav>

<ul id={styles.menu1}>
<div className={styles.menuClient}>
      <img className={styles.clientimg} src='/lady.png' alt=""/>
    <MdAddAlert/>
      </div>
          <div className={styles.brandy}>
          <img src='/Vector (1).png' alt='' className={styles.brandimg}/>
          <h1 id={styles.skill}>WeSkillYou</h1>
          </div>
          <div className={styles.dash}>
         <Link href="/"> <h5 id={styles.dashbtn}><AiFillHome/>Home</h5></Link>
         <h5><MdOutlineDashboardCustomize/> Dashboard</h5>
           <Link href="/topsearches"><h5 id={styles.dashbtn}> <RxDashboard/>Courses</h5></Link>
           <h5><Link href="/favourite"><AiOutlineHeart/> Favourite</Link></h5>
           <h5><MdOutlineNotificationsNone/>Notifications</h5>
            <h6><Link href="/settings"><AiTwotoneSetting/> Settings</Link></h6>
            <div className={styles.premium}>
               <h1>Go Premium</h1>
               <h3>Explore 500+ Courses With Lifetime Membership</h3>
               <button id={styles.upgradeBtn}>Upgrade Now</button>
            </div>
            <div id={styles.set}>
            <h6><MdOutlineLiveHelp/><Link href="/help">Help</Link></h6>
            <h6><SlLogout/> Log out</h6>
            </div>
          </div>
    </ul>
       
        </div>
      </div>

      </section>

      
      </>
    )
}