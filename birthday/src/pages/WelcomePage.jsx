import { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./welcomepage.css";

import friendImage from "../images/friend.png";

function WelcomePage() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const correctPin = "2004";

const addDigit = (digit) => {
  if (pin.length < 4) {
    setPin(pin + digit.toString());
    setError("");
  }
};

const clearPin = () => {
  setPin("");
  setError("");
};

const deleteDigit = () => {
  setPin(pin.slice(0, -1));
};

const handleUnlock = () => {
   
  if (pin === correctPin) {
    navigate("/animation");
  } else {
    setError("❌ Wrong PIN! Try Again");
    setPin("");
  }
};
  return (
    <div className="welcome-container">
      {/* Left Side Image */}
      <div className="left-section">
        <img
          src={friendImage}
          alt="Best Friend"
          className="friend-image"
        />
      </div>

      {/* Right Side PIN Lock */}
      <div className="right-section">
        <h1>🎂 Happy Birthday <b>DIVYAA</b> 🎂</h1>
        <p>Enter the secret PIN to unlock your surprise</p>

       <div className="pin-display">
  {"•".repeat(pin.length)}
  {"○".repeat(4 - pin.length)}
</div>

<div className="number-pad">
  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
    <button
      key={num}
      className="num-btn"
      onClick={() => addDigit(num)}
    >
      {num}
    </button>
  ))}

  <button className="num-btn action-btn" onClick={clearPin}>
    C
  </button>

  <button className="num-btn" onClick={() => addDigit(0)}>
    0
  </button>

  <button className="num-btn action-btn" onClick={deleteDigit}>
    ⌫
  </button>
</div>

<button onClick={handleUnlock} className="unlock-btn">
  Unlock 🔓
</button>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default WelcomePage;