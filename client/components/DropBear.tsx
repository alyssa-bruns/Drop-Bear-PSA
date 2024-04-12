import React from 'react'
import { Canvas } from '@react-three/fiber'

export function DropBear() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </Canvas>
  )
}
