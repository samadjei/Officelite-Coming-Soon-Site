import Image from 'next/image';
import { Button } from '../components/button';

const Homepage = () => {
	return (
		<main className="main">
			<div className="hero container">
				<div className="hero__content">
					<h1 className="hero--title">A simple solution to complex tasks is coming soon </h1>
					<p className="hero--para">Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.</p>
					<Button className="btn hero--btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
						Get Started
					</Button>
				</div>
				<div className="hero__image">
					<Image src="/assets/home/illustration-charts.svg" height={531} width={475} alt="Illustration Chart" />
				</div>
			</div>
		</main>
	);
};

export default Homepage;
