import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Component that appears after the loading screen disappears
const AfterLoadingComponent = () => {
  console.log("✅ AfterLoadingComponent RENDERED");
  return (
    <div className="flex items-center justify-center h-screen bg-green-500 text-white text-4xl font-bold">
      🎉 After Loading Screen!
    </div>
  );
};

// Main Loading Screen
export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [showAfterLoading, setShowAfterLoading] = useState(false);
  const fullText = "<Jason Vasquez/>";
  const hasCompleted = useRef(false); // Prevents multiple triggers

  useEffect(() => {
    console.log("🔴 LoadingScreen MOUNTED");

    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          if (!hasCompleted.current) {
            hasCompleted.current = true; // Prevent duplicate runs
            console.log("✅ Loading screen complete");
            onComplete(); // Triggers parent update
            setShowAfterLoading(true); // Shows AfterLoadingComponent
          }
        }, 1000);
      }
    }, 100);

    return () => {
      console.log("🟢 LoadingScreen UNMOUNTED");
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <>
      {/* Main Loading Screen */}
      <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
        <div className="mb-4 text-2xl font-bold font-mono">
          {text}
          <span className="animate-blink ml-1"> | </span>
        </div>
        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
          <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_5px_#6390d8] animate-loading-bar"></div>
        </div>
      </div>

      {/* Component that appears after loading */}
      {showAfterLoading && <AfterLoadingComponent />}
    </>
  );
};

LoadingScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default LoadingScreen;
