import React, { FC, Suspense, useRef, useLayoutEffect, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useLoader, useThree, invalidate } from '@react-three/fiber';
import { OrbitControls, useGLTF, useProgress, Html, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Props Interface
export interface ViewerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  modelXOffset?: number;
  modelYOffset?: number;
  defaultRotationX?: number;
  defaultRotationY?: number;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{Math.round(progress)} % loaded</Html>;
};

const ModelInner: FC<any> = ({ url, autoRotate, autoRotateSpeed }) => {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null);
  
  useFrame((_, delta) => {
    if (autoRotate && ref.current) {
       ref.current.rotation.y += autoRotateSpeed * delta;
    }
  });

  return (
    <group ref={ref}>
       <primitive object={scene} scale={20} /> 
       {/* Scale tweaked for specific model visibility */}
    </group>
  );
};

const ModelViewer: FC<ViewerProps> = ({
  url,
  width = '100%',
  height = '400px',
  autoRotate = true,
  autoRotateSpeed = 0.5
}) => {
  
  return (
    <div style={{ width, height }} className="relative bg-libera-cream dark:bg-gray-900 rounded-3xl overflow-hidden shadow-inner">
      <Canvas shadows camera={{ position: [0, 2, 10], fov: 45 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        
        <Suspense fallback={<Loader />}>
          <ModelInner url={url} autoRotate={autoRotate} autoRotateSpeed={autoRotateSpeed} />
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2} />
        </Suspense>
        
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.8} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;