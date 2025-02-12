import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Jason Vasquez/>";

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval)
     
    }, [onComplete]);


  return (
    <div className="fixed inset-0 -z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-2xl font-bold font font-mono">
        {text}
    
        <span className="animate-blink ml-1"> | </span>
      </div>
      <div className="w-[200px] h-[2px]  bg-gray-800 rounded relative overflow-hidden ">
              <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_5px_#6390d8] animate-loading-bar ">
                  {" "}
        </div>
      </div>
    </div>
  );
};
LoadingScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default LoadingScreen;
