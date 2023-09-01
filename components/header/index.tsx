'use client';
import Container from '../shared/Container';
import HeaderLogo from './HeaderLogo';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header className='fixed w-full top-0 z-50 h-20 flex items-center border-b border-gray-300 bg-white shadow-md'>
			<Container>
				<div className='flex w-full'>
					<HeaderLogo />
					{/* <HeaderContent desktop={<DesktopContent />} mobile={<MobileContent />} /> */}
					<Navbar />
				</div>
			</Container>
		</header>
	);
};

export default Header;
