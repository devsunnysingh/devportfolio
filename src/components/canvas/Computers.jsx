import React from 'react'
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader'


// was gettting some errors, solved using below:
// npm install --legacy-peer-deps three --force

const Computers = ({isMobile}) => {
  const computer=useGLTF('./desktop_pc/scene.gltf');
  
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={3}/>
      <primitive object={computer.scene} 
        scale={isMobile?0.7: 0.75}
        position={isMobile ? [0, -3, -2.2]: [0,-3.25,-1.5]}
        rotation={[-0.01,-0.2,-0.1]}
      />

    </mesh>

  )
}
const ComputersCanvas=()=>{
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(()=>{
     // listener which checks the change in the screen size
    const mediaQuery=window.matchMedia('(max-width:500px)');
    // sets initial value of the isMobile state varibale
    setIsMobile(mediaQuery.matches);

    // callback function to handle changes to the media query
    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }
    // add a callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // remove the listener when the component is unmounted
    return ()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[])
  return (<Canvas frameloop="demand"
  shadows
  camera={{position:[20,3,5],fov:25}}
 gl={{preserveDrawingBuffer:true}}>
  <Suspense fallback={<Loader/>}>
  <OrbitControls enableZoom={false}
    maxPolarAngle={Math.PI/2}
    minPolarAngle={Math.PI/2}
  /><Computers isMobile={isMobile}/></Suspense>
  <Preload all/>
  </Canvas>)
}
export default ComputersCanvas;