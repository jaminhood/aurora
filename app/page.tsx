'use client';
import Placeholder from '@/assets/placeholder-image.svg';
import Button from '@/components/shared/Button';
import Image from 'next/image';

export default function Home() {
	return (
		<section className='min-h-screen p-8 md:p-24 max-w-7xl'>
			<section className='inline-flex items-center w-full gap-4 max-sm:content-center max-sm:flex-wrap-reverse no-wrap'>
				<div className='w-full text-center md:w-1/2'>
					<h1 className='text-5xl font-bold'>The Aurora Project.</h1>
					<p className='w-full py-4 '>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
						asperiores illum molestias fugiat sequi ducimus! Sint consectetur
						quibusdam aliquam fugiat?
					</p>
					<Button isOutline={false} isBlock={false} handleClick={() => {}}>
						Discover Menu
					</Button>
				</div>
				<div className='w-full md:w-1/2'>
					<Image src={Placeholder} alt={'placeholder image'} width={500} />
				</div>
			</section>
			<section></section>
		</section>
	);
}
