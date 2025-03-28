import React from 'react';

export default function Walls({ nodes, materials }) {
	return (
		<>
			<group
				name='Walls'
				position={[-1.89, 1.46, 0]}
				rotation={[-Math.PI, 0, 0]}
				scale={[-0.088, -1.45, -1.857]}
			>
				<mesh
					name='Cube'
					castShadow
					receiveShadow
					geometry={nodes.Cube.geometry}
					material={materials['Wallbase.002']}
				>
					<meshStandardMaterial color={0x444444} />
				</mesh>
				<mesh
					name='Cube_1'
					receiveShadow
					geometry={nodes.Cube_1.geometry}
					material={materials['WallInterior.002']}
				>
					<meshStandardMaterial color={0x777777} />
				</mesh>
				<mesh
					name='Cube_2'
					castShadow
					receiveShadow
					geometry={nodes.Cube_2.geometry}
					material={materials['WallExterior.002']}
				/>
				<mesh
					name='Cube_3'
					castShadow
					receiveShadow
					geometry={nodes.Cube_3.geometry}
					material={materials['WallExterior.003']}
				/>
			</group>

			<mesh
				name='WindowFrame'
				receiveShadow
				geometry={nodes.WindowFrame.geometry}
				material={materials['Material.001']}
				position={[-1.907, 1.65, -0.125]}
				rotation={[-Math.PI, 0, -Math.PI]}
				scale={[-0.138, -0.812, -0.887]}
			>
				<meshStandardMaterial color={0xffffff} />
			</mesh>
			<mesh
				name='WindowInterior'
				castShadow
				receiveShadow
				geometry={nodes.WindowInterior.geometry}
				material={materials['Material.004']}
				position={[-1.921, 1.657, -0.129]}
				rotation={[-Math.PI, 0, 0]}
				scale={[-0.013, -0.686, -0.736]}
			/>
			<mesh
				name='Baseboard'
				receiveShadow
				geometry={nodes.Baseboard.geometry}
				material={materials['Material.013']}
				position={[0.073, 0.089, -1.671]}
				rotation={[-Math.PI, 0, 0]}
				scale={[1.902, 0.088, 0.016]}
			/>
			<mesh
				name='Baseboard2'
				receiveShadow
				geometry={nodes.Baseboard2.geometry}
				material={materials['Material.013']}
				position={[-1.793, 0.09, 0.079]}
				rotation={[Math.PI, -Math.PI / 2, 0]}
				scale={[1.775, 0.088, 0.016]}
			/>
		</>
	);
}
