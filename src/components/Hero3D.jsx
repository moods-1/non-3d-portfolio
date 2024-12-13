import {
	CameraControls,
	Environment,
	MeshReflectorMaterial,
	Text,
	useVideoTexture,
	useGLTF,
} from '@react-three/drei';
import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';

import { CodingRoom } from './CodingRoom';

useGLTF.preload('fonts/Poppins-Black.ttf');

export default function Hero3D() {
	const controls = useRef();
	const meshFitCameraHome = useRef();
	const videoTexture = useVideoTexture('video/CTV News.mp4');
	videoTexture.repeat.set(0.6, 0.6);

	const intro = useCallback(async () => {
		controls.current.dolly(-22); // Move the camera back 22
		controls.current.smoothTime = 0.8; // Animation duration
		fitCamera();
	}, []);

	const fitCamera = async () =>
		controls.current.fitToBox(meshFitCameraHome.current, true);

	useEffect(() => {
		intro();
	}, [intro]);

	useEffect(() => {
		window.addEventListener('resize', fitCamera, false);
		return () => window.removeEventListener('resize', fitCamera, false);
	}, []);

	return (
		<>
			<CameraControls ref={controls} minDistance={6} maxDistance={30}/>
			<mesh ref={meshFitCameraHome} position-z={1.5} visible={false}>
				<boxGeometry args={[7.5, 2, 2]} />
				<meshBasicMaterial color='orange' transparent opacity={0.5} />
			</mesh>
			<group rotation-y={degToRad(30)}>
				<Text
					font={'fonts/Poppins-Black.ttf'}
					fontSize={0.6}
					position={[-2, 0.3, 1]}
					lineHeight={0.8}
					textAlign='left'
					anchorY={'bottom'}
				>
					CARL{'\n'}MOODIE
					<meshBasicMaterial
						color='white'
						side={THREE.DoubleSide}
						map={videoTexture}
					/>
				</Text>
				<Text
					font={'fonts/Poppins-Black.ttf'}
					fontSize={0.15}
					position={[-2, -0.4, 1]}
					lineHeight={1.3}
					textAlign='left'
					anchorY={'bottom'}
				>
					I develop full stack applications {'\n'}that generate memorable {'\n'}
					UI/UX experiences.
					<meshBasicMaterial color='white' side={THREE.DoubleSide} />
				</Text>
			</group>
			<group rotation-y={degToRad(-25)} position-x={2} position-y={0.55}>
				<CodingRoom scale={0.6} />
			</group>
			<mesh position-y={-0.58} rotation-x={-Math.PI / 2}>
				<planeGeometry args={[100, 100]} />
				<MeshReflectorMaterial
					blur={[100, 100]}
					resolution={2048}
					mixBlur={1}
					mixStrength={10}
					roughness={1}
					depthScale={1}
					minDepthThreshold={0.4}
					maxDepthThreshold={1.4}
					color='#333'
					metalness={0.5}
				/>
			</mesh>
			<Environment preset='night' />
		</>
	);
}
