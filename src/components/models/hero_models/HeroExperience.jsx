// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import { useMediaQuery } from 'react-responsive'

// import HeroLights from './HeroLights'
// import Particles from './Particles'
// import { Suspense } from 'react'
// import { Camera } from './Camera'

// const HeroExperience = () => {
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
//   const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

//   return (
//     <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
//       {/* deep blue ambient */}
//       <ambientLight intensity={0.2} color="#1a1a40" />
//       {/* Configure OrbitControls to disable panning and control zoom based on device type */}
//       <OrbitControls
//         enablePan={false} // Prevents panning of the scene
//         enableZoom={!isTablet} // Disables zoom on tablets
//         maxDistance={20} // Maximum distance for zooming out
//         minDistance={5} // Minimum distance for zooming in
//         minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
//         maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
//       />

//       <Suspense fallback={null}>
//         {/* <HeroLights /> */}
//         <Particles count={100} />
//         <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]} rotation={[0, -Math.PI / 4, 0]}>
//           <Camera />
//         </group>
//       </Suspense>
//     </Canvas>
//   )
// }

// export default HeroExperience

// GPT VERSION

import { OrbitControls, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Suspense } from 'react'
import * as THREE from 'three'
import { ContactShadows } from '@react-three/drei'

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

      {/* Дополнительное реалистичное окружение */}
      <Environment preset="studio" />

      <ContactShadows position={[0, -1.1, 0]} opacity={0.6} scale={15} blur={2.5} far={4} />
      {/* Контролы */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        minDistance={3}
        maxDistance={20}
        minPolarAngle={0} // теперь можно смотреть сверху
        maxPolarAngle={Math.PI} // и снизу
        autoRotate
        autoRotateSpeed={1.2}
      />

      <Suspense fallback={null}>
        <Particles count={100} />

        <group
          scale={isMobile ? 10 : 13} // увеличил заметно
          position={[0, -0.5, 0]} // приподнял чуть выше
          rotation={[0.1, Math.PI / 4, 0]} // красивый ракурс
        >
          <Camera />
        </group>
      </Suspense>
    </Canvas>
  )
}

export default HeroExperience
