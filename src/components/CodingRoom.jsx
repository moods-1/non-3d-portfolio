import React, { useEffect } from 'react';
import { useGraph } from '@react-three/fiber';
import {
	useGLTF,
	useAnimations,
	OrbitControls,
	useVideoTexture,
} from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export function MyRoom(props) {
	const group = React.useRef();
	const { scene, animations } = useGLTF('/myRoom-limited.glb');
	const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
	const { nodes, materials } = useGraph(clone);
	const video = useVideoTexture('/CTV News.mp4');
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		actions['Armature|mixamo.com|Layer0'].play();
	}, [actions]);

	return (
		<>
			<OrbitControls
				maxPolarAngle={Math.PI / 2.5}
				minPolarAngle={Math.PI / 3}
				minDistance={5}
				maxDistance={6}
			/>
			<group
				ref={group}
				{...props}
				dispose={null}
				rotation={[0, -0.15, 0]}
				position={[0, -1, 0]}
			>
				<group name='Scene'>
					<group name='Armature' rotation={[0, 1.571, 0]}>
						<primitive object={nodes.Hips} />
						<skinnedMesh
							name='avaturn_body'
							geometry={nodes.avaturn_body.geometry}
							material={materials['avaturn_body_material.001']}
							skeleton={nodes.avaturn_body.skeleton}
						/>
						<skinnedMesh
							name='avaturn_look_0'
							geometry={nodes.avaturn_look_0.geometry}
							material={materials['avaturn_look_0_material.001']}
							skeleton={nodes.avaturn_look_0.skeleton}
						/>
						<skinnedMesh
							name='avaturn_shoes_0'
							geometry={nodes.avaturn_shoes_0.geometry}
							material={materials['avaturn_shoes_0_material.001']}
							skeleton={nodes.avaturn_shoes_0.skeleton}
						/>
					</group>
					<group
						name='Mouse'
						position={[0.633, 0.724, 0.52]}
						rotation={[0, Math.PI / 2, 0]}
						scale={0.031}
					/>
					<group name='Aeron_Office_Chair' rotation={[0, Math.PI / 2, 0]}>
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
					<group
						name='Corsair_Keyboard'
						position={[0.634, 0.729, 0]}
						rotation={[Math.PI, 0, Math.PI]}
						scale={1.24}
					>
						<mesh
							name='Cube005'
							geometry={nodes.Cube005.geometry}
							material={materials['keyboard key.002']}
							position={[-0.015, 0.023, 0.171]}
						/>
						<mesh
							name='Cube006'
							geometry={nodes.Cube006.geometry}
							material={materials['keyboard key.002']}
							position={[0.007, 0.023, 0.165]}
						/>
						<mesh
							name='Cube007'
							geometry={nodes.Cube007.geometry}
							material={materials['keyboard key.002']}
							position={[0.029, 0.023, 0.176]}
						/>
						<mesh
							name='Cube008'
							geometry={nodes.Cube008.geometry}
							material={materials['keyboard key.002']}
							position={[-0.035, 0.023, 0.2]}
						/>
						<mesh
							name='Cube009'
							geometry={nodes.Cube009.geometry}
							material={materials['keyboard key.002']}
							position={[-0.058, 0.023, 0.164]}
						/>
						<mesh
							name='Cube010'
							geometry={nodes.Cube010.geometry}
							material={materials['keyboard key.002']}
							position={[-0.058, 0.023, 0.067]}
						/>
						<mesh
							name='Cube011'
							geometry={nodes.Cube011.geometry}
							material={materials['keyboard key.002']}
							position={[-0.058, 0.023, -0.032]}
						/>
						<mesh
							name='Cube012'
							geometry={nodes.Cube012.geometry}
							material={materials['keyboard key.002']}
							position={[-0.056, 0.023, 0.232]}
						/>
						<mesh
							name='Cube013'
							geometry={nodes.Cube013.geometry}
							material={materials['keyboard key.002']}
							position={[-0.058, 0.023, 0.199]}
						/>
						<mesh
							name='Cube014'
							geometry={nodes.Cube014.geometry}
							material={materials['keyboard key.002']}
							position={[-0.014, 0.023, 0.201]}
						/>
						<mesh
							name='Cube015'
							geometry={nodes.Cube015.geometry}
							material={materials['keyboard key.002']}
							position={[0.007, 0.023, 0.201]}
						/>
						<mesh
							name='Cube016'
							geometry={nodes.Cube016.geometry}
							material={materials['keyboard key.002']}
							position={[0.029, 0.023, 0.199]}
						/>
						<mesh
							name='Cube017'
							geometry={nodes.Cube017.geometry}
							material={materials['keyboard key.002']}
							position={[0.05, 0.023, 0.201]}
						/>
						<mesh
							name='Cube018'
							geometry={nodes.Cube018.geometry}
							material={materials['keyboard key.002']}
							position={[0.05, 0.023, 0.173]}
						/>
						<mesh
							name='Cube019'
							geometry={nodes.Cube019.geometry}
							material={materials['keyboard key.002']}
							position={[0.05, 0.023, 0.145]}
						/>
						<mesh
							name='Cube020'
							geometry={nodes.Cube020.geometry}
							material={materials['keyboard key.002']}
							position={[0.05, 0.023, -0.005]}
						/>
						<mesh
							name='Cube021'
							geometry={nodes.Cube021.geometry}
							material={materials['keyboard key.002']}
							position={[0.05, 0.023, -0.033]}
						/>
						<mesh
							name='Cube022'
							geometry={nodes.Cube022.geometry}
							material={materials['keyboard key.002']}
							position={[0.05, 0.023, -0.061]}
						/>
						<mesh
							name='Cube023'
							geometry={nodes.Cube023.geometry}
							material={materials['keyboard key.002']}
							position={[0.05, 0.023, -0.088]}
						/>
						<mesh
							name='Cube024'
							geometry={nodes.Cube024.geometry}
							material={materials['keyboard key.002']}
							position={[0.028, 0.023, -0.088]}
						/>
						<mesh
							name='Cube025'
							geometry={nodes.Cube025.geometry}
							material={materials['keyboard key.002']}
							position={[-0.035, 0.023, -0.077]}
						/>
						<mesh
							name='Cube026'
							geometry={nodes.Cube026.geometry}
							material={materials['keyboard key.002']}
							position={[-0.058, 0.023, -0.124]}
						/>
						<mesh
							name='Cube027'
							geometry={nodes.Cube027.geometry}
							material={materials['keyboard key.002']}
							position={[-0.036, 0.023, -0.124]}
						/>
						<mesh
							name='Cube028'
							geometry={nodes.Cube028.geometry}
							material={materials['keyboard key.002']}
							position={[-0.016, 0.023, -0.124]}
						/>
						<mesh
							name='Cube029'
							geometry={nodes.Cube029.geometry}
							material={materials['keyboard key.002']}
							position={[0.05, 0.023, -0.126]}
						/>
						<mesh
							name='Cube030'
							geometry={nodes.Cube030.geometry}
							material={materials['keyboard key.002']}
							position={[0.029, 0.023, -0.146]}
						/>
						<mesh
							name='Cube031'
							geometry={nodes.Cube031.geometry}
							material={materials['keyboard key.002']}
							position={[-0.036, 0.023, -0.197]}
						/>
						<mesh
							name='Cube032'
							geometry={nodes.Cube032.geometry}
							material={materials['keyboard key.002']}
							position={[0.05, 0.023, 0.088]}
						/>
						<mesh
							name='Cube033'
							geometry={nodes.Cube033.geometry}
							material={materials['keyboard key.002']}
							position={[-0.015, 0.023, -0.087]}
						/>
						<mesh
							name='Cube034'
							geometry={nodes.Cube034.geometry}
							material={materials['keyboard key.002']}
							position={[0.048, 0.023, -0.197]}
						/>
						<mesh
							name='Cube035'
							geometry={nodes.Cube035.geometry}
							material={materials['keyboard key.002']}
							position={[0.048, 0.023, -0.238]}
						/>
						<mesh
							name='Cube036'
							geometry={nodes.Cube036.geometry}
							material={materials['keyboard key.002']}
							position={[0.03, 0.023, -0.259]}
							rotation={[0, Math.PI / 2, 0]}
						/>
						<mesh
							name='Cube037'
							geometry={nodes.Cube037.geometry}
							material={materials['keyboard key.002']}
							position={[-0.012, 0.023, -0.259]}
							rotation={[0, Math.PI / 2, 0]}
						/>
						<mesh
							name='Cube038'
							geometry={nodes.Cube038.geometry}
							material={materials['keyboard key.002']}
							position={[-0.036, 0.023, -0.259]}
						/>
						<mesh
							name='Cube039'
							geometry={nodes.Cube039.geometry}
							material={materials['keyboard key.002']}
							position={[-0.061, 0.014, -0.197]}
						/>
						<mesh
							name='Cube040'
							geometry={nodes.Cube040.geometry}
							material={materials['keyboard key.002']}
							position={[-0.093, 0.014, -0.214]}
						/>
						<group name='Cube041' position={[-0.092, -0.002, -0.149]}>
							<mesh
								name='Cube002_1'
								geometry={nodes.Cube002_1.geometry}
								material={materials['keyboard key.002']}
							/>
							<mesh
								name='Cube002_2'
								geometry={nodes.Cube002_2.geometry}
								material={materials['keyboard.002']}
							/>
							<mesh
								name='Cube002_3'
								geometry={nodes.Cube002_3.geometry}
								material={materials['rubber.001']}
							/>
						</group>
						<group name='Cylinder003' position={[-0.092, 0.016, -0.159]}>
							<mesh
								name='Cylinder006_1'
								geometry={nodes.Cylinder006_1.geometry}
								material={materials['LIGHT on.002']}
							/>
							<mesh
								name='Cylinder006_2'
								geometry={nodes.Cylinder006_2.geometry}
								material={materials['LIGHT off.002']}
							/>
						</group>
						<mesh
							name='Cylinder004'
							geometry={nodes.Cylinder004.geometry}
							material={materials['keyboard key.002']}
							position={[-0.092, 0.015, -0.103]}
						/>
					</group>
					<group
						name='Cube004'
						position={[0.577, 1.634, -1.653]}
						scale={[0.848, 0.492, 0.008]}
					>
						<mesh
							name='Cube_1'
							geometry={nodes.Cube_1.geometry}
							material={materials['Material.008']}
						/>
						<mesh
							name='Cube_2'
							geometry={nodes.Cube_2.geometry}
							material={materials['CTV News']}
							scale={[1, -1, 1]}
						>
							<meshStandardMaterial map={video} />
						</mesh>
					</group>
					<group
						name='Monitor'
						position={[1.083, 0.733, 0]}
						scale={[0.113, 0.008, 0.238]}
					>
						<mesh
							name='Cube010_1'
							geometry={nodes.Cube010_1.geometry}
							material={materials['Material.010']}
						/>
						<mesh
							name='Cube010_2'
							geometry={nodes.Cube010_2.geometry}
							material={materials['Material.009']}
						/>
						<mesh
							name='Cube010_3'
							geometry={nodes.Cube010_3.geometry}
							material={materials.VSCode}
						/>
					</group>
					<mesh
						name='Baseboard'
						geometry={nodes.Baseboard.geometry}
						material={materials['Material.013']}
						position={[0.073, 0.089, -1.671]}
						rotation={[-Math.PI, 0, 0]}
						scale={[1.902, 0.088, 0.016]}
					/>
					<mesh
						name='Baseboard2'
						geometry={nodes.Baseboard2.geometry}
						material={materials['Material.013']}
						position={[-1.793, 0.09, 0.079]}
						rotation={[Math.PI, -Math.PI / 2, 0]}
						scale={[1.775, 0.088, 0.016]}
					/>
					<mesh
						name='BFUTR_2025'
						geometry={nodes.BFUTR_2025.geometry}
						material={materials['BFUTR 2025']}
						position={[0.675, 0.732, 0.522]}
						rotation={[0, -Math.PI / 2, 0]}
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
					<mesh
						name='Text001'
						geometry={nodes.Text001.geometry}
						material={materials['Material.015']}
						position={[1.031, 0.793, -0.046]}
						rotation={[Math.PI / 2, 0, Math.PI / 2]}
						scale={0.027}
					/>
					<group
						name='MiniPC'
						position={[0.987, 0.744, 0.427]}
						rotation={[0, 0, Math.PI / 2]}
						scale={0.012}
					>
						<mesh
							name='Cylinder008'
							geometry={nodes.Cylinder008.geometry}
							material={materials['Material.017']}
						/>
						<mesh
							name='Cylinder008_1'
							geometry={nodes.Cylinder008_1.geometry}
							material={materials.PowerLight}
						/>
						<mesh
							name='Cylinder008_2'
							geometry={nodes.Cylinder008_2.geometry}
							material={materials['Material.016']}
						/>
					</group>
					<mesh
						name='Text002'
						geometry={nodes.Text002.geometry}
						material={materials['Material.018']}
						position={[1.095, 0.772, 0.338]}
						rotation={[0, -Math.PI / 2, 0]}
						scale={0.113}
					/>
					<group
						name='Floor'
						position={[0, 0.008, 0]}
						scale={[1.978, 0.5, 1.86]}
					>
						<mesh
							name='Plane'
							geometry={nodes.Plane.geometry}
							material={materials['Material.002']}
						/>
						<mesh
							name='Plane_1'
							geometry={nodes.Plane_1.geometry}
							material={materials['HardwoodFloor.001']}
						/>
					</group>
					<mesh
						name='BackWall'
						geometry={nodes.BackWall.geometry}
						material={materials['Material.011']}
						position={[0, 1.394, -1.772]}
						scale={[1.982, 1.393, 0.088]}
					/>
					<mesh
						name='TableTop'
						geometry={nodes.TableTop.geometry}
						material={materials['Material.003']}
						position={[0.8, 0.711, 0]}
						scale={[0.462, 0.01, 1]}
					/>
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
						name='SideWall'
						position={[-1.892, 1.394, 0.008]}
						rotation={[Math.PI, -Math.PI / 2, 0]}
						scale={[-1.865, -1.393, -0.088]}
					>
						<mesh
							name='Cube093'
							geometry={nodes.Cube093.geometry}
							material={nodes.Cube093.material}
						/>
						<mesh
							name='Cube093_1'
							geometry={nodes.Cube093_1.geometry}
							material={materials['Material.011']}
						/>
					</group>
					<mesh
						name='Cube'
						geometry={nodes.Cube.geometry}
						material={materials['Material.001']}
						position={[-1.912, 1.65, -0.007]}
						rotation={[-Math.PI, 0, -Math.PI]}
						scale={[-0.138, -0.812, -0.848]}
					/>
					<mesh
						name='Cube003'
						geometry={nodes.Cube003.geometry}
						material={materials['Material.004']}
						position={[-1.906, 1.657, -0.025]}
						rotation={[-Math.PI, 0, 0]}
						scale={[-0.013, -0.671, -0.688]}
					/>
				</group>
			</group>
		</>
	);
}

useGLTF.preload('/myRoom-limited.glb');
