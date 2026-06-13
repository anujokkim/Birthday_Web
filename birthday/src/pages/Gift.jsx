import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Gift.css";

import gift1 from "../images/gift1.png";
import gift2 from "../images/gift2.png";
import gift3 from "../images/gift3.png";
import gift4 from "../images/gift4.png";

export default function Gift() {
  const [selectedGift, setSelectedGift] = useState(null);
  const navigate = useNavigate();

  const gifts = [gift1, gift2, gift3, gift4];

  // Flower Trail Effect
  useEffect(() => {
    const createFlower = (e) => {
      const flowers = ["🌸", "🌺", "🌷", "💖", "✨"];

      const flower = document.createElement("div");
      flower.className = "flower";

      flower.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

      flower.style.left = e.pageX + "px";
      flower.style.top = e.pageY + "px";

      document.body.appendChild(flower);

      setTimeout(() => {
        flower.remove();
      }, 1500);
    };

    window.addEventListener("mousemove", createFlower);

    return () => {
      window.removeEventListener("mousemove", createFlower);
    };
  }, []);

  // Custom Cursor
  useEffect(() => {
    const cursor = document.createElement("div");

    cursor.className = "custom-cursor";
    cursor.innerHTML = "";

    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return (
    <div className="gift-page">
      <button
        className="back-btn"
        onClick={() => {
          if (selectedGift) {
            setSelectedGift(null);
          } else {
            navigate(-1);
          }
        }}
    >
        ← Back
      </button>
     
     <button className="next-btn"
     onClick={()=> navigate("/questions")}
     >Next </button>
      

      <h1>🎁 Select Your Gift 🎁</h1>

      {!selectedGift ? (
        <div className="gift-boxes">
          {gifts.map((gift, index) => (
            <div
              key={index}
              className="gift-box"
              onClick={() => setSelectedGift(gift)}
            >
              🎁
            </div>
          ))}
        </div>
      ) : (
        <div className="gift-reveal">
          <h2>🎉 Surprise Divyaa! 🎉</h2>

          <img
            src={selectedGift}
            alt="Gift"
            className="gift-image"
          />

          <p className="birthday-message">
            Wishing you endless happiness, success,
            laughter and beautiful memories. 💖✨
            <br />
            Happy Birthday Divyaa 🎂🌸
          </p>
        </div>
      )}
    </div>
  );
}