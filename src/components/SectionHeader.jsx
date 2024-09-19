import React from 'react';

export default function SectionHeader({ subText, headText }) {
	return (
		<div>
			<p className='section-sub-text'>{subText}</p>
			<h3 className='section-head-text'>{headText}</h3>
		</div>
	);
}
