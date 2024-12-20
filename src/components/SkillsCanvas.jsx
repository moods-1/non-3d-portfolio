import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, useProgress } from '@react-three/drei';

import { PortfolioCube } from './PortfolioCube';
import { CodingRoom } from './CodingRoom';

export default function SkillsCanvas() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	const Loader = () => {
		const { progress } = useProgress();
		return (
			<Html center>
				<div className='min-w-[140px] text-purple text-center text-md'>
					<div className='w-full h-2 rounded-full overflow-hidden border'>
						<div
							className='h-full bg-purple'
							style={{ width: `${progress}%` }}
						/>
					</div>
					{progress.toFixed(1)}%
				</div>
			</Html>
		);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<Canvas
			gl={{ antialias: true }}
			dpr={[1, 1.15]}
			camera={{
				fov: 55,
				position: [0, 15, 0],
			}}
			className='relative h-svh'
		>
			<ambientLight intensity={2} position={[0, 5, 1]} />
			<directionalLight intensity={1} position={[0, 5, 1]} />
			<pointLight intensity={1} position={[0, 2, 1]} />
			<hemisphereLight intensity={1} position={[1, 2, 1]} />
			<Suspense fallback={<Loader />}>
				{isMobile ? <PortfolioCube /> : <CodingRoom />}
			</Suspense>
		</Canvas>
	);
}
