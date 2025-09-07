import React from 'react';

export function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' {...props}>
			<path
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M5 12h14M13 5l7 7-7 7'
			/>
		</svg>
	);
}
