import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { services } from '../constants';
import { fadeIn } from '../utils/motion';
import { Skills } from './';
import SectionHeader from './SectionHeader';


const ServiceCard = ({ index, title, icon }) => (
	<motion.div
		variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
		className='p-[1px] shadow-card select-none'
	>
		<Tilt
			className='xs:w-[250px] w-full border border-slate-700 rounded-lg'
			options={{
				max: 35,
				scale: 1,
				speed: 2000,
			}}
		>
			<div className='xs:w-[250px] w-full border border-slate-700 rounded-lg'>
				<div className='bg-black rounded-lg py-5 px-12 min-h-[280px] max-w-[250px] flex justify-evenly items-center flex-col'>
					<img
						src={icon}
						alt='web-development'
						className='w-16 h-16 object-contain'
					/>

					<h3 className='text-white text-[20px] font-bold text-center'>
						{title}
					</h3>
				</div>
			</div>
		</Tilt>
	</motion.div>
);

const About = () => {
	return (
		<main id='about' className='intersector'>
			<section>
				<SectionHeader subText='Introduction' headText='Overview.' />
				<p className='mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]'>
					I'm a skilled software developer with experience in TypeScript and
					JavaScript, and expertise in frameworks like React, Node.js, and
					Three.js. I'm a quick learner and collaborate closely with clients to
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
				<div className='mt-20 flex flex-wrap gap-10 justify-center xs:justify-start'>
					{services.map((service, index) => (
						<ServiceCard key={service.title} index={index} {...service} />
					))}
				</div>
				<Skills />
			</section>
		</main>
	);
};

export default About;
