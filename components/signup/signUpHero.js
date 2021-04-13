import React, { useEffect, useState, useRef } from 'react';

const signUpHero = () => {
	// Setting up the days
	const [timerDays, setTimerDays] = useState('00');
	const [timerHours, setTimerHours] = useState('00');
	const [timerMinutes, setTimerMinutes] = useState('00');
	const [timerSeconds, setTimerSeconds] = useState('00');

	// Interval
	let interval = useRef();

	const startTimer = () => {
		// Countdown Date
		const countdownDate = new Date('Oct 18, 2021 00:00:00').getTime();

		interval = setInterval(() => {
			// updating the timer
			const now = new Date().getTime();
			const distance = countdownDate - now;

			// Calculate Number of days
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			// Calculate Number of hours
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			// Calculate Number of minutes
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			// Calculate Number of seconds
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// update the timer
			if (distance < 0) {
				// stop the timer
				clearInterval(interval.current);
			} else {
				// update the timer
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};

	//componentDidMount
	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	});

	return (
		<section className="signups">
			<div className="container">
				<div className="signup__inner">
					<div className="signup__content">
						<h1 className="signup--title">Work smarter. Save time.</h1>
						<p className="signup--desc">Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.</p>
					</div>

					<div className="signup__countdown">
						{/* Set 30 days in the future from the moment the visitor views the page */}
						<div className="signup__day">
							<h3 className="signup__coming--soon">
								Coming <span className="signup--days">9 Nov 2021</span>{' '}
							</h3>
						</div>
						<div className="signup__timer">
							<div className="signup__timer--card">
								<p className="signup__timer--number">{timerDays}</p>
								<p className="signup__timer--desc">days</p>
							</div>
							<div className="signup__timer--card">
								<p className="signup__timer--number">{timerHours}</p>
								<p className="signup__timer--desc">hours</p>
							</div>
							<div className="signup__timer--card">
								<p className="signup__timer--number">{timerMinutes}</p>
								<p className="signup__timer--desc">min</p>
							</div>
							<div className="signup__timer--card">
								<p className="signup__timer--number">{timerSeconds}</p>
								<p className="signup__timer--desc">sec</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default signUpHero;
