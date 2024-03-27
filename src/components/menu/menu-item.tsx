'use client';

import { cn } from '@/libs/cn';
import { LiHTMLAttributes, forwardRef } from 'react';
import { MenuColorProps, MenuVariantProps } from '.';
import { useMenuContext } from './menu-context';
import './menu.scss';

export type MenuItemProps = {
	variant?: MenuVariantProps;
	color?: MenuColorProps;
};

export type UseMenuItemProps = Omit<
	LiHTMLAttributes<HTMLLIElement>,
	keyof MenuItemProps
> &
	MenuItemProps;

const MenuItem = forwardRef<HTMLLIElement, UseMenuItemProps>(
	({ variant, color, children, className, ...otherProps }, ref) => {
		const context = useMenuContext();
		return (
			<li
				ref={ref}
				className={cn(
					'menu-item',
					`menu-item-variant-${variant ?? context.variant}`,
					`menu-item-size-${context.size}`,
					`menu-item-color-${color ?? context.color}`,
					className
				)}
				{...otherProps}
			>
				{children}
			</li>
		);
	}
);
MenuItem.displayName = 'MenuItem';

export { MenuItem };
