import styles from '@/styles/thirdcarousel.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {AiFillHeart, AiFillStar} from 'react-icons/ai'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ThirdCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <img className={styles.bgImg} src='/bg.png' alt='bg-img' />
          <img className={styles.teacher} src='/teacher2.png' alt='Female Teacher' />
        <Carousel.Caption>
        <div className={`${styles.teach}`}>
         
          <h5>Kolapo KP</h5>
          <p>Product Designer</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={styles.bgImg} src='/bg.png' alt='bg-img' />
         <img className={styles.teacher} src='/teacher1.png' alt='Male Teacher' />

        <Carousel.Caption>
        <div className={styles.teach}>
         
         <h5>Akin Praise</h5>
          <p>Programmer</p>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ThirdCarousel