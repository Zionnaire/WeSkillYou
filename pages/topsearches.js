import React from "react";
import { BiSearch } from "react-icons/bi";
import styles from "@/styles/topsearches.module.css";
import { GoSettings } from "react-icons/go";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Container } from "react-bootstrap";
import SideBar from "@/components/sidebar";
// import { Link } from "react-router-dom";
import Link from "next/link";

export default function TopSearches() {
  return (
    <>
    <SideBar />
      <Container>
        <section className={styles.top1}>
          <div className={styles.top2}>
            <div className={styles.top3}>
              <div className={styles.topInput}>
                <input
                  className={styles.inputBox}
                  type="text"
                  placeholder="Search course"
                />
                <div className={styles.search}>
                  <BiSearch />
                </div>
              </div>
              <section className={styles.TopSearches1}>
                <div className={styles.TopSearches2}>
                  <div className={styles.TopSearches3}>
                    <div className={styles.TopSearchesRow}>
                      <h4>Top Searches</h4>
                      <div className={styles.filter}>
                       <Link href="/filters"> <GoSettings /></Link>
                      </div>
                    </div>
                    <div className={styles.flexBox}>
                      <div className={styles.flexBox1}>
                        <button>Photography</button>
                        <button>Automobile repair</button>
                        <button>Plumbing</button>
                      </div>
                      <div className={styles.flexBox1}>
                        <button>Photography</button>
                        <button>Automobile repair</button>
                        <button>Plumbing</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles.courses1}>
                <div className={styles.courses2}>
                  <div className={styles.courses3}>
                    <div className={styles.coursesRow}>
                      <h4>Courses</h4>
                    </div>
                    <div className={styles.coursesBox}>
                      <div className={styles.coursesBox1}>
                        <div className={styles.imgText}>
                          <img src="/img.png" className={styles.img} />
                          <p>Aluminium Fabrication</p>
                        </div>
                        <div className={styles.imgText}>
                          <img src="/img (1).png" className={styles.img} />
                          <p>Automobile Repair</p>
                        </div>
                        <div className={styles.imgText}>
                          <img src="/img (2).png" className={styles.img} />
                          <p>Photography</p>
                        </div>
                        <div className={styles.imgText}>
                          <img src="/img (3).png" className={styles.img} />
                          <p>Hair styling & wig making</p>
                        </div>
                      </div>
                      <div className={styles.coursesBox2}>
                        <div className={styles.imgText}>
                          <img src="/img (4).png" className={styles.img2} />
                          <p>Plumbing</p>
                        </div>
                        <div className={styles.imgText}>
                          <img src="/img (7).png" className={styles.img2} />
                          <p>Interior design & decoration</p>
                        </div>
                        <div className={styles.imgText}>
                          <img src="/img (6).png" className={styles.img2} />
                          <p>Welding & metal fabrication</p>
                        </div>
                        <div className={styles.imgText}>
                          <img src="/img (5).png" className={styles.img2} />
                          <p>Painting</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.seeMore}>
                      <p>See More</p>
                      <div className={styles.seeMoreIcon}>
                        <AiOutlineArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
