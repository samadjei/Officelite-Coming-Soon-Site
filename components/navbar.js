import Image from 'next/image';

const Navbar = () => {
	return (
		<header>
			<Image src="/logo.svg" alt="Officelite logo" width={170} height={16} />
		</header>
	);
};

export default Navbar;
