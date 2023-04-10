import { Container } from "react-bootstrap";
import {AiOutlineStar} from 'react-icons/ai'
import { BsPerson} from 'react-icons/bs'
import {FaRegThumbsUp} from 'react-icons/fa'
import React from "react";
import styles from '@/styles/overview.module.css'
// import {BsFillPersonFill, BsPlayFill} from 'react-icons/bs'
// import {AiFillHeart, AiFillHome} from 'react-icons/ai'
import OL from "./olover";
import Link from "next/link";

export default function Overview(){
    return(
        <>
         <OL/>
        <Container>
           
        <section className={styles.sect1}>
            <div className={styles.sect2}>
                <div className={styles.sect3}>
                    <h1>Introduction</h1>
                    <p>This online Acrylic Painting course will teach you the basics of using acrylic paint, 
                        including colour mixing, brushwork, and layering techniques.
                        </p>
                        <p>
                            It's perfect for both beginners and experienced painters looking to improve their skills. 
                            Join us and start creating beautiful acrylic paintings today!
                        </p>
                        <button className={styles.btn1}>See more</button>
                        </div>
                    </div>
                    </section>

                    <section className={styles.feed}>
                        <div className={styles.feed2}>
                            <div className={styles.feed3}>
                                <h1>Feedback</h1>
                               <div className={styles.feed4}>
                                <div className={styles.review}>
                                    <div id={styles.iconSet}>
                                    <div id={styles.icon}><AiOutlineStar/></div>
                                    <h6>4.7</h6>
                                    </div>
                                    <h1>Reviews</h1>
                                </div>
                                <div className={styles.review}>
                                <div id={styles.iconSet}>
                                <div><BsPerson /> </div>
                                <h6>4.7</h6>
                                </div>
                                <h1>Students</h1>
                                </div>
                                </div>
                              <div className={styles.all}>
                              <div className={styles.feed5}>
                                <img className={styles.feed5Img} src='/Avatar.png' alt="Avatar"/>
                                <div className={styles.feedCont}>
                                    <h3>@j.boy</h3>
                                    <h6>31 mins ago</h6>
                                    <h2>
                                        Your use of color in this acrylic painting is stunning!
                                    </h2>

                                </div>
                               </div>
                               <div className={styles.feed5}>
                                <img className={styles.feed5Img} src='/image7.png'/>
                                <div className={styles.feedCont}>
                                    <h3>@kay_pee</h3>
                                    <h6>01 hour ago</h6>
                                    <h2>
                                    Love all of it! so full of movement and color
                                    </h2>

                                </div>
                               </div>
                               <div className={styles.feed5}>
                                <img className={styles.feed5Img} src='/lady.png'/>
                                <div className={styles.feedCont}>
                                    <h3>@highbeekay</h3>
                                    <h6>11 hour ago</h6>
                                    <h2>
                                    I love how you captured the light in this painting.
                                    </h2>
                                </div>
                               </div>
                               <button className={styles.LoadBtn}>Load More</button>
                              </div>
                               
                            </div>
                        </div>
                    </section>

                    <section className={styles.project}>
                    <div className={styles.pro1}>
                        <div className={styles.pro2}>
                            <div className={styles.pro3}>
                                <h1>Project by Students</h1>
                                <button className={styles.proBtn}>Add Project</button>
                            </div>
                           
                            <div className={styles.proImg2}>
                                <img src="/Rectangle 16.png" alt="paintings"/>
                                <img src="/Rectangle 15.png" alt="paintings"/>
                                <img src="/Rectangle 14.png" alt="paintings"/>
                                </div>
                             
                                <button className={styles.LoadBtn}>View More Projects</button>
                            </div>
                        </div>
                    </section>

                    <section className={styles.comment}>
                        <div className={styles.com1}>
                            <div className={styles.com2}>
                                <div className={styles.com3}>
                                    <h1>5 Comments</h1>
                                   <Link href="/comment"> <button className={styles.comBtn}>Add Comment</button></Link>
                                </div>
                                <div className={styles.com4}>
                                    <img src="/lady.png" alt="@Moun"/>
                                    <div className={styles.comCont}>
                                        <h4>@mouni</h4>
                                        <h5>11 mins ago     Student</h5>
                                        <h3>How to get better at line? I am really stuck in this step!</h3>
                                        <div className={styles.main}>
                                            <div className={styles.like}>
                                            <h3>Liked</h3>
                                            <h3>Reply</h3>
                                            </div>
                                            <div className={styles.ok}>
                                                <FaRegThumbsUp/>
                                                <h6>21</h6>

                                            </div>
                                        </div>
                                        <h5>view 1 replies</h5>
                                    </div>
                                </div>
                                <div className={styles.com4}>
                                    <img src="/image4.png" alt="@Moun"/>
                                    <div className={styles.comCont}>
                                        <h4>@haywhy</h4>
                                        <h4>11 mins ago     Student</h4>
                                        <h4>How to get better at line? I am really stuck in this step!</h4>
                                        <div className={styles.main}>
                                            <div className={styles.like}>
                                            <h3>Liked</h3>
                                            <h3>Reply</h3>
                                            </div>
                                            <div className={styles.ok}>
                                                <FaRegThumbsUp/>
                                                <h6>10</h6>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </Container>
      
        </>
    )
}