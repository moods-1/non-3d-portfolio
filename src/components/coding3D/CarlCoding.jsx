import React,{useEffect} from 'react'

export default function CarlCoding({ nodes, materials, actions }) {
     useEffect(() => {
          actions['Armature|mixamo.com|Layer0'].play();
        }, [actions]);
  return (
    <group name="Armature" rotation={[0, 1.571, 0]}>
          <primitive object={nodes.Hips} />
          <skinnedMesh name="avaturn_body" geometry={nodes.avaturn_body.geometry} material={materials['avaturn_body_material.001']} skeleton={nodes.avaturn_body.skeleton} />
          <skinnedMesh name="avaturn_look_0" geometry={nodes.avaturn_look_0.geometry} material={materials['avaturn_look_0_material.001']} skeleton={nodes.avaturn_look_0.skeleton} />
          <skinnedMesh name="avaturn_shoes_0" geometry={nodes.avaturn_shoes_0.geometry} material={materials['avaturn_shoes_0_material.001']} skeleton={nodes.avaturn_shoes_0.skeleton} />
        </group>
  )
}
