import { useGLTF, Preload, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import CanvasLoader from "../Loader.jsx";
import { Suspense, useEffect, useState } from "react";
const Computers = ({ isMobile }) => {
  const computer = useGLTF('/public/desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      // shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3 - 2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // add event listener for changes to screen size
    const mediaQuery = window.matchMedia('max-width:500px');

    // set the initial value to the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    // define a callback function to handle changes to mobile query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    // add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // remove the listener when the component is unmounted
    return () => {
      mediaQuery.addEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas;
// export default Computers;