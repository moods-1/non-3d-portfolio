import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
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
			iconStyle={{ background: 'black' }}
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
				<h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
				<p
					className='text-gray-300 text-[16px] font-semibold'
					style={{ margin: 0 }}
				>
					{experience.company_name}
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
	return (
		<div className='intersector'>
			<SectionHeader
				subText='What I have done so far'
				headText='Work Experience.'
			/>
			<div className='mt-20 flex flex-col'>
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default SectionWrapper(Experience, 'experience');
