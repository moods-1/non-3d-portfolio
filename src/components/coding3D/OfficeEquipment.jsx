import React from 'react';

export default function OfficeEquipment({ nodes, materials }) {
	return (
		<>
			<group
				name='Mouse'
				position={[0.633, 0.724, 0.52]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.031}
			/>
			<group name='Aeron_Office_Chair' rotation={[0, 1.571, 0]}>
				<mesh
					name='Arm'
					geometry={nodes.Arm.geometry}
					material={materials['Matte Light Gray']}
				/>
				<mesh
					name='Base002'
					geometry={nodes.Base002.geometry}
					material={materials['Matte Light Gray']}
				/>
				<mesh
					name='Caster'
					geometry={nodes.Caster.geometry}
					material={materials['Matte Black']}
					position={[-0.195, 0.064, 0.268]}
				/>
				<mesh
					name='Frame008'
					geometry={nodes.Frame008.geometry}
					material={materials['Matte Light Gray']}
				/>
				<group name='Hardware002'>
					<mesh
						name='Mesh134'
						geometry={nodes.Mesh134.geometry}
						material={materials['Chrome.001']}
					/>
					<mesh
						name='Mesh134_1'
						geometry={nodes.Mesh134_1.geometry}
						material={materials['Matte Light Gray']}
					/>
				</group>
				<mesh
					name='Mesh'
					geometry={nodes.Mesh.geometry}
					material={materials.Mesh}
				/>
				<mesh
					name='Wire003'
					geometry={nodes.Wire003.geometry}
					material={materials['Matte Black']}
				/>
			</group>
			<mesh
				name='BFUTR_2025'
				geometry={nodes.BFUTR_2025.geometry}
				material={materials['BFUTR 2025']}
				position={[0.675, 0.732, 0.522]}
				rotation={[0, -1.571, 0]}
				scale={0.279}
			/>
			<mesh
				name='Text'
				geometry={nodes.Text.geometry}
				material={nodes.Text.material}
				position={[0.606, 0.775, 0.493]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={0.02}
			/>
			<mesh
				name='Cube002'
				geometry={nodes.Cube002.geometry}
				material={materials['Material.014']}
				position={[0.629, 0.483, 0.52]}
				rotation={[0, 1.571, 0]}
				scale={[0.041, 0.016, 0.059]}
			/>
			<mesh
				name='Cylinder006'
				geometry={nodes.Cylinder006.geometry}
				material={nodes.Cylinder006.material}
				position={[0.666, 0.756, 0.52]}
				rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
				scale={[0.01, 0.003, 0.01]}
			/>
			<group
				name='Monitor'
				position={[1.031, 0.793, -0.046]}
				rotation={[Math.PI / 2, 0, Math.PI / 2]}
				scale={0.027}
			>
				<mesh
					name='Text001'
					geometry={nodes.Text001.geometry}
					material={materials['Material.015']}
				/>
				<mesh
					name='Text001_1'
					geometry={nodes.Text001_1.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					name='Text001_2'
					geometry={nodes.Text001_2.geometry}
					material={materials['Material.009']}
				/>
				<mesh
					name='Text001_3'
					geometry={nodes.Text001_3.geometry}
					material={materials.VSCode}
				/>
			</group>
			<group
				name='MiniPC'
				position={[1.095, 0.772, 0.338]}
				rotation={[0, -1.571, 0]}
				scale={0.113}
			>
				<mesh
					name='Text002'
					geometry={nodes.Text002.geometry}
					material={materials['Material.018']}
				/>
				<mesh
					name='Text002_1'
					geometry={nodes.Text002_1.geometry}
					material={materials['Material.017']}
				/>
				<mesh
					name='Text002_2'
					geometry={nodes.Text002_2.geometry}
					material={materials.PowerLight}
				/>
				<mesh
					name='Text002_3'
					geometry={nodes.Text002_3.geometry}
					material={materials['Material.016']}
				/>
			</group>
			<group
				name='TableSupportBack'
				position={[1.17, 0.014, -0.957]}
				rotation={[-Math.PI, 0, -Math.PI]}
				scale={[0.045, 0.01, 0.045]}
			>
				<mesh
					name='Cylinder002'
					geometry={nodes.Cylinder002.geometry}
					material={materials['Material.006']}
				/>
				<mesh
					name='Cylinder002_1'
					geometry={nodes.Cylinder002_1.geometry}
					material={materials['Material.005']}
				/>
			</group>
			<group
				name='TableSupportFront'
				position={[1.17, 0.014, 0.958]}
				rotation={[-Math.PI, 0, -Math.PI]}
				scale={[0.045, 0.01, 0.045]}
			>
				<mesh
					name='Cylinder001'
					geometry={nodes.Cylinder001.geometry}
					material={materials['Material.006']}
				/>
				<mesh
					name='Cylinder001_1'
					geometry={nodes.Cylinder001_1.geometry}
					material={materials['Material.005']}
				/>
			</group>
			<mesh
				name='TableTop'
				geometry={nodes.TableTop.geometry}
				material={materials['Material.003']}
				position={[0.8, 0.711, 0]}
				scale={[0.462, 0.01, 1]}
			/>
		</>
	);
}
