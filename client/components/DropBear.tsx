/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'

export function DropBear() {
  return (
    <Canvas>
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </Canvas>
  )
}
