import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import GlowingTestGrid from "./components/GlowingTestGrid";
import GithubGraph from "./components/GithubGraph";
import RecentProjects from "./components/ui/RecentProjects";
import { Vortex } from "./components/ui/vortex"; // ✅ Import Vortex component
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Footer from "./components/sections/footer"
// import ShimmerButton from "./components/sections/shimmerbutton";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Show Loading Screen Until Complete */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        
        {/* ✅ Vortex as Fixed Background */}
        <Vortex
          className="fixed top-0 left-0 w-full h-full -z-10"
          containerClassName="fixed top-0 left-0 w-full h-full"
          particleCount={700}
          rangeY={100}
          baseHue={220}
          baseSpeed={0.5}
          rangeSpeed={1.5}
          baseRadius={1}
          rangeRadius={2}
          backgroundColor="transparent"
        />
        
        {/* ✅ Conditional Rendering for Navbar */}
        {isLoaded && (
          <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </>
        )}
        <Home />

        <About />
        {/* <ShimmerButton text="About Me" /> */}
        <div className="pt-20 space-y-16 px-8 relative z-10">
          <GithubGraph username="tito2point0" />
        </div>

        <div className="scale-[0.8] relative z-10">
          <GlowingTestGrid />
        </div>

        <div className="relative z-10 overflow-hidden">
          <RecentProjects />
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
