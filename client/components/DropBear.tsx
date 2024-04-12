/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'

function Box() {
  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <boxGeometry />
      <meshBasicMaterial color="purple" />
    </mesh>
  )
}
export function DropBear() {
  return <Canvas></Canvas>
}
