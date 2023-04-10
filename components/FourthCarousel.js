// import Carousel from 'styled-components-carousel';
import styles from '@/styles/fourthcarousel.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillHeart, AiFillStar} from 'react-icons/ai'
import React from 'react';
import dynamic from "next/dynamic";
// import Scroll from './Scroll'



import Carousel from 'react-bootstrap/Carousel';

function FourthCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/plumbing 1.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className={styles.realWeld}>
            <div className={styles.weld}>
          <img src='/plumbing 1.png' alt='Aluminium' />
          <button className={styles.hot}>Last View</button>
         
          </div>
          <h4>Plumbing</h4>
          <h6>David Ibukun</h6>
          <div className={styles.star}>
          <p>4.0</p>
          <div className={styles.icons}>
         <div className={styles.allStar}><AiFillStar/></div>
         <div className={styles.allStar}><AiFillStar/></div>
         <div className={styles.allStar}><AiFillStar/></div>
         <div className={styles.allStar}><AiFillStar/></div>
          </div>
          <p>(7051)</p>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/hair styling 1.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className={styles.realWeld}>
         <div className={styles.weld}>
         <button className={styles.hot}>NEW</button>
         <div className={styles.AiFillHeart}> <AiFillHeart/></div>
         </div> 
         <img src='/hair styling 1.png' alt='Aluminium' />
         <h4>Interior design and decoration </h4>
         <h6>Olu Emmanuel</h6>
        <div className={styles.star}>
          <p>4.0</p>
          <div className={styles.icons}>
          <div className={styles.allStar}><AiFillStar/></div>
          <div className={styles.allStar}><AiFillStar/></div>
          <div className={styles.allStar}><AiFillStar/></div>
          <div className={styles.allStar}><AiFillStar/></div>
          </div>
          <p>(4051)</p>
        </div>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/interior.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className={styles.realWeld}>
         <div className={styles.weld}>
         <button className={styles.hot}>NEW</button>
         <div className={styles.AiFillHeart}> <AiFillHeart/></div>
         </div> 
         <img src='/interior.png' alt='Aluminium' />
         <h4>Interior design and decoration </h4>
         <h6>Olu Emmanuel</h6>
        <div className={styles.star}>
          <p>4.0</p>
          <div className={styles.icons}>
          <div className={styles.allStar}><AiFillStar/></div>
          <div className={styles.allStar}><AiFillStar/></div>
          <div className={styles.allStar}><AiFillStar/></div>
          <div className={styles.allStar}><AiFillStar/></div>
          </div>
          <p>(4051)</p>
        </div>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FourthCarousel