import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import GlowingTestGrid from "./components/GlowingTestGrid";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("isLoaded state updated:", isLoaded)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {""}
      <div
        className={`min-h-screen transition-opacity duration-700 /${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <GlowingTestGrid />
      </div>
    </>
  );
}

export default App;
