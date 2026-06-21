import "./anima.css";
import { useNavigate } from "react-router-dom";

export default function AnimationPage() {
  const navigate = useNavigate();

  return (
    <div>
      <video
        className="video"
        src="https://res.cloudinary.com/dbe3f8blt/video/upload/v1782017815/HAPPY_BIRTHDAY_cfxc6u.mp4"
        autoPlay
        loop
        playsInline
        
      ></video>

      <button
        className="nextBtn"
        onClick={() => navigate("/gift")}
      >
        Next
      </button>
    </div>
  );
}