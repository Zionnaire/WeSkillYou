import { Container } from "react-bootstrap";
import {FaRegThumbsUp} from 'react-icons/fa'
import React from "react";
import styles from '@/styles/comment.module.css'
import {BsArrow90DegLeft} from 'react-icons/bs'
// import {AiFillHeart, AiFillHome} from 'react-icons/ai'


export default function Comment(){
    return(
        <>
        <Container fluid>
                    <section className={styles.comment}>
                        <div className={styles.com1}>
                            <div className={styles.com2}>
                            <div id={styles.left}> <BsArrow90DegLeft/> </div>
                                <div className={styles.com3}>
                                
                                    <h1>1  Replies</h1>
                                    <button className={styles.comBtn}>Add Reply</button>
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
                                    <img src="/lady2.png" alt="@tolu_tim"/>
                                    <div className={styles.comCont}>
                                        <h4>@tolu_tim</h4>
                                        <h4>20 mins ago</h4>
                                        <h4>
                                            The step is really easy, just keep practicing 
                                            line drawing with right posture and correct pencil 
                                            holding as shown in the video! Good luck.
                                        </h4>
                                        <div className={styles.main}>
                                            <div className={styles.like}>
                                            <h3>Liked</h3>
                                            <h3>Reply</h3>
                                            </div>
                                            <div className={styles.ok}>
                                                <FaRegThumbsUp/>
                                                <h6>40</h6>

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