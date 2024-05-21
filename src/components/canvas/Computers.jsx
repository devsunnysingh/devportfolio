import React from 'react'
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader'
import mainPhoto from '../../assets/mainPhoto.jpg'

// import {sunny} from "../../assets/sunny.jpg"
// was gettting some errors, solved using below:
// npm install --legacy-peer-deps three --force


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
  return (
    <img className="w-screen h-1/2 sm:h-screen" src={mainPhoto} alt="Logo" />
//   <Canvas frameloop="demand"
//   shadows
//   camera={{position:[20,3,5],fov:25}}
//  gl={{preserveDrawingBuffer:true}}>
//   <Suspense fallback={<Loader/>}>
//   <OrbitControls enableZoom={false}
//     maxPolarAngle={Math.PI/2}
//     minPolarAngle={Math.PI/2}
//   /><Computers isMobile={isMobile}/></Suspense>
//   <Preload all/>
//   </Canvas>
)
}
export default ComputersCanvas;