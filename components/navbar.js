import Image from 'next/image';

const Navbar = () => {
	return (
		<header>
			<Image src="/logo.svg" alt="Officelite logo" width={155} height={30} alt="Logo" />
		</header>
	);
};

export default Navbar;
