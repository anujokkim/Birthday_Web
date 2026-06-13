import video from "../images/HAPPY BIRTHDAY.mp4";
import "./anima.css";
import { useNavigate } from "react-router-dom";

export default function AnimationPage() {
  const navigate = useNavigate();

  return (
    <div>
      <video
        className="video"
        src={video}
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