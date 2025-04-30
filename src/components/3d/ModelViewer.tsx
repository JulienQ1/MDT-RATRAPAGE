import React, { useContext, Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls, Environment, Html } from '@react-three/drei';
import { Loader2 } from 'lucide-react';
import { MuscleContext } from '../../contexts/MuscleContext';
import HumanModel from './HumanModel';
import PostureAnimation from './PostureAnimation';

const ModelViewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { selectedMuscle } = useContext(MuscleContext);
  const [showPosture, setShowPosture] = useState(false);

  return (
    <div className="w-full h-[600px] relative bg-black rounded-xl overflow-hidden">
      {selectedMuscle && (
        <div 
          className="absolute top-0 left-0 right-0 h-2 z-10" 
          style={{ backgroundColor: selectedMuscle.color }}
        />
      )}
      
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setShowPosture(!showPosture)}
          className="bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          {showPosture ? 'Show Muscle Model' : 'Show Posture Demo'}
        </button>
      </div>
      
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: false }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Suspense fallback={<ModelLoader />}>
            {showPosture ? (
              <PostureAnimation url="/assets/animations/Clip.fbx" />
            ) : (
              <HumanModel selectedMuscle={selectedMuscle} />
            )}
            <Environment preset="city" />
          </Suspense>
        </PresentationControls>
        
        <OrbitControls 
          enablePan={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
      </Canvas>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-80 text-white px-4 py-2 text-sm">
        <div className="flex justify-between">
          <div>
            {showPosture ? 'Viewing: Posture Animation' : selectedMuscle ? `Viewing: ${selectedMuscle.name}` : 'Click a muscle group to highlight'}
          </div>
          <div className="text-gray-300">Use mouse to rotate | Scroll to zoom</div>
        </div>
      </div>
    </div>
  );
};

const ModelLoader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600 mb-2" />
        <p className="text-sm">Loading 3D model...</p>
      </div>
    </Html>
  );
};

export default ModelViewer;