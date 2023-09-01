'use client';

import type { ButtonTypes } from '@/types/shared';
import { FC } from 'react';

const Button: FC<ButtonTypes> = (props) => {
	const { isOutline, isBlock, children } = props;

	return (
		<button
			onClick={props.handleClick}
			className={`py-2 px-12 my-2 transition-all ease-in-out duration-300 flex justify-between items-center gap-2 rounded-full border border-gray-950 shadow-sm ${
				isOutline
					? `bg-transparent text-gray-950 hover:bg-gray-950 hover:text-gray-50`
					: `bg-gray-950 text-gray-50 hover:bg-transparent hover:text-gray-950`
			} ${isBlock ? `w-full text-center` : ``}
        `}
		>
			{children}
		</button>
	);
};

export default Button;
