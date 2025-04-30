import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

interface PostureAnimationProps {
  url: string;
}

const PostureAnimation: React.FC<PostureAnimationProps> = ({ url }) => {
  const [error, setError] = useState<string | null>(null);
  const fbx = useLoader(FBXLoader, url);
  const mixer = useRef<THREE.AnimationMixer>();
  
  useEffect(() => {
    if (fbx) {
      mixer.current = new THREE.AnimationMixer(fbx);
      if (fbx.animations.length > 0) {
        const action = mixer.current.clipAction(fbx.animations[0]);
        action.play();
      } else {
        console.warn('No animations found in FBX file');
      }
    }
    
    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
    };
  }, [fbx]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  // Adjust material properties for better visibility
  useEffect(() => {
    if (fbx) {
      fbx.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.5,
            roughness: 0.5,
          });
        }
      });
    }
  }, [fbx]);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <primitive 
        object={fbx} 
        scale={0.008} 
        position={[0, -1, 0]} 
        rotation={[0, Math.PI, 0]}
      />
    </Suspense>
  );
};

const LoadingFallback = () => (
  <Html center>
    <div className="text-white bg-black/80 px-4 py-2 rounded-lg">
      Loading animation...
    </div>
  </Html>
);

export default PostureAnimation;