'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { MenuItem, MenuItemProps } from '../menu';

export type DropdownItemProps = MenuItemProps;

export type UseDropdownItemProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof DropdownItemProps
> &
	DropdownItemProps;

const DropdownItem = forwardRef<HTMLDivElement, UseDropdownItemProps>(
	({ children, variant, color, className }, ref) => {
		return (
			<MenuItem variant={variant} color={color} className={className}>
				{children}
			</MenuItem>
		);
	}
);
DropdownItem.displayName = 'DropdownItem';

export { DropdownItem };
