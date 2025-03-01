import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingShape = ({ expanded }) => {
  const meshRef = useRef();

  useEffect(() => {
    console.log('RotatingShape component rendered');
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#4CAF50'} />
    </mesh>
  );
};

RotatingShape.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    console.log('Button clicked to expand About Me');
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    console.log('AboutMe component rendered');
  }, []);

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 1, ease: 'easeInOut' } }
  };

  const typingVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.05
      }
    })
  };

  const aboutText = [
    "Hi! My name is Jason Vasquez. I'm a proud native of the Bronx, New York. After serving in the Marine Corps, I returned home and found work in construction and at Target. However, my true passion has always been coding. Since I was a kid, I've dreamed of building creative and innovative solutions with technology.",
    "I am not only a dedicated and hardworking individual but also a problem solver with a keen eye for detail. My experience in the Marine Corps taught me discipline and resilience, while construction work honed my teamwork and leadership skills. At Target, I developed customer service expertise and learned the value of adaptability in a fast-paced environment.",
    "Now, I'm turning my dream into reality by mastering web development, with a focus on React, Three.js, and modern front-end technologies. My goal is to bring ideas to life through engaging and interactive web experiences, blending creativity with technical excellence."
  ];

  return (
    <section style={{ padding: '20px', textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <button
          onClick={toggleExpand}
          style={{
            padding: '15px 30px',
            fontSize: '1.5rem',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            color: '#4CAF50',
            border: '2px solid #4CAF50',
            borderRadius: '50px',
            transition: 'all 0.3s',
            position: 'relative',
            zIndex: '1000'
          }}
        >
          About Me
        </button>
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              alignItems: 'center',
              gap: '20px',
              padding: '40px',
              borderRadius: '15px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
              marginTop: '20px'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  backgroundColor: '#ddd',
                  overflow: 'hidden',
                  margin: '0 auto'
                }}
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div>
              <h2 style={{ color: '#4CAF50', marginBottom: '10px' }}>About Me</h2>
              {aboutText.map((text, index) => (
                <motion.p
                  key={index}
                  custom={index}
                  variants={typingVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ margin: '10px 0', color: '#fff' }}
                >
                  {text}
                </motion.p>
              ))}
              <motion.div
                className="divider"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, #4CAF50, #FF5722)',
                  margin: '20px 0'
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutMe;
