import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Computer = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 1.2, 0.1]} />
      <meshStandardMaterial color="#8B5CF6" />
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[0.5, 0.8, 0.5]} />
        <meshStandardMaterial color="#4B5563" />
      </mesh>
    </mesh>
  );
};

const Keyboard = () => {
  return (
    <mesh position={[0, -0.5, 0.8]}>
      <boxGeometry args={[1.5, 0.1, 0.5]} />
      <meshStandardMaterial color="#374151" />
    </mesh>
  );
};

export const WorkspaceScene: React.FC = () => {
  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Computer />
        <Keyboard />
      </Canvas>
    </div>
  );
};