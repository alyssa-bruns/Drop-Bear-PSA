/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'

function Box() {
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
