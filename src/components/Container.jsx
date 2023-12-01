import React from 'react'
import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'

export function Model(props) {
    const container = useGLTF("./ContainerRev5.gltf")
    return (
      <>
        <primitive object={container.scene} />
      </>

    )
  }

function Container() {
  return (
    <Canvas>
        <Suspense fallback={null}>
          <ambientLight/>
          <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow/>
          <Model />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
        </Suspense>
      </Canvas>
  )
}

export default Container