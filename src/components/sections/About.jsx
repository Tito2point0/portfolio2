import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const imageTexture = useLoader(TextureLoader, "/aboutme2.jpg");

  useEffect(() => {
    console.log("AboutMe component rendered");

    setTimeout(() => {
      setContentLoaded(true);
    }, 1000);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = () => {
    console.log("Button clicked to expand About Me");
    setExpanded((prev) => !prev);
  };

  const aboutText = [
    "Hi! I’m Jason Vasquez—a front-end web developer with roots in both the Bronx and the American South. I grew up navigating two very different environments, which taught me how to adapt early on. After moving back to New York, I joined the U.S. Marine Corps, where I gained resilience, discipline, and a sharp attention to detail.",

    "After my service, I worked in construction at Archstone. I started from the very bottom as a sweeper and worked my way up to Assistant Superintendent, managing labor crews, coordinating trades, and solving tough, on-site problems that didn’t always have clear answers. That experience taught me how to think critically, communicate effectively, and lead under pressure.",

    "But my passion for tech goes way back—customizing MySpace pages, building homepages, running Linux distros like Backtrack, and learning JavaScript back in 2007. Front-end development called to me because of the balance between creative freedom and complex logic. I love solving problems, building algorithms, and creating experiences that users interact with every day.",

    "Some of my proudest projects include building search pages for Pokémon data using APIs—structuring large datasets into intuitive, engaging user experiences. I love the challenge of taking something overwhelming and turning it into something seamless.",

    "The hardest part of my tech journey has been tackling algorithm problems on platforms like LeetCode. It’s humbling, sometimes frustrating—but it’s also the most rewarding. Breaking big problems into smaller pieces, even when I don’t know where to start, reminds me of why I fell in love with coding in the first place.",

    "My long-term goal in tech is to build applications that help immigrants like my parents—tools that teach English, provide access to benefits, and help people prepare for the citizenship process. Their journey gives me strength, and it drives me to keep pushing forward, no matter how hard it gets.",

    "What sets me apart? Ingenuity. I approach problems in ways others may not consider. I thrive in team environments—sharing ideas, asking questions, and learning from others. I’m relentless about details because I believe that if you don’t understand every part of something, you don’t truly know it. And I’m here to learn, build, and contribute every step of the way.",
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
      <RevealOnScroll>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", justifyContent: "center" }}
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
              color: "#1A73E8",
              border: "2px solid #1A73E8",
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
      </RevealOnScroll>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              padding: "40px",
              borderRadius: "15px",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              boxShadow: "0 10px 20px rgba(255, 255, 255, 0.2)",
              marginTop: "20px",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
              alignItems: "center",
              gap: "20px",
              textAlign: isMobile ? "left" : "center",
            }}
          >
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

            <div
              style={{
                height: "300px",
                width: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
                <OrbitControls />
                <RotatingShape imageTexture={imageTexture} />
              </Canvas>
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutMe;
