import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const normalMapTexture = useLoader(THREE.TextureLoader, "/normalmap.png");
  const meshRef = useRef();
  useFrame(() => {
    meshRef.current.rotation.y += 0.005;
    {
      window.addEventListener("mousemove", (e) => {
        let cy = e.clientY / window.innerHeight - 0.5;
        if (meshRef.current != null) {
          meshRef.current.rotation.x = cy;
        }
      });
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry />
      <meshStandardMaterial
        metalness={1}
        roughness={0.5}
        normalMap={normalMapTexture}
      />
    </mesh>
  );
}

const Canvas3D = () => {
  return (
    <Canvas camera={{ position: [0, -4, 0], fov: 50 }}>
      <pointLight intensity={1} position={[-20, 60, 10]} color={"red"} />
      <pointLight intensity={1} position={[20, 60, 10]} color={"blue"} />
      {/* <OrbitControls enablePan={false} enableZoom={false} /> */}
      <Globe />
    </Canvas>
  );
};

export default Canvas3D;
