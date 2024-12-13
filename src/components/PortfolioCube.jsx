import React, {useEffect, useState } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';

export function PortfolioCube(props) {
	const [scale, setScale] = useState(1);
	const { nodes, materials } = useGLTF('models/PortfolioCube.glb');

	useEffect(() => {
		const handleResize = () => {
			const size = window.innerWidth;
			if (size > 340) setScale(1);
			else  setScale(.75)
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	return (
		<>
			<OrbitControls
				autoRotate
				autoRotateSpeed={5}
				minDistance={5}
				maxDistance={6}
			/>
			<group {...props} dispose={null} scale={scale}>
				<mesh geometry={nodes.Cube_1.geometry} material={materials['UI-UX']} />
				<mesh geometry={nodes.Cube_2.geometry} material={materials.React} />
				<mesh geometry={nodes.Cube_3.geometry} material={materials.Backend} />
				<mesh geometry={nodes.Cube_4.geometry} material={materials['3D']} />
				<mesh geometry={nodes.Cube_5.geometry} material={materials.Cee} />
			</group>
		</>
	);
}

useGLTF.preload('models/PortfolioCube.glb');
