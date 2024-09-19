import { CarlPc, Geo3D } from '../assets';

const Hero = () => {
	return (
		<div className='pt-20 bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen relative w-full max-w-[1920px] mx-auto'>
			<div className='max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5'>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-purple' />
					<div className='w-1 sm:h-80 h-40 violet-gradient' />
				</div>
				<div>
					<p className='hero-head-text'>
						Hi, I'm <span className='text-purple'>Carl</span>
					</p>
					<p className='hero-sub-text'>
						I develop full-stack web applications{' '}
						<br className='sm:block hidden' /> that generate memorable UI/UX
						experiences.
					</p>
				</div>
			</div>
			<div className='absolute top-20 right-10 hidden xl:block'>
				<a href=' https://carl-3d-portfolio.web.app' rel='noopener noreferrer'>
					<button className='bg-purple w-[180px] flex justify-center items-center py-1 rounded-md animate-pulse'>
						<div
							className='w-[20px] h-[20px] mr-2 bg-contain'
							style={{ backgroundImage: `url(${Geo3D})` }}
						/>
						3D Site *
					</button>
				</a>
				<p className='text-[12px] mt-1'>* Recommended for desktops</p>
			</div>
			<img
				src={CarlPc}
				alt='carl-pc'
				className='w-[95%] md:w-[60%] absolute top-[50%] xs:top-[50%] left-[5%] md:left-[25%]'
			/>
		</div>
	);
};

export default Hero;
