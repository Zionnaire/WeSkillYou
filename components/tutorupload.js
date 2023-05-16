
import React, { useEffect, useState } from "react";
// import { CartContext } from "../context/cartContext";
// import { useContext } from "react";
import axios from "axios";
import styles from "../styles/mytutor.module.css"
// import { createLocation } from '@remix-run/router/dist/history'

export default function TutorUploads() {
  const [courseItems, setCourseItems] = useState([]);
  const getAllCourses = async () => {
    try {
      const res = await axios.get("");
      setCourseItems(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  const[video, setVideo] = useState()
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [link, setLink] = useState('')
  

  let handleSubmit = async() =>{
    
    try {
        const formData = new FormData()
        formData.append('video',video)
        formData.append('price',price)
        formData.append('title',title)
        formData.append('desc', desc)
        formData.append('link', link)
      const res = await axios.post("",formData);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <section className={styles.res1}>
        <div className={styles.res2}>
          <div className={styles.res3}>
            <h1>Chicken Republic</h1>
              <input className={styles.res3img} type="file" placeholder="Upload image" onChange={e =>setVideo(e.target.files[0])}/>
              <input className={styles.res3text} type="number" placeholder="Input Price Here" onChange={e =>setPrice(e.target.value)}/>
              <input className={styles.res3text} type="text" placeholder="Input Title Here" onChange={e =>setTitle(e.target.value)}/>
              <input className={styles.res3text} type="text" placeholder="Input Description Here" onChange={e =>setDesc(e.target.value)}/>
              <input className={styles.res3text} type="text" placeholder="Input Description Here" onChange={e =>setLink(e.target.value)}/>

              <button className={styles.res3btn} onClick={handleSubmit}>Submit</button>
              <h1 className={styles.status} >Available:</h1>
               
            <hr />
            {/* {courseItems.map((course, index) => (
              <div key={index} className={styles.res4}>
                <img className={styles.res4img} src={course.video} />
             
                <div className={styles.res4cont}>
                  <h1>{course.title}</h1>
                  <h2> {course.desc}</h2>
                  <h3>
                    {course.price}{" "}
                  </h3>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
}
