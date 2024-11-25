import React, { useState, useEffect } from 'react';

import { Skills } from './';
import { Rotate } from '../assets';
import SectionHeader from './SectionHeader';
import SkillsCanvas from './SkillsCanvas';

const About = () => {
	const [show360, setShow360] = useState(window.innerWidth > 768);

	useEffect(() => {
		const handleResize = () => {
			const wWidth = window.innerWidth;
			if(wWidth < 900) setShow360(false)
		}
		window.addEventListener('resize', handleResize)
		return ()=> window.removeEventListener('resize', handleResize)
	}, []);

	return (
		<main id='about' className='intersector'>
			<section className='relative'>
				<SectionHeader subText='Introduction' headText='Overview.' />
				<p className='mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]'>
					I'm a skilled software developer with experience in TypeScript and
					JavaScript, and expertise in frameworks like React, Node.js, and
					Three.js. I'm a quick learner and can collaborate closely with clients
					to create efficient, scalable, and user-friendly solutions that solve
					real-world problems. Let's work together to bring your ideas to life!
				</p>
				<a
					href='https://drive.google.com/file/d/1FMweVOQXkXZz1nYsNLvtqCW3XjGoBvT7/view?usp=sharing'
					rel='noopener noreferrer'
					target='_blank'
					className='action-button mr-4'
				>
					<span>CV/Resume</span>
				</a>
				<a
					href='https://carl-data-analyst.web.app'
					rel='noopener noreferrer'
					target='_blank'
					className='action-button'
				>
					<span>Data Analytics</span>
				</a>
				<div className='w-full flex justify-center '>
					{show360 && (
						<img
							className='animate-purple-pulse rounded-full p-1'
							src={Rotate}
							alt='Rotate'
							width={60}
							height={60}
						/>
					)}
				</div>
				<div
					className='relative w-full h-[60vh] sm:h-[75vh] pointer-events-none'
					onMouseDown={() => setShow360(false)}
				>
					<SkillsCanvas />
				</div>
				<Skills />
			</section>
		</main>
	);
};

export default About;
