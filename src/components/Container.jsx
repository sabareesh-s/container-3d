import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Html, OrbitControls, Plane, Shadow, useGLTF } from '@react-three/drei'; 
import { useLoader } from '@react-three/fiber';
import { RepeatWrapping, TextureLoader } from 'three';

// import { GUI } from 'dat.gui';

function Model(props) {
  const { nodes: nodes5, materials: materials5 } = useGLTF('/ContainerRev5.gltf');
  const { nodes: nodes6, materials: materials6 } = useGLTF('/ContainerRev6.gltf');
  
  // const defaultMaterial = new MeshStandardMaterial({ color: 0x04030 });
  return (
    <>
      <group {...props} dispose={null} castShadow>
        <group position={[0, 0, 0]} castShadow>
          {/* container6 */}

          {props.showWindow2 === false &&  (
            <mesh castShadow geometry={nodes6.WallShape002.geometry} material={materials6['19 - Default']} position={[4.51, -1.128, -3.029]} rotation={[-Math.PI, -1.57, 0]} scale={[1, -1, 1]} />
            )}

          {props.showWindow1 === false && props.showDoor === false && (
            <>
              <mesh castShadow geometry={nodes6.container_part_76.geometry} material={materials6['19 - Default']} position={[-0.005, -1.296, 0.303]} />
              <mesh castShadow geometry={nodes6.container_part_77.geometry} material={materials6['19 - Default']} position={[-0.004, -1.296, -0.003]} />
              <mesh castShadow geometry={nodes6.WallShape004.geometry} material={materials6['19 - Default']} position={[1.163, -1.128, -3.474]} rotation={[-Math.PI, 0, 0]} scale={[1, -1, 1]} />
            </>
          )}

          {/* container 5 */}

          {/* WINDOW 1 */}
          {props.showWindow1 && (
            <>
              <mesh castShadow geometry={nodes5.Box3956.geometry} material={materials5['19 - Default']} position={[1.122, 0.256, 1.203]} rotation={[0, 0, -Math.PI / 2]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.Box3957.geometry} material={materials5['19 - Default']} position={[1.064, 0.256, 1.203]} rotation={[0, 0, -Math.PI / 2]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.Rectangle3477.geometry} material={materials5['19 - Default']} position={[1.132, 0.235, 1.192]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.Rectangle3478.geometry} material={materials5['19 - Default']} position={[1.132, 0.235, 1.192]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.WindowGlassFrame002.geometry} material={materials5['19 - Default']} position={[1.157, 0.235, 1.412]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.WindowGlassFrame003.geometry} material={materials5['19 - Default']} position={[1.119, 0.235, 0.979]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.Garage_glass089.geometry} material={materials5['19 - Default']} position={[1.15, -1.866, -0.097]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
              <mesh castShadow geometry={nodes5.Garage_glass090.geometry} material={materials5.Glass} position={[1.16, -1.866, -0.097]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
              <mesh castShadow geometry={nodes5.WindowGasket117.geometry} material={materials5['19 - Default']} position={[1.157, -0.5, 1.412]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.WindowGasketShape034.geometry} material={materials5['19 - Default']} position={[1.157, -0.192, 1.604]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.WindowMetalInneShape034.geometry} material={materials5['19 - Default']} position={[1.157, -0.192, 1.601]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.WindowMetalInner120.geometry} material={materials5['19 - Default']} position={[1.157, -0.5, 1.412]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.Garage_glass091.geometry} material={materials5['19 - Default']} position={[1.112, -1.878, -0.533]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
              <mesh castShadow geometry={nodes5.Garage_glass092.geometry} material={materials5.Glass} position={[1.122, -1.878, -0.533]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
              <mesh castShadow geometry={nodes5.WindowGasket118.geometry} material={materials5['19 - Default']} position={[1.118, -0.512, 0.976]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.WindowGasketShape035.geometry} material={materials5['19 - Default']} position={[1.118, -0.205, 1.168]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.WindowMetalInneShape035.geometry} material={materials5['19 - Default']} position={[1.118, -0.205, 1.164]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[1, -1, 1]} />
              <mesh castShadow geometry={nodes5.WindowMetalInner121.geometry} material={materials5['19 - Default']} position={[1.118, -0.512, 0.976]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
            </>
        )}

        {/* DOOR */}
        {props.showDoor && (
            <>
          <mesh castShadow geometry={nodes5.Rectangle3489.geometry} material={materials5['19 - Default']} position={[1.281, 0.896, -1.095]} rotation={[Math.PI / 2, 0, 0]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.Hinge002.geometry} material={materials5['19 - Default']} position={[1.174, 0.431, -2.057]} rotation={[-Math.PI, 0, 0]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.Hinge001.geometry} material={materials5['19 - Default']} position={[1.174, -0.282, -2.057]} rotation={[-Math.PI, 0, 0]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.Hinge.geometry} material={materials5['19 - Default']} position={[1.174, -0.995, -2.057]} rotation={[-Math.PI, 0, 0]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.Rectangle3485.geometry} material={materials5['19 - Default']} position={[1.167, -0.21, -1.598]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.Box3959.geometry} material={materials5.Metal} position={[1.204, -0.239, -1.185]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh castShadow geometry={nodes5.Rectangle3482.geometry} material={materials5['19 - Default']} position={[1.118, 0.241, -1.601]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.WindowGlassFrame004.geometry} material={materials5['19 - Default']} position={[1.157, 0.16, -1.739]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.Rectangle3490.geometry} material={materials5.Metal} position={[1.205, -0.238, -1.184]} rotation={[-Math.PI, 0, 0]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.Garage_glass093.geometry} material={materials5['19 - Default']} position={[1.15, -1.94, -3.248]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh castShadow geometry={nodes5.Garage_glass094.geometry} material={materials5.Glass} position={[1.16, -1.94, -3.248]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh castShadow geometry={nodes5.WindowGasket119.geometry} material={materials5['19 - Default']} position={[1.157, -0.574, -1.739]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.WindowGasketShape036.geometry} material={materials5['19 - Default']} position={[1.157, -0.266, -1.547]} rotation={[Math.PI, 1.571, 0]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.WindowMetalInneShape036.geometry} material={materials5['19 - Default']} position={[1.157, -0.266, -1.55]} rotation={[Math.PI, 1.571, 0]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.WindowMetalInner122.geometry} material={materials5['19 - Default']} position={[1.157, -0.574, -1.739]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, -1, 1]} />
          </>
        )}
          
          {/* WINDOW 2 */}
          {props.showWindow2 && (
            <>
          <mesh castShadow geometry={nodes5.Garage_glass087.geometry} material={materials5['19 - Default']} position={[1.768, -1.86, -2.977]} rotation={[Math.PI / 2, 0, 0]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.Garage_glass088.geometry} material={materials5.Glass} position={[1.768, -1.86, -2.988]} rotation={[Math.PI / 2, 0, 0]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.WindowGasket116.geometry} material={materials5['19 - Default']} position={[0.259, -0.494, -2.984]} rotation={[Math.PI / 2, 0, Math.PI]} />
          <mesh castShadow geometry={nodes5.WindowGasketShape033.geometry} material={materials5['19 - Default']} position={[0.067, -0.186, -2.984]} rotation={[-Math.PI, 0, -Math.PI]} />
          <mesh castShadow geometry={nodes5.WindowMetalInneShape033.geometry} material={materials5['19 - Default']} position={[0.07, -0.186, -2.984]} rotation={[-Math.PI, 0, -Math.PI]} />
          <mesh castShadow geometry={nodes5.WindowMetalInner119.geometry} material={materials5['19 - Default']} position={[0.259, -0.494, -2.984]} rotation={[Math.PI / 2, 0, Math.PI]} />
          <mesh castShadow geometry={nodes5.Garage_glass085.geometry} material={materials5['19 - Default']} position={[1.332, -1.847, -3.016]} rotation={[Math.PI / 2, 0, 0]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.Garage_glass086.geometry} material={materials5.Glass} position={[1.332, -1.847, -3.026]} rotation={[Math.PI / 2, 0, 0]} scale={[1, -1, 1]} />
          <mesh castShadow geometry={nodes5.WindowGasket115.geometry} material={materials5['19 - Default']} position={[-0.177, -0.481, -3.023]} rotation={[Math.PI / 2, 0, Math.PI]} />
          <mesh castShadow geometry={nodes5.WindowGasketShape032.geometry} material={materials5['19 - Default']} position={[-0.37, -0.174, -3.022]} rotation={[-Math.PI, 0, -Math.PI]} />
          <mesh castShadow geometry={nodes5.WindowMetalInneShape032.geometry} material={materials5['19 - Default']} position={[-0.366, -0.174, -3.023]} rotation={[-Math.PI, 0, -Math.PI]} />
          <mesh castShadow geometry={nodes5.WindowMetalInner118.geometry} material={materials5['19 - Default']} position={[-0.177, -0.481, -3.023]} rotation={[Math.PI / 2, 0, Math.PI]} />
          <mesh castShadow geometry={nodes5.Box3955.geometry} material={materials5['19 - Default']} position={[0.032, 0.274, -2.93]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} /> 
          <mesh castShadow geometry={nodes5.Box3954.geometry} material={materials5['19 - Default']} position={[0.032, 0.274, -2.988]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh castShadow geometry={nodes5.WindowGlassFrame001.geometry} material={materials5['19 - Default']} position={[0.255, 0.253, -2.984]} rotation={[Math.PI / 2, 0, Math.PI]} />
          <mesh castShadow geometry={nodes5.WindowGlassFrame.geometry} material={materials5['19 - Default']} position={[-0.178, 0.253, -3.023]} rotation={[Math.PI / 2, 0, Math.PI]} />
          <mesh castShadow geometry={nodes5.Rectangle3473.geometry} material={materials5['19 - Default']} position={[0.043, 0.253, -2.998]} rotation={[Math.PI / 2, 0, Math.PI]} />
          <mesh castShadow geometry={nodes5.Rectangle001.geometry} material={materials5['19 - Default']} position={[0.043, 0.253, -2.998]} rotation={[Math.PI / 2, 0, Math.PI]} />
          </>
        )}


          <mesh castShadow geometry={nodes5.container_part_1.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_2.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_3.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_4.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_5.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_6.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_7.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_8.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_9.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_10.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part2.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part8.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part3.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part6.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part10.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part4.geometry} material={materials5.Rubber} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part11.geometry} material={materials5.Rubber} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part5.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part7.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part1.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part9.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_23.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_24.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_25.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixation_5.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_27.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_28.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_29.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_30.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_31.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_32.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_36.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_37.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_38.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_40.geometry} material={materials5['19 - Default']} position={[-0.039, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_41.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_42.geometry} material={materials5['19 - Default']} position={[-0.039, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_43.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_44.geometry} material={materials5['19 - Default']} position={[-0.039, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_45.geometry} material={materials5['19 - Default']} position={[-0.057, -1.296, 0.017]} />
          <mesh castShadow geometry={nodes5.container_part_46.geometry} material={materials5['19 - Default']} position={[-0.057, -1.296, 0.017]} />
          <mesh castShadow geometry={nodes5.container_part_47.geometry} material={materials5['19 - Default']} position={[-0.004, -1.296, -0.113]} />
          <mesh castShadow geometry={nodes5.container_part_48.geometry} material={materials5['19 - Default']} position={[-0.004, -1.296, -0.113]} />
          <mesh castShadow geometry={nodes5.container_part_49.geometry} material={materials5['19 - Default']} position={[-0.039, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_50.geometry} material={materials5['19 - Default']} position={[-0.057, -1.296, 0.017]} />
          <mesh castShadow geometry={nodes5.container_part_51.geometry} material={materials5['19 - Default']} position={[-0.004, -1.296, -0.113]} />
          <mesh castShadow geometry={nodes5.container_part_52.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_53.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_55.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.text_3.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_60.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.text_2.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.text_4.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_63.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_64.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_66.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_67.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_68.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_69.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_70.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_71.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_72.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part_8.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_74.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_75.geometry} material={materials5['19 - Default']} position={[-0.057, -1.296, 0.017]} />
          <mesh castShadow geometry={nodes5.container_part_93.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_94.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_95.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_96.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_97.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_98.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_102.geometry} material={materials5['19 - Default']} position={[-0.004, -1.296, 0.193]} />
          <mesh castShadow geometry={nodes5.container_part_103.geometry} material={materials5['19 - Default']} position={[-0.004, -1.296, 0.193]} />
          <mesh castShadow geometry={nodes5.container_part_104.geometry} material={materials5['19 - Default']} position={[-0.004, -1.296, 0.193]} />
          <mesh castShadow geometry={nodes5.container_part_105.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_106.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.text_8.geometry} material={materials5} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.text_1.geometry} material={materials5['Glass']} position={[-0.056, -1.296, 0.013]} />
          <mesh castShadow geometry={nodes5.door_part_9.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part_10.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part_11.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part_12.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part_13.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part_14.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.door_part_15.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixation_18.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixation_22.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixation_23.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixation_24.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_110.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_111.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.container_part_112.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixator_5.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixation_25.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixator_1.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixator_2.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixation_26.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixation_27.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixator_3.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixator_4.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixation_29.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixation_30.geometry} material={materials5['19 - Default']} position={[-0.03, -1.296, 0.007]} />
          <mesh castShadow geometry={nodes5.fixation_31.geometry} material={materials5.Metal} position={[-0.03, -1.296, 0.007]} />
          {props.showWindow1 && props.showDoor && (
            <>
              <mesh geometry={nodes5.container_part_76.geometry} material={materials5['19 - Default']} position={[-0.004, -1.296, 0.22]} />
              <mesh geometry={nodes5.container_part_77.geometry} material={materials5['19 - Default']} position={[-0.004, -1.296, -0.086]} /> 
              <mesh geometry={nodes5.WallShape.geometry} material={materials5['19 - Default']} position={[1.162, -1.128, 3.423]} />
            </>
          )}
          <mesh geometry={nodes5.WallShape003.geometry} material={materials5['19 - Default']} position={[-1.222, -1.128, -3.474]} rotation={[-Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes5.WallShape002.geometry} material={materials5['19 - Default']} position={[4.51, -1.128, -3.029]} rotation={[-Math.PI, -1.57, 0]} scale={[1, -1, 1]} />
        </group>
      </group>
    </>
  )
}

const Floor = () => {
  const texture = useLoader(TextureLoader, '/concrete_texturetile.png');
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(300, 300); 

  return (
    <Plane
      args={[300, 300]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1.3, 0]}
      receiveShadow
    >
      <shadowMaterial attach="material" transparent opacity={0.5} />
      <meshStandardMaterial attach="material" map={texture} receiveShadow />
   </Plane>
  );
};

function Container() {

  const [showWindow1, setShowWindow1] = useState(true);
  const [showDoor, setShowDoor] = useState(true);
  const [showWindow2, setShowWindow2] = useState(true);
  const [enableRotation, setEnableRotation] = useState(false);
  // const [draggable, setDraggable] = useState(true)
  // const [enableLoadingScreen, setEnableLoadingScreen] = useState(true);

  console.log(enableRotation, "enable rotation")

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
        borderRadius: "6px",
        fontSize: "0.9rem",
      }}>
        <label style={{
          display: "flex",
          width: "180px",
          justifyContent: "space-between",
        }}>
          Window 1 and Door
          <input type="checkbox" checked={showWindow1} onChange={() => {
            setShowDoor(!showDoor)
            setShowWindow1(!showWindow1)}} />
        </label>
        <label style={{
          display: "flex",
          width: "180px",
          justifyContent: "space-between",
        }}>
          Window 2
          <input type="checkbox" checked={showWindow2} onChange={() => setShowWindow2(!showWindow2)} />
        </label>
        <label style={{
          display: "flex",
          width: "180px",
          justifyContent: "space-between",
        }}>
          Enable rotation
          <input type="checkbox" checked={enableRotation} onChange={() => setEnableRotation(!enableRotation)} />
        </label>
       
      </div>
      <Suspense fallback={<div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "999"
        }}> 
          <div class="loader">Loading...</div>

                </div>}>
                <Canvas
                  style={{ height: '100vh', width: '100vw' }}
                  camera={{ position: [10, 2, 0], fov: 50, near: 0.7, far: 10000 }}
                  shadowMap
                >
                
                <ambientLight intensity={0.5} />
                {/* <spotLight intensity={1} angle={0.5} penumbra={2} position={[1.3, 1, 5]} castShadow /> */}
                <directionalLight castShadow position={[0, 0, 2]} intensity={0.8} />
                <directionalLight castShadow position={[0, 3, 1]} intensity={0.8} />
                <directionalLight position={[4, 5, 0]} intensity={0.5} />
                {/* <directionalLight position={[-3, 0, 4]} intensity={0.8} />
                <directionalLight position={[-2, 3, 1]} intensity={0.8} /> */}
                <directionalLight position={[3, 7, 0]} intensity={0.8} />
                {/* <directionalLight castShadow position={[4, 0, -7]} intensity={0.8} /> */}

                <Model showWindow1 = {showWindow1} showWindow2 = {showWindow2} showDoor = {showDoor}/>
                <Floor />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                  zoomSpeed={0.5}
                  autoRotate={enableRotation}
                  autoRotateSpeed={1}
                  minPolarAngle={0}  
                  maxPolarAngle={Math.PI / 2} 
                />
            </Canvas>
      </Suspense>
    </>
  );
}


export default Container;
