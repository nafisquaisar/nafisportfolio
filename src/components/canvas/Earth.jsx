import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={2.3}
      position={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile once
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <Canvas
      frameloop={isMobile ? "demand" : "always"}
      dpr={isMobile ? 1 : [1, 2]}
      gl={{
        antialias: !isMobile,
        powerPreference: "low-power",
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: isMobile ? [0, 0, 6] : [-4, 3, 6],
      }}
      onCreated={({ gl }) => {
        const canvas = gl.domElement;

        canvas.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          console.warn("WebGL context lost");
        });

        canvas.addEventListener("webglcontextrestored", () => {
          window.location.reload(); // safest recovery
        });
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* lights */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <OrbitControls
          autoRotate={!isMobile}     // ❌ mobile pe band
          autoRotateSpeed={0.6}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
        <Preload all={false} />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
