import React, { useEffect, useState, useRef } from 'react';

import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import ClickOutsideHandler from './ClickOutsideHandler';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const headerBg = scrolled ? 'bg-[rgba(0,0,0,0.9)]' : 'bg-transparent';
	const mobileMenuBg = scrolled ? 'bg-[rgba(0,0,0,0.9)]' : 'bg-[#111111]';
	const anchorRefs = useRef([]);
	const mobileRefs = useRef([]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 30) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}

			const mains = document.querySelectorAll('main');
			let currentMain = '';
			mains.forEach((main) => {
				const sectionTop = main.offsetTop;
				if (window.scrollY >= sectionTop - 50) {
					currentMain = main.getAttribute('id');
				}
			});

			anchorRefs.current.forEach((link) => {
				link.classList.remove('active');
				if (link.getAttribute('href') === '#' + currentMain) {
					link.classList.add('active');
				}
			});
			mobileRefs.current.forEach((link) => {
				link.classList.remove('active');
				if (link.getAttribute('href') === '#' + currentMain) {
					link.classList.add('active');
				}
			});
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setToggle(false);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<nav
			className={`sm:px-10 px-6 w-full flex items-center py-5 fixed top-0 z-20  select-none ${headerBg}`}
		>
			<div className='w-full flex justify-between items-center max-w-[1920px] mx-auto'>
				<li
					className='flex items-center gap-2'
					onClick={() => {
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt='logo' className='w-9 h-9 object-contain' />
					<p className='text-white text-[16px] font-bold cursor-pointer flex '>
						Carl Moodie
					</p>
				</li>

				<ul className='list-none hidden md:flex flex-row gap-4'>
					{Object.values(navLinks).map(({ id, title }, idx) => (
						<li key={id} className={`text-[15px]`}>
							<a ref={(el) => (anchorRefs.current[idx] = el)} href={`#${id}`}>
								{title}
							</a>
						</li>
					))}
				</ul>
				<ClickOutsideHandler
					outsideFunction={() => setToggle(false)}
					className='md:hidden'
				>
					<div className='md:hidden w-full relative flex flex-1 justify-end items-center'>
						<img
							src={toggle ? close : menu}
							alt='menu'
							className='w-[28px] h-[28px] object-contain'
							onClick={() => setToggle(!toggle)}
						/>
						<div
							className={`${
								!toggle ? 'hidden' : 'flex'
							} p-6 absolute top-10 -right-[40px] mx-4 w-screen z-10 rounded-md ${mobileMenuBg}`}
						>
							<ul className='list-none flex justify-center items-center flex-1 flex-col gap-8'>
								{Object.values(navLinks).map(({ id, title }, idx) => (
									<li
										key={id}
										className={`font-poppins text-[16px]`}
										onClick={() => {
											setToggle((prev) => !prev);
										}}
									>
										<a
											ref={(el) => (mobileRefs.current[idx] = el)}
											href={`#${id}`}
										>
											{title}
										</a>
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
