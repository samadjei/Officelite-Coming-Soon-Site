import React, { useEffect, useState, useRef } from 'react';
import { Button } from '../button';

const countDown = () => {
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
		<section className="countdown">
			<div className="countdown__bg"></div>
			<div className="container flex">
				<div className="countdown__inner">
					{/* Set 30 days in the future from the moment the visitor views the page */}
					<div className="countdown__day">
						<h3 className="countdown__coming--soon">
							Coming <span className="countdown--days">9 Nov 2021</span>{' '}
						</h3>
					</div>
					<div className="countdown__timer">
						<div className="countdown__timer--card">
							<p className="countdown__timer--number">{timerDays}</p>
							<p className="countdown__timer--desc">days</p>
						</div>
						<div className="countdown__timer--card">
							<p className="countdown__timer--number">{timerHours}</p>
							<p className="countdown__timer--desc">hours</p>
						</div>
						<div className="countdown__timer--card">
							<p className="countdown__timer--number">{timerMinutes}</p>
							<p className="countdown__timer--desc">min</p>
						</div>
						<div className="countdown__timer--card">
							<p className="countdown__timer--number">{timerSeconds}</p>
							<p className="countdown__timer--desc">sec</p>
						</div>
					</div>
				</div>
				<div className="countdown__button">
					<Button className="btn hero--btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
						Get Started
					</Button>
				</div>
			</div>
		</section>
	);
};

export default countDown;
