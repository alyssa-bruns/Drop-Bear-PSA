/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import { Model } from './Model'

// function Box({ z }) {
//   const ref = useRef()
//   const { viewport, camera } = useThree()
//   const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])

//   const [data] = useState({
//     x: THREE.MathUtils.randFloatSpread(2),
//     y: THREE.MathUtils.randFloatSpread(height),
//   })

//   useFrame(() => {
//     ref.current.position.set(data.x * width, (data.y += 0.3), z)
//     if (data.y > height / 1.5) {
//       data.y = -height / 1.5
//     }
//   })

//   return (
//     <mesh ref={ref}>
//       <boxGeometry />
//       <meshBasicMaterial color="purple" />
//     </mesh>
//   )
// }

// function Model(props) {
//   const { scene } = useGLTF('../images/koala_from_poly_by_google/scene.gltf')
//   return <primitive object={scene} {...props} />
// }

export function DropBear({ count = 100 }) {
  return (
    <Canvas>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} intensity={2} />
      <Suspense fallback={null}>
        <Model scale={0.5} />
        <Environment preset="sunset" />
      </Suspense>
      {/* {Array.from({ length: count }, (_, i) => (
        <Box key={i} z={-i} />
      ))} */}
    </Canvas>
  )
}
