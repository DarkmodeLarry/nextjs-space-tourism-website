import Layout from '../components/Layout';
import '@/styles/globals.css';
import { Bellefair, Barlow, Barlow_Condensed } from '@next/font/google';
import Head from 'next/head';

const bellefair = Bellefair({
	weight: '400',
	subsets: ['latin'],
	variable: '--belle',
});

const barlow = Barlow({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--barlow',
});

const barlowcondensed = Barlow_Condensed({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--barlowcondensed',
});

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<meta charset='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='./assets/favicon-32x32.png'
				/>
				<title>Frontend Mentor | Space tourism website</title>
			</Head>

			<main
				className={`${bellefair.variable} belle, ${barlow.variable} barlow,  ${barlowcondensed.variable} barlowcondensed`}
			>
				<Layout>
					<Component {...pageProps} />;
				</Layout>
			</main>
		</Layout>
	);
}
