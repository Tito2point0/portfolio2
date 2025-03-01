import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

const SimpleShape = () => {
  const meshRef = useRef();
  const [showAbout, setShowAbout] = useState(false);

  // Rotate the box continuously
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} onClick={() => setShowAbout((prev) => !prev)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={showAbout ? '#FF5722' : '#4CAF50'} />
      {/* Show an HTML overlay when clicked */}
      {showAbout && (
        <Html position={[0, 1.5, 0]} center>
          <div style={{
            background: 'white',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
          }}>
            <h2 style={{ margin: '0 0 10px' }}>About Me</h2>
            <p style={{ margin: 0 }}>I am a creative web developer.</p>
          </div>
        </Html>
      )}
    </mesh>
  );
};

const SimpleThreeDShape = () => {
  return (
    <div style={{ height: '300px', width: '100%', backgroundColor: '#000' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <SimpleShape />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default SimpleThreeDShape;
