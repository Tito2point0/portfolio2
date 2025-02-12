import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {""}
      <div
        className={`min-h-screen transition-opacity duration-700 /${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
      </div>
    </>
  );
}

export default App;
