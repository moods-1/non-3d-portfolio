import React from 'react';

export default function Keyboard({ nodes, materials }) {
	return (
		<>
			<group
				name='Keyboard'
				position={[0.659, 0.751, 0.015]}
				rotation={[0, 0, 0.07]}
				scale={[0.115, 0.01, 0.357]}
			>
				<mesh
					name='Cube002'
					castShadow
					receiveShadow
					geometry={nodes.Cube002.geometry}
					material={materials.KeyboardBase}
				/>
				<mesh
					name='Cube002_1'
					castShadow
					receiveShadow
					geometry={nodes.Cube002_1.geometry}
					material={materials.TopKey}
				/>
			</group>
			<group
				name='TopKey'
				position={[0.756, 0.57, 0.047]}
				rotation={[0, 0, 0.07]}
				scale={[0.076, 0.09, 0.09]}
			>
				<mesh
					name='Cylinder'
					castShadow
					receiveShadow
					geometry={nodes.Cylinder.geometry}
					material={materials.TopKey}
					position={[-0.044, 4.056, 0]}
				/>
			</group>
			<group
				name='TopKey001'
				position={[0.756, 0.57, 0.078]}
				rotation={[0, 0, 0.07]}
				scale={[0.076, 0.09, 0.09]}
			>
				<mesh
					name='Cylinder_1'
					castShadow
					receiveShadow
					geometry={nodes.Cylinder_1.geometry}
					material={materials.TopKey}
					position={[-0.044, 4.056, 0]}
				/>
			</group>
			<group
				name='TopKey002'
				position={[0.756, 0.57, 0.68]}
				rotation={[0, 0, 0.07]}
				scale={[0.076, 0.09, 0.09]}
			>
				<mesh
					name='Cylinder_2'
					castShadow
					receiveShadow
					geometry={nodes.Cylinder_2.geometry}
					material={materials.TopKey}
					position={[-0.044, 4.056, 0]}
				/>
			</group>
			<group
				name='TopKey003'
				position={[0.756, 0.57, 0.648]}
				rotation={[0, 0, 0.07]}
				scale={[0.076, 0.09, 0.09]}
			>
				<mesh
					name='Cylinder_3'
					castShadow
					receiveShadow
					geometry={nodes.Cylinder_3.geometry}
					material={materials.TopKey}
					position={[-0.044, 4.056, 0]}
				/>
			</group>
			<group
				name='TopKey004'
				position={[0.756, 0.57, 0.617]}
				rotation={[0, 0, 0.07]}
				scale={[0.076, 0.09, 0.09]}
			>
				<mesh
					name='Cylinder_4'
					castShadow
					receiveShadow
					geometry={nodes.Cylinder_4.geometry}
					material={materials.TopKey}
					position={[-0.044, 4.056, 0]}
				/>
			</group>
		</>
	);
}
