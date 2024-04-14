/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber'

function Box() {
  useFrame(() => {})

  return (
    <mesh>
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
