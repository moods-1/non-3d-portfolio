import { useRef } from 'react';

import { Mixpanel } from './components/Mixpanel';
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
		<Hero />,
		<About />,
		<Experience />,
		<Projects />,
		<Testimonials />,
		<Contact />,
	];

	Mixpanel.track('Portfolio app accessed.', {
		action: 'Portfolio app accessed.',
	});

	return (
		<div className='relative z-0 black-gradient-v overflow-hidden'>
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
