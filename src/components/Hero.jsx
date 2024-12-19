import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import CanvasLoader from './Loader';
import Hero3D from './Hero3D';
import { RevealSlideOut } from './Buttons';
import Hand from '../assets/hand.png';

const Swipe = () => {
	return (
		<div className='absolute top-36 w-full flex justify-center opacity-0 animate-fade-in'>
			<img
				src={Hand}
				alt='hand'
				width={40}
				height={40}
				className='animate-swipe w-10 h-10'
			/>
		</div>
	);
};

const AboutMe = () => {
	return (
		<RevealSlideOut
			buttonText='Spread Out Plus'
			buttonClass='bg-black max-w-[160px] h-9 rounded-md !border-gray-700 mt-8 !absolute bottom-10 right-1/2 translate-x-1/2 z-10 opacity-0 animate-fade-in mx-auto'
			pseudoClass='bg-gray-800 max-w-[160px] h-full whitespace-nowrap z-10'
			leftContent='Abou'
			rightContent='t Me'
		>
			<a href='#about' className='z-0'>
				Let's Go!
			</a>
		</RevealSlideOut>
	);
};

const Hero = () => {
	const [loadComplete, setLoadComplete] = useState(false);
	const [canvasClicked, setCanvasClicked] = useState(false);
	const showSwipe = loadComplete && !canvasClicked;

	const handleProgress = (value) => {
		if (value >= 100) setLoadComplete(true);
	};

	return (
		<div className='h-screen w-full relative'>
			{showSwipe ? <Swipe /> : null}
			<Canvas
				shadows
				camera={{ position: [0, 0, 8], fov: 34 }}
				onMouseDown={() => setCanvasClicked(true)}
			>
				<ambientLight color={0xffffff} intensity={1.3} />
				<directionalLight
					color={0xffffff}
					intensity={1.75}
					position={[0, 1, 1]}
				/>
				<Suspense fallback={<CanvasLoader handleProgress={handleProgress} />}>
					<Hero3D />
				</Suspense>
			</Canvas>
			{loadComplete ? <AboutMe /> : null}
		</div>
	);
};

export default Hero;
