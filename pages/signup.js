import SignUpBackground from '../components/signup/signupBackground';
import SignUpHero from '../components/signup/signUpHero';
import SignUpForm from '../components/signup/signupForm';

const singUp = () => {
	return (
		<div className="signup">
			<SignUpHero />
			<SignUpBackground />
			<SignUpForm />
		</div>
	);
};

export default singUp;
