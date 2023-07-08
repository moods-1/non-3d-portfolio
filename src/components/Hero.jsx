import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { CarlPc } from '../assets';

const Hero = () => {
	return (
		<section className={`relative w-full h-screen mx-auto`}>
			<div
				className={`top-[70px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
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
				</div>
			</div>
			<div className='absolute top-0 right-0 hidden xl:block'>
				<a href=' https://carl-3d-portfolio.web.app' rel='noopener noreferrer'>
					<button className='bg-purple w-[180px] py-1 rounded-md animate-pulse'>
						3D Site *
					</button>
				</a>
				<p className='text-[12px] mt-1'>* Recommended for desktops</p>
			</div>
			<img
				src={CarlPc}
				alt='carl-pc'
				className='w-[100%] sm:w-[80%] absolute top-[50%] xs:top-[40%] left-[0%] sm:left-[10%]'
			/>
		</section>
	);
};

export default SectionWrapper(Hero, 'hero');
