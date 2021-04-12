import Head from 'next/head';
import Homepage from './homepage';
import SignUp from './signup';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Frontend Mentor | Officelite coming soon site</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Homepage />
			<SignUp />
		</div>
	);
}
