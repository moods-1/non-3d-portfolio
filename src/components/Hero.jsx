import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { Rotate360 } from '../assets';

const image360Variants = {
	visible: {
		opacity: [0, 0.5, 1, 0.5, 0],
		transition: { duration: 2, repeat: Infinity },
	},
};
const Hero = () => {
	return (
		<section className={`relative w-full h-screen mx-auto`}>
			<div
				className={`absolute inset-0 top-[70px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-purple' />
					<div className='w-1 sm:h-80 h-40 violet-gradient' />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className='text-purple'>Carl</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I develop full-stack web applications{' '}
						<br className='sm:block hidden' /> that generate memorable UI/UX
						experiences.
					</p>
					<motion.div
						variants={image360Variants}
						animate='visible'
						className='text-center w-full my-5'
					>
						<img
							src={Rotate360}
							alt='rotate-360'
							className='w-12 h-12 mx-auto'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default SectionWrapper(Hero, 'hero');
