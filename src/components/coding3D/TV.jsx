import React from 'react'

export default function TV({ nodes, materials, video }) {
  return (
    <group
					name='TV'
					position={[0.577, 1.634, -1.653]}
					scale={[0.848, 0.492, 0.008]}
				>
					<mesh
						name='Cube001'
						geometry={nodes.Cube001.geometry}
						material={materials.TVFrame}
					/>
					<mesh
						name='Cube001_1'
						geometry={nodes.Cube001_1.geometry}
						material={materials['CTV News']}
						scale={[1, -1, 1]}
					>
						<meshStandardMaterial map={video} />
					</mesh>
				</group>
  )
}
