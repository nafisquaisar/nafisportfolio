import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">

        {/* ===== SAME BACKGROUND WRAPPER ===== */}
        <div className="bg-gradient-to-br from-[#050816] via-[#0a0f2c] to-[#020617]">
          <Navbar />
          <Hero />
          <About />
          <Tech />
          <Works />
        </div>

        {/* ===== CONTACT (SEPARATE, NOT INTERRUPTED) ===== */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;
