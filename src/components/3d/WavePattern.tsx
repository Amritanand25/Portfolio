import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const WavePoints = () => {
  const points = useRef<THREE.Points>(null);
  const positions = new Float32Array(
    Array.from({ length: 1000 }, (_, i) => {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      return [x, y, z];
    }).flat()
  );

  useFrame((state) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] = Math.sin(
          state.clock.elapsedTime + positions[i] * 0.5
        );
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        color="#8B5CF6"
      />
    </Points>
  );
};

export const WavePattern: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <WavePoints />
      </Canvas>
    </div>
  );
};