import { useRef } from 'react';

// import { Mixpanel } from './components/Mixpanel';
import {
	About,
	Contact,
	Experience,
	Testimonials,
	Hero,
	Navbar,
	Projects,
} from './components';

const App = () => {
	const elementsRef = useRef([]);
	const elements = [
		<div id='Hero' className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
			<Hero />
		</div>,
		<About />,
		<Experience />,
		<Projects />,
		<Testimonials />,
		<div className='relative z-0'>
			<Contact />
		</div>,
	];

	// Mixpanel.track('Portfolio app accessed.', {
	// 	action: 'Portfolio app accessed.',
	// });

	return (
		<div className='relative z-0 black-gradient-v'>
			<Navbar elementsRef={elementsRef} />
			{elements.map((element, index) => (
				<div key={index} ref={(el) => (elementsRef.current[index] = el)}>
					{element}
				</div>
			))}
		</div>
	);
};

export default App;
