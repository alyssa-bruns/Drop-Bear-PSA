/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function Box({ z }) {
  const ref = useRef()
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
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color="purple" />
    </mesh>
  )
}

function Model() {
  const { scene } = useGLTF('../images/three/koala_from_polu_by_google.gltf')
  return <primitive object={scene} />
}

export function DropBear({ count = 100 }) {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      {/* {Array.from({ length: count }, (_, i) => (
        <Box key={i} z={-i} />
      ))} */}
    </Canvas>
  )
}
