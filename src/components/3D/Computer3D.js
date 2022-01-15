import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei/core/OrbitControls';
import { useGLTF } from '@react-three/drei/core/useGLTF';

function ComputerModel({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF('lowres computer.glb');
  return (
    <group ref={group} {...props} dispose={null} antialias={true}>
      <mesh
        scale={2}
        geometry={nodes.PC.geometry}
        material={nodes.PC.material}
        position={[0, 0, -0.03]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        scale={2}
        geometry={nodes.Monitor.geometry}
        material={nodes.Monitor.material}
        position={[0, 0.5, 0.03]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        scale={2}
        geometry={nodes.Mouse.geometry}
        material={nodes.Mouse.material}
        position={[1.74, 0.05, 1.5]}
        rotation={[0.23, 0, 0]}
      />
      <mesh
        scale={2}
        geometry={nodes.Keyboard.geometry}
        material={nodes.Keyboard.material}
        position={[0, 0, 1.8]}
        rotation={[0.09, 0, 0]}
      />
    </group>
  );
}

const Computer3D = () => {
  return (
    <section className='c-computer3d'>
      <Canvas className='c-computer3d__canvas'>
        <Suspense fallback={null}>
          <OrbitControls />
          <ComputerModel scale={1} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Computer3D;
