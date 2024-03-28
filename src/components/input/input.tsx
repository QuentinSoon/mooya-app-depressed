'use client';

import { cn } from '@/libs/cn';
import { InputHTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import './input.scss';
import { InputVariantProps } from './types';

type InputProps = PropsWithChildren<{
	/**
	 * The variant of the input.
	 * @default 'default'
	 */
	variant?: InputVariantProps;
}>;

type UseInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	keyof InputProps
> &
	InputProps;

const Input = forwardRef<HTMLInputElement, UseInputProps>(
	({ variant = 'floating', placeholder, ...otherProps }, ref) => {
		return (
			<label className={cn('wrapper', `wrapper-variant-${variant}`)}>
				<input className={cn('wrapper-input')} ref={ref} />
				{/* <span className={cn('wrapper-content')}>{placeholder}</span> */}
			</label>
		);
	}
);
Input.displayName = 'Input';

export { Input };

export type { InputProps, UseInputProps };
