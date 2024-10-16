/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Sierra.glb 
*/

import React, { useRef } from 'react'
import { useSnapshot } from "valtio"

import { Preload, useGLTF } from '@react-three/drei'
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';


export function Sierra(props) {
  const { nodes, materials } = useGLTF('models/Sierra.glb')
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)

  const canvasRef = useRef(document.createElement("canvas"));
  const textureRef = useRef();
  const context = useRef(canvasRef.current.getContext("2d"));
console.log()

  canvasRef.current.width = 1600;
  canvasRef.current.height = 1600;

  let ctx = context.current;

  ctx.globalCompositeOperation = "hue";

  const img = document.getElementById(`overlay${overlay}`);

  if (img.complete) {
    ctx.drawImage(img, 0, 0);
    if (snap1.base.BaseMtl !== "none") {
      if(overlay!==1){
      ctx.fillStyle = snap1.base.BaseMtl;
      ctx.fillRect(0, 0, 1600, 1600);
      }
    }


    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }

  else {
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      if (snap1.base.BaseMtl !== "none") {
        if(overlay!==1){
        ctx.fillStyle = snap1.base.BaseMtl;
        ctx.fillRect(0, 0, 1600, 1600);
        }
      }
      


      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    }
  }
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.antennas_.geometry} material={materials.wire_008110135} />
      <mesh geometry={nodes.bottom.geometry} material={materials.trim} />
      <mesh geometry={nodes.Body.geometry}>
        <meshStandardMaterial {...materials.BaseMtl} color={overlay==1 || overlay==13 || overlay==34 ? (snap1.base.BaseMtl!=="none" ? snap1.base.BaseMtl : 0xffffff) : 0xffffff}>
          <canvasTexture
            flipY={false}
            wrapS={1000}
            wrapT={1000}
            colorSpace='srgb'
            ref={textureRef}
            attach="map"
            image={canvasRef.current}
          />
        </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.front_arches.geometry} material={materials.tires} />
      <mesh geometry={nodes.front_bumper.geometry} material={materials.tires} />
      <mesh geometry={nodes.glass.geometry} material={materials.glass} />
      <mesh geometry={nodes.headlights.geometry} material={materials.wire_008110135} />
      <mesh geometry={nodes.headlights_text.geometry} material={materials.wire_115115115} />
      <mesh geometry={nodes.interior.geometry} material={materials.wire_204204204} />
      <mesh geometry={nodes.left_front_rim.geometry} material={materials.wire_177028149} />
      <mesh geometry={nodes.left_front_tire.geometry} material={materials.tires} />
      <mesh geometry={nodes.left_rear_rim.geometry} material={materials.wire_177028149} />
      <mesh geometry={nodes.left_rear_tire.geometry} material={materials.tires} />
      <mesh geometry={nodes.logo.geometry} material={materials.wire_115115115} />
      <mesh geometry={nodes.radiator.geometry} material={materials.wire_008110135} />
      <mesh geometry={nodes.radiator_grille.geometry} material={materials.wire_008110135} />
      <mesh geometry={nodes.rear_arches.geometry} material={materials.tires} />
      <mesh geometry={nodes.rear_bumper.geometry} material={materials.tires} />
      <mesh geometry={nodes.rear_lights.geometry} material={materials['glass.001']} />
      <mesh geometry={nodes.right_front_rim.geometry} material={materials.wire_177028149} />
      <mesh geometry={nodes.right_front_tire.geometry} material={materials.tires} />
      <mesh geometry={nodes.right_rear_rim.geometry} material={materials.wire_177028149} />
      <mesh geometry={nodes.right_rear_tire.geometry} material={materials.tires} />
      <mesh geometry={nodes.side_mirrors.geometry} material={materials.wire_088199225} />
      <mesh geometry={nodes.spare_rim.geometry} material={materials.trim} />
      <mesh geometry={nodes.spare_tire.geometry} material={materials.tires} />
      <mesh geometry={nodes.trunk.geometry} material={materials.trim} />
      <mesh geometry={nodes.wipers.geometry} material={materials.wire_184155229} />
      <mesh geometry={nodes.element_of_front_bumper001.geometry} material={materials.trim} />
      <mesh geometry={nodes.element_of_front_bumper002.geometry} material={materials.trim} />
      <mesh geometry={nodes.element_of_front_bumper003.geometry} material={materials.trim} />
      <mesh geometry={nodes.element_of_front_bumper004.geometry} material={materials.trim} />
    </group>
  )
}

useGLTF.preload('/Sierra.glb')
