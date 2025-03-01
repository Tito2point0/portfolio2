// AvatarCanvas.js
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AvatarModel from "./AvatarModel"; // Your 3D model

const AvatarCanvas = () => (
  <Canvas>
    {/* Ambient Light for overall scene lighting */}
    <ambientLight intensity={0.5} />

    {/* Directional Light with Correct Syntax */}
    <directionalLight position={[0, 0, 5]} intensity={1} />

    {/* Render the 3D Model */}
    <AvatarModel />

    {/* Enable Camera Controls */}
    <OrbitControls enableZoom={false} />
  </Canvas>
);

export default AvatarCanvas;
