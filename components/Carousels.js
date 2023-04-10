import styles from '@/styles/carousel.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillHeart, AiFillStar} from 'react-icons/ai'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/welding.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className={styles.realWeld}>
            <div className={styles.weld}>
          <button className={styles.hot}>HOT</button>
          <div className={styles.AiFillHeart}> <AiFillHeart/></div>
          </div>
          <img src='/welding.png' alt='Aluminium' />
          <h4>Welding and metal fabrication</h4>
          <h6>Ademola Timothy</h6>
          <div className={styles.star}>
          <p>4.0</p>
          <div className={styles.icons}>
         <div className={styles.allStar}><AiFillStar/></div>
         <div className={styles.allStar}><AiFillStar/></div>
         <div className={styles.allStar}><AiFillStar/></div>
         <div className={styles.allStar}><AiFillStar/></div>
          </div>
          <p>(5551)</p>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/interior.png"
          alt="Second slide"
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
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/photography.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className={styles.realWeld}>
            <div className={styles.weld}>
          <img src='/photography.png' alt='Aluminium' />
          <button className={styles.hot}>HOT</button>
          <div className={styles.AiFillHeart}> <AiFillHeart/></div>
          </div>
          <h4>Photography</h4>
          <h6>Toluade Sheda</h6>
          <div className={styles.star}>
          <p>4.0</p>
          <div className={styles.icons}>
         <div className={styles.allStar}><AiFillStar/></div>
         <div className={styles.allStar}><AiFillStar/></div>
         <div className={styles.allStar}><AiFillStar/></div>
         <div className={styles.allStar}><AiFillStar/></div>
          </div>
          <p>(5551)</p>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels