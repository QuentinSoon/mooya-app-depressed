import { cn } from '@/libs/cn';
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { ButtonVariantProps } from '.';
import './button.scss';

type ButtonProps = PropsWithChildren<{
	/**
	 * The variant of the button.
	 * @default 'solid'
	 */
	variant?: ButtonVariantProps;
}>;

type UseButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	keyof ButtonProps
> &
	ButtonProps;

const Button = forwardRef<HTMLButtonElement, UseButtonProps>(
	({ variant = 'solid', children }, ref) => {
		return (
			<button ref={ref} className={cn('button', `button-variant-${variant}`)}>
				{children}
			</button>
		);
	}
);
Button.displayName = 'Button';

export { Button };

export type { ButtonProps, UseButtonProps };
