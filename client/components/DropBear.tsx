/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box() {
  const ref = useRef()
  useFrame(() => {
    ref.current.position.y -= 0.1
  })

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color="purple" />
    </mesh>
  )
}
export function DropBear() {
  return (
    <Canvas>
      <Box />
    </Canvas>
  )
}
