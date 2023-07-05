import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile, scale }) => {
	const computer = useGLTF('./desktop_pc/scene.gltf');

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor='black' />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={1} />
			<primitive
				object={computer.scene}
				scale={scale}
				position={isMobile ? [-2.5, -2, -1] : [-1.5, -2.75, -1.5]}
				rotation={[0, 0, -0.05]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [scale, setScale] = useState(0.6);

	useEffect(() => {
		const scaler = (initial) => {
			const screenW = window.innerWidth;
			const setter = (width) => {
				if (width > 900) setScale(0.6);
				else if (width > 700 && width < 900) setScale(0.4);
				else if (width > 500 && width < 700) setScale(0.3);
				else if (width > 400 && width < 500) setScale(0.25);
				else setScale(0.18);
			};
			if (initial) {
				setIsMobile(screenW < 500);
				setter(screenW);
			} else {
				setter(screenW);
			}
		};
		scaler(true);
		window.addEventListener('resize', scaler);
		return () => window.removeEventListener('resize', () => {});
	}, []);

	return (
		<Canvas
			frameloop='demand'
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} scale={scale} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
