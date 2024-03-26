'use client';

import { cn } from '@/libs/cn';
import { LiHTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { useMenuContext } from './menu-context';
import './menu.scss';

export type MenuItemProps = PropsWithChildren<{}>;

export type UseMenuItemProps = Omit<
	LiHTMLAttributes<HTMLLIElement>,
	keyof MenuItemProps
> &
	MenuItemProps;

const MenuItem = forwardRef<HTMLLIElement, UseMenuItemProps>(
	({ children, className }, ref) => {
		const { variant, size, color } = useMenuContext();
		return (
			<li
				ref={ref}
				className={cn(
					'menu-item',
					`menu-item-variant-${variant}`,
					`menu-item-size-${size}`,
					`menu-item-color-${color}`,
					'bg-red-500'
				)}
			>
				{children}
			</li>
		);
	}
);
MenuItem.displayName = 'MenuItem';

export { MenuItem };
