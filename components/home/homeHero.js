import Image from 'next/image';
import { Button } from '../button';
import Link from 'next/link';

export default function homeHero() {
	return (
		<div className="hero container">
			<div className="hero__content">
				<h1 className="hero--title">A simple solution to complex tasks is coming soon </h1>
				<p className="hero--para">Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.</p>
				<Link href="/signup">
					<Button className="btn hero--btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
						Get Started
					</Button>
				</Link>
			</div>
			<div className="hero__image">
				<Image src="/assets/home/illustration-charts.svg" height={531} width={475} alt="Illustration Chart" />
			</div>
		</div>
	);
}
