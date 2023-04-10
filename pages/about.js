import React from "react";
import { Container } from "react-bootstrap";
import styles from "@/styles/about.module.css";
import NavBar from "@/components/head";

export default function About() {
  return (
    <>
    <NavBar />
      <Container fluid>
        <section className={styles.about1}>
          <div className={styles.about2}>
            <div className={styles.about3}>
              <div className={styles.mainContent}>
                <h2>About Our Team</h2>
                <p>
                  We are an e-learning platform focused on providing the very
                  best educational resources to entrepreneurs. Our mission is to
                  provide a comprehensive learning experience that helps
                  entrepreneurs hone their skills, develop successful
                  strategies, and build successful businesses. Our team includes
                  experienced entrepreneurs and educators, as well as a
                  passionate group of professionals dedicated to helping
                  entrepreneurs succeed. We strive to create an environment that
                  encourages and supports learning and growth. We offer a wide
                  range of courses and materials to help entrepreneurs start and
                  grow their businesses. Our courses provide the latest
                  strategies and tools, as well as an understanding of the
                  fundamentals of entrepreneurship. We also have a library of
                  resources, including books, webinars, and podcasts, to help
                  entrepreneurs stay up-to-date with the latest trends and
                  developments in their field. Our platform also provides a
                  community of like-minded entrepreneurs and experts, where
                  members can connect and collaborate with each other. Through
                  our platform, entrepreneurs can learn from each other, share
                  successes and failures, and find mentors and partners to help
                  them on their journey.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
