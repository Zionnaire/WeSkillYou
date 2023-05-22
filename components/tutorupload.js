import React, { useState , useEffect} from "react";
import axios from "../utils/Axios";
import styles from "../styles/mytutor.module.css";
import { Content } from "next/font/google";
import { headers } from "@/next.config";
import LazyImage from '../components/lazyımage';

export default function TutorUploads() {
  const [base64String, setBase64String] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [videoLink, setVideoLink] = useState("");
const [token, setToken] = useState("")

  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result.split(",")[1];
      setBase64String(base64);
    };

    reader.readAsDataURL(file);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    setSelectedImage(imageUrl);

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        // Calculate the desired dimensions for size reduction
        const maxWidth = 480;
        const maxHeight = 280;
        let width = image.width;
        let height = image.height;

        if (width > maxWidth || height > maxHeight) {
          if (width / maxWidth > height / maxHeight) {
            height *= maxWidth / width;
            width = maxWidth;
          } else {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        context.drawImage(image, 0, 0, width, height);
        const resizedBase64String = canvas.toDataURL();

        setBase64String(resizedBase64String);
      };

      image.src = imageUrl;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSubmit = async () => {
    const req = {
      courseVid: base64String,
      thumbNail: base64String,
      price: price,
      title: title,
      descrip: desc,
      videoLink: videoLink,
    };

    try {
      const res = await axios.post(
        "video/createVideo",
        req, {
          headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }}
      );
      // Handle the response
      console.log(res);
    } catch (error) {
      
    }
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    let token =localStorage.getItem("token")
    console.log(token);
    const fetchData = async () => {
      try {
        console.log(token)
        const response = await axios.get("video/", {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })
        console.log(response);
        setData(response.data.videos);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData(data);
  }, []);

  return (
    <>
      <section className={styles.res1}>
        <div className={styles.res2}>
          <div className={styles.res3}>
            <h1>RoyalDee Catering</h1>
            <h2>Upload Video:</h2>
            <input
              className={styles.res3img}
              type="file"
              accept="video/*"
              onChange={handleFileChange}
            />
            {base64String && (
              <video controls>
                <source
                  src={`data:video/mp4;base64,${base64String}`}
                  type="video/mp4"
                />
              </video>
            )}
            <h2>Upload Thumbnail:</h2>
          
            <input
             type="file"
             accept="image/*"
             onChange={handleImageUpload}
           />
           {selectedImage && <img src={selectedImage} alt="Selected" />}
            <h2>Registration Fee:</h2>
            <input
              className={styles.res3text}
              type="number"
              placeholder="Input Price Here"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <h2>Upload Title:</h2>
            <input
              className={styles.res3text}
              type="text"
              placeholder="Input Title Here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h2>Upload Description:</h2>
            <input
              className={styles.res3text}
              type="text"
              placeholder="Input Description Here"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <h2>YouTube Link:</h2>
            <input
              className={styles.res3text}
              type="text"
              placeholder="Input Link Here"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
            />
            <button className={styles.res3btn} onClick={handleSubmit}>
              Submit
            </button>
            <h1 className={styles.status}>Available:</h1>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
}
