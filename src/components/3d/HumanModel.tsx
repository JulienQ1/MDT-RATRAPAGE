import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { MuscleGroup } from '../../data/muscleData';

// Note: This is a placeholder since we don't have an actual model
// In a real implementation, you would use a detailed 3D human model

interface HumanModelProps {
  selectedMuscle: MuscleGroup | null;
}

const HumanModel: React.FC<HumanModelProps> = ({ selectedMuscle }) => {
  const group = useRef<THREE.Group>(null);
  
  // This is a simplified representation - in a real app, you'd use an actual model
  // For demonstration, we're creating a simplified human figure
  
  useFrame((state) => {
    if (group.current) {
      // Subtle breathing animation
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.01;
    }
  });

  // Simplified muscle highlight effect
  const getPartColor = (partName: string) => {
    if (selectedMuscle && selectedMuscle.modelTarget === partName) {
      return new THREE.Color(selectedMuscle.color);
    }
    return new THREE.Color("#B8B8B8");
  };

  return (
    <group ref={group} dispose={null} position={[0, -0.9, 0]}>
      {/* Head */}
      <mesh position={[0, 1.6, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#B8B8B8" />
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, 1.45, 0]}>
        <cylinderGeometry args={[0.05, 0.07, 0.1, 32]} />
        <meshStandardMaterial color="#B8B8B8" />
      </mesh>
      
      {/* Torso */}
      <mesh position={[0, 1.15, 0]}>
        <cylinderGeometry args={[0.25, 0.35, 0.6, 32]} />
        <meshStandardMaterial color={getPartColor('chest')} />
      </mesh>
      
      {/* Back (just a plane behind torso) */}
      <mesh position={[0, 1.15, -0.1]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[0.5, 0.5]} />
        <meshStandardMaterial color={getPartColor('back')} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Abs */}
      <mesh position={[0, 0.85, 0.05]}>
        <boxGeometry args={[0.25, 0.3, 0.05]} />
        <meshStandardMaterial color={getPartColor('abs')} />
      </mesh>
      
      {/* Shoulders */}
      <mesh position={[-0.28, 1.3, 0]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color={getPartColor('shoulders')} />
      </mesh>
      <mesh position={[0.28, 1.3, 0]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color={getPartColor('shoulders')} />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.38, 1.1, 0]}>
        <cylinderGeometry args={[0.05, 0.06, 0.4, 32]} />
        <meshStandardMaterial color={getPartColor('arms')} />
      </mesh>
      <mesh position={[0.38, 1.1, 0]}>
        <cylinderGeometry args={[0.05, 0.06, 0.4, 32]} />
        <meshStandardMaterial color={getPartColor('arms')} />
      </mesh>
      
      {/* Forearms */}
      <mesh position={[-0.42, 0.85, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.04, 0.05, 0.3, 32]} />
        <meshStandardMaterial color={getPartColor('arms')} />
      </mesh>
      <mesh position={[0.42, 0.85, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.04, 0.05, 0.3, 32]} />
        <meshStandardMaterial color={getPartColor('arms')} />
      </mesh>
      
      {/* Hands */}
      <mesh position={[-0.45, 0.7, 0]}>
        <sphereGeometry args={[0.04, 32, 32]} />
        <meshStandardMaterial color="#B8B8B8" />
      </mesh>
      <mesh position={[0.45, 0.7, 0]}>
        <sphereGeometry args={[0.04, 32, 32]} />
        <meshStandardMaterial color="#B8B8B8" />
      </mesh>
      
      {/* Glutes (hips) */}
      <mesh position={[0, 0.6, -0.05]}>
        <boxGeometry args={[0.3, 0.15, 0.2]} />
        <meshStandardMaterial color={getPartColor('glutes')} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.12, 0.3, 0]}>
        <cylinderGeometry args={[0.07, 0.08, 0.5, 32]} />
        <meshStandardMaterial color={getPartColor('legs')} />
      </mesh>
      <mesh position={[0.12, 0.3, 0]}>
        <cylinderGeometry args={[0.07, 0.08, 0.5, 32]} />
        <meshStandardMaterial color={getPartColor('legs')} />
      </mesh>
      
      {/* Calves */}
      <mesh position={[-0.12, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.07, 0.4, 32]} />
        <meshStandardMaterial color={getPartColor('legs')} />
      </mesh>
      <mesh position={[0.12, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.07, 0.4, 32]} />
        <meshStandardMaterial color={getPartColor('legs')} />
      </mesh>
      
      {/* Feet */}
      <mesh position={[-0.12, -0.25, 0.05]}>
        <boxGeometry args={[0.07, 0.04, 0.15]} />
        <meshStandardMaterial color="#B8B8B8" />
      </mesh>
      <mesh position={[0.12, -0.25, 0.05]}>
        <boxGeometry args={[0.07, 0.04, 0.15]} />
        <meshStandardMaterial color="#B8B8B8" />
      </mesh>
    </group>
  );
};

export default HumanModel;