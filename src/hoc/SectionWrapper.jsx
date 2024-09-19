import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
	function HOC() {
		return (
			<motion.div
				variants={staggerContainer()}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.25 }}
				className='section-padding max-w-7xl mx-auto relative z-0 min-h-screen'
				id={idName}
			>
				<span className='hash-span'>&nbsp;</span>
				<Component />
			</motion.div>
		);
	};

export default SectionWrapper;
