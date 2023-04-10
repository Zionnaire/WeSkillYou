import React from "react";
import styles from '@/styles/popularcourses.module.css'
import {AiFillStar} from 'react-icons/ai'
// import NavBar from "./navbar";
// import { Container } from "react-bootstrap";
import Link from "next/link";

export default function PopularCourses(){
    return(
        <>
       
     {/* <Container> */}
     <section className={styles.pop1}>
            <diiv className={styles.pop2}>
                <div className={styles.pop3}>
                    <h2>Popular courses on our platform</h2>
                    <div className={styles.imgClip}>
                    <div className={styles.popImg}>
                        <img src="/.png" alt=""/>
                        <p className={styles.popCont}>Public Speaking</p>
                    </div>
                    <div className={styles.popImg}>
                       <Link href="/courses"> <img src="Rectangle 11.png" alt=""/></Link>
                        <p className={styles.popCont}>Interior Design and Decoration</p>
                    </div>
                    <div className={styles.popImg}>
                        <img src="/Rectangle 7.png" alt=""/>
                        <p className={styles.popCont}>Automobile Repair</p>
                    </div>
                    <div className={styles.popImg}>
                        <img src="/Rectangle 8.png" alt=""/>
                        <p className={styles.popCont}>Catering</p>
                    </div>
                    <div className={styles.popImg}>
                        <img src="/Rectangle 12.png" alt=""/>
                        <p className={styles.popCont}>Painting</p>
                    </div>
                    <div className={styles.popImg}>
                        <img src="/Rectangle 13.png" alt=""/>
                        <p className={styles.popCont}>Shoe Making</p>
                    </div>
                    </div>
                   
                </div>
               <div id={styles.see}>
                 <h3>See More</h3>
               {/* <AiOutlineArrowRight/> */}
               </div>
            </diiv>
        </section>

        <section className={styles.reg1}>
            <diiv className={styles.reg2}>
                <div className={styles.reg3}>
                    <h2>Most registered courses in a month</h2>
                   <div id={styles.all}>
                    <div className={styles.all2}>
                    <div className={styles.imgClip2}>
                    <div className={styles.regImg}>
                        <img src="/welding.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Welding and metal fabrication</h3>
                            <h3 className={styles.weld}>Ademola Timothy</h3>
                            <div className={styles.rates}>
                            <h6>10</h6>
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                            <div className={styles.fillSt}><AiFillStar/></div> 
                            <h6>(4051)</h6>
                        </div>
               
                    </div>
                    </div>
                    <div className={styles.imgClip2}>
                    <div className={styles.regImg}>
                        <img src="/Rectangle 9.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Welding and metal fabrication</h3>
                            <h3 className={styles.weld}>Ademola Timothy</h3>
                            <div className={styles.rates}>
                            <h6>10</h6>
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                            <div className={styles.fillSt}><AiFillStar/></div> 
                            <h6>(4051)</h6>
                        </div>
                    </div>
                    </div>

                    <div className={styles.imgClip2}>
                    <div className={styles.regImg}>
                        <img src="/Rectangle 12.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Welding and metal fabrication</h3>
                            <h3 className={styles.weld}>Ademola Timothy</h3>
                            <div className={styles.rates}>
                            <h6>10</h6>
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                            <div className={styles.fillSt}><AiFillStar/></div> 
                            <h6>(4051)</h6>
                        </div>
                    </div>
                    </div>
                    </div>

                    <div className={styles.all2}>
                        <div className={styles.imgClip2}>
                    <div className={styles.regImg}>
                        <img src="/Rectangle 11.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Welding and metal fabrication</h3>
                            <h3 className={styles.weld}>Ademola Timothy</h3>
                            <div className={styles.rates}>
                            <h6>10</h6>
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                            <div className={styles.fillSt}><AiFillStar/></div> 
                            <h6>(4051)</h6>
                        </div>
                    </div>
                    </div>

                    <div className={styles.imgClip2}>
                    <div className={styles.regImg}>
                        <img src="/Rectangle 8.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Welding and metal fabrication</h3>
                            <h3 className={styles.weld}>Ademola Timothy</h3>
                            <div className={styles.rates}>
                            <h6>10</h6>
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                            <div className={styles.fillSt}><AiFillStar/></div> 
                            <h6>(4051)</h6>
                        </div>
                    </div>
                    </div>
                    <div className={styles.imgClip2}>
                    <div className={styles.regImg}>
                        <img src="/Rectangle 12.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Welding and metal fabrication</h3>
                            <h3 className={styles.weld}>Ademola Timothy</h3>
                            <div className={styles.rates}>
                            <h6>10</h6>
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                            <div className={styles.fillSt}><AiFillStar/></div> 
                            <h6>(4051)</h6>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                     <div className={styles.see}>
                 <h3>See More</h3>
               {/* <AiOutlineArrowRight/> */}
               </div>
                   </div>
                   
                </div>
               
            </diiv>
        </section>

        <section className={styles.reg1}>
            <diiv className={styles.reg2}>
                <div className={styles.reg3}>
                    <h2>Most registered courses in a month</h2>
                   <div id={styles.all}>
                   <div className={styles.all2}>
                   <div className={styles.imgClip33}>
                    <div className={styles.regImg}>
                        <img src="/teach5.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Ademola Ade</h3>
                            <h3 className={styles.weld}>Instrumentalist</h3>
               
                    </div>
                    </div>
                    <div className={styles.imgClip33}>
                    <div className={styles.regImg}>
                        <img src="/teach4.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Akin Adams</h3>
                            <h3 className={styles.weld}>photographer</h3>
                           
                    </div>
                    </div>

                    <div className={styles.imgClip33}>
                    <div className={styles.regImg}>
                        <img src="/teach3.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Akin Adams</h3>
                            <h3 className={styles.weld}>Interior designer</h3>
                
                    </div>
                    </div>
                    </div>
                    <div className={styles.all2}>

                    <div className={styles.imgClip33}>
                    <div className={styles.regImg}>
                        <img src="/teach4.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Akin Adams</h3>
                            <h3 className={styles.weld}>Catereer</h3>
                           
                    </div>
                    </div>

                    <div className={styles.imgClip33}>
                    <div className={styles.regImg}>
                        <img src="/teach5.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>John John</h3>
                            <h3 className={styles.weld}>Painter</h3>
                           
                    </div>
                    </div>
                    <div className={styles.imgClip33}>
                    <div className={styles.regImg}>
                        <img src="/teach1.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Akin Adams</h3>
                            <h3 className={styles.weld}>Hair Stylist</h3>
                            </div>
                    </div>
                    
                   </div>
                   <div className={styles.see1}>
                 <h3>Try free trial to enhance your creative journey!</h3>
               <button id={styles.seeBtn}>Get started</button>
               </div>
                   </div>
                </div>
               
            </diiv>
        </section>

        <section className={styles.reg1}>
            <diiv className={styles.reg2}>
                <div className={styles.reg3}>
                    <h2>Most registered courses in a month</h2>
                   <div id={styles.all}>
                    <div className={styles.all2}>
                    <div className={styles.imgClip2}>
                    <div className={styles.regImg}>
                        <img src="/welding.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Welding and metal fabrication</h3>
                            <h3 className={styles.weld}>Ademola Timothy</h3>
                            <div className={styles.rates}>
                            <h6>10</h6>
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                            <div className={styles.fillSt}><AiFillStar/></div> 
                            <h6>(4051)</h6>
                        </div>
               
                    </div>
                    </div>
                    <div className={styles.imgClip2}>
                    <div className={styles.regImg}>
                        <img src="/Rectangle 9.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Welding and metal fabrication</h3>
                            <h3 className={styles.weld}>Ademola Timothy</h3>
                            <div className={styles.rates}>
                            <h6>10</h6>
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                            <div className={styles.fillSt}><AiFillStar/></div> 
                            <h6>(4051)</h6>
                        </div>
                    </div>
                    </div>

                    <div className={styles.imgClip2}>
                    <div className={styles.regImg}>
                        <img src="/Rectangle 12.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Welding and metal fabrication</h3>
                            <h3 className={styles.weld}>Ademola Timothy</h3>
                            <div className={styles.rates}>
                            <h6>10</h6>
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                            <div className={styles.fillSt}><AiFillStar/></div> 
                            <h6>(4051)</h6>
                        </div>
                    </div>
                    </div>
                    </div>

                    <div className={styles.all2}>
                        <div className={styles.imgClip2}>
                    <div className={styles.regImg}>
                        <img src="/Rectangle 11.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Welding and metal fabrication</h3>
                            <h3 className={styles.weld}>Ademola Timothy</h3>
                            <div className={styles.rates}>
                            <h6>10</h6>
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                            <div className={styles.fillSt}><AiFillStar/></div> 
                            <h6>(4051)</h6>
                        </div>
                    </div>
                    </div>

                    <div className={styles.imgClip2}>
                    <div className={styles.regImg}>
                        <img src="/Rectangle 8.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Welding and metal fabrication</h3>
                            <h3 className={styles.weld}>Ademola Timothy</h3>
                            <div className={styles.rates}>
                            <h6>10</h6>
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                            <div className={styles.fillSt}><AiFillStar/></div> 
                            <h6>(4051)</h6>
                        </div>
                    </div>
                    </div>
                    <div className={styles.imgClip2}>
                    <div className={styles.regImg}>
                        <img src="/Rectangle 12.png" alt=""/>
                    </div>
                    <div className={styles.regCont1}>
                            <h3 className={styles.weld}>Welding and metal fabrication</h3>
                            <h3 className={styles.weld}>Ademola Timothy</h3>
                            <div className={styles.rates}>
                            <h6>10</h6>
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                           <div className={styles.fillSt}><AiFillStar/></div> 
                            <div className={styles.fillSt}><AiFillStar/></div> 
                            <h6>(4051)</h6>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                   </div>
                   
                </div>
               
            </diiv>
        </section>
     {/* </Container> */}
        </>
    )
}