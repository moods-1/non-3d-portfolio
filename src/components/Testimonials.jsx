import React, { useState } from 'react';

import { fadeIn } from '../utils/motion';
import { testimonials } from '../constants';
import { testimonialSetter } from '../utils/helperFunctions';
import SectionHeader from './SectionHeader';

const ProfileSetter = ({ person, profile, linkedIn }) => {
	const image = (
		<img
			src={profile}
			alt={`feedback_by-${person}`}
			className='w-10 h-10 rounded-full object-cover shadow-skill'
		/>
	);
	return (
		<>
			{linkedIn ? (
				<a
					href={linkedIn}
					target='_blank'
					rel='noreferrer'
					className='animate-pulse rounded-full'
				>
					{image}
				</a>
			) : (
				image
			)}
		</>
	);
};

const Testimonial = ({ value }) => {
	const [showLarge, setShowLarge] = useState(false);
	const [large, text] = testimonialSetter(value);
	return (
		<>
			{large && (
				<button
					onClick={() => setShowLarge(!showLarge)}
					className='absolute top-[35px] text-[22px] font-bold right-10'
				>
					{showLarge ? '-' : '+'}
				</button>
			)}
			<p className='text-white tracking-wider text-[15px] min-h-[220px] break-normal sm:text-[18px]'>
				{showLarge ? value : text}
			</p>
		</>
	);
};

const FeedbackCard = ({
	index,
	testimonial,
	name,
	designation,
	company,
	image,
	linkedIn,
}) => (
	<div
		variants={fadeIn('', 'spring', index * 0.5, 0.75)}
		className='bg-black p-7 rounded-md xs:w-[320px] w-full relative '
	>
		<p className='text-white font-black text-[48px]'>"</p>

		<div className='mt-1'>
			<Testimonial value={testimonial} />
			<div className='mt-4 flex justify-between items-center gap-4 flex-wrap'>
				<div className='flex-1 flex flex-col'>
					<p className='text-white font-medium text-[16px]'>
						<span className='blue-text-gradient'>@</span> {name}
					</p>
					<p className='mt-1 blue-text-gradient text-[15px]'>{designation}</p>
					<p className='text-gray-300 text-[15px]'>{company}</p>
				</div>
				<ProfileSetter person={name} profile={image} linkedIn={linkedIn} />
			</div>
		</div>
	</div>
);

const Testimonials = () => {
	return (
		<main id='testimonials' className='intersector'>
			<section>
				<div className='min-h-[240px]'>
					<SectionHeader subText='What others say' headText='Testimonials.' />
				</div>
				<div
					className={`-mt-20 pb-12 sm:px-12 px-5 pt-[60px] bg-neutral-900 flex flex-wrap gap-7 justify-around rounded-md`}
				>
					{testimonials.map((testimonial, index) => (
						<FeedbackCard
							key={testimonial.name}
							index={index}
							{...testimonial}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default Testimonials;
