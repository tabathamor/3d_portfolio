import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import { Island } from "../models";

   {/* <div className='absolute top-28 left-0 right-0 z-10 flex
    items-center justify-center'>
      POPUP
    </div> */}

function Home() {

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };
    const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
   <section className='w-full h-screen relative'>
 
    <Canvas 
      className='w-full h-screen bg-transparent'
      camera={{near: 0.1, far: 1000}}>

    <Suspense fallback={<Loader />}>
      <directionalLight / >
        <ambientLight />
        <pointLight />
        <spotLight />
        <hemisphereLight />
        <Island 
        position={islandPosition}
        scale={islandScale}
        />

    </Suspense>
    </Canvas>
   </section>
  )
}

export default Home 