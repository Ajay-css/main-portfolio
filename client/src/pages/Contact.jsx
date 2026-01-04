import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import { Mail, Phone, MapPin } from "lucide-react";
import * as THREE from "three";

// 🌍 Dotted Globe Component
const DottedGlobe = ({ points }) => {
  const ref = useRef();

  // rotate earth
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.002;
  });

  return (
    <Points ref={ref} positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

// ConnectionLines Component
const ConnectionLines = ({ points }) => {
  const groupRef = useRef();

  const connections = useMemo(() => {
    const conns = [];
    for (let i = 0; i < 5; i++) {
      const startIdx = Math.floor(Math.random() * (points.length / 3));
      const endIdx = Math.floor(Math.random() * (points.length / 3));

      const start = new THREE.Vector3(
        points[startIdx * 3],
        points[startIdx * 3 + 1],
        points[startIdx * 3 + 2]
      );
      const end = new THREE.Vector3(
        points[endIdx * 3],
        points[endIdx * 3 + 1],
        points[endIdx * 3 + 2]
      );

      const mid = start.clone().add(end).multiplyScalar(0.5);
      const midDir = mid.clone().normalize();
      const arcHeight = 0.5;
      mid.add(midDir.multiplyScalar(arcHeight));

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      conns.push({ curve, progress: Math.random() });
    }
    return conns;
  }, [points]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((line, idx) => {
        const conn = connections[idx];
        conn.progress += 0.01;
        if (conn.progress > 1) conn.progress = 0;

        const pts = conn.curve
          .getPoints(50)
          .slice(0, Math.floor(50 * conn.progress));
        const positions = new Float32Array(pts.length * 3);
        pts.forEach((p, i) => {
          positions[i * 3] = p.x;
          positions[i * 3 + 1] = p.y;
          positions[i * 3 + 2] = p.z;
        });
        line.geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
        line.geometry.setDrawRange(0, pts.length);
        line.geometry.attributes.position.needsUpdate = true;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {connections.map((_, idx) => (
        <line key={idx}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array(0)}
              count={0}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.8}
            linewidth={1.5}
          />
        </line>
      ))}
    </group>
  );
};

const Contact = () => {
  // Points array for globe
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 5000; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * 2 * Math.PI;

      const x = 2.5 * Math.sin(phi) * Math.cos(theta);
      const y = 2.5 * Math.sin(phi) * Math.sin(theta);
      const z = 2.5 * Math.cos(phi);

      pts.push(x, y, z);
    }
    return new Float32Array(pts);
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#0d1224] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-7xl flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-12 gap-6 items-center">
        {/* LEFT – Contact Info */}
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-3xl lg:text-2xl font-bold mb-3 lg:mb-0 text-center lg:text-left">
            Let’s Connect Through The World
          </h2>

          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl">
            <Mail className="text-purple-500" />
            <span>djalok9306@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl">
            <Phone className="text-purple-500" />
            <span>+91 8122286426</span>
          </div>

          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl">
            <MapPin className="text-purple-500" />
            <span>Tirunelveli, India</span>
          </div>
        </div>

        {/* RIGHT – 3D Globe */}
        <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px]">
          <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={1} />
            <DottedGlobe points={points} />
            <ConnectionLines points={points} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;