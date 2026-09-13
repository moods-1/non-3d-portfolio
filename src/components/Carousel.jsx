'use client';

import { useState, useRef, useEffect, useCallback, Children } from 'react';
import { cn } from '../utils/cn';

/** Shortest signed distance from `index` to `i` around a circular track of `count` items. */
function circularDiff(i, index, count) {
	let diff = i - index;
	if (diff > count / 2) diff -= count;
	if (diff < -count / 2) diff += count;
	return diff;
}

export function Carousel({
	children,
	initialIndex = 0,
	itemWidth = '18rem',
	itemHeight = '18rem',
	spacing = '7rem',
	scaleStep = 0.12,
	opacityStep = 1,
	minOpacity = 1,
	maxDepth = 2,
	loop = true,
	showArrows = true,
	clickToNavigate = true,
	autoPlay = false,
	autoPlayInterval = 3000,
	pauseOnHover = true,
	onIndexChange,
	onActiveItemChange,
	className = '',
}) {
	const slides = Children.toArray(children);
	const count = slides.length;

	const [index, setIndex] = useState(
		Math.min(Math.max(initialIndex, 0), Math.max(count - 1, 0)),
	);
	const [isHovering, setIsHovering] = useState(false);

	const touchStartX = useRef(null);
	const intervalRef = useRef(null);

	const goTo = useCallback(
		(next) => {
			if (count === 0) return;
			let target = next;
			if (loop) {
				target = ((next % count) + count) % count;
			} else {
				target = Math.min(Math.max(next, 0), count - 1);
			}
			setIndex(target);
			onIndexChange?.(target);
		},
		[count, loop, onIndexChange],
	);

	const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
	const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

	const handleKeyDown = (e) => {
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			goPrev();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			goNext();
		}
	};

	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = (e) => {
		if (touchStartX.current === null) return;
		const delta = e.changedTouches[0].clientX - touchStartX.current;
		const threshold = 40;
		if (delta > threshold) goPrev();
		else if (delta < -threshold) goNext();
		touchStartX.current = null;
	};

	const activeItem = count > 0 ? slides[index] : null;

	useEffect(() => {
		if (count === 0) return;
		onActiveItemChange?.({ index, item: activeItem });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index, count, activeItem]);

	// Autoplay: advances on an interval, paused while hovering (if enabled)
	// or once a non-looping carousel reaches its last slide.
	useEffect(() => {
		if (!autoPlay || count <= 1) return undefined;
		if (pauseOnHover && isHovering) return undefined;
		if (!loop && index === count - 1) return undefined;

		intervalRef.current = setInterval(() => {
			setIndex((prev) => {
				const next = loop ? (prev + 1) % count : Math.min(prev + 1, count - 1);
				onIndexChange?.(next);
				return next;
			});
		}, autoPlayInterval);

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [
		autoPlay,
		autoPlayInterval,
		pauseOnHover,
		isHovering,
		loop,
		count,
		index,
		onIndexChange,
	]);

	if (count === 0) return null;

	const atStart = !loop && index === 0;
	const atEnd = !loop && index === count - 1;

	const buttonClass = cn(
		'flex h-10 w-10 items-center justify-center',
		'rounded-full border border-gray-200 bg-white text-gray-700',
		'shadow-md transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40',
	);
	return (
		<div
			className={`relative w-full outline-none ${className}`}
			role='region'
			aria-roledescription='carousel'
			aria-label='Carousel'
			tabIndex={0}
			onKeyDown={handleKeyDown}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			onMouseEnter={() => pauseOnHover && setIsHovering(true)}
			onMouseLeave={() => pauseOnHover && setIsHovering(false)}
		>
			<div
				className='relative w-full perspective-[1000px]'
				style={{ height: `calc(${itemHeight} + 2rem)` }}
			>
				{slides.map((slide, i) => {
					const diff = loop ? circularDiff(i, index, count) : i - index;
					const depth = Math.abs(diff);
					const isActive = diff === 0;

					if (depth > maxDepth) return null;

					const scale = Math.max(1 - depth * scaleStep, 0.4);
					const opacity = Math.max(1 - depth * opacityStep, minOpacity);
					const sign = diff === 0 ? 0 : diff > 0 ? 1 : -1;

					return (
						<div
							key={i}
							aria-hidden={!isActive}
							aria-roledescription='slide'
							aria-label={`Slide ${i + 1} of ${count}`}
							onClick={() => clickToNavigate && !isActive && goTo(i)}
							className={cn(
								'absolute left-1/2 top-1/2 overflow-hidden',
								'transition-[transform,opacity] duration-500 ease-out',
								'will-change-transform',
							)}
							style={{
								width: itemWidth,
								height: itemHeight,
								zIndex: count - depth,
								opacity,
								cursor: clickToNavigate && !isActive ? 'pointer' : 'default',
								transform: `translate(-50%, -50%) translateX(calc(${sign} * ${spacing} * ${depth})) scale(${scale}) translateZ(0)`,
								boxShadow: isActive
									? '0 20px 40px -10px rgba(0,0,0,0.35)'
									: '0 10px 25px -8px rgba(0,0,0,0.25)',
							}}
						>
							{slide}
						</div>
					);
				})}
			</div>
			{showArrows && (
				<div className='relative z-10 mt-4 w-full flex justify-center gap-x-5'>
					<button
						type='button'
						onClick={goPrev}
						disabled={atStart}
						aria-label='Previous slide'
						className={cn('', buttonClass)}
					>
						←
					</button>
					<button
						type='button'
						onClick={goNext}
						disabled={atEnd}
						aria-label='Next slide'
						className={cn('', buttonClass)}
					>
						→
					</button>
				</div>
			)}
		</div>
	);
}

export default Carousel;
