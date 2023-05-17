// import SidebarMenu from 'react-bootstrap';
import React from 'react';
import {AiTwotoneSetting, AiFillHome, AiOutlineHeart, AiOutlineSearch} from 'react-icons/ai'
import {SlLogout} from 'react-icons/sl'
import {BsPlayFill} from 'react-icons/bs'
import {MdAddAlert, MdOutlineLiveHelp} from 'react-icons/md'
import styles from '../styles/sidebarpage.module.css'
import Link from 'next/link';

export default function SideBar(){
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
          
    <img src='/brandlogo.png' alt='' className={styles.brandimg}/>
    <h1 id={styles.skill}>WeSkillYou</h1>
          <div className={styles.client}>
            <h1>John Doe</h1>
            <h6>johndoe@gmail.com</h6>
          </div>
          <div className={styles.dash}>
         <Link href="/dashboard"> <button id={styles.dashbtn}><AiFillHome/>HOME</button></Link>
           <Link href="/mytopsearches"><button id={styles.dashbtn}> <BsPlayFill/>GALLERY</button></Link>
           <h5><Link href="/favourites"><button  id={styles.dashbtn}><AiOutlineHeart/> FAVOURITES</button></Link></h5>
            <h5><button  id={styles.dashbtn}><AiOutlineSearch/> SEARCH</button></h5>
            <h6><Link href="/settings"><button  id={styles.dashbtn}><AiTwotoneSetting/> SETTINGS</button></Link></h6>
            <div id={styles.set}>
            <h6><button  id={styles.dashbtn}><MdOutlineLiveHelp/><Link href="/helps">HELP</Link></button></h6>
            <h6><SlLogout/> LOG OUT</h6>
            </div>
          </div>
    </ul>
  </div>
</nav>

<ul id={styles.menu}>
    <div className={styles.menuClient}>
      <img className={styles.clientimg} src='/lady.png' alt=""/>
    <MdAddAlert/>
      </div>
          
    <img src='/brandlogo.png' alt='' className={styles.brandimg}/>
    <h1 id={styles.skill}>WeSkillYou</h1>
          <div className={styles.client}>
            <h1>John Doe</h1>
            <h6>johndoe@gmail.com</h6>
          </div>
          <div className={styles.dash}>
          <Link href="/dashboard"> <button id={styles.dashbtn}><AiFillHome/>HOME</button></Link>
           <Link href="/mytopsearches"><button id={styles.dashbtn}> <BsPlayFill/>GALLERY</button></Link>
           <h5><Link href="/favourites"><button  id={styles.dashbtn}><AiOutlineHeart/> FAVOURITES</button></Link></h5>
            <h5><button  id={styles.dashbtn}><AiOutlineSearch/> SEARCH</button></h5>
            <h6><Link href="/settings"><button  id={styles.dashbtn}><AiTwotoneSetting/> SETTINGS</button></Link></h6>
            <div id={styles.set}>
            <h6><button  id={styles.dashbtn}><MdOutlineLiveHelp/><Link href="/helps">HELP</Link></button></h6>
            <h6><SlLogout/> LOG OUT</h6>
            </div>
          </div>
    </ul>
       
        </div>
      </div>

      </section>

      
      </>
    )
}