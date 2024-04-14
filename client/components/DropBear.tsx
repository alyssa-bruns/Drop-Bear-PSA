/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import { zipSync } from 'three/examples/jsm/libs/fflate.module.js'

function Model({ z }) {
  const ref = useRef()
  const { nodes, materials } = useGLTF(
    '../images/koala_from_poly_by_google/scene.gltf',
  )
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
  })

  useFrame(() => {
    ref.current.position.set(data.x * width, (data.y += 0.3), z)
    if (data.y > height / 1.5) {
      data.y = -height / 1.5
    }
  })

  return (
    <group ref={ref} dispose={null}>
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

// GLTF file transformed into React Component using https://gltf.pmnd.rs/
// export function Model({ ...props }) {
//   const { nodes, materials } = useGLTF(
//     '../images/koala_from_poly_by_google/scene.gltf',
//   )
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_4.geometry}
//         material={materials['455A64']}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_5.geometry}
//         material={materials.FFFFFF}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_6.geometry}
//         material={materials['1A1A1A']}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_7.geometry}
//         material={materials.F06292}
//       />
//     </group>
//   )
// }

useGLTF.preload('../images/koala_from_poly_by_google/scene.gltf')

export function DropBear({ count = 100 }) {
  return (
    <Canvas>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} intensity={2} />
      <Suspense fallback={null}>
        {Array.from({ length: count }, (_, i) => (
          <Model key={i} z={-i} />
        ))}
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  )
}
