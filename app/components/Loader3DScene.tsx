"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, MeshDistortMaterial, Float, Html } from "@react-three/drei";
import * as THREE from "three";

const TECHS = [
  { name: "React",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",             color: "#61DAFB", radius: 2.2, speed: 0.5,  angleOffset: 0,             inclination: 0.3 },
  { name: "Next.js",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",           color: "#ffffff", radius: 2.6, speed: 0.35, angleOffset: Math.PI / 3,   inclination: 1.0 },
  { name: "Laravel",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",         color: "#FF2D20", radius: 2.0, speed: 0.55, angleOffset: Math.PI / 1.5, inclination: 1.4 },
  { name: "TypeScript",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",   color: "#3178C6", radius: 2.8, speed: 0.3,  angleOffset: Math.PI,        inclination: 0.6 },
  { name: "MySQL",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",             color: "#4479A1", radius: 2.3, speed: 0.45, angleOffset: Math.PI / 2,   inclination: 1.8 },
  { name: "Firebase",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",          color: "#FFCA28", radius: 2.5, speed: 0.4,  angleOffset: Math.PI * 1.5, inclination: 0.9 },
  { name: "PHP",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",                 color: "#777BB4", radius: 2.1, speed: 0.6,  angleOffset: Math.PI / 4,   inclination: 2.2 },
  { name: "Tailwind",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4", radius: 2.7, speed: 0.38, angleOffset: Math.PI * 1.2, inclination: 1.6 },
];

function CameraAdjust() {
  const { camera, size } = useThree();
  useEffect(() => {
    (camera as THREE.PerspectiveCamera).position.z = size.width < 640 ? 9 : size.width < 1024 ? 8 : 7;
    camera.updateProjectionMatrix();
  }, [camera, size.width]);
  return null;
}

function OrbitingTech({ logo, name, color, radius, speed, angleOffset, inclination }: {
  logo: string; name: string; color: string;
  radius: number; speed: number; angleOffset: number; inclination: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { size } = useThree();
  const isMobile = size.width < 640;
  const isTablet = size.width < 1024;

  const scale    = isMobile ? 0.65 : isTablet ? 0.82 : 1;
  const r        = radius * scale;
  const iconSize = isMobile ? 44 : isTablet ? 60 : 80;
  const imgSize  = isMobile ? 26 : isTablet ? 36 : 48;

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime() * speed + angleOffset;
    groupRef.current.position.x = Math.cos(t) * r;
    groupRef.current.position.y = Math.sin(t) * Math.sin(inclination) * r * 0.6;
    groupRef.current.position.z = Math.sin(t) * Math.cos(inclination) * r * 0.6;
  });

  return (
    <group ref={groupRef}>
      <Html center distanceFactor={isMobile ? 9 : isTablet ? 7.5 : 6} zIndexRange={[0, 10]}>
        <div
          style={{
            width: iconSize,
            height: iconSize,
            borderRadius: "50%",
            background: "rgba(10,10,10,0.88)",
            border: `${isMobile ? 2 : 3}px solid ${color}`,
            boxShadow: `0 0 ${isMobile ? 12 : 22}px ${color}aa`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(4px)",
            cursor: "default",
          }}
          title={name}
        >
          <img src={logo} alt={name} width={imgSize} height={imgSize} style={{ objectFit: "contain" }} />
        </div>
      </Html>
    </group>
  );
}

function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  const sphereRadius = size.width < 640 ? 0.7 : size.width < 1024 ? 0.85 : 1;

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.25;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.4;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[sphereRadius, 32, 32]} />
        <MeshDistortMaterial
          color="#ff6b00"
          emissive="#ff3300"
          emissiveIntensity={0.5}
          distort={0.45}
          speed={3}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingParticles() {
  const { size } = useThree();
  const count = size.width < 640 ? 40 : 80;
  const positions = useRef(
    new Float32Array(Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 14))
  );
  const geoRef = useRef<THREE.BufferGeometry>(null);

  useFrame(({ clock }) => {
    if (!geoRef.current) return;
    const pos = geoRef.current.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(clock.getElapsedTime() * 0.6 + i) * 0.001;
    }
    geoRef.current.attributes.position.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry ref={geoRef}>
        <bufferAttribute attach="attributes-position" args={[positions.current, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ff6b00" transparent opacity={0.7} />
    </points>
  );
}

export default function Loader3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 60 }} style={{ background: "transparent" }}>
      <CameraAdjust />
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]}    color="#ff6b00" intensity={4} />
      <pointLight position={[-4, -4, -4]} color="#a855f7" intensity={2.5} />
      <pointLight position={[0, 5, -4]}   color="#3b82f6" intensity={1.5} />

      <Stars radius={50} depth={30} count={500} factor={3} fade speed={1.2} />
      <CentralSphere />
      <FloatingParticles />

      {TECHS.map((tech) => (
        <OrbitingTech key={tech.name} {...tech} />
      ))}
    </Canvas>
  );
}
