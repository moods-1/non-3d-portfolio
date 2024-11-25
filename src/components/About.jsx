import React from 'react';

import { Skills } from './';
import SectionHeader from './SectionHeader';
import SkillsCanvas from './SkillsCanvas';

const About = () => {
	return (
		<main id='about' className='intersector'>
			<section className='relative'>
				<SectionHeader subText='Introduction' headText='Overview.' />
				<p className='mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]'>
					I'm a skilled software developer with experience in TypeScript and
					JavaScript, and expertise in frameworks like React, Node.js, and
					Three.js. I'm a quick learner and can collaborate closely with clients to
					create efficient, scalable, and user-friendly solutions that solve
					real-world problems. Let's work together to bring your ideas to life!
				</p>
				<a
					href='https://drive.google.com/file/d/1FMweVOQXkXZz1nYsNLvtqCW3XjGoBvT7/view?usp=sharing'
					rel='noopener noreferrer'
					target='_blank'
					className='action-button'
				>
					<span>CV/Resume</span>
				</a>
				<div className='relative w-full h-[40vh] sm:h-[75vh] pointer-events-none'>
					<SkillsCanvas />
				</div>
				<Skills />
			</section>
		</main>
	);
};

export default About;
