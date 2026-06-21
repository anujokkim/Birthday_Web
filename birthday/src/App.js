import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import AnimationPage from "./pages/AnimationPage";
import QuestionsPage from "./pages/QuestionsPage";
import GiftFramePage from "./pages/GiftFramePage";
import Gift from "./pages/Gift";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/animation" element={<AnimationPage />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/gift-frame" element={<GiftFramePage />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
