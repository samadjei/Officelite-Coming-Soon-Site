import SignUpBackground from '../components/signup/signupBackground';
import SignUpHero from '../components/signup/signUpHero';
// import signUpCountDown from '../components/signup/signupCountdown';

const singUp = () => {
	return (
		<div className="signup">
			<SignUpHero />
			<SignUpBackground />
		</div>
	);
};

export default singUp;
