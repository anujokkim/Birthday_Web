// src/pages/QuestionsPage.jsx

import { useState, useEffect } from "react";
import "./Questionpage.css";
function QuestionsPage() {
  const [form, setForm] = useState({
    SenderName: "",
    birthdayMessage: "",
    favcolour: "",
    giftchoice: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = () => {
  if (
    !form.SenderName.trim() ||
    !form.birthdayMessage.trim() ||
    !form.favcolour ||
    !form.giftchoice
  ) {
    alert("⚠️ Please answer all the questions before submitting!");
    return;
  }

  // All fields completed
  setSubmitted(true);
};
// Cute Cursor
useEffect(() => {
  const cuteThings = [
    "🌸",
    "🦄",
    "💖",
    "🦋",
    "🎀",
    "🐰",
    "🧸"
  ];

  const cursor = document.createElement("div");

  cursor.className = "cute-cursor";

  cursor.innerHTML =
    cuteThings[Math.floor(Math.random() * cuteThings.length)];

  document.body.appendChild(cursor);

  const moveCursor = (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  };

  window.addEventListener("mousemove", moveCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
    cursor.remove();
  };
}, []);

// Magical Particle Trail
useEffect(() => {
  const createParticle = (e) => {
    const colors = [
      "#ff69b4",
      "#ffb6c1",
      "#c77dff",
      "#4cc9f0",
      "#ffd166",
      "#ffffff"
    ];

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    const color =
      colors[Math.floor(Math.random() * colors.length)];

    particle.style.background = color;
    particle.style.color = color;

    const size = Math.random() * 10 + 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.setProperty(
      "--x",
      `${Math.random() * 150 - 75}px`
    );

    particle.style.setProperty(
      "--y",
      `${Math.random() * -150}px`
    );

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1200);
  };

  window.addEventListener("mousemove", createParticle);

  return () => {
    window.removeEventListener("mousemove", createParticle);
  };
}, []);
  // Star Canvas
  useEffect(() => {
    const canvas = document.getElementById("stars");
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      alpha: Math.random(),
      speed: Math.random() * 0.02,
    }));

    let animationFrame;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.alpha += star.speed;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,255,255,${
          0.5 + Math.sin(star.alpha) * 0.5
        })`;

        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  if (submitted) {
    return (
     <div className="thank-you-card">
  <h2>💖 Thank You Divyaa 💖</h2>

  <p>
    Every smile of yours is a gift. <br /><br />

    May this birthday bring endless happiness,
    beautiful memories and all the success you deserve.
    ✨🌸🎂
  </p>
</div>
    );
  }

  return (
    <div className="page">

      {/* Background Effects */}

      <canvas id="stars"></canvas>

      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>
      <div className="aurora aurora3"></div>

      <div className="petals">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="petal">
            🌸
          </span>
        ))}
      </div>

      {/* Form */}

      <div className="question-card">
        <h2>Answer a few questions 🎂</h2>

        <input
          type="text"
          name="SenderName"
          placeholder="Your Name"
          onChange={handleChange}
        />

        <textarea
          name="birthdayMessage"
          placeholder="Your Birthday Message"
          rows="4"
          onChange={handleChange}
        />

        <h3>Favorite Color</h3>

        {["Red", "Blue", "Pink", "Gold"].map((color) => (
          <label key={color}>
            <input
              type="radio"
              name="favcolour"
              value={color}
              onChange={handleChange}
            />
            {color}
          </label>
        ))}

        <h3>Choose a Gift</h3>

        {[
          "Cake 🎂",
          "Flowers 🌸",
          "Balloon 🎈",
          "Surprise 🎁",
        ].map((gift) => (
          <label key={gift}>
            <input
              type="radio"
              name="giftchoice"
              value={gift}
              onChange={handleChange}
            />
            {gift}
          </label>
        ))}

        <button onClick={handleSubmit}>
          Submit 🎉
        </button>
      </div>

    </div>
  );
}

export default QuestionsPage;