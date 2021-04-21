import Navbar from './navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Frontend Mentor | Officelite coming soon site</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png"></link>
				<link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<div>
				<Navbar />
				{children}
			</div>
		</>
	);
};

export default Layout;
