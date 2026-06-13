import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import AnimationPage from "./pages/AnimationPage";
import QuestionsPage from "./pages/QuestionsPage";
import Gift from "./pages/Gift";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/animation" element={<AnimationPage />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
