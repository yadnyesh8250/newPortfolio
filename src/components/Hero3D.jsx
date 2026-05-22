import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshWobbleMaterial } from '@react-three/drei'

function RotatingBlob() {
  const ref = useRef()

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.35
    ref.current.rotation.x += delta * 0.12
    ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.035)
  })

  return (
    <mesh ref={ref} castShadow>
      <icosahedronGeometry args={[1.6, 4]} />
      <MeshWobbleMaterial factor={0.9} speed={1} color={'#00d9ff'} envMapIntensity={0.6} clearcoat={0.2} metalness={0.3} />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <spotLight position={[-10, -10, -10]} intensity={0.4} />
        <RotatingBlob />
        {/* subtle floating particles using HTML for layering if needed */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  )
}
