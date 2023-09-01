import { NavLinks } from '@/constants/header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
	const pathname = usePathname();
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

	const toggleNavbar = () => {
		setNavbarOpen((prevState) => !prevState);
	};

	return (
		<nav className={`border-l-2 border-l-gray-300 px-4 flex ml-4 w-full z-100`}>
			<button
				className='block top-4 right-4 z-50 p-2 bg-gray-300 rounded-md md:hidden'
				onClick={toggleNavbar}
			>
				Menu
			</button>
			<ul
				className={`md:flex items-center justify-center gap-4 max-sm:fixed bg-white max-sm:text-center max-sm:border-b-4 border-gray-300 max-sm:w-full max-sm:inset-x-0 max-sm:h-[16em] ${
					navbarOpen
						? '-translate-y-0 -z-10 opacity-0'
						: 'translate-y-[20%] block opacity-100'
				} transition-all duration-300`}
			>
				{NavLinks.map((links) => (
					<li
						key={links.render}
						className='text-sm font-semibold opacity-90 max-sm:py-4'
					>
						<Link
							href={links.route}
							className={`
                            text-lg
                                ${navbarOpen ? 'opacity-0' : 'opacity-100'}
								${
									pathname === links.route
										? 'max-sm:bg-black max-sm:text-white max-sm:border rounded-md max-sm:py-2 max-sm:px-[40%]'
										: ''
								}
                                    `}
						>
							{links.render}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
