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
	({ children }, ref) => {
		const context = useMenuContext();
		return (
			<li
				ref={ref}
				className={cn(
					'menu-item',
					`menu-item-variant-${context.variant}`,
					`menu-item-size-${context.size}`,
					`menu-item-color-${context.color}`
				)}
			>
				{children}
			</li>
		);
	}
);
MenuItem.displayName = 'MenuItem';

export { MenuItem };
