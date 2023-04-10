import { Container } from "react-bootstrap";
import React from "react";
import styles from '@/styles/home.module.css'
import NavBar from "@/components/head";
import {AiOutlineSearch, AiFillStar} from 'react-icons/ai'
import {FcFaq} from 'react-icons/fc'
import {FaTiktok} from 'react-icons/fa'
import {IoLogoYoutube} from 'react-icons/io'
import {BsFacebook, BsLinkedin, BsFillEnvelopeFill} from 'react-icons/bs'
import Link from "next/link";

export default function Homepage(){
    return(
        <>
        <NavBar/>
        <Container>
            <section className={`"row" ${styles.sect1}`}>

                <div className={`"col-sm-4" ${styles.sect2}`}>
                    <div className={styles.SubSect2}>
                        <h1>Empower yourself with WeSkillYou</h1>
                        <h3>
                            Start, switch or advance your career with courses 
                            and get certificates.
                        </h3>
                        <Link href="/signup"><button className={styles.sectBtn}>GET STARTED</button></Link>
                    </div>

                    <div className={`"col-sm-4" ${styles.sect3}`}>
                        <img src="/Premium.png"></img>

                    </div>
                </div>
            </section>

            <section className={`"row" ${styles.sect1}`}>
                <div className={`col-sm-3 ${styles.sect2}`}>
                    <div className={styles.sect13}>
                        <div className={styles.set1}>
                            <div className={styles.subSet}>
                                <img className={styles.subImg} src="/Group 1.png" alt=""/>
                            </div>
                          <div className={styles.subCont}>
                          <h2>100+</h2>
                        <p>Total Skills</p>
                          </div>
                        </div>
                    
                        <div className={styles.set1}>
                            <div className={styles.subSet}>
                                <img className={styles.subImg} src="/Group 2.png" alt=""/>
                            </div>
                          <div className={styles.subCont}>
                          <h2>50+</h2>
                        <p>Expert instructors</p>
                          </div>
                        </div>

                        <div className={styles.set1}>
                            <div className={styles.subSet}>
                                <img className={styles.subImg} src="/Group 3.png" alt=""/>
                            </div>
                          <div className={styles.subCont}>
                          <h2>5000+</h2>
                        <p>Students</p>
                          </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className= {styles.sect41}>
                <div className={styles.sect42}>
                    <div className={styles.sect43}>
                        <div className={styles.sect434}>
                        <h1>Explore Skills</h1>
                        <div>
                            <h6>All Skills</h6>
                            <hr/>
                        </div>
                        </div>
                        <div className={styles.rock}>
                   <img src="/rock.png" alt=""/> 
                   </div>
                    </div>
                  
                </div>
            </section>

            <section className={styles.skills}>
                <div className={styles.skills1}>
                    <div className={styles.skills2}>
                        <h4>Get started by selecting your preferred skill or </h4>
                        <div className={styles.input}>
                        <input id={styles.inputform} type="text" placeholder="search"/>
                        <div id={styles.search}><AiOutlineSearch/></div>
                        </div>

                    <div className={styles.clip}>
                    <div className={styles.skillImg}>
                            <img src="/Rectangle 7.png"/>
                            <div className={styles.skillCont}>
                                <h1>Catering</h1>
                                <div className={styles.subSkill}>
                                    <h6>David Tiomthy</h6>
                                    <div className={styles.rating}>
                                        <p>4.0</p>
                                       <div id={styles.star}> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></div>
                                       <p>(3051)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.skillImg}>
                            <img src="/Rectangle 9.png"/>
                            <div className={styles.skillCont}>
                                <h1>Hairstyling</h1>
                                <div className={styles.subSkill}>
                                    <h6>Kemisola Ayo</h6>
                                    <div className={styles.rating}>
                                        <p>4.0</p>
                                       <div id={styles.star}> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></div>
                                       <p>(4051)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.skillImg}>
                            <img src="/Rectangle 8.png"/>
                            <div className={styles.skillCont}>
                                <h1>Painting</h1>
                                <div className={styles.subSkill}>
                                    <h6>Emmanuel Eze</h6>
                                    <div className={styles.rating}>
                                        <p>4.0</p>
                                       <div id={styles.star}> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></div>
                                       <p>(4051)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className={styles.clip}>

                        <div className={styles.skillImg}>
                            <img src="/Rectangle 13.png"/>
                            <div className={styles.skillCont}>
                                <h1>Bead Making</h1>
                                <div className={styles.subSkill}>
                                    <h6>Musa Aliu</h6>
                                    <div className={styles.rating}>
                                        <p>4.0</p>
                                       <div id={styles.star}> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></div>
                                       <p>(3051)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.skillImg}>
                            <img src="/Rectangle 12.png"/>
                            <div className={styles.skillCont}>
                                <h1>Shoe Making</h1>
                                <div className={styles.subSkill}>
                                    <h6>Ademola Timothy</h6>
                                    <div className={styles.rating}>
                                        <p>4.0</p>
                                       <div id={styles.star}> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></div>
                                       <p>(3051)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.skillImg}>
                            <img src="/Rectangle 11.png"/>
                            <div className={styles.skillCont}>
                                <h1>Interior Design and Decoration</h1>
                                <div className={styles.subSkill}>
                                    <h6>David Tiomthy</h6>
                                    <div className={styles.rating}>
                                        <p>4.0</p>
                                       <div id={styles.star}> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></div>
                                       <p>(3051)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                    <button className={styles.skillBtn}>View More</button>
                </div>
            </section>

            <section className={styles.testimony}>
                <div className={styles.test1}>
                    <div className={styles.test2}>

                        <div className={styles.test3}>
                            <h1>Trusted by over 4100 great schools and workshops</h1>
                            <h3>
                                Leading learning environments use the vocational skills 
                                to help students keep their skill fresh
                    
                            </h3>
                            <div className={styles.labels}>
                                <div className={styles.subLabel}>
                                <img src="/label1.png" alt=""/>
                                <img src="/label2.png" alt=""/>
                                <img src="/label3.png" alt=""/>
                                <img src="/label4.png" alt=""/>
                                </div>
                                <div className={styles.subLabel}>
                                <img src="/label5.png" alt=""/>
                                <img src="/label6.png" alt=""/>
                                <img src="/label7.png" alt=""/>
                                <img src="/label8.png" alt=""/>
                            </div>
                            </div>

                            <div className={styles.testimonial}>
                                
                                <h5>
                                “Thanks to weskillyou, David Tony has armed our workforce,ryryrru rururjrrrgrrhrrnjhhjvbvv vvcv
vvjmnjj. guhyululjkl fyutdg
fxdfgffhjk gcffjgkkj.kbjk.
                                </h5>
                                <div className={styles.man}>
                                    <img src="/man.png" alt=""/>
                                    <h4>Jimi Agbaje</h4>
                                    <h5>Principal</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.testimony}>
                <div className={styles.test1}>
                    <div className={styles.test2}>
                        <h2>How learners like you are achieving their goals</h2>
                    <div className={styles.testClip}>
                    <div className={styles.testWrap}>
                       <div className={styles.test33}>
                            <h3>
                            Thanks to jdjjdjdj djdhjhj fjfjfhffk 
                            jffjfhffkf fjfjfjfkfkfjkf jfjjfdjdn fnddj
                            ndjkndkjkdj djfjfjfhfhf fjnfjfjfff
                            jkfjfjkfjjkdjkdjkdkdjjd
                            jjjkdjdnjk dfjnjnnj jnkjknnnnjkjkjnk
                            m
                            </h3>
                            <div className={styles.testImg}>
                            <img src="/lady.png" alt="oye"/>
                            <h6>Oye O.</h6>
                            </div>
                        </div>
                        <div className={styles.test33}>
                            <h3>
                            Thanks to jdjjdjdj djdhjhj fjfjfhffk 
                            jffjfhffkf fjfjfjfkfkfjkf jfjjfdjdn fnddj
                            ndjkndkjkdj djfjfjfhfhf fjnfjfjfff
                            jkfjfjkfjjkdjkdjkdkdjjd
                            jjjkdjdnjk dfjnjnnj jnkjknnnnjkjkjnk
                            m
                            </h3>
                            <div className={styles.testImg}>
                            <img src="/lady.png" alt="oye"/>
                            <h6>Oye O.</h6>
                            </div>
                        </div>
                       </div>

                       <div className={styles.testWrap}>
                       <div className={styles.test33}>
                            <h3>
                            Thanks to jdjjdjdj djdhjhj fjfjfhffk 
                            jffjfhffkf fjfjfjfkfkfjkf jfjjfdjdn fnddj
                            ndjkndkjkdj djfjfjfhfhf fjnfjfjfff
                            jkfjfjkfjjkdjkdjkdkdjjd
                            jjjkdjdnjk dfjnjnnj jnkjknnnnjkjkjnk
                            m
                            </h3>
                            <div className={styles.testImg}>
                            <img src="/lady.png" alt="oye"/>
                            <h6>Oye O.</h6>
                            </div>
                        </div>
                        <div className={styles.test33}>
                            <h3>
                            Thanks to jdjjdjdj djdhjhj fjfjfhffk 
                            jffjfhffkf fjfjfjfkfkfjkf jfjjfdjdn fnddj
                            ndjkndkjkdj djfjfjfhfhf fjnfjfjfff
                            jkfjfjkfjjkdjkdjkdkdjjd
                            jjjkdjdnjk dfjnjnnj jnkjknnnnjkjkjnk
                            m
                            </h3>
                            <div className={styles.testImg}>
                            <img src="/lady.png" alt="oye"/>
                            <h6>Oye O.</h6>
                            </div>
                        </div>
                       </div>
                    </div>
                    </div>
                </div>

            </section>
        </Container>

        <footer className={styles.foot}>
                <div className={styles.foot1}>
                    <div className={styles.foot2}>
                        <div className={styles.subFoot21}>
                        <div id={styles.subFoot2}>
                        <img className={`img ${styles.brandlogo}`} src="/brandlogo.png" alt="logo" />
                        <h1 className={styles.we}>WeSkillYOU</h1>
                        </div>
                        <div className={styles.subFoot3}>
                            <div id={styles.FAQs}>
                                <FcFaq/>
                                <h3>FAQs</h3>
                            </div>
                            <div id={styles.support}>
                                <div id={styles.fill}><BsFillEnvelopeFill/></div>
                                <h3>Students Support</h3>
                            </div>
                        </div>
                        </div>
                        <div className={styles.subFoot22}>
                            <div className={styles.socials}>
                                <BsFacebook/>
                                <BsLinkedin/>
                                <IoLogoYoutube/>
                                <FaTiktok/>
                            </div>
                            <div className={styles.app}>
                                <img src="/Apple.png" alt=""/>
                                <img src="/Google.png" alt=""/>  
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}