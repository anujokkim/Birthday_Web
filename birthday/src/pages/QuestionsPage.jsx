import { useState, useEffect } from "react";
import "./Questionpage.css";

function QuestionsPage() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

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
    cursor.innerHTML = cuteThings[Math.floor(Math.random() * cuteThings.length)];
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

      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = color;
      particle.style.color = color;

      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particle.style.setProperty("--x", `${Math.random() * 150 - 75}px`);
      particle.style.setProperty("--y", `${Math.random() * -150}px`);

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

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="final-page">
        <canvas id="stars"></canvas>
        <div className="aurora aurora1"></div>
        <div className="aurora aurora2"></div>
        <div className="aurora aurora3"></div>
        
        <div className="petals">
          {[...Array(30)].map((_, i) => (
            <span key={i} className="petal">🌸</span>
          ))}
        </div>

        <div className="final-card">
          <div className="heart-icon">💖</div>
          <h1 className="final-title">Thank You Divya! 💕</h1>
          
          <div className="message-section">
            <p className="final-message">
              OMG Divya!! Your feedback literally made my day! 🥰💖
            </p>
            <p className="final-submessage">
              I seriously hope this little website made you smile like crazy! 
              Because seeing you happy is literally the best thing ever! ✨
            </p>
          </div>

          <div className="birthday-wishes">
            <h2>🎂 HAPPY BIRTHDAY DIVYA! 🎂</h2>
            <p>🌟 May all your weird dreams come true (even the funny ones!) 😂</p>
            <p>💕 May you find happiness in every single moment (even the chaotic ones!)</p>
            <p>🚀 May this year be your BEST one yet (like, seriously the BEST!)</p>
            <p>✨ Divya, you're absolutely AMAZING and don't you ever forget that! ✨</p>
          </div>

          <div className="memories-note">
            <h3>💝 A Little Note For You 💝</h3>
            <p>
              Divya, every moment with you is literally a core memory unlocked! 🧠💾 
              Today on your special day, I want you to know that you're SO loved and 
              SO appreciated! Like, seriously SO much! Keep shining bright like the 
              diamond you are! 💎✨ You're the kind of person who makes the world 
              better just by being in it! 🌍💖
            </p>
          </div>

          <div className="signature">
            <p>With all my love and a million hugs! 💖🤗</p>
            <p className="signature-name">- Your Biggest Fan Forever 💫</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <canvas id="stars"></canvas>
      
      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>
      <div className="aurora aurora3"></div>

      <div className="petals">
        {[...Array(25)].map((_, i) => (
          <span key={i} className="petal">🌸</span>
        ))}
      </div>

      <div className="ending-card">
        <div className="floating-heart">💝</div>
        
        <h1 className="ending-title">A Special Message For Divya! 🎀</h1>
        
        <div className="love-message">
          <p className="message-line">
            Divya! I created this entire website with SO much love, just for YOU! 💕✨
          </p>
          <p className="message-line">
            Like, I spent way too much time on the animations and every tiny detail, 
            but honestly? It was ALL worth it just to see you smile! 😊🎉
          </p>
          <p className="message-line">
            You deserve ALL the happiness in the world, Divya! Like, seriously ALL of it! 🌟💖
          </p>
        </div>

        <div className="memories-section">
          <h2>🌸 Our Beautiful Memories With Divya 🌸</h2>
          <div className="memory-cards">
            <div className="memory-card">
              <span className="memory-emoji">🎈</span>
              <p>Every time we laughed until our stomachs hurt! 😂</p>
            </div>
            <div className="memory-card">
              <span className="memory-emoji">🌺</span>
              <p>Every moment we spent together (even the awkward ones!) 🤭</p>
            </div>
            <div className="memory-card">
              <span className="memory-emoji">💫</span>
              <p>Every dream we chased (and every time we got lost!) 🗺️😆</p>
            </div>
          </div>
        </div>

        <div className="feedback-section">
          <h2>💬 Divya, How Was The Website? 🤔</h2>
          <p className="feedback-subtitle">
            Be honest! Did it make you smile? Did you laugh? I NEED to know! 😂💕
          </p>
          
          <textarea
            className="feedback-textarea"
            placeholder="Divya, tell me EVERYTHING! Your favorite part, what made you laugh, or just say hi! I'm literally waiting! 💕✨"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
          />
          
          <button 
            className="submit-feedback-btn"
            onClick={handleFeedbackSubmit}
          >
            Send Your Love To Me! 💌💖
          </button>
        </div>

        <div className="preview-section">
          <button 
            className="preview-btn"
            onClick={() => setShowMessage(!showMessage)}
          >
            {showMessage ? "Hide" : "Preview"} Divya's Birthday Message! 🎁🎂
          </button>
          
          {showMessage && (
            <div className="birthday-preview">
              <h3>🎂 HAPPY BIRTHDAY DIVYA! 🎂</h3>
              <p>
                Divya! Wishing you the MOST amazing day filled with love, laughter, 
                and ALL your favorite things (especially cake! 🎂) May this year bring 
                you closer to your dreams and fill your heart with SO much joy! 
                You're literally wonderful just the way you are, Divya! Never change! 
                You're perfect! 💖✨🌟
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionsPage;
