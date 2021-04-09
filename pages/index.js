import Head from 'next/head';
import Homepage from './homepage';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Homepage</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Homepage />
		</div>
	);
}
