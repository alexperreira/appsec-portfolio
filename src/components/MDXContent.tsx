'use client';

import React, { useEffect } from 'react';

export function MDXContent({
	source,
	components,
}: {
	source: React.ReactNode;
	components: Record<string, React.ComponentType<any>>;
}) {
	useEffect(() => {
		// enable heading anchors smooth scroll etc.
	}, []);

	return <div className='prose dark:prose-invert max-w-none'>{source}</div>;
}
