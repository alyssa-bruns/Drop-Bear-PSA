/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

// GLTF file transformed into React Component using https://gltf.pmnd.rs/
export function Model(props) {
  const { nodes, materials } = useGLTF(
    '../images/koala_from_poly_by_google/scene.gltf',
  )
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['455A64']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.FFFFFF}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['1A1A1A']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.F06292}
      />
    </group>
  )
}

useGLTF.preload('../images/koala_from_poly_by_google/scene.gltf')
