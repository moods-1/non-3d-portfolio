import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
	const [message, setMessage] = useState({});
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;
		setForm((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		const messageHandler = (text, color) => {
			setMessage({ text, color });
			setTimeout(() => {
				setMessage({});
			}, 4000);
		};

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				e.target,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					messageHandler('Email sent successfully!', 'bg-green-500');
					setForm({
						name: '',
						email: '',
						message: '',
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);
					messageHandler(
						'Ahh, something went wrong. Please try again.',
						'bg-red-500'
					);
				}
			);
	};

	return (
		<div
			id='Contact'
			className='xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden intersector relative'
		>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black p-8 rounded-md border border-slate-900'
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Name</span>
						<input
							type='text'
							name='name'
							// required
							// minLength={3}
							// maxLength={30}
							value={form.name}
							onChange={handleChange}
							placeholder='Enter your name'
							className='py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your email</span>
						<input
							type='email'
							name='email'
							// required
							value={form.email}
							onChange={handleChange}
							placeholder='Enter your email'
							pattern='^\w+([\.-]?\w+)*@[a-z]+\.[a-z]{2,3}'
							title='Please enter a valid email e.g. your@email.xxx'
							className='py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Message</span>
						<textarea
							rows={7}
							name='message'
							// required
							// minLength={10}
							// maxLength={200}
							value={form.message}
							onChange={handleChange}
							placeholder="Let's talk ..."
							className='py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>
					{message.text ? (
						<div className={`${message.color} rounded-md p-3`}>
							<span>{message.text}</span>
						</div>
					) : (
						<button
							className='bg-purple py-2 px-8 disabled:bg-light-purple rounded-md outline-none w-fit text-white  shadow-md shadow-primary min-w-[140px]'
							disabled={loading}
						>
							{loading ? 'Sending...' : 'Send'}
						</button>
					)}
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
