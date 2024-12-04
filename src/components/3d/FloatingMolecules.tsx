import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

const Molecule = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      groupRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Sphere args={[0.2, 16, 16]}>
        <meshStandardMaterial color="#8B5CF6" />
      </Sphere>
      {[0, 1, 2].map((i) => (
        <group key={i} rotation={[0, (i * Math.PI * 2) / 3, 0]}>
          <Line
            points={[[0, 0, 0], [0.8, 0.8, 0]]}
            color="#8B5CF6"
            lineWidth={1}
          />
          <Sphere args={[0.1, 16, 16]} position={[0.8, 0.8, 0]}>
            <meshStandardMaterial color="#EC4899" />
          </Sphere>
        </group>
      ))}
    </group>
  );
};

export const FloatingMolecules: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {Array.from({ length: 5 }).map((_, i) => (
          <Molecule
            key={i}
            position={[
              (Math.random() - 0.5) * 5,
              (Math.random() - 0.5) * 5,
              (Math.random() - 0.5) * 2,
            ]}
          />
        ))}
      </Canvas>
    </div>
  );
};