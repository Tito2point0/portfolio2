import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import GlowingTestGrid from "./components/GlowingTestGrid";
import GithubGraph from "./components/GithubGraph";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("isLoaded state updated:", isLoaded);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-white`} // ✅ Fixed incorrect template literal syntax & added dark mode
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="pt-20 space-y-16 px-8">
          {/* ✅ Adjusted spacing & padding for better layout */}
          <GithubGraph username="tito2point0" />
        </div>

        <GlowingTestGrid />
      </div>
    </>
  );
}

export default App;
;
