/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box() {
  const ref = useRef()
  const [clicked, setClicked] = useState(false)
  useFrame((state) => {
    // ref.current.position.y -= 0.1
  })

  return (
    <mesh ref={ref} onClick={() => setClicked(!clicked)}>
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
