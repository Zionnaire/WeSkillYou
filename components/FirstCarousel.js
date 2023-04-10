// import Carousel from 'styled-components-carousel';
import styles from "@/styles/firstcarousel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import React from "react";
import dynamic from "next/dynamic";
// import Scroll from './Scroll'

import Carousel from "react-bootstrap/Carousel";

function FirstCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/img.png" alt="First slide" />
        <Carousel.Caption>
          <div className={styles.realWeld}>
            <div className={styles.weld}>
              <div className={styles.AiFillHeart}>
                {" "}
                <AiFillHeart />
              </div>
            </div>
            <img src="/img.png" alt="Aluminium" />
            <h4>Aluminium fabrication</h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/img (1).png" alt="Second slide" />

        <Carousel.Caption>
          <div className={styles.realWeld}>
            <div className={styles.weld}>
              <div className={styles.AiFillHeart}>
                {" "}
                <AiFillHeart />
              </div>
            </div>
            <img src="/img (1).png" alt="Aluminium" />
            <h4>Automobile Repair</h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/welding.png" alt="Third slide" />

        <Carousel.Caption>
          <div className={styles.realWeld}>
            <div className={styles.weld}>
              <img src="/welding.png" alt="Aluminium" />
              <button className={styles.hot}>HOT</button>
              <div className={styles.AiFillHeart}>
                {" "}
                <AiFillHeart />
              </div>
            </div>
            <h4>Welding and metal fabrication</h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FirstCarousel;
