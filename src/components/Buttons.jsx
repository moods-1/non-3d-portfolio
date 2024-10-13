const SlideIn = ({
	buttonText,
	buttonFunction,
	buttonClass,
	pseudoClass,
	slideSpeed,
	value,
}) => {
	const duration = slideSpeed ? `${slideSpeed}ms` : '500ms';
	return (
		<button
			className={`group relative overflow-hidden cursor-pointer border py-2 px-4 min-h-9 min-w-36 w-full flex items-center justify-center ${
				buttonClass || ''
			}`}
			onClick={buttonFunction ? buttonFunction : undefined}
			value={value}
		>
			<div
				style={{ transitionDuration: duration }}
				className={`absolute bottom-0 w-0 group-hover:w-1/2 min-h-1 left-0 transition-all ${
					pseudoClass || ''
				}`}
			/>
			<div
				style={{ transitionDuration: duration }}
				className={`absolute bottom-0 w-0 group-hover:w-1/2 min-h-1 right-0 transition-all ${
					pseudoClass || ''
				}`}
			/>
			<span
				style={{ transitionDuration: duration }}
				className='relative z-10 group-hover:text-white transition-all'
			>
				{buttonText}
			</span>
		</button>
	);
};

const SlideAcross = ({
	buttonText,
	buttonFunction,
	beforeClass,
	beforeImg,
	slideSpeed,
	buttonClass,
	value,
	disabled,
}) => {
	const duration = slideSpeed ? `${slideSpeed}ms` : '1000ms';
	return (
		<button
			className={`group relative overflow-hidden cursor-pointer border text-black px-4 py-1 min-h-9 min-w-36 flex items-center justify-center ${
				buttonClass || ''
			} ${disabled ? 'bg-opacity-60' : ''}`}
			onClick={buttonFunction ? buttonFunction : undefined}
			value={value}
			disabled={disabled}
		>
			{disabled ? null : (
				<div
					className={`absolute flex top-0 w-[150%] h-full right-[105%] group-hover:-right-[50%] group-hover:translate-x-0 transition-all ${
						beforeClass || ''
					}`}
					style={{ transitionDuration: duration }}
				>
					<div className='absolute flex h-full w-[55px] -right-1 -scale-x-100 group-hover:scale-x-100'>
						{beforeImg ? (
							<img alt='before' height='100%' src={beforeImg} />
						) : null}
					</div>
				</div>
			)}
			<span
				className={`relative z-10 transition-all ${
					disabled ? 'opacity-50' : ''
				}`}
				style={{ transitionDuration: duration }}
			>
				{buttonText}
			</span>
		</button>
	);
};

const RevealSlideOut = ({
	buttonText,
	buttonFunction,
	buttonClass,
	pseudoClass,
	slideSpeed,
	value,
	leftContent,
	rightContent,
	children,
}) => {
	const duration = slideSpeed ? `${slideSpeed}ms` : '500ms';
	return (
		<button
			className={`group relative overflow-hidden cursor-pointer border py-2 px-4 min-h-9 min-w-36 w-full flex items-center justify-center ${
				buttonClass || ''
			}`}
			onClick={buttonFunction ? buttonFunction : undefined}
			value={value}
		>
			<div
				style={{ transitionDuration: duration }}
				className={`overflow-hidden absolute bottom-0 w-1/2 group-hover:w-0 min-h-1 left-0 transition-all duration-1000 z-20 flex items-center justify-end ${
					pseudoClass || ''
				}`}
			>
				{leftContent || ''}
			</div>
			<div
				style={{ transitionDuration: duration }}
				className={`overflow-hidden absolute bottom-0 w-1/2 group-hover:w-0 min-h-1 right-0 transition-all duration-1000 z-20 flex items-center justify-start ${
					pseudoClass || ''
				}`}
			>
				{rightContent || ''}
			</div>

			{children}
		</button>
	);
};

export { SlideIn, SlideAcross, RevealSlideOut };
