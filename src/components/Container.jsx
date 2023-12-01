import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
// import { GUI } from 'dat.gui';

export function Model(props) {
  const container = useGLTF('./ContainerRev5.gltf');
  return <primitive object={container.scene} />;
}

function Container() {
  // const orbitControls = useRef();
  // const controlsFolder = useRef();
  // const gui = new GUI();

  // useEffect(() => {
  //   controlsFolder.current = gui.addFolder('Controls');

  //   return () => {
  //     gui.destroy();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (orbitControls.current && controlsFolder.current) {
  //     // Use the current value of orbitControls and controlsFolder
  //     controlsFolder.current.add(orbitControls.current, 'enabled').name('Enable Rotation');
  //   }
  // }, [orbitControls.current, controlsFolder.current]);

  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [10, 2, 0], fov: 50, near: 0.7, far: 10000 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <directionalLight position={[0, 0, 2]} intensity={0.8} />
        <directionalLight position={[0, 3, 0]} intensity={0.8} />
        <directionalLight position={[4, 5, 0]} intensity={0.8} />
        <Model />
        <OrbitControls
          // ref={(controls) => (orbitControls.current = controls)}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={0.5}
          autoRotate
          autoRotateSpeed={1}
        />
      </Suspense>
    </Canvas>
  );
}

export default Container;
