import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

const Cube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime + position[1]) * 0.2;
    }
  });

  return (
    <Box
      ref={meshRef}
      position={position}
      args={[0.5, 0.5, 0.5]}
    >
      <meshStandardMaterial
        color="#8B5CF6"
        opacity={0.3}
        transparent
        wireframe
      />
    </Box>
  );
};

export const CubeGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        {Array.from({ length: 27 }).map((_, i) => {
          const x = ((i % 3) - 1) * 2;
          const y = (Math.floor(i / 3) % 3 - 1) * 2;
          const z = (Math.floor(i / 9) - 1) * 2;
          return <Cube key={i} position={[x, y, z]} />;
        })}
      </Canvas>
    </div>
  );
};