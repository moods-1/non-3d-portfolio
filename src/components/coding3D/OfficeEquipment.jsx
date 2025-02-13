import React from 'react';

export default function OfficeEquipment({ nodes, materials }) {
	return (
		<>
			<mesh
				name='BFUTR_2025'
				castShadow
				receiveShadow
				geometry={nodes.BFUTR_2025.geometry}
				material={materials['BFUTR 2025']}
				position={[0.675, 0.732, 0.522]}
				rotation={[0, -1.571, 0]}
				scale={0.279}
			/>
			<group
				name='Monitor'
				position={[1.031, 0.793, -0.046]}
				rotation={[Math.PI / 2, 0, Math.PI / 2]}
				scale={0.027}
			>
				<mesh
					name='Brand Logo'
					castShadow
					receiveShadow
					geometry={nodes.Brand_1.geometry}
					material={materials['Material.015']}
				/>
				<mesh
					name='Monitor Stand'
					castShadow
					receiveShadow
					geometry={nodes.Brand_2.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					name='Brand_3'
					castShadow
					geometry={nodes.Brand_3.geometry}
					material={materials['Material.009']}
				/>
				<mesh
					name='Brand_4'
					geometry={nodes.Brand_4.geometry}
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
					castShadow
					receiveShadow
					geometry={nodes.Text002.geometry}
					material={materials['Material.018']}
				/>
				<mesh
					name='Text002_1'
					castShadow
					receiveShadow
					geometry={nodes.Text002_1.geometry}
					material={materials['Material.017']}
				/>
				<mesh
					name='Text002_2'
					castShadow
					receiveShadow
					geometry={nodes.Text002_2.geometry}
					material={materials.PowerLight}
				/>
				<mesh
					name='Text002_3'
					castShadow
					receiveShadow
					geometry={nodes.Text002_3.geometry}
					material={materials['Material.016']}
				/>
			</group>
			<group name='Aeron_Office_Chair' rotation={[0, 1.571, 0]}>
				<mesh
					name='Arm'
					castShadow
					receiveShadow
					geometry={nodes.Arm.geometry}
					material={materials['Matte Light Gray']}
				/>
				<mesh
					name='Base002'
					castShadow
					receiveShadow
					geometry={nodes.Base002.geometry}
					material={materials['Matte Light Gray']}
				/>
				<mesh
					name='Caster'
					castShadow
					receiveShadow
					geometry={nodes.Caster.geometry}
					material={materials['Matte Black']}
					position={[-0.195, 0.064, 0.268]}
				/>
				<mesh
					name='Frame008'
					castShadow
					receiveShadow
					geometry={nodes.Frame008.geometry}
					material={materials['Matte Light Gray']}
				/>
				<group name='Hardware002'>
					<mesh
						name='Mesh134'
						castShadow
						receiveShadow
						geometry={nodes.Mesh134.geometry}
						material={materials['Chrome.001']}
					/>
					<mesh
						name='Mesh134_1'
						castShadow
						receiveShadow
						geometry={nodes.Mesh134_1.geometry}
						material={materials['Matte Light Gray']}
					/>
				</group>
				<mesh
					name='Mesh'
					castShadow
					receiveShadow
					geometry={nodes.Mesh.geometry}
					material={materials.Mesh}
				/>
				<mesh
					name='Wire003'
					castShadow
					receiveShadow
					geometry={nodes.Wire003.geometry}
					material={materials['Matte Black']}
				/>
			</group>
			<group name='officeTable'>
				<group
					name='TableSupportBack'
					position={[1.17, 0.014, -0.957]}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={[0.045, 0.01, 0.045]}
				>
					<mesh
						name='Cylinder002'
						castShadow
						receiveShadow
						geometry={nodes.Cylinder002.geometry}
						material={materials.Adjuster}
					/>
					<mesh
						name='Cylinder002_1'
						castShadow
						receiveShadow
						geometry={nodes.Cylinder002_1.geometry}
						material={materials['Material.005']}
					>
						<meshStandardMaterial
							metalness={0.6}
							roughness={0}
							color={0x777777}
						/>
					</mesh>
				</group>
				<group
					name='TableSupportFront'
					position={[1.17, 0.014, 0.958]}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={[0.045, 0.01, 0.045]}
				>
					<mesh
						name='Cylinder001'
						castShadow
						receiveShadow
						geometry={nodes.Cylinder001.geometry}
						material={materials.Adjuster}
					/>
					<mesh
						name='Cylinder001_1'
						castShadow
						receiveShadow
						geometry={nodes.Cylinder001_1.geometry}
						material={materials['Material.005']}
					>
						<meshStandardMaterial
							metalness={0.6}
							roughness={0}
							color={0x777777}
						/>
					</mesh>
				</group>
				<mesh
					name='TableTop'
					castShadow
					receiveShadow
					geometry={nodes.TableTop.geometry}
					material={materials['Material.003']}
					position={[0.8, 0.711, 0]}
					scale={[0.462, 0.01, 1]}
				>
					<meshStandardMaterial
						metalness={0.6}
						roughness={0}
						color={0x000000}
					/>
				</mesh>
			</group>
			<group name='mouse' position={[0,-0.025,0]}>
				<mesh
					name='Mouse'
					castShadow
					receiveShadow
					geometry={nodes.Mouse.geometry}
					material={materials['Material.014']}
					position={[0.629, 0.483, 0.52]}
					rotation={[0, 1.571, 0]}
					scale={[0.041, 0.016, 0.059]}
				/>
				<mesh
					name='MouseWheel'
					castShadow
					receiveShadow
					geometry={nodes.MouseWheel.geometry}
					material={nodes.MouseWheel.material}
					position={[0.666, 0.756, 0.52]}
					rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
					scale={[0.01, 0.003, 0.01]}
				/>
				<mesh
					name='Text001'
					castShadow
					receiveShadow
					geometry={nodes.Text001.geometry}
					material={materials.Brand}
					position={[0.75, 0.769, -0.016]}
					rotation={[Math.PI / 2, -1.501, Math.PI / 2]}
					scale={[0.017, 0.017, 0.014]}
				/>

				<mesh
					name='Brand'
					castShadow
					receiveShadow
					geometry={nodes.Brand.geometry}
					material={nodes.Brand.material}
					position={[0.606, 0.774, 0.493]}
					rotation={[0, -Math.PI / 2, 0]}
					scale={0.02}
				/>
			</group>
		</>
	);
}
