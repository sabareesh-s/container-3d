import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
// import { GUI } from 'dat.gui';

// export function Model(props) {
//   const container = useGLTF('./ContainerRev5.gltf');
//   console.log("container",container)
//   return <primitive object={container.scene} />;
// }

function Model(props) {
  const { nodes, materials } = useGLTF('/ContainerRev5.gltf')

  console.log(props)

  return (
    <group {...props} dispose={null}>
      <group position={[0.03, 1.294, 0]}>

        {/* WINDOW 1 */}
        {props.showWindow1 && (
          <>
            <mesh geometry={nodes.Box3956.geometry} material={materials['19 - Default']} position={[1.122, 0.256, 1.203]} rotation={[0, 0, -Math.PI / 2]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.Box3957.geometry} material={materials['19 - Default']} position={[1.064, 0.256, 1.203]} rotation={[0, 0, -Math.PI / 2]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.Rectangle3477.geometry} material={materials['19 - Default']} position={[1.132, 0.235, 1.192]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.Rectangle3478.geometry} material={materials['19 - Default']} position={[1.132, 0.235, 1.192]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.WindowGlassFrame002.geometry} material={materials['19 - Default']} position={[1.157, 0.235, 1.412]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.WindowGlassFrame003.geometry} material={materials['19 - Default']} position={[1.119, 0.235, 0.979]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.Garage_glass089.geometry} material={materials['19 - Default']} position={[1.15, -1.866, -0.097]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.Garage_glass090.geometry} material={materials.Glass} position={[1.16, -1.866, -0.097]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.WindowGasket117.geometry} material={materials['19 - Default']} position={[1.157, -0.5, 1.412]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.WindowGasketShape034.geometry} material={materials['19 - Default']} position={[1.157, -0.192, 1.604]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.WindowMetalInneShape034.geometry} material={materials['19 - Default']} position={[1.157, -0.192, 1.601]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.WindowMetalInner120.geometry} material={materials['19 - Default']} position={[1.157, -0.5, 1.412]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.Garage_glass091.geometry} material={materials['19 - Default']} position={[1.112, -1.878, -0.533]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.Garage_glass092.geometry} material={materials.Glass} position={[1.122, -1.878, -0.533]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.WindowGasket118.geometry} material={materials['19 - Default']} position={[1.118, -0.512, 0.976]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.WindowGasketShape035.geometry} material={materials['19 - Default']} position={[1.118, -0.205, 1.168]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.WindowMetalInneShape035.geometry} material={materials['19 - Default']} position={[1.118, -0.205, 1.164]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[1, -1, 1]} />
            <mesh geometry={nodes.WindowMetalInner121.geometry} material={materials['19 - Default']} position={[1.118, -0.512, 0.976]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
          </>
       )}

      {/* DOOR */}
      {props.showDoor && (
          <>
        <mesh geometry={nodes.Rectangle3489.geometry} material={materials['19 - Default']} position={[1.281, 0.896, -1.095]} rotation={[Math.PI / 2, 0, 0]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.Hinge002.geometry} material={materials['19 - Default']} position={[1.174, 0.431, -2.057]} rotation={[-Math.PI, 0, 0]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.Hinge001.geometry} material={materials['19 - Default']} position={[1.174, -0.282, -2.057]} rotation={[-Math.PI, 0, 0]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.Hinge.geometry} material={materials['19 - Default']} position={[1.174, -0.995, -2.057]} rotation={[-Math.PI, 0, 0]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.Rectangle3485.geometry} material={materials['19 - Default']} position={[1.167, -0.21, -1.598]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.Box3959.geometry} material={materials.Metal} position={[1.204, -0.239, -1.185]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Rectangle3482.geometry} material={materials['19 - Default']} position={[1.118, 0.241, -1.601]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.WindowGlassFrame004.geometry} material={materials['19 - Default']} position={[1.157, 0.16, -1.739]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.Rectangle3490.geometry} material={materials.Metal} position={[1.205, -0.238, -1.184]} rotation={[-Math.PI, 0, 0]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.Garage_glass093.geometry} material={materials['19 - Default']} position={[1.15, -1.94, -3.248]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Garage_glass094.geometry} material={materials.Glass} position={[1.16, -1.94, -3.248]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.WindowGasket119.geometry} material={materials['19 - Default']} position={[1.157, -0.574, -1.739]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.WindowGasketShape036.geometry} material={materials['19 - Default']} position={[1.157, -0.266, -1.547]} rotation={[Math.PI, 1.571, 0]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.WindowMetalInneShape036.geometry} material={materials['19 - Default']} position={[1.157, -0.266, -1.55]} rotation={[Math.PI, 1.571, 0]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.WindowMetalInner122.geometry} material={materials['19 - Default']} position={[1.157, -0.574, -1.739]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
        </>
      )}
        
        {/* WINDOW 2 */}
        {props.showWindow2 && (
          <>
        <mesh geometry={nodes.Garage_glass087.geometry} material={materials['19 - Default']} position={[1.768, -1.86, -2.977]} rotation={[Math.PI / 2, 0, 0]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.Garage_glass088.geometry} material={materials.Glass} position={[1.768, -1.86, -2.988]} rotation={[Math.PI / 2, 0, 0]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.WindowGasket116.geometry} material={materials['19 - Default']} position={[0.259, -0.494, -2.984]} rotation={[Math.PI / 2, 0, Math.PI]} />
        <mesh geometry={nodes.WindowGasketShape033.geometry} material={materials['19 - Default']} position={[0.067, -0.186, -2.984]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.WindowMetalInneShape033.geometry} material={materials['19 - Default']} position={[0.07, -0.186, -2.984]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.WindowMetalInner119.geometry} material={materials['19 - Default']} position={[0.259, -0.494, -2.984]} rotation={[Math.PI / 2, 0, Math.PI]} />
        <mesh geometry={nodes.Garage_glass085.geometry} material={materials['19 - Default']} position={[1.332, -1.847, -3.016]} rotation={[Math.PI / 2, 0, 0]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.Garage_glass086.geometry} material={materials.Glass} position={[1.332, -1.847, -3.026]} rotation={[Math.PI / 2, 0, 0]} scale={[1, -1, 1]} />
        <mesh geometry={nodes.WindowGasket115.geometry} material={materials['19 - Default']} position={[-0.177, -0.481, -3.023]} rotation={[Math.PI / 2, 0, Math.PI]} />
        <mesh geometry={nodes.WindowGasketShape032.geometry} material={materials['19 - Default']} position={[-0.37, -0.174, -3.022]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.WindowMetalInneShape032.geometry} material={materials['19 - Default']} position={[-0.366, -0.174, -3.023]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.WindowMetalInner118.geometry} material={materials['19 - Default']} position={[-0.177, -0.481, -3.023]} rotation={[Math.PI / 2, 0, Math.PI]} />
        <mesh geometry={nodes.Box3955.geometry} material={materials['19 - Default']} position={[0.032, 0.274, -2.93]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} /> 
        <mesh geometry={nodes.Box3954.geometry} material={materials['19 - Default']} position={[0.032, 0.274, -2.988]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.WindowGlassFrame001.geometry} material={materials['19 - Default']} position={[0.255, 0.253, -2.984]} rotation={[Math.PI / 2, 0, Math.PI]} />
        <mesh geometry={nodes.WindowGlassFrame.geometry} material={materials['19 - Default']} position={[-0.178, 0.253, -3.023]} rotation={[Math.PI / 2, 0, Math.PI]} />
        <mesh geometry={nodes.Rectangle3473.geometry} material={materials['19 - Default']} position={[0.043, 0.253, -2.998]} rotation={[Math.PI / 2, 0, Math.PI]} />
        <mesh geometry={nodes.Rectangle001.geometry} material={materials['19 - Default']} position={[0.043, 0.253, -2.998]} rotation={[Math.PI / 2, 0, Math.PI]} />
        </>
      )}


        <mesh geometry={nodes.container_part_1.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_2.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_3.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_4.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_5.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_6.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_7.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_8.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_9.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_10.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part2.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part8.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part3.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part6.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part10.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part4.geometry} material={materials.Rubber} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part11.geometry} material={materials.Rubber} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part5.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part7.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part1.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part9.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_23.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_24.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_25.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixation_5.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_27.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_28.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_29.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_30.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_31.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_32.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_36.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_37.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_38.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_40.geometry} material={materials['19 - Default']} position={[-0.039, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_41.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_42.geometry} material={materials['19 - Default']} position={[-0.039, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_43.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_44.geometry} material={materials['19 - Default']} position={[-0.039, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_45.geometry} material={materials['19 - Default']} position={[-0.057, -1.296, 0.017]} />
        <mesh geometry={nodes.container_part_46.geometry} material={materials['19 - Default']} position={[-0.057, -1.296, 0.017]} />
        <mesh geometry={nodes.container_part_47.geometry} material={materials['19 - Default']} position={[-0.004, -1.296, -0.113]} />
        <mesh geometry={nodes.container_part_48.geometry} material={materials['19 - Default']} position={[-0.004, -1.296, -0.113]} />
        <mesh geometry={nodes.container_part_49.geometry} material={materials['19 - Default']} position={[-0.039, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_50.geometry} material={materials['19 - Default']} position={[-0.057, -1.296, 0.017]} />
        <mesh geometry={nodes.container_part_51.geometry} material={materials['19 - Default']} position={[-0.004, -1.296, -0.113]} />
        <mesh geometry={nodes.container_part_52.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_53.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_55.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.text_3.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_60.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.text_2.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.text_4.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_63.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_64.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_66.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_67.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_68.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_69.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_70.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_71.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_72.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part_8.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_74.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_75.geometry} material={materials['19 - Default']} position={[-0.057, -1.296, 0.017]} />
        <mesh geometry={nodes.container_part_76.geometry} material={materials['19 - Default']} position={[-0.004, -1.296, 0.22]} />
        <mesh geometry={nodes.container_part_77.geometry} material={materials['19 - Default']} position={[-0.004, -1.296, -0.086]} />
        <mesh geometry={nodes.container_part_93.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_94.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_95.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_96.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_97.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_98.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_102.geometry} material={materials['19 - Default']} position={[-0.004, -1.296, 0.193]} />
        <mesh geometry={nodes.container_part_103.geometry} material={materials['19 - Default']} position={[-0.004, -1.296, 0.193]} />
        <mesh geometry={nodes.container_part_104.geometry} material={materials['19 - Default']} position={[-0.004, -1.296, 0.193]} />
        <mesh geometry={nodes.container_part_105.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_106.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.text_8.geometry} material={materials} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.text_1.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part_9.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part_10.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part_11.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part_12.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part_13.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part_14.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.door_part_15.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixation_18.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixation_22.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixation_23.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixation_24.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_110.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_111.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.container_part_112.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixator_5.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixation_25.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixator_1.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixator_2.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixation_26.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixation_27.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixator_3.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixator_4.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixation_29.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixation_30.geometry} material={materials['19 - Default']} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.fixation_31.geometry} material={materials.Metal} position={[-0.03, -1.296, 0.007]} />
        <mesh geometry={nodes.WallShape.geometry} material={materials['19 - Default']} position={[1.162, -1.128, 3.423]} />
        <mesh geometry={nodes.WallShape003.geometry} material={materials['19 - Default']} position={[-1.222, -1.128, -3.474]} rotation={[-Math.PI, 0, Math.PI]} />
        <mesh geometry={nodes.WallShape002.geometry} material={materials['19 - Default']} position={[4.51, -1.128, -3.029]} rotation={[-Math.PI, -1.57, 0]} scale={[1, -1, 1]} />
      </group>
    </group>
  )
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

  const [showWindow1, setShowWindow1] = useState(true);
  const [showDoor, setShowDoor] = useState(true);
  const [showWindow2, setShowWindow2] = useState(true);

  return (
    <>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      margin: "7px",
      position: "absolute",
      zIndex: "999",
      backgroundColor: "white",
      padding: "5px",
      borderRadius: "4px"
     }}>
        <label style={{
          display: "flex",
          width: "170px",
          justifyContent: "space-between",
        }}>
          Show Window 1
          <input type="checkbox" checked={showWindow1} onChange={() => setShowWindow1(!showWindow1)} />
        </label>
        <label style={{
          display: "flex",
          width: "170px",
          justifyContent: "space-between",
        }}>
          Show Window 2
          <input type="checkbox" checked={showWindow2} onChange={() => setShowWindow2(!showWindow2)} />
        </label>
        <label style={{
          display: "flex",
          width: "170px",
          justifyContent: "space-between",
        }}>
          Show Door
          <input type="checkbox" checked={showDoor} onChange={() => setShowDoor(!showDoor)} />
        </label>
       
      </div>
      <Canvas
        style={{ height: '100vh', width: '100vw' }}
        camera={{ position: [10, 2, 0], fov: 50, near: 0.7, far: 10000 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          {/* <spotLight intensity={1} angle={0.5} penumbra={2} position={[1.3, 1, 5]} castShadow /> */}
          <directionalLight position={[0, 0, 2]} intensity={0.8} />
          <directionalLight position={[0, 3, 0]} intensity={0.8} />
          <directionalLight position={[4, 5, 0]} intensity={0.8} />
          <Model showWindow1 = {showWindow1} showWindow2 = {showWindow2} showDoor = {showDoor}/>
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
    </>
  );
}

export default Container;
