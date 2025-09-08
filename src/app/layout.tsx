import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://alexhacks.net'),
	title: {
		default: 'Alex Perreira - Cybersecurity | Web apps',
		template: '%s - Alex Perreira',
	},
	description: 'AppSec + SWE portfolio: case studies, write-ups, and contact.',
	openGraph: {
		title: 'Alex Perreira - I build and secure web apps',
		description: 'AppSec + SWE portfolio: case studies, write-ups, contact.',
		url: 'https://alexhacks.net',
		siteName: 'Alex Perreira',
		locale: 'en_US',
		type: 'website',
	},
	icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark'>
			<body
				className={`${inter.className} min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-200 antialiased`}
			>
				<Navbar />
				<main className='flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
