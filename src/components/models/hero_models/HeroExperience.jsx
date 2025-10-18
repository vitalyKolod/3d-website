import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Suspense } from 'react'
import * as THREE from 'three'

import { Camera } from './Camera'
import Particles from './Particles'

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
      }}
    >
      {/* Освещение */}
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
      <Environment preset="studio" />

      {/* Тень под моделью */}
      <ContactShadows position={[0, -1.1, 0]} opacity={0.6} scale={15} blur={2.5} far={4} />

      {/* Контролы камеры */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        minDistance={3}
        maxDistance={20}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
        autoRotate
        autoRotateSpeed={1.2}
      />

      <Suspense fallback={null}>
        <Particles count={100} />
        <group scale={isMobile ? 10 : 13} position={[0, -0.5, 0]} rotation={[0.1, Math.PI / 4, 0]}>
          <Camera />
        </group>
      </Suspense>
    </Canvas>
  )
}

export default HeroExperience
