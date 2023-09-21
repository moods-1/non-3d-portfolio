import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { Skills } from './';

const ServiceCard = ({ index, title, icon }) => (
	<motion.div
		variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
		className='p-[1px] shadow-card select-none'
		id='about'
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
	</motion.div>
);

const About = () => {
	return (
		<div id='About' className='intersector'>
			<div>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</div>
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
				className='bg-purple inline-block py-2 px-8 rounded-md outline-none text-white min-w-[140px] mt-8 rounded-md'
			>
				CV/Resume
			</a>
			<div className='mt-20 flex flex-wrap gap-10 justify-center xs:justify-start'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
			<Skills />
		</div>
	);
};

export default SectionWrapper(About, 'about');
