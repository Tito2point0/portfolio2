import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { TextureLoader } from "three";
import { motion, AnimatePresence } from "framer-motion";

const RotatingShape = ({ imageTexture }) => {
  const meshRef = useRef();

  useEffect(() => {
    console.log("RotatingShape component rendered");
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial map={imageTexture} />
    </mesh>
  );
};

RotatingShape.propTypes = {
  imageTexture: PropTypes.object.isRequired,
};

const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  // ✅ Load the Image from Public Folder
  const imageTexture = useLoader(TextureLoader, "/aboutme.png"); 

  useEffect(() => {
    console.log("AboutMe component rendered");

    // Prevent AboutMe from displaying too early
    setTimeout(() => {
      setContentLoaded(true);
    }, 1000);
  }, []);

  const toggleExpand = () => {
    console.log("Button clicked to expand About Me");
    setExpanded((prev) => !prev);
  };

  const aboutText = [
    "Hi! My name is Jason Vasquez. I'm a proud native of the Bronx, New York. After serving in the Marine Corps, I returned home and worked in construction and at Target. However, my true passion has always been coding.",
    "I am a dedicated problem solver with a keen eye for detail. The Marine Corps taught me discipline and resilience, while construction honed my teamwork skills. At Target, I developed adaptability in a fast-paced environment.",
    "Now, I'm mastering web development, focusing on React, Three.js, and modern front-end technologies. My goal is to bring ideas to life through engaging and interactive web experiences.",
  ];

  if (!contentLoaded) return null;

  return (
    <section
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* ✅ Centered "About Me" Button */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ display: "flex", justifyContent: "center" }} // ✅ Centers button
      >
        <motion.button
          onClick={toggleExpand}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(76, 175, 80, 0.7)" }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            padding: "15px 30px",
            fontSize: "1.5rem",
            cursor: "pointer",
            backgroundColor: "transparent",
            color: "#18016b",
            border: "2px solid #1a9cf3",
            borderRadius: "50px",
            position: "relative",
            zIndex: "10",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="/aboutme.png"
            alt="Profile"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          About Me
          <img
            src="/aboutme.png"
            alt="Profile"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              alignItems: "center",
              gap: "20px",
              padding: "40px",
              borderRadius: "15px",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
              marginTop: "20px",
            }}
          >
            {/* ✅ 3D Rotating Cube with Your Picture as Texture */}
            <div style={{ height: "300px", width: "100%", position: "relative" }}>
              <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                <OrbitControls />
                <RotatingShape imageTexture={imageTexture} />
              </Canvas>
              
              {/* ✅ "Click & Drag" Text Below the Cube */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                👋 Click & Drag Me!
              </div>
            </div>

            {/* ✅ About Me Text Section */}
            <div>
              <h2 style={{ color: "#17009b", marginBottom: "10px" }}>About Me</h2>
              {aboutText.map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  style={{ margin: "10px 0", color: "#fff" }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutMe;
