import React from 'react';

export default function Floor({ nodes, materials }) {
	return (
		<group name='Floor' position={[0, 0.008, 0]} scale={[1.978, 0.5, 1.86]}>
			<mesh
				name='Plane'
				castShadow
				receiveShadow
				geometry={nodes.Plane.geometry}
				material={materials['Material.002']}
			/>
			<mesh
				name='Plane_1'
				castShadow
				receiveShadow
				geometry={nodes.Plane_1.geometry}
				material={materials['HardwoodFloor.001']}
			/>
		</group>
	);
}
