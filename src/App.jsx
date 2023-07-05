import { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Projects,
	StarsCanvas,
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
		<div className='relative z-0'>
			<Contact />
			<StarsCanvas />
		</div>,
	];

	return (
		<BrowserRouter>
			<div className='relative z-0 black-gradient-v'>
				<Navbar elementsRef={elementsRef} />
				{elements.map((element, index) => (
					<div key={index} ref={(el) => (elementsRef.current[index] = el)}>
						{element}
					</div>
				))}
			</div>
		</BrowserRouter>
	);
};

export default App;
