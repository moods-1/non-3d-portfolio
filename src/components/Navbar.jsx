import React, { useEffect, useState } from 'react';

import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import ClickOutsideHandler from './ClickOutsideHandler';

const Navbar = ({ elementsRef }) => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleLink = (title, idx) => {
		setActive(title);
		setSelectedIndex(idx);
	};

	useEffect(() => {
		// For custom intersection observer for active link setting
		const elTops = [];
		elementsRef?.current?.forEach((el) => elTops.push(el.offsetTop));
		elTops[elTops.length] = elTops[elTops.length - 1] + 300;
		// Custom block ends

		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 30) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}

			// Custom intersection observer for active link setting. Could not get
			// get IntersectionObserver to work for this purpose.
			elementsRef?.current?.forEach((el, idx) => {
				if (scrollTop > el.offsetTop - 500 && scrollTop < elTops[idx + 1]) {
					if (idx in navLinks) {
						setActive(navLinks[idx].title);
					} else setActive('');
				}
			});
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [elementsRef]);

	useEffect(() => {
		elementsRef?.current[selectedIndex].scrollIntoView();
	}, [selectedIndex, elementsRef]);

	return (
		<nav
			className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20  select-none ${
				scrolled ? 'bg-[rgba(0,0,0,0.9)]' : 'bg-transparent'
			}`}
		>
			<div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
				<li
					className='flex items-center gap-2'
					onClick={() => {
						setActive('');
						setSelectedIndex(0);
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt='logo' className='w-9 h-9 object-contain' />
					<p className='text-white text-[16px] font-bold cursor-pointer flex '>
						Carl Moodie
					</p>
				</li>

				<ul className='list-none hidden md:flex flex-row gap-4'>
					{Object.values(navLinks).map((nav) => (
						<li
							key={nav.id}
							className={`${
								active === nav.title ? 'text-purple' : 'text-white'
							} hover:text-purple text-[14px] font-medium cursor-pointer`}
							onClick={() => handleLink(nav.title, nav.index)}
						>
							{nav.title}
						</li>
					))}
				</ul>
				<ClickOutsideHandler
					outsideFunction={() => setToggle(false)}
					className='md:hidden'
				>
					<div className='md:hidden relative flex flex-1 justify-end items-center'>
						<img
							src={toggle ? close : menu}
							alt='menu'
							className='w-[28px] h-[28px] object-contain'
							onClick={() => setToggle(!toggle)}
						/>

						<div
							className={`${
								!toggle ? 'hidden' : 'flex'
							} p-6 bg-purple absolute top-10 right-[-20px] mx-4 min-w-[140px] z-10 rounded-md`}
						>
							<ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
								{Object.values(navLinks).map((nav) => (
									<li
										key={nav.id}
										className={`font-poppins font-medium cursor-pointer text-[16px] ${
											active === nav.title ? 'text-[#000000]' : 'text-white'
										}`}
										onClick={() => {
											setToggle(!toggle);
											handleLink(nav.title, nav.index);
										}}
									>
										{nav.title}
									</li>
								))}
							</ul>
						</div>
					</div>
				</ClickOutsideHandler>
			</div>
		</nav>
	);
};

export default Navbar;
