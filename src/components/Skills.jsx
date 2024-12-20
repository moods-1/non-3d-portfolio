import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { skills } from '../constants';

const Skills = () => {
	const [isInView, setIsInview] = useState(false);

	return (
		<motion.div
			className='flex justify-center xs:justify-start flex-wrap text-white mt-[80px]'
			whileInView={() => {
				setIsInview(true);
				return {};
			}}
		>
			{skills.map(({ img, skill, color, level }, index) => (
				<motion.div
					initial={{ translateX: 3000 }}
					animate={isInView && {
						translateX: 0,
						transition: {
							type: 'left',
							delay: index * .1,
							duration: 1.5,
							ease: "easeOut",
						},
					}}
					key={index}
					className='relative h-[140px] w-[100px] m-[10px] skills-div'
					// variants={slideIn('left', 'tween', index, 2)}
				>
					<div
						className='w-[80px] h-[80px] mx-auto mt-0 mb-[5px] shadow-skill animate-pulse rounded-full cursor-pointer grid place-items-center '
						style={{ background: color }}
					>
						<img src={img} alt={`skill-${index}`} width='70%' />
					</div>
					<div className='skills-skill'>
						<p className='text-center'>{skill}</p>
						{/* <div className='skill-level'>
							<div
								className='skill-progress'
								style={{ background: color, width: level }}
							>
								<p className='skill-percentage'>{level}</p>
							</div>
						</div> */}
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};

export default Skills;
