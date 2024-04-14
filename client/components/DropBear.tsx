/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'

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
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  })

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.004),
      (data.rZ += 0.0005),
    )
    ref.current.position.set(data.x * width, (data.y += 0.1), z)
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
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110 }}>
      <color attach="background" args={['#30336b']} />

      <spotLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        {Array.from({ length: count }, (_, i) => (
          <Model key={i} z={-i} />
        ))}
        <EffectComposer>
          <DepthOfField
            target={[0, 0, 30]}
            focalLength={0.5}
            bokehScale={4}
            height={700}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
