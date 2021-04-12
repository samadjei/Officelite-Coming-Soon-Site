import Hero from '../components/home/homeHero';
import Plans from '../components/home/homePlans';
import CountDown from '../components/home/homeCountDown';

export default function Homepage() {
	return (
		<main className="main bg">
			<Hero />
			<Plans />
			<CountDown />
		</main>
	);
}
