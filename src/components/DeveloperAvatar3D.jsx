import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, Sparkles } from '@react-three/drei';
import { MathUtils } from 'three';

function Limb({ side = 1 }) {
  return (
    <group position={[side * 0.67, 0.34, 0]} rotation={[0, 0, side * -0.28]}>
      <mesh castShadow position={[0, -0.22, 0]}>
        <capsuleGeometry args={[0.1, 0.58, 8, 16]} />
        <meshStandardMaterial color="#152026" roughness={0.42} metalness={0.18} />
      </mesh>
      <mesh castShadow position={[side * 0.03, -0.63, 0.02]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial color="#d9a071" roughness={0.5} />
      </mesh>
    </group>
  );
}

function Leg({ side = 1 }) {
  return (
    <group position={[side * 0.22, -0.92, 0]}>
      <mesh castShadow position={[0, -0.3, 0]}>
        <capsuleGeometry args={[0.13, 0.72, 8, 16]} />
        <meshStandardMaterial color="#18222d" roughness={0.48} metalness={0.12} />
      </mesh>
      <mesh castShadow position={[side * 0.03, -0.77, 0.08]} scale={[1.2, 0.42, 1.55]}>
        <boxGeometry args={[0.28, 0.16, 0.42]} />
        <meshStandardMaterial color="#061014" roughness={0.36} metalness={0.18} />
      </mesh>
    </group>
  );
}

function HologramPanel({ position, rotation, tone = '#59d9ff' }) {
  return (
    <Float speed={2.2} rotationIntensity={0.15} floatIntensity={0.28}>
      <group position={position} rotation={rotation}>
        <mesh>
          <boxGeometry args={[0.9, 0.5, 0.03]} />
          <meshStandardMaterial
            color={tone}
            emissive={tone}
            emissiveIntensity={0.34}
            transparent
            opacity={0.16}
            roughness={0.22}
          />
        </mesh>
        <mesh position={[0, 0.11, 0.03]}>
          <boxGeometry args={[0.62, 0.035, 0.018]} />
          <meshStandardMaterial color={tone} emissive={tone} emissiveIntensity={0.9} />
        </mesh>
        <mesh position={[-0.14, -0.03, 0.03]}>
          <boxGeometry args={[0.34, 0.028, 0.018]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.42} />
        </mesh>
        <mesh position={[0.18, -0.14, 0.03]}>
          <boxGeometry args={[0.42, 0.028, 0.018]} />
          <meshStandardMaterial color={tone} emissive={tone} emissiveIntensity={0.76} />
        </mesh>
      </group>
    </Float>
  );
}

function DeveloperFigure({ pointer }) {
  const root = useRef(null);
  const torso = useRef(null);
  const head = useRef(null);
  const eyes = useRef(null);
  const halo = useRef(null);
  const orbit = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const px = pointer.current.x;
    const py = pointer.current.y;

    if (root.current) {
      root.current.rotation.y = MathUtils.lerp(root.current.rotation.y, px * 0.12, 0.08);
      root.current.position.y = -0.12 + Math.sin(t * 1.7) * 0.025;
    }

    if (torso.current) {
      torso.current.rotation.y = MathUtils.lerp(torso.current.rotation.y, px * 0.2, 0.08);
      torso.current.rotation.x = MathUtils.lerp(torso.current.rotation.x, -py * 0.08, 0.08);
    }

    if (head.current) {
      head.current.rotation.y = MathUtils.lerp(head.current.rotation.y, px * 0.72, 0.12);
      head.current.rotation.x = MathUtils.lerp(head.current.rotation.x, -py * 0.38, 0.12);
    }

    if (eyes.current) {
      eyes.current.position.x = MathUtils.lerp(eyes.current.position.x, px * 0.025, 0.16);
      eyes.current.position.y = MathUtils.lerp(eyes.current.position.y, -py * 0.018, 0.16);
    }

    if (halo.current) {
      halo.current.rotation.z += 0.006;
      halo.current.rotation.y = MathUtils.lerp(halo.current.rotation.y, px * 0.3, 0.08);
    }

    if (orbit.current) {
      orbit.current.rotation.y += 0.003;
      orbit.current.rotation.x = Math.sin(t * 0.42) * 0.08;
    }
  });

  return (
    <group ref={root} position={[0, -0.1, 0]} scale={0.84}>
      <group ref={orbit}>
        <mesh rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[1.38, 0.012, 12, 120]} />
          <meshStandardMaterial color="#59d9ff" emissive="#59d9ff" emissiveIntensity={0.9} />
        </mesh>
        <mesh rotation={[Math.PI / 2.2, 0.45, 0.25]}>
          <torusGeometry args={[1.68, 0.008, 12, 120]} />
          <meshStandardMaterial color="#73e295" emissive="#73e295" emissiveIntensity={0.5} />
        </mesh>
      </group>

      <group ref={torso}>
        <mesh castShadow position={[0, 0, 0]}>
          <capsuleGeometry args={[0.43, 0.82, 12, 28]} />
          <meshStandardMaterial color="#10191e" roughness={0.38} metalness={0.24} />
        </mesh>
        <mesh castShadow position={[0, 0.05, 0.08]} scale={[0.74, 1, 0.22]}>
          <capsuleGeometry args={[0.36, 0.75, 12, 24]} />
          <meshStandardMaterial color="#0fcbff" emissive="#0fcbff" emissiveIntensity={0.1} roughness={0.36} />
        </mesh>
        <mesh position={[0, 0.42, 0.36]}>
          <boxGeometry args={[0.46, 0.055, 0.04]} />
          <meshStandardMaterial color="#effcff" emissive="#59d9ff" emissiveIntensity={0.36} />
        </mesh>

        <Limb side={-1} />
        <Limb side={1} />
        <Leg side={-1} />
        <Leg side={1} />
      </group>

      <mesh castShadow position={[0, 0.82, 0]}>
        <cylinderGeometry args={[0.14, 0.18, 0.2, 24]} />
        <meshStandardMaterial color="#c8895c" roughness={0.55} />
      </mesh>

      <group ref={head} position={[0, 1.08, 0.03]}>
        <mesh castShadow>
          <sphereGeometry args={[0.35, 36, 36]} />
          <meshStandardMaterial color="#d99d70" roughness={0.48} />
        </mesh>
        <mesh castShadow position={[0, 0.19, -0.04]} scale={[1.03, 0.52, 0.96]}>
          <sphereGeometry args={[0.36, 32, 32]} />
          <meshStandardMaterial color="#101418" roughness={0.4} metalness={0.1} />
        </mesh>
        <group ref={eyes} position={[0, 0.04, 0.32]}>
          <mesh position={[-0.12, 0, 0]}>
            <sphereGeometry args={[0.033, 16, 16]} />
            <meshStandardMaterial color="#061014" roughness={0.2} />
          </mesh>
          <mesh position={[0.12, 0, 0]}>
            <sphereGeometry args={[0.033, 16, 16]} />
            <meshStandardMaterial color="#061014" roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.12, 0.006]} scale={[1.1, 0.16, 0.24]}>
            <boxGeometry args={[0.14, 0.045, 0.018]} />
            <meshStandardMaterial color="#6b3328" roughness={0.45} />
          </mesh>
        </group>
        <group ref={halo} position={[0, 0.02, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.48, 0.006, 8, 100]} />
            <meshStandardMaterial color="#59d9ff" emissive="#59d9ff" emissiveIntensity={1.25} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

export default function DeveloperAvatar3D() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="hero-avatar" aria-hidden="true">
      <Canvas
        shadows
        camera={{ position: [0, 0.25, 5.2], fov: 39 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.62} />
        <directionalLight position={[3.2, 4.4, 3.2]} intensity={1.15} castShadow />
        <pointLight position={[-2.2, 1.6, 2.5]} color="#59d9ff" intensity={2.2} />
        <pointLight position={[2.5, 0.8, 1.6]} color="#73e295" intensity={0.9} />
        <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.12}>
          <DeveloperFigure pointer={pointer} />
        </Float>
        <HologramPanel position={[-1.15, 0.58, -0.18]} rotation={[0.02, 0.58, 0.08]} />
        <HologramPanel position={[1.14, -0.03, 0.02]} rotation={[0.02, -0.58, -0.05]} tone="#73e295" />
        <Sparkles count={42} scale={[3.1, 2.6, 1.5]} size={2.4} speed={0.25} color="#59d9ff" opacity={0.58} />
        <ContactShadows position={[0, -1.35, 0]} opacity={0.34} scale={4.6} blur={2.4} far={2.8} />
      </Canvas>
    </div>
  );
}
