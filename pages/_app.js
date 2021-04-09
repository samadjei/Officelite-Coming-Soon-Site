import '../scss/global.scss';
import Layout from './components/layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			{/* children of the layout component */}
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
