import { Carl } from '../assets';
import { RevealSlideOut } from './Buttons';

const Hero = () => {
	return (
		<main className='flex items-center pt-20 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
			<section className='flex justify-center flex-col sm:flex-row gap-10 flex-wrap relative'>
				<div className='flex flex-1 items-center justify-end'>
					<div className='w-full max-w-lg'>
						<p className='hero-head-text'>
							Hi, I'm <span className='text-purple'>Carl</span>
						</p>
						<p className='hero-sub-text'>
							I develop full stack applications that generate memorable UI/UX
							experiences.
						</p>
						<RevealSlideOut
							buttonText='Spread Out Plus'
							buttonClass='bg-black max-w-[160px] h-9 rounded-md !border-purple mt-8'
							pseudoClass='bg-purple max-w-[160px] h-full whitespace-nowrap group-hover:text-purple z-10'
							leftContent='Abou'
							rightContent='t Me'
						>
							<a href='#about' className='z-0'>
								Let's Go!
							</a>
						</RevealSlideOut>
					</div>
				</div>
				<div className='flex-1 flex justify-center items-center'>
					<div className='rounded-full flex justify-center w-auto h-auto p-2  overflow-hidden bg-gradient-to-br from-purple to-gray-800'>
						<div className='overflow-hidden flex items-center justify-center w-full bg-black bg-opacity-70 rounded-full'>
							<img src={Carl} alt='carl' className='w-[100%] max-w-[288px]' />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Hero;
