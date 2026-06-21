import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./giftFrame.css";
import girl from "../images/girl face.png"
import music from "../images/sai-abhyankkar-aasa-kooda-music-video-thejo-bharathwaj-preity-mukundhan-sai-smriti-128-ytshorts.savetube.me.mp3"

export default function GiftFramePage() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const revealImage = girl;
  const musicFile = music;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    canvas.width = 400;
    canvas.height = 400;
    
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#ff6b6b");
    gradient.addColorStop(0.5, "#feca57");
    gradient.addColorStop(1, "#ff9ff3");
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 20 + 5;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.fillStyle = "white";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Scratch Me Divya!", canvas.width / 2, canvas.height / 2);
    
    let isDrawing = false;
    const totalPixels = canvas.width * canvas.height;
    
    const getMousePos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      if (e.touches) {
        return {
          x: (e.touches[0].clientX - rect.left) * scaleX,
          y: (e.touches[0].clientY - rect.top) * scaleY
        };
      }
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    };
    
    const scratch = (x, y) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let transparentPixels = 0;
      for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] === 0) {
          transparentPixels++;
        }
      }
      const progress = (transparentPixels / totalPixels) * 100;
      setScratchProgress(progress);
      
      if (progress > 60 && !isRevealed) {
        setIsRevealed(true);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    
    const startScratch = (e) => {
      isDrawing = true;
      const pos = getMousePos(e);
      scratch(pos.x, pos.y);
    };
    
    const moveScratch = (e) => {
      if (!isDrawing) return;
      e.preventDefault();
      const pos = getMousePos(e);
      scratch(pos.x, pos.y);
    };
    
    const endScratch = () => {
      isDrawing = false;
    };
    
    canvas.addEventListener("mousedown", startScratch);
    canvas.addEventListener("mousemove", moveScratch);
    canvas.addEventListener("mouseup", endScratch);
    canvas.addEventListener("mouseleave", endScratch);
    canvas.addEventListener("touchstart", startScratch);
    canvas.addEventListener("touchmove", moveScratch);
    canvas.addEventListener("touchend", endScratch);
    
    return () => {
      canvas.removeEventListener("mousedown", startScratch);
      canvas.removeEventListener("mousemove", moveScratch);
      canvas.removeEventListener("mouseup", endScratch);
      canvas.removeEventListener("mouseleave", endScratch);
      canvas.removeEventListener("touchstart", startScratch);
      canvas.removeEventListener("touchmove", moveScratch);
      canvas.removeEventListener("touchend", endScratch);
    };
  }, [isRevealed]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="gift-page">
      <audio ref={audioRef} loop>
        <source src={musicFile} type="audio/mpeg" />
      </audio>
      
      <div className="topbar">
        <button className="back-link" onClick={() => navigate("/")}>
          ← Back to Site
        </button>
        <button className="music-btn" onClick={toggleMusic}>
          {isPlaying ? "🔊 Music On!" : "🔇 Music Off"}
        </button>
        <button className="next-btn" onClick={() => navigate("/questions")}>
          Next →
        </button>
      </div>

      <div className="scratch-container">
        <div className="scratch-title">
          <h1>🎁 Divya's Special Surprise! 🎁</h1>
          <p>Scratch the card to reveal something magical! ✨</p>
        </div>
        
        <div className="scratch-card">
          <img 
            src={revealImage} 
            alt="Hidden surprise" 
            className="reveal-image"
          />
          <canvas 
            ref={canvasRef} 
            className="scratch-canvas"
            style={{ display: isRevealed ? "none" : "block" }}
          />
          {isRevealed && (
            <div className="revealed-animation">
              <div className="sparkle">✨</div>
              <div className="sparkle" style={{ animationDelay: "0.2s" }}>✨</div>
              <div className="sparkle" style={{ animationDelay: "0.4s" }}>✨</div>
              <div className="sparkle" style={{ animationDelay: "0.6s" }}>✨</div>
              <div className="sparkle" style={{ animationDelay: "0.8s" }}>✨</div>
            </div>
          )}
        </div>
        
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${scratchProgress}%` }} />
        </div>
        <p className="progress-text">{Math.round(scratchProgress)}% Revealed! 🎉</p>
        
        {isRevealed && (
          <div className="revealed-message">
            <h2>🎉 SURPRISED DIVYA?! 🎉</h2>
            <p>You are absolutely WONDERFUL and AMAZING! 💖✨</p>
            <p>Like, seriously the BEST! 🌟</p>
          </div>
        )}
      </div>
    </div>
  );
}
