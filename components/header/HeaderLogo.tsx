import Link from 'next/link';

const HeaderLogo = () => {
	return (
		<Link
			href={'/'}
			className='px-8 text-2xl font-bold transition-colors duration-500 delay-100 bg-gray-200 border-2 rounded-full hover:bg-slate-900 hover:text-gray-100'
		>
			Logo.
		</Link>
	);
};

export default HeaderLogo;
