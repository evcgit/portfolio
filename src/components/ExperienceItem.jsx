import React from 'react';
import clsx from 'clsx';

const ExperienceItem = ({
	title,
	company,
	date,
	onClick,
	selected,
	isMobile,
}) => {
	return (
		<div
			className={clsx(
				'cursor-pointer mb-2 p-4 transition-colors duration-300 rounded',
				selected && !isMobile
					? 'text-white border-l-4 md:border-l-4 rounded border-accent'
					: 'text-text'
			)}
			onClick={onClick}
		>
			<h3
				className={clsx('text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8', {
					'text-white': selected || isMobile,
					'text-slate-600': !selected && !isMobile,
				})}
			>
				{title}
			</h3>
			<p
				className={clsx(
					'text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8',
					{
						'text-white': selected || isMobile,
						'text-slate-600': !selected && !isMobile,
					}
				)}
			>
				{company} | {date}
			</p>
		</div>
	);
};

export default ExperienceItem;
