import { cn } from '@/libs/cn';
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import {
	ButtonColorProps,
	ButtonRoundedProps,
	ButtonSizeProps,
	ButtonVariantProps,
} from '.';
import './button.scss';

type ButtonProps = PropsWithChildren<{
	/**
	 * The variant of the button.
	 * @default 'solid'
	 */
	variant?: ButtonVariantProps;
	/**
	 * The size of the button.
	 */
	size?: ButtonSizeProps;
	/**
	 * The rounded of the button.
	 */
	rounded?: ButtonRoundedProps;
	/**
	 * The color of the button.
	 * @default 'berry'
	 */
	color?: ButtonColorProps;
}>;

type UseButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	keyof ButtonProps
> &
	ButtonProps;

const Button = forwardRef<HTMLButtonElement, UseButtonProps>(
	(
		{
			variant = 'solid',
			size = 'md',
			rounded,
			color = 'basic',
			children,
			...otherProps
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				className={cn(
					'button',
					`button-variant-${variant}`,
					`button-size-${size}`,
					rounded && `button-rounded-${rounded}`,
					`button-color-${color}`
				)}
				{...otherProps}
			>
				{children}
			</button>
		);
	}
);
Button.displayName = 'Button';

export { Button };

export type { ButtonProps, UseButtonProps };
