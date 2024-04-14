/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box() {
  const ref = useRef()

  useFrame(() => {
    ref.current.position.y += 0.1
    if (ref.current.position.y > 3) {
      ref.current.position.y = -3
    }
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
