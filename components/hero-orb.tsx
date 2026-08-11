'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function Orb() {
  const group = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  useFrame((state, delta) => {
    if (!group.current) return
    // slow idle rotation
    group.current.rotation.y += delta * 0.12
    // gentle parallax toward the pointer
    const targetX = pointer.y * 0.25
    const targetY = pointer.x * 0.4
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.04,
    )
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      targetY * 0.3,
      0.04,
    )
  })

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
        <Sphere args={[1.15, 128, 128]}>
          <MeshDistortMaterial
            color="#c9932f"
            metalness={0.35}
            roughness={0.38}
            emissive="#7a4f13"
            emissiveIntensity={0.5}
            distort={0.35}
            speed={1.5}
          />
        </Sphere>
        {/* thin orbiting ring for a jewel-like accent */}
        <mesh rotation={[Math.PI / 2.4, 0.4, 0]}>
          <torusGeometry args={[1.7, 0.012, 16, 200]} />
          <meshStandardMaterial
            color="#f0c975"
            metalness={1}
            roughness={0.25}
            emissive="#8a5a12"
            emissiveIntensity={0.35}
          />
        </mesh>
      </Float>
    </group>
  )
}

function Particles({ count = 90 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 3.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#e6c07a"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  )
}

export function HeroOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 3]} intensity={3} color="#fff1d0" />
        <pointLight position={[-4, 1, 2]} intensity={30} color="#f0c975" />
        <pointLight position={[2, -3, -2]} intensity={18} color="#b9781f" />
        <spotLight
          position={[0, 5, 4]}
          angle={0.6}
          penumbra={1}
          intensity={20}
          color="#ffe6b0"
        />
        <Orb />
        <Particles />
      </Suspense>
    </Canvas>
  )
}
