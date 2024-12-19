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
	// Mixpanel.track('Portfolio app accessed.', {
	// 	action: 'Portfolio app accessed.',
	// });

	return (
		<div className='relative z-0 black-gradient-v overflow-hidden'>
			<Navbar />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Testimonials />
			<Contact />
		</div>
	);
};

export default App;
