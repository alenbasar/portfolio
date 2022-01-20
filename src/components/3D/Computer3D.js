import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei/core/OrbitControls';
import { useGLTF } from '@react-three/drei/core/useGLTF';

const deg2rad = (degrees) => degrees * (Math.PI / 180);

function ComputerModel(props) {
  const group = useRef();
  const ref = useRef();
  const { nodes } = useGLTF('lowres computer.glb');
  useFrame((state, delta) => (group.current.rotation.y += 0.004));
  useEffect(() => {
    const time = setTimeout(() => {
      useFrame((state, delta) => (group.current.rotation.y += 0.004));
    }, 1000);
    return () => clearTimeout(time);
  }, []);

  return (
    <group ref={group} {...props} dispose={null} antialias={true}>
      <mesh
        scale={2}
        geometry={nodes.PC.geometry}
        material={nodes.PC.material}
        position={[0, -1.2, -0.03]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        scale={2}
        geometry={nodes.Monitor.geometry}
        material={nodes.Monitor.material}
        position={[0, -0.2, 0.03]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        scale={2}
        geometry={nodes.Mouse.geometry}
        material={nodes.Mouse.material}
        position={[1.74, -1.25, 1.5]}
        rotation={[0.23, 0, 0]}
      />
      <mesh
        scale={2}
        geometry={nodes.Keyboard.geometry}
        material={nodes.Keyboard.material}
        position={[0, -1.2, 1.8]}
        rotation={[0.1, 0, 0]}
      />
    </group>
  );
}

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      // maxAzimuthAngle={Math.PI / 4}
      // // maxPolarAngle={0}
      // minAzimuthAngle={-Math.PI / 4}
      // minPolarAngle={0}
    />
  );
};

const Computer3D = () => {
  return (
    <section className='c-computer3d'>
      <Canvas className='c-computer3d__canvas'>
        <ambientLight enablePan='false' enableZoom='false' />
        <Suspense fallback={null}>
          <CameraControls />
          <ComputerModel />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Computer3D;
