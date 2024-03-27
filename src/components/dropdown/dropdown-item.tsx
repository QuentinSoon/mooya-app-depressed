'use client';

import { LiHTMLAttributes, forwardRef } from 'react';
import { MenuItem, MenuItemProps } from '../menu';
import { usePopoverContext } from '../popover/popover-context';

export type DropdownItemProps = MenuItemProps;

export type UseDropdownItemProps = Omit<
	LiHTMLAttributes<HTMLLIElement>,
	keyof DropdownItemProps
> &
	DropdownItemProps;

const DropdownItem = forwardRef<HTMLLIElement, UseDropdownItemProps>(
	({ children, variant, color, className, ...otherProps }, ref) => {
		const context = usePopoverContext();
		if (!context) {
			throw new Error('DropdownItem should be used inside a DropdownContent');
		}

		return (
			<MenuItem
				variant={variant}
				color={color}
				className={className}
				{...otherProps}
			>
				{children}
			</MenuItem>
		);
	}
);
DropdownItem.displayName = 'DropdownItem';

export { DropdownItem };
