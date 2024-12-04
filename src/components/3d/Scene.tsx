import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  controls?: boolean;
}

export const Scene: React.FC<SceneProps> = ({ 
  children, 
  cameraPosition = [0, 0, 5],
  controls = true 
}) => {
  return (
    <Canvas camera={{ position: cameraPosition }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {controls && <OrbitControls enableZoom={false} />}
      {children}
    </Canvas>
  );
};

export const AnimatedMesh: React.FC<{
  position?: [number, number, number];
  color?: string;
}> = ({ position = [0, 0, 0], color = '#8B5CF6' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};