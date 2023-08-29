'use client';
import Button from '@/components/shared/Button';

export default function Home() {
	return (
		<section className='min-h-screen p-24 border border-red-500 max-w-7xl'>
			<section className='inline-flex items-center gap-4 '>
				<div>
					<h1 className='text-5xl font-bold'>The Aurora Project.</h1>
					<p className='py-4'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
						asperiores illum molestias fugiat sequi ducimus! Sint consectetur
						quibusdam aliquam fugiat?
					</p>
					<Button isOutline={false} isBlock={false} handleClick={() => {}}>
						Discover Menu
					</Button>
				</div>
				<div className='border-2 p-60'></div>
			</section>
			<section></section>
		</section>
	);
}
