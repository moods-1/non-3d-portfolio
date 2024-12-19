import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import CarlCoding from './CarlCoding';
import Keyboard from './Keyboard';
import TV from './TV';
import Floor from './Floor';
import OfficeEquipment from './OfficeEquipment';
import Walls from './Walls';

export function CodingRoom(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF(
		'models/updatedCoding-3.glb'
	);
	const { actions } = useAnimations(animations, group);
	const { video } = props;
	return (
		<group
			ref={group}
			{...props}
			dispose={null}
			rotation={[0, -0.15, 0]}
			position={[0, -1, 0]}
		>
			<group name='Scene'>
				<CarlCoding nodes={nodes} materials={materials} actions={actions} />
				<Keyboard nodes={nodes} materials={materials} />
				<OfficeEquipment nodes={nodes} materials={materials} />
				<TV nodes={nodes} materials={materials} video={video} />
				<Floor nodes={nodes} materials={materials} />
				<Walls nodes={nodes} materials={materials} />
			</group>
		</group>
	);
}

useGLTF.preload('models/updatedCoding-3.glb');
