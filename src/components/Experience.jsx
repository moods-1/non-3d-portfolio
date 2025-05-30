import React, { useState } from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

import { experiences } from '../constants';
import SectionHeader from './SectionHeader';

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#080808',
				color: '#fff',
				border: '1px solid #ddd',
			}}
			contentArrowStyle={{ borderRight: '7px solid  #ddd' }}
			date={experience.date}
			iconStyle={{ background: `${experience.iconBg}` }}
			icon={
				<div className='flex justify-center items-center w-full h-full'>
					<img
						src={experience.icon}
						alt={experience.company_name}
						className='w-[60%] h-[60%] object-contain'
					/>
				</div>
			}
		>
			<div>
				<h3 className='text-white text-[20px] sm:text-[24px] font-bold'>
					{experience.title}
				</h3>
				<h3
					className={`${experience.companyNameColor} text-[15px] sm:text-[18px] font-semibold`}
					style={{ margin: 0 }}
				>
					{experience.companyName}
				</h3>
				<p
					className='text-gray-300 text-[16px] font-semibold'
					style={{ margin: 0 }}
				>
					{experience.companyLocation}
				</p>
				<p
					className='text-gray-300 text-[16px] font-semibold'
					style={{ margin: 0 }}
				>
					{experience.workType}
				</p>
			</div>

			<ul className='mt-5 list-disc ml-5 space-y-2'>
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className='text-white-100 text-[14px] pl-1 tracking-wider'
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	const [inView, setInView] = useState(false);
	return (
		<main id='experience' className='intersector'>
			<section>
				<SectionHeader
					subText='What I have done so far'
					headText='Work Experience.'
				/>
				<motion.div
					whileInView={() => {
						setTimeout(() => setInView(true), 400);
					}}
					className='mt-10 flex flex-col'
				>
					{inView && (
						<VerticalTimeline>
							{experiences.map((experience, index) => (
								<ExperienceCard
									key={`experience-${index}`}
									experience={experience}
								/>
							))}
						</VerticalTimeline>
					)}
				</motion.div>
			</section>
		</main>
	);
};

export default Experience;
