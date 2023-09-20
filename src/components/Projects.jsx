import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	url,
	source_code_link,
}) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 15,
					scale: 1,
					speed: 450,
				}}
				className='bg-black p-5 rounded-md sm:w-[360px] w-full select-none border border-slate-700'
			>
				<div className='relative w-full h-[230px]'>
					<a href={url} target='_blank' rel='noreferrer'>
						<img
							src={image}
							alt='project_image'
							className='w-full h-full object-cover rounded-md cursor-pointer'
						/>
					</a>

					<div className='absolute top-0 right-0 card-img_hover'>
						<div
							onClick={() => window.open(source_code_link, '_blank')}
							className='bg-blue-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
						>
							<img
								src={github}
								alt='source code'
								className='w-1/2 h-1/2 object-contain'
							/>
						</div>
					</div>
				</div>

				<div className='mt-5'>
					<h3 className='text-white font-bold text-[24px]'>{name}</h3>
					<p className='mt-2  min-h-[120px] text-gray-300 text-[14px]'>
						{description}
					</p>
				</div>

				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<div id='Projects' className='intersector'>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>My work</p>
				<h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 text-gray-500 text-[17px] max-w-3xl leading-[30px]'
				>
					Following projects showcases my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
				</motion.p>
			</div>

			<div className='mt-20 flex flex-wrap gap-7'>
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Works, '');
